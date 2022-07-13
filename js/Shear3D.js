
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { ShearSheep } from './scenesubjects/ShearSheep';
import { GeneralLight } from './scenesubjects/GeneralLight';
import { Grid } from './scenesubjects/Grid';
import { Z1Plane } from './scenesubjects/Z1Plane';

export function Shear3DScene(canvas, matrixHTML) {

    /* local variables */
    
    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const controls = new OrbitControls(camera, renderer.domElement);
    const sceneSubjects = createSceneSubjects(scene, matrixHTML);

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
        const farPlane = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane)

        camera.position.set(-50, 0, 0);
        camera.lookAt(0, 0, 0);
        camera.rotation.y =  -Math.PI / 2;

        return camera;
    }

    function createSceneSubjects(scene, matrixHTML) {
        const sceneSubjects = [
            new GeneralLight(scene, {x: -20, y: -10, z: 20}, 6),
            new GeneralLight(scene, {x: 20, y: 10, z: -20}, 5),
            new ShearSheep(scene, matrixHTML),
            new Grid(scene, {x: 0, y: 0, z: 1}),
            new Grid(scene, {x: 0, y: 1, z: 0}),
            new Z1Plane(scene)
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