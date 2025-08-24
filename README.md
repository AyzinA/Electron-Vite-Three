# Electron + Vite + Three (TypeScript) — Starter

A tiny starter that boots an Electron app, serves a Vite + TypeScript renderer, and renders a rotating **Three.js** cube. It uses [`vite-plugin-electron/simple`] to auto-launch Electron during dev and to build the `main`/`preload` scripts for production.

---

## Quick Start

```bash
# 1) Install deps
npm i
# or: pnpm i / yarn

# 2) Start Vite and auto-launch Electron
npm run dev

# 3) Build production bundles (renderer + main + preload)
npm run build
```

You should see a window titled **Electron + Vite + Three** with a spinning green cube.

---

## Scripts

| Script        | What it does                                                                 |
|---------------|-------------------------------------------------------------------------------|
| `dev`         | Runs Vite dev server and launches Electron when ready.                        |
| `build`       | Builds renderer to `dist/` and Electron entry points to `dist-electron/`.     |
| `preview`     | Static preview of Vite build (renderer only).                                 |

---

## Project Structure

```
.
├─ electron/
│  ├─ main.ts         # Electron main process (creates BrowserWindow)
│  └─ preload.ts      # Safe bridge to the renderer (contextIsolation)
│
├─ src/
│  ├─ main.ts         # Vite/Three.js entry: scene + spinning cube
│  ├─ style.css
│  └─ index.html
│
├─ vite.config.ts     # Vite + vite-plugin-electron/simple config
├─ tsconfig.json
├─ package.json
└─ (dist/, dist-electron/ after builds)
```

---

## Tech Notes

### Electron (main)
- Creates a single `BrowserWindow`.
- Loads the Vite dev server in development, or `dist/index.html` in production.
- `contextIsolation: true`, `nodeIntegration: false` (recommended security defaults).
- Uses a **preload** script for any renderer IPC/bridging.

### Preload
- Exposes strictly-scoped APIs to `window` via `contextBridge`.
- Keep all Node access in main/preload; the renderer stays web-safe.

### Renderer (Vite + Three)
- Standard Vite TS entry in `src/main.ts`.
- A minimal Three.js scene and an animation loop render a green cube.

---

## License

MIT.
