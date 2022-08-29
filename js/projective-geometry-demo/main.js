
import { ProjectiveLineScene } from './projective_line.js'
import { ProjectivePlaneScene } from './projective_plane.js'

const demo = document.getElementById('projective-geometry-demo');

const canvas = document.getElementById('projective-line-canvas');
const canvasLineWrapper = document.getElementById('projective-line-canvas-wrapper');
const projectiveLineScene = new ProjectiveLineScene(canvas);

const canvasPlane = document.getElementById('projective-plane-canvas');
const canvasPlaneWrapper = document.getElementById('projective-plane-canvas-wrapper');
const projectivePlaneScene = new ProjectivePlaneScene(canvasPlane);

const affineMatrixHTML = document.getElementById('proj-affine-matrix').getElementsByTagName('span');


const numSubspacesSlider = document.getElementById("num-subspaces-slider");
const projectiveFrameSlider = document.getElementById("projective-frame-slider");
const projectiveFrameSliderWrapper = document.getElementById('projective-frame-slider-wrapper');
const numSubspacesSliderWrapper = document.getElementById('num-subspaces-slider-wrapper');
const affine1DSliderWrapper = document.getElementById('affine-1d-slider-wrapper');
const affine2DSliderWrapper = document.getElementById('affine-2d-slider-wrapper');
const affineXSlider = document.getElementById('affine-x-slider');
const affineZXSlider = document.getElementById('affine-zx-slider');
const affineZYSlider = document.getElementById('affine-zy-slider');
const projMatrices = document.getElementById('proj-matrices');

const subspaceEquivalence = document.getElementById('subspace-equivalence');
const lambdaSliderWrapper = document.getElementById('lambda-slider-wrapper');
const lambdaSlider = document.getElementById('lambda-slider');
let greenDotPos = document.getElementById('green-dot-pos');
let blueDotPos = document.getElementById('blue-dot-pos');
let lambdaDisplay = document.getElementsByClassName('lambda-display');

demo.style.display = "none";
canvas.style.display = "none";
canvasPlaneWrapper.style.display = "none";
projectiveFrameSliderWrapper.style.display = "none";
numSubspacesSliderWrapper.style.display = "none";
affine1DSliderWrapper.style.display = "none";
affine2DSliderWrapper.style.display = "none";
subspaceEquivalence.style.display = "none";
lambdaSliderWrapper.style.display = "none";

let matrix = new THREE.Matrix4;


bindEventListeners();
render();

export function reset() {
    demo.style.display = "none";
}

export function start() {
    $(".elem-3d").css("display", "none");
    $(".elem-4d").css("display", "none");
    $(".affine-demo-matrix-elements").css("grid-template", "repeat(2, 1fr) / repeat(2, auto)");
    demo.style.display = "block";
    canvas.style.display = "block";
    affine1DSliderWrapper.style.display = "block";
    projectiveLineScene.start();
}

export function subspaceState() {
    subspaceEquivalence.style.display = "block";
    lambdaSliderWrapper.style.display = "block";
    projectiveLineScene.subspaceState();
}

export function lineState() {
    projMatrices.style.display = "none";
    affine1DSliderWrapper.style.display = "none";
    subspaceEquivalence.style.display = "none";
    lambdaSliderWrapper.style.display = "none";
    numSubspacesSliderWrapper.style.display = "block";
    projectiveLineScene.lineState();
}

export function startPlane() {
    canvasPlaneWrapper.style.display = "block";
}

export function startFrame() {
    projectiveFrameSliderWrapper.style.display = "block";
}

export function startTranslation() {
    projMatrices.style.display = "block";
    $(".elem-3d").css("display", "block");
    $(".affine-demo-matrix-elements").css("grid-template", "repeat(3, 1fr) / repeat(3, auto)");
    canvasLineWrapper.style.display = "none";
    numSubspacesSliderWrapper.style.display = "none";
    affine2DSliderWrapper.style.display = "block";
    projectivePlaneScene.startAnimation();
}

function bindEventListeners() {

    affineXSlider.oninput = function() {
        let v =  Math.round(affineXSlider.value * 100) / 100;
        matrix.set(1, v, 0, 0,
                   0, 1, 0, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        blueDotPos.innerHTML = v;
        projectiveLineScene.applyTransform(matrix.clone());
        buildToHTML(matrix, affineMatrixHTML);
    }

    affineZXSlider.oninput = function() {
        let x = affineZXSlider.value;
        let y = affineZYSlider.value;
        matrix.set(1, 0, x, 0,
                   0, 1, y, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        affineMatrixHTML[2].innerHTML = affineZXSlider.value;
        projectivePlaneScene.applyTransform(matrix.clone());
        buildToHTML(matrix, affineMatrixHTML);
    }

    affineZYSlider.oninput = function() {
        let x = affineZXSlider.value;
        let y = affineZYSlider.value;
        matrix.set(1, 0, x, 0,
                   0, 1, y, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        affineMatrixHTML[2].innerHTML = affineZXSlider.value;
        projectivePlaneScene.applyTransform(matrix.clone());
        buildToHTML(matrix, affineMatrixHTML);
    }

    numSubspacesSlider.oninput = function() {
        projectiveLineScene.resetSubspaces(numSubspacesSlider.value);
        projectivePlaneScene.resetSubspaces(numSubspacesSlider.value);
    }

    projectiveFrameSlider.oninput = function() {
        projectiveLineScene.moveFrame( projectiveFrameSlider.value);
        projectivePlaneScene.moveFrame( projectiveFrameSlider.value);
    }

    lambdaSlider.oninput = function() {
        projectiveLineScene.moveGreenDot(lambdaSlider.value);
        lambdaDisplay[0].innerHTML = lambdaSlider.value;
        lambdaDisplay[1].innerHTML = lambdaSlider.value;
        greenDotPos.innerHTML =  Math.round(affineXSlider.value * lambdaSlider.value * 100) / 100;
    }
}

function render() {
    requestAnimationFrame(render);
    projectivePlaneScene.render();
    projectiveLineScene.render();
}


function buildToHTML(mat, matrixHTML) {
    let arr= mat.toArray();
    for (let i = 0; i < 16; i++) {
        arr[i] = Math.round(arr[i] * 100) / 100;
    }
    matrixHTML[0].innerHTML = arr[0];
    matrixHTML[1].innerHTML = arr[1];
    matrixHTML[2].innerHTML = arr[2];
    matrixHTML[3].innerHTML = arr[3];
    matrixHTML[4].innerHTML = arr[4];
    matrixHTML[5].innerHTML = arr[5];
    matrixHTML[6].innerHTML = arr[6];
    matrixHTML[7].innerHTML = arr[7];
    matrixHTML[8].innerHTML = arr[8];
    matrixHTML[9].innerHTML = arr[9];
    matrixHTML[10].innerHTML = arr[10];
    matrixHTML[11].innerHTML = arr[11];
    matrixHTML[12].innerHTML = arr[12];
    matrixHTML[13].innerHTML = arr[13];
    matrixHTML[14].innerHTML = arr[14];
    matrixHTML[15].innerHTML = arr[15];
}



function update() {

}
