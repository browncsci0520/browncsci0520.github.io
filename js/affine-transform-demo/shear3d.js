

import { ShearSheep } from '../assets/shear_sheep.js';
import { GeneralLight } from '../assets/general_light.js';
import { GridBasis } from '../assets/grid_basis.js';
import { SheepIntersection } from "../assets/sheep_intersection.js";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

export function Shear3DScene(canvas) {

    /* local variables */

    let local_mat = new THREE.Matrix4();
    local_mat.set( 1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 70, 12.5,
        0, 0, 0, 1 );
    
    let height = 1;

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const controls = new OrbitControls(camera, renderer.domElement);
    const sceneSubjects = createSceneSubjects(scene);

    let shearSheep = new ShearSheep(scene, height, 0);
    let grid = new GridBasis(scene, 0);

    let sheepIntersection = new SheepIntersection(scene);

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

        camera.position.set(0, 0, 40);
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

        let new_mat = matrix.multiply(local_mat);
        shearSheep.applyTransform(new_mat.clone());
        grid.applyTransform(new_mat.clone());
        sheepIntersection.applyTransform(new_mat.clone());
    }

    this.render = function() {
        renderer.render(scene, camera);
        TWEEN.update();
    }

    this.start = function() {

        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 40;
        camera.lookAt(0, 0, 0);

        let mat = new THREE.Matrix4();
        shearSheep.applyTransform(mat.clone());
        grid.applyTransform(mat.clone());
        sheepIntersection.applyTransform(mat.clone());
        
        let camPos = {x: 0, y: 0, z: 40};
        let targetCamPos = {x: 0, y: 0, z: 70};
        let moveCam = new TWEEN.Tween(camPos).to(targetCamPos, 2000);
        moveCam.delay(1000);
        moveCam.onUpdate(function() {
            camera.position.x = camPos.x;
            camera.position.y = camPos.y;
            camera.position.z = camPos.z;
        });
        moveCam.start();   
        
        let camAngle = {theta: Math.PI / 2};
        let targetCamAngle = {theta: Math.PI - 0.5};
        let changeCamAngle = new TWEEN.Tween(camAngle).to(targetCamAngle, 4000);
        changeCamAngle.delay(3500);
        changeCamAngle.onUpdate(function() {
            camera.position.x = 70 * Math.cos( camAngle.theta );  
            camera.position.z = 70 * Math.sin( camAngle.theta );
            camera.lookAt(0, 0, 0)
        });
        changeCamAngle.start();

        let pos = {z: 12.5}
        let targetPos = {z: 0};
        let moveToOrigin = new TWEEN.Tween(targetPos).to(pos, 2000);
        moveToOrigin.delay(8000);
        moveToOrigin.onUpdate(function() {
            let mat = new THREE.Matrix4();
            mat.set( 1, 0, 0, 0,
                   0, 1, 0, 0,
                   0, 0, 1, targetPos.z,
                   0, 0, 0, 1 );
         grid.applyTransform(mat.clone());
         sheepIntersection.applyTransform(mat.clone());
        });
        moveToOrigin.start();

        let scale = {h: 1}
        let targetScale = {h: 70};
        let scaleSheep = new TWEEN.Tween(scale).to(targetScale, 2000);
        scaleSheep.delay(10500);
        scaleSheep.onUpdate(function() {
            let mat = new THREE.Matrix4();
            mat.set( 1, 0, 0, 0,
                   0, 1, 0, 0,
                   0, 0, scale.h, 0,
                   0, 0, 0, 1 );
            shearSheep.applyTransform(mat);
        });
        scaleSheep.start();
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