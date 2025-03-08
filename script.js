function showLoadingDialog(message = "Updating channels...") {
    const dialog = document.getElementById("loading-dialog");
    dialog.querySelector("p").textContent = message;
    dialog.style.display = "block";
}

function hideLoadingDialog() {
    const dialog = document.getElementById("loading-dialog");
    dialog.style.display = "none";
}

function showSuccessDialog(message) {
    const dialog = document.getElementById("success-dialog");
    dialog.querySelector("p").textContent = message;
    dialog.style.display = "block";
    setTimeout(() => {
        dialog.style.display = "none";
    }, 2000);
}

function showErrorDialog(message) {
    const dialog = document.getElementById("error-dialog");
    dialog.querySelector("p").textContent = message;
    dialog.style.display = "block";
    setTimeout(() => {
        dialog.style.display = "none";
    }, 1000); 
}

async function fetchNewUrl() {
    try {
        
        const response = await fetch('https://alraqi-tv.com/AAAA/2025//api.php');
        const newUrl = await response.text();
        console.log("Successfully fetched the new URL:", newUrl);

        
        if (newUrl && newUrl.startsWith("http")) {
            return newUrl.trim();
        } else {
            throw new Error("The fetched URL is invalid.");
        }
    } catch (error) {
        console.error("An error occurred while fetching the new URL:", error);
        return null;
    }
}


async function updateLinksWithNewUrl(newUrl) {
    try {
        console.log("Updating links with the new URL:", newUrl);

       
        const stMatch = newUrl.match(/st=(\d+)/);
        const expMatch = newUrl.match(/exp=(\d+)/);
        const dataMatch = newUrl.match(/data=([a-f0-9-]+)/);
        const hmacMatch = newUrl.match(/hmac=([a-f0-9]+)/);

        if (stMatch && expMatch && dataMatch && hmacMatch) {
            const newSt = stMatch[1];
            const newExp = expMatch[1];
            const newData = dataMatch[1];
            const newHmac = hmacMatch[1];

            console.log("Extracted new values:", { newSt, newExp, newData, newHmac });

            
            if (newUrl.includes("acl=/Content/*")) {
                
                console.log("Updating links containing `acl=/Content/*`...");
                await updateCollectionLinks("channels", newSt, newExp, newData, newHmac, "acl=/Content/*");
                await updateCollectionLinks("matches", newSt, newExp, newData, newHmac, "acl=/Content/*");
            } else if (newUrl.includes("variant/v1blackout/spo-hd-38-d-shortdvr")) {
                
                console.log("Updating links containing `variant/v1blackout/spo-hd-38-d-shortdvr`...");
                await updateCollectionLinks("channels", newSt, newExp, newData, newHmac, "variant/v1blackout/spo-hd-38-d-shortdvr");
                await updateCollectionLinks("matches", newSt, newExp, newData, newHmac, "variant/v1blackout/spo-hd-38-d-shortdvr");
            }

            console.log("All links updated successfully!");
            showSuccessDialog("All links updated successfully!");
        } else {
            throw new Error("The new URL does not contain all required values (st, exp, data, hmac).");
        }
    } catch (error) {
        console.error("An error occurred while updating the links:", error);
        showErrorDialog("An error occurred while updating the links: " + error.message);
    }
}


async function autoUpdate() {
    console.log("Starting auto-update...");
    showLoadingDialog("Updating channels...");
    const newUrl = await fetchNewUrl();
    if (newUrl) {
        await updateLinksWithNewUrl(newUrl);
    } else {
        console.error("No new URL found.");
        showErrorDialog("No new URL found.");
    }
    hideLoadingDialog();
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded, starting auto-update...");
    autoUpdate();
});
