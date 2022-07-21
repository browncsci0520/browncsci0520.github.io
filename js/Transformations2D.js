
import * as THREE from "three";
import { Sheep } from './scenesubjects/Sheep';
import { GeneralLight } from './scenesubjects/GeneralLight';
import { Grid } from './scenesubjects/Grid';
import { GridBasis } from "./scenesubjects/GridBasis";
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
    const sceneSubjects = createSceneSubjects(scene);

    let rotMatrix = buildMatrix(rotMatrixHTML);
    let refMatrix = buildMatrix(refMatrixHTML);
    let scaleMatrix = buildMatrix(scaleMatrixHTML);
    let shearMatrix = buildMatrix(shearMatrixHTML);
    let matrix = rotMatrix
                 .multiply(refMatrix)
                 .multiply(scaleMatrix)
                 .multiply(scaleMatrix)
                 .multiply(shearMatrix);

    updateMatrix(
        rotMatrixHTML,
        refMatrixHTML,
        scaleMatrixHTML,
        shearMatrixHTML
    );

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
            new GridBasis(scene, {x: 0, y: 0, z: 0}),
        ];

        return sceneSubjects
    }

    function updateMatrix(rotMatrixHTML,
        refMatrixHTML,
        scaleMatrixHTML,
        shearMatrixHTML) {
            rotMatrix = buildMatrix( rotMatrixHTML );
            refMatrix = buildMatrix( refMatrixHTML );
            scaleMatrix = buildMatrix( scaleMatrixHTML );
            shearMatrix = buildMatrix( shearMatrixHTML );
            matrix = rotMatrix
            .multiply(refMatrix)
            .multiply(scaleMatrix)
            .multiply(scaleMatrix)
            .multiply(shearMatrix);
        }

        function buildMatrix(matrixHTML) {

            let ret = new THREE.Matrix4();

            let arr = []
            for (let i = 0; i < 4; i++) {
            arr[i] = matrixHTML[i].innerHTML;
            }

            ret.set (arr[0], arr[2], 0,       0,
            arr[1], arr[3], 0,       0,
            0,      0,      1,       0,
            0,      0,      0,       1 );

            return ret;
        }

    /* public functions */

    this.onMatInput = function(rotMatrixHTML,
                                refMatrixHTML,
                                scaleMatrixHTML,
                                shearMatrixHTML) {
        sceneSubjects[1].update(matrix.invert());
        sceneSubjects[2].update(matrix.invert());

        updateMatrix(
            rotMatrixHTML,
            refMatrixHTML,
            scaleMatrixHTML,
            shearMatrixHTML
        );
        
        sceneSubjects[1].update(matrix);
        sceneSubjects[2].update(matrix);
    }

    this.update = function() {  
        
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