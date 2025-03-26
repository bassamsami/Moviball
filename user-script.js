document.addEventListener("DOMContentLoaded", function () {
    const SECRET_KEY = "your-secret-key-123"; // مفتاح التشفير (يجب أن يكون سرًا ولا يتم مشاركته)

    // دالة لتشفير الرابط
    function encryptURL(url) {
        return CryptoJS.AES.encrypt(url, SECRET_KEY).toString();
    }

    // دالة لفك تشفير الرابط
    function decryptURL(encryptedURL) {
        const bytes = CryptoJS.AES.decrypt(encryptedURL, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    const themeToggle = document.getElementById("theme-toggle");
    const channelsList = document.getElementById("channels-list");
    const searchInput = document.getElementById("search-input");
    const clearSearch = document.getElementById("clear-search");
    const matchesButton = document.getElementById("matches-button");
    const playerContainer = document.getElementById("player-container");
    const playerPlaceholder = document.getElementById("player-placeholder");
    const channelsSidebar = document.getElementById("channels-sidebar");
    const channelsToggle = document.getElementById("channels-toggle");
    const closeSidebar = document.getElementById("close-sidebar");
    const matchesDialog = document.getElementById("matches-dialog");
    const closeMatchesDialog = document.getElementById("close-matches-dialog");

    // إخفاء القائمة عند النقر خارجها
    document.addEventListener("click", (event) => {
        if (!channelsSidebar.contains(event.target) && !channelsToggle.contains(event.target)) {
            channelsSidebar.style.display = "none";
        }
    });

    // تبديل الثيم
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeToggle.innerHTML = document.body.classList.contains("dark-theme") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // دالة محسنة لسحب رابط البث المباشر من Pleaxy (الرابط يأتي كنص خام)
async function fetchFromPleaxy(channelId) {
    try {
        const pleaxyUrl = `https://pleaxy.com/test/proxy.php?channel=${channelId}`;
        const response = await fetch(pleaxyUrl);
        
        if (!response.ok) {
            throw new Error(`فشل الاتصال بـ Pleaxy: ${response.status}`);
        }
        
        // جلب الرابط كنص مباشر (ليس JSON)
        const streamUrl = await response.text();
        
        // التحقق من أن الرابط صالح (يبدأ بـ http أو //)
        if (!streamUrl || !(streamUrl.startsWith('http') || streamUrl.startsWith('//'))) {
            throw new Error("رابط البث غير صالح من Pleaxy");
        }
        
        return streamUrl.trim(); // إزالة أي مسافات زائدة
    } catch (error) {
        console.error(`حدث خطأ أثناء جلب الرابط من Pleaxy للقناة ${channelId}:`, error);
        return null;
    }
}

    // دالة لجلب رابط البث والمفاتيح من الرابط
    async function fetchStreamAndKeys(apiUrl) {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("فشل في جلب البيانات من الرابط");
            }
            const data = await response.json();

            const streamUrl = data.stream_url; // رابط البث
            const drmKeys = data.drm_keys; // المفاتيح

            if (!streamUrl) {
                throw new Error("رابط البث غير موجود في البيانات");
            }

            // تحويل المفاتيح إلى تنسيق مناسب إذا كانت موجودة
            let keysString = null;
            if (drmKeys && Object.keys(drmKeys).length > 0) {
                keysString = Object.entries(drmKeys)
                    .map(([keyId, key]) => `${keyId}:${key}`)
                    .join(",");
            }

            return { streamUrl, keysString };
        } catch (error) {
            console.error("حدث خطأ أثناء جلب البيانات:", error);
            return null;
        }
    }

    // تحميل القنوات
    function loadChannels() {
        channelsList.innerHTML = "";
        db.collection("groups").orderBy("createdAt", "asc").get().then((groupsSnapshot) => {
            groupsSnapshot.forEach((groupDoc) => {
                const group = groupDoc.data();
                const groupSection = document.createElement("div");
                groupSection.classList.add("group-section");
                groupSection.setAttribute("data-group-id", groupDoc.id);
                groupSection.innerHTML = `
                    <h3 class="group-name">${group.name}</h3>
                    <div class="channels-container"></div>
                `;
                channelsList.appendChild(groupSection);

                const channelsContainer = groupSection.querySelector(".channels-container");

                db.collection("channels").where("group", "==", groupDoc.id).orderBy("createdAt", "asc").get().then((channelsSnapshot) => {
                    channelsSnapshot.forEach((channelDoc) => {
                        const channel = channelDoc.data();
                        const channelCard = document.createElement("div");
                        channelCard.classList.add("channel-card");
                        channelCard.innerHTML = `
                            <img src="${channel.image}" alt="${channel.name}">
                            <p>${channel.name}</p>
                        `;
                        const encryptedURL = encryptURL(channel.url); // تشفير الرابط
                        channelCard.setAttribute("data-url", encryptedURL);
                        channelCard.setAttribute("data-key", channel.key || "");
                        channelsContainer.appendChild(channelCard);

                        channelCard.addEventListener("click", () => {
                            const encryptedURL = channelCard.getAttribute("data-url");
                            const key = channelCard.getAttribute("data-key");
                            const decryptedURL = decryptURL(encryptedURL); // فك تشفير الرابط
                            playChannel(decryptedURL, key);
                            channelsSidebar.style.display = "none";
                        });
                    });
                });
            });
        });
    }

    // دالة لتشغيل القناة باستخدام Clappr
    function playWithClappr(url, keys) {
        const playerElement = document.getElementById("player");
        if (!playerElement) {
            console.error("عنصر المشغل غير موجود في الصفحة.");
            return;
        }

        // إنشاء عنصر اللوجو
        const logoElement = document.createElement("img");
        logoElement.src = "https://up6.cc/2025/03/174177781485261.png"; // رابط اللوجو
        logoElement.style.position = "fixed";
        logoElement.style.bottom = "5%";
        logoElement.style.left = "0.5%";
        logoElement.style.opacity = "0"; // إخفاء اللوجو في البداية
        logoElement.style.transition = "opacity 0.5s";
        logoElement.style.width = "5%"; // حجم اللوجو
        logoElement.style.height = "auto";
        logoElement.style.zIndex = "1000";
        document.body.appendChild(logoElement);

        // تحويل المفاتيح إلى تنسيق JSON
        const drmKeys = {};
        if (keys) {
            keys.split(',').forEach(keyPair => {
                const [keyId, key] = keyPair.split(':');
                drmKeys[keyId] = key;
            });
        }

        // إعداد Clappr Player مع DashShakaPlayback
        const player = new Clappr.Player({
            source: url,
            parentId: "#player",
            plugins: [LevelSelector, DashShakaPlayback], // استخدام DashShakaPlayback
            shakaConfiguration: {
                drm: {
                    clearKeys: drmKeys // استخدام مفاتيح DRM
                }
            },
            autoplay: true, // التشغيل التلقائي
            muted: false, // الصوت غير مكتوم
            width: "100%",
            height: "100%",
            playback: {
                controls: false // إخفاء عناصر التحكم الافتراضية
            }
        });

        player.attachTo(playerElement);

        // إنشاء زر التشغيل/الإيقاف
        const playPauseButton = document.createElement("div");
        playPauseButton.innerHTML = "⏯"; // أيقونة التشغيل/الإيقاف
        playPauseButton.style.position = "absolute";
        playPauseButton.style.top = "50%";
        playPauseButton.style.left = "50%";
        playPauseButton.style.transform = "translate(-50%, -50%)";
        playPauseButton.style.fontSize = "40px";
        playPauseButton.style.color = "white";
        playPauseButton.style.cursor = "pointer";
        playPauseButton.style.zIndex = "1001";
        playPauseButton.style.display = "none"; // إخفاء الزر في البداية
        playerElement.appendChild(playPauseButton);

        // إظهار/إخفاء زر التشغيل/الإيقاف عند النقر على المشغل
        playerElement.addEventListener("click", function (event) {
            event.stopPropagation(); // منع النقر من الانتشار إلى العناصر الأخرى
            if (playPauseButton.style.display === "none") {
                playPauseButton.style.display = "block";
            } else {
                playPauseButton.style.display = "none";
            }
        });

        // التحكم في التشغيل/الإيقاف عند النقر على الزر
        playPauseButton.addEventListener("click", function (event) {
            event.stopPropagation(); // منع النقر من الانتشار إلى العناصر الأخرى
            if (player.isPlaying()) {
                player.pause();
            } else {
                player.play();
            }
        });

        // دالة لتحديث شفافية اللوجو بناءً على جودة الفيديو
        function updateLogoOpacity() {
            const quality = player.getCurrentQuality();
            if (quality) {
                const currentHeight = quality.height || 480; // جودة الفيديو الحالية
                let opacity = 0.2 + ((currentHeight - 240) / (1080 - 240)) * (0.8 - 0.2);
                if (currentHeight > 1080) opacity = 0.9;
                logoElement.style.opacity = opacity.toFixed(2);
                console.log(`الجودة الحالية: ${currentHeight}px | الشفافية: ${opacity.toFixed(2)}`);
            }
        }

        // عند بدء التشغيل، نُظهر اللوجو ونضبط الشفافية
        player.on("playing", function () {
            logoElement.style.opacity = "1"; // ظهور اللوجو فور تشغيل البث
            updateLogoOpacity();
        });

        // تحديث شفافية اللوجو عند تغيير الجودة
        player.on("qualitychanged", updateLogoOpacity);

        // إضافة CSS لجعل الفيديو يملأ الحاوية بالكامل
        player.on("ready", function () {
            const videoElement = playerElement.querySelector("video");
            if (videoElement) {
                videoElement.style.objectFit = "fill"; // جعل الفيديو يملأ الحاوية بالكامل
                videoElement.style.width = "100%";
                videoElement.style.height = "100%";
            }
        });

        // إخفاء أزرار التحكم الافتراضية لـ Shaka
        const style = document.createElement("style");
        style.innerHTML = `
            .shaka-controls-container {
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        // تفعيل Wake Lock API لمنع انطفاء الشاشة
        let wakeLock = null;

        async function requestWakeLock() {
            try {
                if ('wakeLock' in navigator) {
                    wakeLock = await navigator.wakeLock.request('screen');
                    console.log("تم تفعيل Wake Lock بنجاح.");
                    wakeLock.addEventListener('release', () => {
                        console.log("تم إيقاف Wake Lock.");
                    });
                } else {
                    console.warn("Wake Lock API غير مدعوم في هذا المتصفح.");
                }
            } catch (err) {
                console.error("فشل في تفعيل Wake Lock:", err);
            }
        }

        // طلب Wake Lock عند بدء التشغيل
        player.on("playing", requestWakeLock);

        // إيقاف Wake Lock عند إيقاف التشغيل
        player.on("pause", function () {
            if (wakeLock) {
                wakeLock.release().then(() => {
                    wakeLock = null;
                    console.log("تم إيقاف Wake Lock.");
                });
            }
        });

        // التعامل مع الأخطاء
        player.on("error", function (error) {
            console.error("حدث خطأ في المشغل:", error);
            if (error.code === "dash_shaka_playback:6_6012") {
                console.error("السبب المحتمل: مشكلة في مفاتيح DRM أو عدم دعم المتصفح لـ Widevine.");
            }
        });
    }

    function closeJWPlayer() {
        const jwPlayerInstance = jwplayer("player");
        if (jwPlayerInstance && jwPlayerInstance.remove) {
            jwPlayerInstance.remove(); // إزالة المشغل
        }
    }

    function closeClappr() {
        const clapprPlayer = document.getElementById("player");
        if (clapprPlayer && clapprPlayer.innerHTML) {
            clapprPlayer.innerHTML = ""; // إزالة المشغل
        }
    }

    // تعديل دالة playChannel لدعم Pleaxy و Clappr
    async function playChannel(url, key) {
        // إذا كان الرابط يحتوي على "api.php"، قم بجلب البيانات من الرابط
        if (url.includes("api.php")) {
            const streamData = await fetchStreamAndKeys(url);
            if (!streamData) {
                console.error("فشل في جلب رابط البث أو المفاتيح");
                return;
            }
            url = streamData.streamUrl;
            key = streamData.keysString;
        }
        // إذا كان الرابط من Pleaxy
        else if (url.includes("pleaxy.com")) {
            const channelId = new URL(url).searchParams.get("channel");
            if (channelId) {
                const pleaxyUrl = await fetchFromPleaxy(channelId);
                if (pleaxyUrl) {
                    url = pleaxyUrl;
                } else {
                    console.error("فشل في جلب رابط البث من Pleaxy");
                    return;
                }
            }
        }

        // إغلاق المشغل الحالي قبل فتح مشغل جديد
        closeJWPlayer();
        closeClappr();

        if (!url) {
            console.error("الرابط غير موجود!");
            return;
        }

        // إذا كان الرابط ينتهي بـ .html، قم بتحميل iframe
        if (url.endsWith('.html')) {
            loadIframe(url);
            return;
        }

        let finalUrl = url;
        let streamType = getStreamType(url);

        // إذا كان الرابط من YouTube، جلب رابط البث المباشر
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const youtubeStreamUrl = await fetchFromYouTube(url);
            if (youtubeStreamUrl) {
                finalUrl = youtubeStreamUrl;
                streamType = getStreamType(youtubeStreamUrl);
            } else {
                console.error("لم يتم العثور على رابط البث المباشر من YouTube.");
                return;
            }
        }

        // إذا لم يتم تحديد نوع الملف، لا نقوم بتشغيل الرابط
        if (!streamType) {
            console.error("نوع الملف غير مدعوم أو غير معروف:", finalUrl);
            return;
        }

        // إذا كانت المفاتيح متعددة، استخدم Clappr
        if (key && key.includes(',')) {
            playWithClappr(finalUrl, key);
            return;
        }

        // إذا كانت المفاتيح مفردة، استخدم JWPlayer
        const drmConfig = key ? {
            clearkey: {
                keyId: key.split(':')[0],
                key: key.split(':')[1]
            },
            robustness: 'SW_SECURE_CRYPTO'
        } : null;

        const playerElement = document.getElementById("player");
        if (!playerElement) {
            console.error("عنصر المشغل غير موجود في الصفحة.");
            return;
        }

        try {
            const playerInstance = jwplayer("player").setup({
                playlist: [{
                    sources: [{
                        file: finalUrl,
                        type: streamType,
                        drm: drmConfig
                    }]
                }],
                width: "100%",
                height: "100%",
                autostart: true,
                cast: {
                    default: true
                },
                sharing: false,
                controls: true,
                stretching: "fill",
                horizontalVolumeSlider: true,
                preload: "auto",
                playbackRateControls: true,
                primary: "html5",
                mute: false,
                volume: 80,
                logo: {
                    file: "https://up6.cc/2025/03/174177781485261.png",
                    link: "https://t.me/moviball",
                    hide: false,
                    position: "bottom-left",
                    margin: 28,
                    width: 5,
                    height: 5
                },
                
            });

            playerInstance.on('ready', () => {
                console.log("المشغل جاهز للتشغيل");
                const logoElement = document.querySelector(".jw-logo");
                if (logoElement) {
                    logoElement.style.position = "fixed";
                    logoElement.style.bottom = "5%";
                    logoElement.style.left = "0.5%";
                    logoElement.style.opacity = "0";
                    logoElement.style.transition = "none";
                }

                function updateLogoOpacity() {
                    let quality = playerInstance.getVisualQuality();
                    if (quality && quality.level) {
                        let currentHeight = quality.level.height || 480;
                        let opacity = 0.2 + ((currentHeight - 240) / (1080 - 240)) * (0.8 - 0.2);
                        if (currentHeight > 1080) opacity = 0.9;
                        if (logoElement) {
                            logoElement.style.opacity = opacity.toFixed(2);
                        }
                    }
                }

                playerInstance.on("firstFrame", function () {
                    if (logoElement) {
                        logoElement.style.opacity = "1";
                    }
                    updateLogoOpacity();
                });

                playerInstance.on("visualQuality", updateLogoOpacity);
                playerInstance.on("levelsChanged", updateLogoOpacity);
            });

            playerInstance.on('error', (error) => {
                console.error("حدث خطأ في المشغل:", error);
                if (error.code === 246012) {
                    console.error("السبب المحتمل: الرابط أو المفاتيح غير صحيحة.");
                }
            });

            playerInstance.on('setupError', (error) => {
                console.error("حدث خطأ في إعداد المشغل:", error);
            });

            playerInstance.on("fullscreen", function (event) {
                if (event.fullscreen) {
                    screen.orientation.lock("landscape").catch(() => {
                        console.warn("لم يتم دعم تأمين الشاشة في هذا المتصفح.");
                    });
                } else {
                    screen.orientation.unlock();
                }
            });
        } catch (error) {
            console.error("حدث خطأ أثناء إعداد المشغل:", error);
        }
    }

    // تحديد نوع الملف تلقائيًا
    function getStreamType(url) {
        if (url.includes(".m3u8")) {
            return "hls"; // تنسيق HLS
        } else if (url.includes(".mpd")) {
            return "dash"; // تنسيق DASH
        } else if (url.includes(".mp4") || url.includes(".m4v")) {
            return "mp4"; // تنسيق MP4
        } else if (url.includes(".ts") || url.includes(".mpegts")) {
            return "mpegts"; // تنسيق MPEG-TS
        } else {
            return null; // نوع غير معروف
        }
    }

    // البحث عن القنوات
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        document.querySelectorAll(".group-section").forEach((group) => {
            const groupName = group.querySelector(".group-name").textContent.toLowerCase();
            const channels = group.querySelectorAll(".channel-card");
            let hasVisibleChannels = false;

            channels.forEach((channel) => {
                const channelName = channel.querySelector("p").textContent.toLowerCase();
                if (channelName.includes(searchTerm)) {
                    channel.style.display = "flex";
                    hasVisibleChannels = true;
                } else {
                    channel.style.display = "none";
                }
            });

            group.style.display = hasVisibleChannels || groupName.includes(searchTerm) ? "block" : "none";
        });
    });

    // مسح البحث
    clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        document.querySelectorAll(".group-section, .channel-card").forEach((element) => {
            element.style.display = "block";
        });
    });

    // عرض قائمة القنوات
    channelsToggle.addEventListener("click", () => {
        channelsSidebar.style.display = "block";
    });

    // إغلاق قائمة القنوات
    closeSidebar.addEventListener("click", () => {
        channelsSidebar.style.display = "none";
    });

    // عرض ديالوج المباريات
    matchesButton.addEventListener("click", () => {
        matchesDialog.style.display = "block";
        loadMatches();
    });

    // إغلاق ديالوج المباريات
    closeMatchesDialog.addEventListener("click", () => {
        matchesDialog.style.display = "none";
    });

    // تحميل المباريات
    function loadMatches() {
        const matchesTable = document.getElementById("matches-table");
        matchesTable.innerHTML = "";

        db.collection("matches").orderBy("createdAt", "asc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const match = doc.data();
                const matchItem = document.createElement("div");
                matchItem.classList.add("match-item");

                const team1Image = match.team1Image;
                const team2Image = match.team2Image;
                const matchTimeUTC = new Date(match.matchTime);
                const currentTimeUTC = new Date();

                const timeDiff = (currentTimeUTC - matchTimeUTC) / (1000 * 60);

                let matchStatus = "";
                let matchStatusClass = "";
                if (timeDiff < -15) {
                    matchStatus = `الوقت: ${matchTimeUTC.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                    matchStatusClass = "match-status";
                } else if (timeDiff >= -15 && timeDiff < 0) {
                    matchStatus = "تبدأ قريبًا";
                    matchStatusClass = "match-status soon";
                } else if (timeDiff >= 0 && timeDiff < 120) {
                    matchStatus = "جارية الآن";
                    matchStatusClass = "match-status live";
                } else {
                    db.collection("matches").doc(doc.id).delete();
                    return;
                }

                matchItem.innerHTML = `
                    <div class="teams-section">
                        <div class="team">
                            <img src="${team1Image}" alt="${match.team1}">
                            <p>${match.team1}</p>
                        </div>
                        <div class="vs-time">
                            <div class="vs">VS</div>
                            <div class="${matchStatusClass}">${matchStatus}</div>
                        </div>
                        <div class="team">
                            <img src="${team2Image}" alt="${match.team2}">
                            <p>${match.team2}</p>
                        </div>
                    </div>
                    <div class="match-details">
                        <p><span class="icon">🏆</span> ${match.matchLeague}</p>
                        <p><span class="icon">🎤</span> ${match.commentator}</p>
                    </div>
                    <button class="watch-button ${timeDiff >= -15 && timeDiff < 120 ? 'active' : 'inactive'}" data-url="${encryptURL(match.channelUrl)}" data-key="${match.key || ''}" ${timeDiff >= -15 && timeDiff < 120 ? '' : 'disabled'}>
                        مشاهدة المباراة
                    </button>
                `;

                matchesTable.appendChild(matchItem);
            });

            document.querySelectorAll(".watch-button").forEach(button => {
                button.addEventListener("click", () => {
                    const encryptedURL = button.getAttribute("data-url");
                    const key = button.getAttribute("data-key");
                    const decryptedURL = decryptURL(encryptedURL); // فك تشفير الرابط
                    playChannel(decryptedURL, key);
                    matchesDialog.style.display = "none";
                    playerPlaceholder.style.display = "none";
                });
            });
        });
    }

    // تحميل القنوات عند بدء التشغيل
    loadChannels();
});
