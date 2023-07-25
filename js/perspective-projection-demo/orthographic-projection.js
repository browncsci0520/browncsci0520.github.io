

import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { CubeWireframe } from "../assets/cube_wireframe.js";

import { Subspace } from "../assets/subspace.js";
import { SubspaceHide} from "../assets/subspace_hide.js";

export function OrthographicProjectionScene(canvas, canvas2) {

    /* local variables */

    let paused = false;
    let obliqueMatrix = new THREE.Matrix4();
    
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const scene2 = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const rtcamera = buildOrthoCamera(screenDimensions);

    /* Builds a second renderer */
    const renderer2 = new THREE.WebGLRenderer({ 
        canvas: canvas2, 
        antialias: true,
        alpha: true
    });
    const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
    
    renderer2.setPixelRatio(DPR);
    renderer2.setSize(screenDimensions.width, screenDimensions.height);

    const controls = new OrbitControls(camera, renderer.domElement);
    // const controls2 = new OrbitControls(rtcamera, renderer2.domElement);

    const cube = new CubeWireframe();
    const cube2 = new CubeWireframe();
    const normal = new SubspaceHide(scene, {x: 0, y: 0, z: 1});
    const normal2 = new SubspaceHide(scene2, {x: 0, y: 0, z: 1});
    scene.add(cube);
    scene2.add(cube2);
    const axesHelper = new THREE.AxesHelper(1000000);
    const axesHelper2 = new THREE.AxesHelper(1000000);
    axesHelper.setColors("red",'green', 'olive');
    axesHelper2.setColors('red', 'green', 'olive');
    scene.add(axesHelper);
    scene2.add(axesHelper2);
    // scene.remove(normal)
    // scene2.remove(normal2)
    

    function buildScene() {

        const scene = new THREE.Scene();
        scene.background =  new THREE.Color('white');


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
        const nearPlane = 0.1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane)

        camera.position.set(0, 0, 20);
        return camera;
    }


    function buildOrthoCamera({ width, height }) {
        
        let left = -25;
        let right = 25;
        let top = 25;
        let bottom = -25;
        let near = 1
        let far = 20000;
        const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
        camera.position.set(0, 0, 1000);

        return camera;
        
       /*
        const aspectRatio = width / height;
        const fov = 60;
        const nearPlane = 1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fov, 1, nearPlane, farPlane)

        camera.position.set(0, 40, 0);
        camera.lookAt(0, 0, 0);
        return camera;
        */
    }

    /* public functions */

    this.render = function() {
        renderer.render(scene, camera);
        renderer2.render(scene2, rtcamera);

        if (!paused) {
            cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            // cube.rotation.z += 0.01;
            
            normal.rotate(0.01, 0.01, 0);

            normal2.rotate(0.01, 0.01, 0);

            cube2.rotation.x += 0.01;
            // cube2.rotation.y += 0.01;
            // cube2.rotation.z += 0.01;
        }


        TWEEN.update();
    }

    this.start = function() {
        
    }

    this.pause = function() {
        paused = !paused;
    }

    this.realign = function() {
        let normPos = normal.getPosition();
        // let normPos2 = normal2.getPosition();
        camera.position.set(normPos.x * 20, normPos.y * 20, normPos.z * 20);
        // rtcamera.position.set(normPos.x * 20, normPos.y * 20, normPos.z * 20);
        console.log(normPos.x + " " + normPos.y + " " +  normPos.z);
        camera.lookAt(0, 0, 0);
        // rtcamera.lookAt(0, 0, 0);
    }

    this.resetRotation = function() {
        cube.rotation.set(0, 0, 0);
        cube2.rotation.set(0, 0, 0);
        normal.setRotation(0, 0, 0);
        normal2.setRotation(0, 0, 0);
        
    }

    this.oblique = function(a) {
            // create shear matrix
        let alpha = parseFloat(a); // or Math.PI / 4

        let Szx = 0.5 * Math.cos( alpha );
        let Szy = 0.5 * Math.sin( alpha );


        let matrix = new THREE.Matrix4();

        matrix.set(   1,   0,  Szx,  0,
                    0,     1,  Szy,  0,
                    0,   0,   1,   0,
                    0,     0,   0,   1  );
        normal2.applyTransform(obliqueMatrix.clone());
        cube2.geometry.applyMatrix4(obliqueMatrix.invert());

        obliqueMatrix = matrix.clone();
        cube2.geometry.applyMatrix4(obliqueMatrix);

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