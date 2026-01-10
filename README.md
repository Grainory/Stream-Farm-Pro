# StreamFarm Pro

StreamFarm Pro is a specialized Windows desktop utility designed to bypass background browser throttling, enabling the simultaneous viewing of multiple TikTok Live streams (2, 4, 6, or 8) without performance degradation. It leverages a custom Electron helper to ensure all active streams remain prioritized by the OS, regardless of window focus.

> **Note**: This tool is limited to Windows OS.

## Features
- **Anti-Throttling Engine**: Uses deep system flags (`disable-renderer-backgrounding`) to prevent Chromium from freezing background tabs.
- **Dynamic Grid System**: Instantly switch between 2x, 4x, 6x, and 8x grid layouts.
- **Background Persistence**: Minimized or unfocused windows continue to render and play audio/video at full priority.
- **Smart Audio Management**: All streams auto-mute on load. Click any stream to unmute and focus.

## Installation

### Prerequisites
- Windows 10/11 (Architecture x64 recommended)
- Node.js (Runtime)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/tiktok-live-farm.git
   ```
2. Navigate to the directory:
   ```bash
   cd tiktok-live-farm
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage
1. **Launch**: Run `npm start` to open the StreamFarm dashboard.
2. **Input URL**: Paste the target TikTok Live URL (e.g., `https://www.tiktok.com/@username/live`) into the top input bar.
3. **Select Grid**: Choose your desired view count (2, 4, 6, or 8).
4. **Load**: Click "Load Streams" to initialize the farm.
5. **Manage**: 
   - Click "6 Views" to dynamically expand your farm.
   - Click a video stream to unmute it (others remain muted).

## License
MIT License. Free for personal and educational use.
