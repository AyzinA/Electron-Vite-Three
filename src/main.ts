import * as THREE from 'three';

const canvas = document.getElementById('app') as HTMLCanvasElement;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene & camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(0, 0.5, 3.5);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(2, 3, 4);
scene.add(light);

// Spinning cube
const geo = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
const cube = new THREE.Mesh(geo, mat);
scene.add(cube);

// Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Loop
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const t = clock.getElapsedTime();
  cube.rotation.x = t * 0.6;
  cube.rotation.y = t * 1.0;
  renderer.render(scene, camera);
});

console.log('Hello from renderer. Electron:', (window as any).appInfo?.versions?.electron);
