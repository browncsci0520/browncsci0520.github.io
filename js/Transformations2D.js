
import * as THREE from 'three';
import { Sheep } from './scenesubjects/Sheep';
import { GeneralLight } from './scenesubjects/GeneralLight';
import { Grid } from './scenesubjects/Grid';
export function Transformations2D(canvas,
                                rotMatrixHTML,
                                refMatrixHTML,
                                scaleMatrixHTML,
                                shearMatrixHTML) {

    /* local variables */
    
    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene,  
                                              rotMatrixHTML,
                                              refMatrixHTML,
                                              scaleMatrixHTML,
                                              shearMatrixHTML);

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
        camera.lookAt(0, 0, 0);          
        return camera;
    }

    function createSceneSubjects(scene,
                                 rotMatrixHTML,
                                 refMatrixHTML,
                                 scaleMatrixHTML,
                                 shearMatrixHTML) {
        const sceneSubjects = [
            new GeneralLight(scene, {x : 0, y: 20, z : 0}, 2),
            new Sheep(scene,
                      rotMatrixHTML,
                      refMatrixHTML,
                      scaleMatrixHTML,
                      shearMatrixHTML),
            new Grid(scene, {x: 1, y: 0, z: 0}),
        ];

        return sceneSubjects
    }

    /* public functions */

    this.update = function(rotMatrixHTML,
                           refMatrixHTML,
                           scaleMatrixHTML,
                           shearMatrixHTML) {

        const elapsedTime = clock.getElapsedTime();

        for (let i = 0; i < sceneSubjects.length; i++) {
           sceneSubjects[i].update(elapsedTime, 
                                   rotMatrixHTML,
                                   refMatrixHTML,
                                   scaleMatrixHTML,
                                   shearMatrixHTML);
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