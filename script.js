// You start by creating a Scene to contain all our visuals
const scene = new THREE.Scene();

// A Mesh is visual object, made of a Geometry (the shape) and a Material
const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// At least one Camera is required to have a point of view
const sizes = { width: 800, height: 600 };
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // field of view (fov) in degrees, aspect ratio
scene.add(camera);

// Objects can be moved with it's position, scale and rotation properties (x, y and z axis)
camera.position.z = 3;
camera.position.x = -1;
camera.position.y = 1;

// The Renderer renders from the camera pov, and draws it in a canvas
const canvas = document.getElementById("red-cube-wrapper");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
