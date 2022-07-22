
import * as THREE from "three";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { ShearSheep } from '../shear_sheep.js';
import { GeneralLight } from '../general_light.js';
import { Grid } from '../grid.js';
import { ZPlane } from '../z_plane.js';

export function Shear3DScene(canvas) {

    /* local variables */
    

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const controls = new OrbitControls(camera, renderer.domElement);
    const sceneSubjects = createSceneSubjects(scene);

    let shearSheep = new ShearSheep(scene, 70);


    /* private functions */

    function buildScene() {

        const scene = new THREE.Scene();
        scene.background = null;

        return scene;
    }

    function buildRenderer({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            antialias: true,
            alpha: true
        });
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fov = 60;
        const nearPlane = 1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane)

        camera.position.set(-50, 0, 0);
        camera.lookAt(0, 0, 0);
        camera.rotation.y =  -Math.PI / 2;

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLight(scene, {x: -20, y: -10, z: 20}, 6),
            new GeneralLight(scene, {x: 20, y: 10, z: -20}, 5),
            new ZPlane(scene)
        ];

        return sceneSubjects
    }

    /* public functions */

    this.applyTransform = function(matrix) {
        shearSheep.applyTransform(matrix);
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