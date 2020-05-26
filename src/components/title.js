const loader = new THREE.FontLoader();
const fontJSON = require("../assets/Acme_Regular.json");
const font = loader.parse(fontJSON);
AFRAME.registerComponent("title", {
  init: function () {
    const opacity = this.data.opacity;
    const geometry = new THREE.TextGeometry("Welcome to MathVR", {
      font: font,
      size: 1,
      height: 0.1,
      curveSegments: 12,
      bevelThickness: 10,
      bevelSize: 8,
    });
    const material = new THREE.MeshStandardMaterial({
      color: 0xf7cb0d,
      metalness: 0.1,
      roughness: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    this.el.setObject3D("text-geometry", mesh);
    this.el.setAttribute("position", {
      x: -5.75,
      y: 6,
      z: -8,
    });
    this.el.setAttribute("scale", { x: 1, y: 1, z: 1 });
  },
  remove: function () {
    console.log("what the fuck");
  },
});
