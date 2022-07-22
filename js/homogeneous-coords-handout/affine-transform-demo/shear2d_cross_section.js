
import * as THREE from "three";
import { ShearSheep } from '../shear_sheep.js';
import { GeneralLight } from '../general_light.js';
import { Grid } from '../grid.js';
import { GridBasis } from '../grid_basis.js';


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

    let shearSheep = new ShearSheep(scene, 20);

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
            new GeneralLight(scene, {x: 0, y: 0, z: 20}, 2),
            new GridBasis(scene, {x: 0, y: 0, z: 0}),
        ];

        return sceneSubjects
    }

    /* public functions */

    this.applyTransform = function(matrix) {
        shearSheep.applyTransform(matrix.clone());
        sceneSubjects[1].applyTransform(matrix.clone());
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