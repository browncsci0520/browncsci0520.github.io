
import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";
import { ShearSheep } from './scenesubjects/ShearSheep';
import { GeneralLight } from './scenesubjects/GeneralLight';
import { Grid } from './scenesubjects/Grid';
import { Z1Plane } from './scenesubjects/Z1Plane';


export function Shear3DCrossSectionScene(canvas, matrixHTML) {

    /* local variables */
    
    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene, matrixHTML);

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

    function createSceneSubjects(scene, matrixHTML) {
        const sceneSubjects = [
            new GeneralLight(scene, {x: 0, y: 0, z: 20}, 2),
            new ShearSheep(scene, matrixHTML),
            new Grid(scene, {x: 1, y: 0, z: 0}),
            //new Z1Plane(scene)
        ];

        return sceneSubjects
    }

    /* public functions */

    this.update = function(matrixHTML) {
        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++) {
           sceneSubjects[i].update(elapsedTime, matrixHTML);
        }
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