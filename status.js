// CONFIG
const SERVER = "play.europa-craft.de"; 
const API = `https://api.mcsrvstat.us/2/${SERVER}`;
const BOX_ID = "mc-proxy-status";

async function loadStatus() {
    const box = document.getElementById(BOX_ID);

    try {
        const response = await fetch(API);
        const data = await response.json();

        if (!data.online) {
            box.innerHTML = `
                <div class="mc-box">
                    <div class="mc-title">EuropaCraft Proxy</div>
                    <div class="mc-offline">Server Offline</div>
                </div>
            `;
            return;
        }

        // Spielerauflistung
        const players = data.players?.list ?? [];
        const list = players.length
            ? players.map(p => `<div class="player">${p}</div>`).join("")
            : `<div class="no-players">Keine Spieler online</div>`;

        box.innerHTML = `
            <div class="mc-box">
                <div class="mc-title">EuropaCraft Proxy</div>
                <div class="mc-online">Online</div>
                <div class="mc-playercount">${data.players.online} / ${data.players.max} Spieler</div>
                <div class="mc-playerlist">${list}</div>
            </div>
        `;
    } catch (e) {
        box.innerHTML = `
            <div class="mc-box">
                <div class="mc-title">EuropaCraft Proxy</div>
                <div class="mc-offline">Fehler beim Abrufen</div>
            </div>
        `;
    }
}

loadStatus();
setInterval(loadStatus, 5000);
