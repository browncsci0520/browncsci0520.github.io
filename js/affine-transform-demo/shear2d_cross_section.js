
import { ShearSheep } from '../assets/shear_sheep.js';
import { GeneralLight } from '../assets/general_light.js';
import { GridBasis } from '../assets/grid_basis.js';



export function Shear2DCrossSectionScene(canvas) {

    /* local variables */
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }


    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);
  //  const controls = new OrbitControls(camera, renderer.domElement);

    let shearSheep = new ShearSheep(scene, 20, 0);
    let grid = new GridBasis(scene, 10);

    /* private functions */

    function buildScene() {

        const scene = new THREE.Scene();
        scene.background = null;

        return scene;
    }

    function buildRenderer({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        renderer.localClippingEnabled = true;

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fov = 60;
        const nearPlane = 1;
        const farPlane = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane)

        camera.position.set(0, 0, 50);
        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLight(scene, {x: -20, y: -10, z: 20}, 6),
            new GeneralLight(scene, {x: 20, y: 10, z: -20}, 5),
        ];

        return sceneSubjects
    }

    /* public functions */

    this.applyTransform = function(matrix) {
        shearSheep.applyTransform(matrix.clone());
        grid.applyTransform(matrix.clone());
    }

    this.render = function() {
        renderer.render(scene, camera);
    }

    this.onWindowResize = function() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }
}