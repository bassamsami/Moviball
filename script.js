// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8twdqULn2FS2AKciDxdVYax6MSQLsF0o",
    authDomain: "moviball-af56f.firebaseapp.com",
    projectId: "moviball-af56f",
    storageBucket: "moviball-af56f.firebasestorage.app",
    messagingSenderId: "851426776313",
    appId: "1:851426776313:web:bec93f0338280ea48c7e28",
    measurementId: "G-JCQD1M6EZ9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// App variables
let currentGroupId = null;
let currentGroupName = '';
let shakaPlayer;
let jwPlayerInstance;

// DOM Elements
const elements = {
    navToggle: document.getElementById('navToggle'),
    drawer: document.getElementById('drawer'),
    drawerClose: document.getElementById('drawerClose'),
    overlay: document.getElementById('overlay'),
    backBtn: document.getElementById('backBtn'),
    groupsContainer: document.getElementById('groups-container'),
    groupsGrid: document.getElementById('groups-grid'),
    channelsContainer: document.getElementById('channels-container'),
    channelsGrid: document.getElementById('channels-grid'),
    channelsTitle: document.getElementById('channels-title'),
    shakaPlayerContainer: document.getElementById('shaka-player-container'),
    shakaPlayerClose: document.getElementById('shakaPlayerClose'),
    shakaVideoElement: document.getElementById('shaka-video'),
    shakaVideoContainer: document.getElementById('shaka-video-container'),
    jwPlayerContainer: document.getElementById('jwplayer-container'),
    jwPlayerClose: document.getElementById('jwPlayerClose'),
    jwPlayerElement: document.getElementById('jwplayer'),
    iframePlayerContainer: document.getElementById('iframe-player-container'),
    iframePlayerClose: document.getElementById('iframePlayerClose'),
    videoIframe: document.getElementById('video-iframe'),
    iframePlayerTitle: document.getElementById('iframe-player-title')
};

// Helper function to safely add event listeners
function safeAddEventListener(element, event, handler) {
    if (element) {
        element.addEventListener(event, handler);
    } else {
        console.warn(`Element not found: ${element}`);
    }
}

// Initialize all event listeners
function initEventListeners() {
    // Toggle Drawer
    safeAddEventListener(elements.navToggle, 'click', () => {
        elements.drawer.classList.add('open');
        elements.overlay.classList.add('active');
        document.body.classList.add('drawer-open');
    });

    safeAddEventListener(elements.drawerClose, 'click', () => {
        elements.drawer.classList.remove('open');
        elements.overlay.classList.remove('active');
        document.body.classList.remove('drawer-open');
    });

    safeAddEventListener(elements.overlay, 'click', () => {
        elements.drawer.classList.remove('open');
        elements.overlay.classList.remove('active');
        document.body.classList.remove('drawer-open');
    });

    // Back button
    safeAddEventListener(elements.backBtn, 'click', () => {
        elements.channelsContainer.style.display = 'none';
        elements.groupsContainer.style.display = 'block';
    });

    // Player close buttons
    safeAddEventListener(elements.shakaPlayerClose, 'click', closeShakaPlayer);
    safeAddEventListener(elements.jwPlayerClose, 'click', closeJWPlayer);
    safeAddEventListener(elements.iframePlayerClose, 'click', closeIframePlayer);

    // Close when clicking outside
    safeAddEventListener(elements.shakaPlayerContainer, 'click', (e) => {
        if (e.target === elements.shakaPlayerContainer) {
            closeShakaPlayer();
        }
    });

    safeAddEventListener(elements.jwPlayerContainer, 'click', (e) => {
        if (e.target === elements.jwPlayerContainer) {
            closeJWPlayer();
        }
    });

    safeAddEventListener(elements.iframePlayerContainer, 'click', (e) => {
        if (e.target === elements.iframePlayerContainer) {
            closeIframePlayer();
        }
    });
}

// Initialize Shaka Player
async function initShakaPlayer() {
    try {
        shaka.polyfill.installAll();
        
        if (!shaka.Player.isBrowserSupported()) {
            console.error('Browser not supported by Shaka Player');
            alert('المتصفح غير مدعوم من مشغل الفيديو');
            return;
        }
        
        shakaPlayer = new shaka.Player(elements.shakaVideoElement);
        shakaPlayer.addEventListener('error', onPlayerError);
        
        const uiConfig = {
            controlPanelElements: [
                'rewind',
                'play_pause',
                'fast_forward',
                'mute',
                'volume',
                'time_and_duration',
                'spacer',
                'captions',
                'language',
                'quality',
                'fullscreen',
                'playback_rate',
                'picture_in_picture',
                'skip',
                'cast',
                'share'
            ],
            seekBarColors: {
                base: 'rgba(255, 255, 255, 0.3)',
                buffered: 'rgba(255, 255, 255, 0.5)',
                played: 'var(--accent)',
                background: 'rgba(255, 255, 255, 0.1)'
            }
        };

        shakaPlayer.configure({
            preferredTextLanguage: 'ar',
            textTrackDisplay: true,
            enableTextTrackOnStart: true
        });
        
        const ui = new shaka.ui.Overlay(shakaPlayer, elements.shakaVideoContainer, elements.shakaVideoElement);
        ui.configure(uiConfig);
        
        return shakaPlayer;
    } catch (error) {
        console.error('Error initializing Shaka Player:', error);
    }
}

// Initialize JW Player
function initJWPlayer() {
    if (typeof jwplayer !== 'undefined') {
        jwPlayerInstance = jwplayer(elements.jwPlayerElement);
        jwPlayerInstance.setup({
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            autostart: true,
            controls: true,
            primary: "html5"
        });
        return jwPlayerInstance;
    } else {
        console.error('JW Player library not loaded');
        return null;
    }
}

// Modified playWithJWPlayer function
function playWithJWPlayer(streamUrl, drmKey, streamType) {
    elements.jwPlayerContainer.style.display = 'flex';
    setTimeout(() => {
        elements.jwPlayerContainer.classList.add('active');
    }, 10);
    
    try {
        // Initialize JW Player if not already initialized
        if (!jwPlayerInstance && typeof jwplayer !== 'undefined') {
            jwPlayerInstance = jwplayer(elements.jwPlayerElement);
        } else if (typeof jwplayer === 'undefined') {
            throw new Error('مكتبة JWPlayer غير محملة');
        }
        
        const sourceConfig = {
            file: streamUrl,
            type: getStreamType(streamType)
        };
        
        // Add DRM configuration if available
        if (drmKey && streamType === 'mpd') {
            const [keyId, key] = drmKey.split(':');
            if (keyId && key) {
                sourceConfig.drm = {
                    clearkey: {
                        keyId: keyId.trim(),
                        key: key.trim()
                    }
                };
            }
        }
        
        jwPlayerInstance.setup({
            playlist: [{
                sources: [sourceConfig]
            }],
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            autostart: true,
            controls: true,
            primary: "html5",
            mute: false,
            volume: 80
        });
        
        jwPlayerInstance.on('error', (error) => {
            console.error('JWPlayer error:', error);
            alert('حدث خطأ في تشغيل القناة. يرجى المحاولة مرة أخرى.');
        });
        
    } catch (error) {
        console.error('Error loading video:', error);
        alert('حدث خطأ في تشغيل القناة: ' + error.message);
        closeJWPlayer();
    }
}

// Helper function to determine stream type
function getStreamType(streamType) {
    switch(streamType) {
        case 'mpd': return 'dash';
        case 'm3u8': return 'hls';
        case 'mp4': return 'mp4';
        default: return 'mp4';
    }
}

// Function to play with iframe
function playWithIframe(url, title = '') {
    closeShakaPlayer();
    closeJWPlayer();
    
    elements.videoIframe.src = url;
    elements.iframePlayerTitle.textContent = title || 'مشغل الفيديو';
    
    elements.iframePlayerContainer.style.display = 'flex';
    setTimeout(() => {
        elements.iframePlayerContainer.classList.add('active');
        
        setTimeout(() => {
            const wrapper = elements.iframePlayerContainer.querySelector('.player-wrapper');
            if (wrapper) {
                elements.videoIframe.style.height = `${wrapper.offsetWidth * 0.5625}px`;
            }
        }, 10);
    }, 10);
}

// Function to close iframe player
function closeIframePlayer() {
    elements.iframePlayerContainer.classList.remove('active');
    setTimeout(() => {
        elements.videoIframe.src = '';
        elements.iframePlayerContainer.style.display = 'none';
    }, 300);
}

// Fetch Stream and DRM Keys from API
async function fetchStreamAndKeys(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("فشل في جلب البيانات من الرابط");
        }
        const data = await response.json();

        const streamUrl = data.stream_url;
        const drmKeys = data.drm_keys;

        if (!streamUrl) {
            throw new Error("رابط البث غير موجود في البيانات");
        }

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

// Load Groups
function loadGroups() {
    elements.groupsGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    
    db.collection("groups")
        .orderBy("order", "asc")
        .orderBy("createdAt", "asc")
        .get()
        .then(snapshot => {
            elements.groupsGrid.innerHTML = '';
            
            if (snapshot.empty) {
                elements.groupsGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">
                        <i class="fas fa-tv" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                        <p>لا توجد مجموعات متاحة حالياً</p>
                    </div>
                `;
                return;
            }
            
            snapshot.forEach((doc, index) => {
                const group = doc.data();
                const groupCard = document.createElement('div');
                groupCard.className = 'group-card';
                groupCard.dataset.id = doc.id;
                groupCard.style.animationDelay = `${index * 0.1}s`;
                
                groupCard.innerHTML = `
                    <div class="group-image-container">
                        <img src="${group.image}" class="group-image" alt="${group.name}" loading="lazy">
                        <div class="group-info">
                            <h3 class="group-name">${group.name}</h3>
                            <div class="group-count">${group.channelCount || 0} قنوات</div>
                        </div>
                    </div>
                `;
                
                groupCard.addEventListener('click', () => {
                    currentGroupName = group.name;
                    loadChannels(doc.id, group.name);
                });
                
                elements.groupsGrid.appendChild(groupCard);
            });
        })
        .catch(error => {
            console.error("Error loading groups:", error);
            elements.groupsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--secondary);">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                    <p>حدث خطأ في تحميل المجموعات</p>
                </div>
            `;
        });
}

// Load Channels
function loadChannels(groupId, groupName) {
    currentGroupId = groupId;
    elements.channelsGrid.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    elements.channelsTitle.textContent = groupName;
    
    elements.groupsContainer.style.display = 'none';
    elements.channelsContainer.style.display = 'block';
    
    db.collection("channels")
        .where("groupId", "==", groupId)
        .orderBy("order", "asc")
        .orderBy("createdAt", "asc")
        .get()
        .then(snapshot => {
            elements.channelsGrid.innerHTML = '';
            
            if (snapshot.empty) {
                elements.channelsGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">
                        <i class="fas fa-tv" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                        <p>لا توجد قنوات متاحة في هذه المجموعة</p>
                    </div>
                `;
                return;
            }
            
            db.collection("groups").doc(groupId).update({
                channelCount: snapshot.size
            });
            
            snapshot.forEach(doc => {
                const channel = doc.data();
                const channelCard = document.createElement('div');
                channelCard.className = 'channel-card';
                
                channelCard.innerHTML = `
                    <div class="channel-logo-container">
                        <img src="${channel.logo}" class="channel-logo" alt="${channel.name}" loading="lazy">
                    </div>
                    <div class="channel-info">
                        <div class="channel-name">${channel.name}</div>
                        <button class="watch-btn" 
                                data-url="${channel.streamUrl || ''}" 
                                data-api="${channel.apiUrl || ''}"
                                data-key="${channel.drmKey || ''}"
                                data-type="${channel.streamType || 'mpd'}"
                                data-is-iframe="${channel.isIframe || 'false'}">
                            <i class="fas fa-play"></i> مشاهدة
                        </button>
                    </div>
                `;
                
                channelCard.querySelector('.watch-btn').addEventListener('click', async function() {
                    const streamUrl = this.getAttribute('data-url');
                    const apiUrl = this.getAttribute('data-api');
                    const drmKey = this.getAttribute('data-key');
                    const streamType = this.getAttribute('data-type');
                    const isIframe = this.getAttribute('data-is-iframe') === 'true';
                    
                    try {
                        let finalStreamUrl = streamUrl;
                        let finalDrmKey = drmKey;
                        
                        if (apiUrl) {
                            const result = await fetchStreamAndKeys(apiUrl);
                            if (result) {
                                finalStreamUrl = result.streamUrl;
                                finalDrmKey = result.keysString || drmKey;
                            } else {
                                throw new Error("فشل في جلب بيانات البث من الرابط");
                            }
                        }
                        
                        if (!finalStreamUrl) {
                            throw new Error("رابط البث غير متوفر");
                        }
                        
                        if (isIframe) {
                            playWithIframe(finalStreamUrl, channel.name);
                        } else if (streamType === 'mpd' && finalDrmKey && finalDrmKey.includes(',')) {
                            playWithShaka(finalStreamUrl, finalDrmKey);
                        } else {
                            playWithJWPlayer(finalStreamUrl, finalDrmKey, streamType);
                        }
                    } catch (error) {
                        console.error("Error preparing stream:", error);
                        alert("حدث خطأ في تحضير البث: " + error.message);
                    }
                });
                
                elements.channelsGrid.appendChild(channelCard);
            });
        })
        .catch(error => {
            console.error("Error loading channels:", error);
            elements.channelsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--secondary);">
                    <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                    <p>حدث خطأ في تحميل القنوات</p>
                </div>
            `;
        });
}

async function playWithShaka(streamUrl, drmKeys) {
    elements.shakaPlayerContainer.style.display = 'flex';
    const spinner = document.getElementById('shakaLoadingSpinner');
    
    setTimeout(() => {
        elements.shakaPlayerContainer.classList.add('active');
    }, 10);

    try {
        if (!shakaPlayer) {
            await initShakaPlayer();
        }

        const config = {
            drm: {
                clearKeys: {}
            },
            streaming: {
                bufferingGoal: 60,
                rebufferingGoal: 2,
                bufferBehind: 30
            }
        };

        const keysArray = drmKeys.split(',');
        keysArray.forEach(keyPair => {
            const [keyId, key] = keyPair.split(':');
            if (keyId && key) {
                config.drm.clearKeys[keyId.trim()] = key.trim();
            }
        });

        shakaPlayer.configure(config);

        shakaPlayer.addEventListener('loading', (e) => {
            if (e.loading) {
                spinner?.classList.add('active');
            } else {
                spinner?.classList.remove('active');
            }
        });

        await shakaPlayer.load(streamUrl);

        try {
            await elements.shakaVideoElement.play();
        } catch (e) {
            console.log('Autoplay prevented:', e);
            spinner?.classList.remove('active');
        }

    } catch (error) {
        console.error('Error loading video:', error);
        spinner?.classList.remove('active');
        alert('حدث خطأ في تشغيل القناة: ' + error.message);
        closeShakaPlayer();
    }
}

function closeShakaPlayer() {
    if (!elements.shakaPlayerContainer || !elements.shakaPlayerContainer.classList) {
        console.error('Shaka player container not found');
        return;
    }

    elements.shakaPlayerContainer.classList.remove('active');
    
    const spinner = document.getElementById('shakaLoadingSpinner');
    if (spinner && spinner.classList) {
        spinner.classList.remove('active');
    }

    setTimeout(() => {
        try {
            if (elements.shakaVideoElement && !elements.shakaVideoElement.paused) {
                elements.shakaVideoElement.pause();
            }

            if (shakaPlayer) {
                shakaPlayer.unload();
                shakaPlayer.destroy();
                shakaPlayer = null;
            }

            if (elements.shakaPlayerContainer) {
                elements.shakaPlayerContainer.style.display = 'none';
            }

            if (elements.shakaVideoElement) {
                elements.shakaVideoElement.removeAttribute('src');
                elements.shakaVideoElement.load();
            }
        } catch (error) {
            console.error('Error closing Shaka Player:', error);
        }
    }, 300);
}

function playWithJWPlayer(streamUrl, drmKey, streamType) {
    elements.jwPlayerContainer.style.display = 'flex';
    setTimeout(() => {
        elements.jwPlayerContainer.classList.add('active');
    }, 10);
    
    try {
        if (!jwPlayerInstance) {
            initJWPlayer();
        }
        
        const sources = [];
        
        if (streamType === 'mpd') {
            const source = {
                "file": streamUrl,
                "type": "dash"
            };
            
            if (drmKey && drmKey.includes(':')) {
                const [keyId, key] = drmKey.split(':');
                source.drm = {
                    "clearkey": {
                        "keyId": keyId.trim(),
                        "key": key.trim()
                    }
                };
            }
            
            sources.push(source);
        } else if (streamType === 'm3u8') {
            sources.push({
                "file": streamUrl,
                "type": "hls"
            });
        } else if (streamType === 'mp4') {
            sources.push({
                "file": streamUrl,
                "type": "mp4"
            });
        } else {
            sources.push({
                "file": streamUrl,
                "type": "video/mp4"
            });
        }
        
        jwPlayerInstance.setup({
            playlist: [{
                "sources": sources
            }],
            width: "100%",
            height: "100%",
            aspectratio: "16:9",
            autostart: true,
            controls: true,
            stretching: "fill",
            horizontalVolumeSlider: true,
            preload: "auto",
            playbackRateControls: true,
            primary: "html5",
            mute: false,
            sharing: true,
            volume: 80,
            logo: {
                file: "https://up6.cc/2025/04/174385752633891.png",
                link: "https://t.me/+mm7WzPLhGf83YTQ0",
                position: "bottom-left"
            }
        });
        
    } catch (error) {
        console.error('Error loading video:', error);
        alert('حدث خطأ في تشغيل القناة. يرجى المحاولة لاحقاً.');
        closeJWPlayer();
    }
}

function onPlayerError(error) {
    console.error('Player error:', error);
    alert('حدث خطأ في تشغيل الفيديو. سيتم إعادة المحاولة تلقائياً.');
    
    setTimeout(() => {
        if (shakaPlayer) {
            shakaPlayer.retryStreaming();
        }
    }, 5000);
}

function closeJWPlayer() {
    elements.jwPlayerContainer.classList.remove('active');
    setTimeout(() => {
        if (jwPlayerInstance) {
            jwPlayerInstance.stop();
        }
        elements.jwPlayerContainer.style.display = 'none';
    }, 300);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // First initialize all event listeners
    initEventListeners();
    
    // Then load the groups
    loadGroups();
    
    // Initialize players
    initShakaPlayer().catch(console.error);
    initJWPlayer();
    
    // Animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.group-card, .section-title').forEach(el => {
        observer.observe(el);
    });
});