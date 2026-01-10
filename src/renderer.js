const { ipcRenderer } = require('electron');

const streamGrid = document.getElementById('streamGrid');
const urlInput = document.getElementById('urlInput');
const addStreamBtn = document.getElementById('addStreamBtn');
const clearBtn = document.getElementById('clearBtn');
const gridBtns = document.querySelectorAll('.grid-btn');

let currentGridSize = 2; // Default
let currentStreams = [];

// Grid Selection Logic
gridBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update Active State
        gridBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update Grid Size variable
        currentGridSize = parseInt(btn.dataset.grid);

        updateGridLayout();
        adjustStreamCount();
    });
});

function adjustStreamCount() {
    // Remove streams if we have too many
    while (currentStreams.length > currentGridSize) {
        const streamToRemove = currentStreams.pop();
        streamToRemove.remove();
    }

    const url = urlInput.value.trim();
    // if (!url) return; // Allow adjusting even without URL (empty slots)

    // Add streams if we don't have enough
    while (currentStreams.length < currentGridSize) {
        createStream(url || null, currentStreams.length);
    }
}


// Enter Key Support
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addStreamBtn.click();
    }
});

// Load Streams
addStreamBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (!url) return;

    clearStreams();

    for (let i = 0; i < currentGridSize; i++) {
        createStream(url, i);
    }

    updateGridLayout();
});

// Clear All
clearBtn.addEventListener('click', clearStreams);

function createStream(url, index) {
    const container = document.createElement('div');
    container.className = 'stream-container';

    if (url) {
        // We use webview tag which is available in Electron when enabled
        const webview = document.createElement('webview');
        webview.src = url;
        webview.setAttribute('allowpopups', '');
        // CRITICAL: Ensure the guest page also doesn't throttle
        webview.setAttribute('webpreferences', 'backgroundThrottling=no');

        // Attempt to mute all by default to save user's ears
        webview.addEventListener('dom-ready', () => {
            webview.setAudioMuted(true);
        });

        container.appendChild(webview);
    } else {
        // Empty State Placeholder
        container.innerHTML = `<div style="height:100%; display:flex; align-items:center; justify-content:center; color:#333; font-weight:500;">Instance ${index + 1}</div>`;
    }

    // Handle Click to Focus/Unmute
    container.addEventListener('click', () => {
        document.querySelectorAll('.stream-container').forEach(el => {
            el.classList.remove('focused');
            const wv = el.querySelector('webview');
            if (wv) wv.setAudioMuted(true);
        });

        container.classList.add('focused');
        const activeWv = container.querySelector('webview');
        if (activeWv) activeWv.setAudioMuted(false);
    });

    streamGrid.appendChild(container);
    currentStreams.push(container);
}

function updateGridLayout() {
    // Remove all classes first
    streamGrid.classList.remove('grid-2', 'grid-4', 'grid-6', 'grid-8');

    // Add current class
    streamGrid.classList.add(`grid-${currentGridSize}`);
}

function clearStreams() {
    streamGrid.innerHTML = '';
    currentStreams = [];
}

// Initialize on Launch
streamGrid.innerHTML = ''; // Remove the "Select grid size..." placeholder
updateGridLayout();
adjustStreamCount(); // Creates initial empty streams
