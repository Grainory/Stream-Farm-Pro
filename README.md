# StreamFarm Pro
StreamFarm Pro is a Windows-based utility that interfaces with core Chromium flags to simulate valid foreground activity on multiple browser instances. It provides a configurable bridge between modern web apps and the resource-constrained Windows desktop environment, allowing for smooth video playback without background throttling.

## Features
- **Anti-Throttling Engine**: Native support for disabling background timer throttling via direct Electron internals.
- **Dynamic Grid System**: Instantly switch between 2x, 4x, 6x, and 8x layouts.
- **Background Persistence**: Minimized or unfocused windows continue to render and play audio/video at full priority.
- **Smart Audio Management**: Streams auto-mute on load. Click a stream to unmute and focus.

## Installation
1. Download StreamFarm Pro Setup 1.0.0.exe.
2. Run the installer.
3. StreamFarm Pro will launch automatically.

```
StreamFarm Pro Setup 1.0.0.exe
```

**Note**
Windows SmartScreen Warning: Since this is a free open-source project, it does not have a paid digital signature. If you see a "Windows protected your PC" popup:
1. Click "More Info".
2. Click "Run Anyway".
This is a standard check for all new software not from the Microsoft Store.

## Usage
ensure your internet connection is stable before or after launching StreamFarm Pro. The grid buttons in the top bar will control the layout state.

### Default Controls
- **Input Bar**: Accepts URLs.
- **Grid Buttons**: Switches between 2, 4, 6, and 8 view modes.
- **Stream Click**: Unmutes the selected stream and mutes all others.

### Configuration Interface
The interface provides the following adjustments:
- **Load Streams**: Initializes the grid with the provided URL.
- **Clear All**: Wipes the current session.
- **Resize**: Application window is fully resizable and responsive.

## Development

### Prerequisites
- Node.js (LTS version recommended)
- npm (Node Package Manager)

### Build Instructions
1. 
Clone the repository:
```
git clone https://github.com/yourusername/StreamFarmPro.git
cd StreamFarmPro
```

2. 
Install dependencies:
```
npm install
```

3. 
Run in development mode:
```
npm start
```

4. 
Build for production (generates installer in dist/):
```
npm run dist
```



