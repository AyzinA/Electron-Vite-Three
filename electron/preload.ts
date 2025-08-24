// electron/preload.ts
import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('appInfo', {
  versions: process.versions,
});
