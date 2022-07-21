
import * as THREE from "three";
import { Shear3DScene } from './Shear3D.js'
import { Shear3DCrossSectionScene } from './Shear3DCrossSection.js'
import { Transformations2D } from './Transformations2D'
import { Perspective2DScene } from './Perspective2D.js';
import { ProjectiveLineScene } from './ProjectiveLine.js';
import { ProjectivePlaneScene } from './ProjectivePlane.js';

/* main.js */

/* 2D transformations */
const transformations2DCanvas = document.getElementById('transformations-2D-canvas');
const rot2DMatrixHTML = document.getElementById('rotation-2D-matrix').getElementsByClassName('limit-dp');
const ref2DMatrixHTML = document.getElementById('reflection-2D-matrix').getElementsByClassName('limit-dp');
const scale2DMatrixHTML = document.getElementById('scaling-2D-matrix').getElementsByClassName('limit-dp');
const shear2DMatrixHTML = document.getElementById('shear-2D-matrix').getElementsByClassName('limit-dp');

var rot2DSlider =  document.getElementById('rotation-2D-slider')
var shearX2DSlider =  document.getElementById('shearX-2D-slider')
var shearY2DSlider =  document.getElementById('shearY-2D-slider')


const transformations2DScene = new Transformations2D(
    transformations2DCanvas,
    rot2DMatrixHTML,
    ref2DMatrixHTML,
    scale2DMatrixHTML,
    shear2DMatrixHTML    
);



/* affine transformation */
const shear3DCanvas = document.getElementById('shear-3D-canvas');
const shear3DCrossSectionCanvas = document.getElementById('shear-3D-cross-section-canvas');
const shear3DMatrixHTML = document.getElementById('shear-3D-matrix').getElementsByClassName('limit-dp');
const shear3DScene = new Shear3DScene(shear3DCanvas, shear3DMatrixHTML);
const shear3DCrossSectionScene = new Shear3DCrossSectionScene(shear3DCrossSectionCanvas, shear3DMatrixHTML);

var shearYXSlider = document.getElementById("shear-yx-3D-slider");
var shearYZSlider = document.getElementById("shear-yz-3D-slider");

/* projective line and plane examples */
const projectiveLineCanvas = document.getElementById('projective-line-canvas');
const projectiveLineScene = new ProjectiveLineScene(projectiveLineCanvas);

const projectivePlaneCanvas = document.getElementById('projective-plane-canvas');
const projectivePlaneScene = new ProjectivePlaneScene(projectivePlaneCanvas);

var numSubspacesSlider = document.getElementById("num-subspaces-slider");
var projectiveFrameSlider = document.getElementById("projective-frame-slider");

/* perspective projection */
const perspective2DCanvas = document.getElementById('perspective-2D-canvas');
const perspective2DScene = new Perspective2DScene(perspective2DCanvas);


bindEventListeners();
render();

function bindEventListeners() {
    window.onresize = resizeCanvas;
    window.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("mousemove", mouseMove, false);
    window.addEventListener("mouseup", mouseUp, false);

    shearYXSlider.oninput = function() {
        shear3DMatrixHTML[6].innerHTML = shearYXSlider.value;
    };
    shearYZSlider.oninput = function() {
        shear3DMatrixHTML[7].innerHTML = shearYZSlider.value;
    };
    rot2DSlider.oninput = function() {
        rot2DMatrixHTML[0].innerHTML = Math.cos(rot2DSlider.value);
        rot2DMatrixHTML[1].innerHTML = Math.sin(rot2DSlider.value);
        rot2DMatrixHTML[2].innerHTML = -Math.sin(rot2DSlider.value);
        rot2DMatrixHTML[3].innerHTML = Math.cos(rot2DSlider.value);
        transformations2DScene.onMatInput(
            rot2DMatrixHTML,
            ref2DMatrixHTML,
            scale2DMatrixHTML,
            shear2DMatrixHTML);
    };
    shearX2DSlider.oninput = function() {
        shear2DMatrixHTML[2].innerHTML = shearX2DSlider.value;
        transformations2DScene.onMatInput(
            rot2DMatrixHTML,
            ref2DMatrixHTML,
            scale2DMatrixHTML,
            shear2DMatrixHTML);
    }
    shearY2DSlider.oninput = function() {
        shear2DMatrixHTML[1].innerHTML = shearY2DSlider.value;
        transformations2DScene.onMatInput(
            rot2DMatrixHTML,
            ref2DMatrixHTML,
            scale2DMatrixHTML,
            shear2DMatrixHTML);
    }

    numSubspacesSlider.oninput = function() {
        projectiveLineScene.resetSubspaces(numSubspacesSlider.value);
        projectivePlaneScene.resetSubspaces(numSubspacesSlider.value);
    }

    projectiveFrameSlider.oninput = function() {
        projectiveLineScene.moveFrame( projectiveFrameSlider.value);
        projectivePlaneScene.moveFrame( projectiveFrameSlider.value);
    }
}

function mouseDown(event) {
    perspective2DScene.onMouseDown(event);
}
  
function mouseMove(event) {
    perspective2DScene.onMouseMove(event);
}
  
function mouseUp(event) {
    perspective2DScene.onMouseUp(event);
}

function resizeCanvas() {
    resizeCanvasLocal(shear3DCanvas, shear3DScene);
    resizeCanvasLocal(shear3DCrossSectionCanvas, shear3DCrossSectionScene);
    resizeCanvasLocal(transformations2DCanvas, transformations2DScene);

}

function resizeCanvasLocal(canvas, sceneManager) {
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
}

function render() {
    requestAnimationFrame(render);
    shear3DScene.update(shear3DMatrixHTML);
    shear3DCrossSectionScene.update(shear3DMatrixHTML);
    transformations2DScene.update(
        rot2DMatrixHTML,
        ref2DMatrixHTML,
        scale2DMatrixHTML,
        shear2DMatrixHTML
    );
    projectiveLineScene.update();
    projectivePlaneScene.update();
    perspective2DScene.update();

}

