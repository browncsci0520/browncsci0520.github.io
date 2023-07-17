
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
var numSubspacesOutput = document.getElementById("num-subspaces-val");
var numSubspacesMax = document.getElementById("num-subspaces-slider").max;
var numSubspacesMin = document.getElementById("num-subspaces-slider").min;

const projectiveFrameSlider = document.getElementById("projective-frame-slider");
var projectiveFrameOutput = document.getElementById("projective-frame-val");
var projectiveFrameMax = document.getElementById("projective-frame-slider").max;
var projectiveFrameMin = document.getElementById("projective-frame-slider").min;

const projectiveFrameSliderWrapper = document.getElementById('projective-frame-slider-wrapper');
const numSubspacesSliderWrapper = document.getElementById('num-subspaces-slider-wrapper');
const affine1DSliderWrapper = document.getElementById('affine-1d-slider-wrapper');
const affine2DSliderWrapper = document.getElementById('affine-2d-slider-wrapper');

const affineXSlider = document.getElementById('affine-x-slider');
var affineXOutput = document.getElementById("affineX-val");
var affineXMax = document.getElementById("affine-x-slider").max;
var affineXMin = document.getElementById("affine-x-slider").min
const affineZXSlider = document.getElementById('affine-zx-slider');
var affineZXOutput = document.getElementById("affineZX-val");
var affineZXMax = document.getElementById("affine-zx-slider").max;
var affineZXMin = document.getElementById("affine-zx-slider").min;
const affineZYSlider = document.getElementById('affine-zy-slider');
var affineZYOutput = document.getElementById("affineZY-val");
var affineZYMax = document.getElementById("affine-zy-slider").max;
var affineZYMin = document.getElementById("affine-zy-slider").min;
const projMatrices = document.getElementById('proj-matrices');

const subspaceEquivalence = document.getElementById('subspace-equivalence');
const lambdaSliderWrapper = document.getElementById('lambda-slider-wrapper');
const lambdaSlider = document.getElementById('lambda-slider');
var lambdaOutput = document.getElementById('lambda-val');
var lambdaMax = document.getElementById("lambda-slider").max;
var lambdaMin = document.getElementById("lambda-slider").min;


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
projectiveFrameOutput.innerHTML = "Projective Frame: z = " + projectiveFrameSlider.value;
function bindEventListeners() {
    /* Translate 1D point along the x axis */
    affineXSlider.oninput = function() {
        let v =  Math.round(affineXSlider.value * 100) / 100;
        matrix.set(1, v, 0, 0,
                   0, 1, 0, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        blueDotPos.innerHTML = v;
        greenDotPos.innerHTML = Math.round(lambdaSlider.value * affineXSlider.value * 100) / 100;
        projectiveLineScene.applyTransform(matrix.clone());
        buildToHTML(matrix, affineMatrixHTML);
        affineXOutput.innerHTML = "Translate X: " + affineXSlider.value
    }
    affineXSlider.addEventListener("mousemove", function(){
        var x = affineXSlider.value;
        var result = (x - affineXMin) / (affineXMax - affineXMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        affineXSlider.style.background = color;
    })
    /* Translate a 2D point along the x axis*/
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
        affineZXOutput.innerHTML = "Translate X: " + affineZXSlider.value;
    }
    affineZXSlider.addEventListener("mousemove", function(){
        var x = affineZXSlider.value;
        var result = (x - affineZXMin) / (affineZXMax - affineZXMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        affineZXSlider.style.background = color;
    })
    /* Translate a 2D point along the y axis */
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
        affineZYOutput.innerHTML = "Translate Y: " + affineZYSlider.value;
    }
    affineZYSlider.addEventListener("mousemove", function(){
        var x = affineZYSlider.value;
        var result = (x - affineZYMin) / (affineZYMax - affineZYMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        affineZYSlider.style.background = color;
    })
    /* Change the number of subspaces (Red lines) */
    numSubspacesSlider.oninput = function() {
        projectiveLineScene.resetSubspaces(numSubspacesSlider.value);
        projectivePlaneScene.resetSubspaces(numSubspacesSlider.value);
        numSubspacesOutput.innerHTML = "Number of subspaces shown: " + numSubspacesSlider.value;
    }
    numSubspacesSlider.addEventListener("mousemove", function(){
        var x = numSubspacesSlider.value;
        var result = (x - numSubspacesMin) / (numSubspacesMax - numSubspacesMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        numSubspacesSlider.style.background = color;
    })
    /* Changes the number of projective frames */
    projectiveFrameSlider.oninput = function() {
        projectiveLineScene.moveFrame( projectiveFrameSlider.value);
        projectivePlaneScene.moveFrame( projectiveFrameSlider.value);
        projectiveFrameOutput.innerHTML = "Projective Frame: z = " + projectiveFrameSlider.value;
    }
    projectiveFrameSlider.addEventListener("mousemove", function(){
        var x = projectiveFrameSlider.value;
        var result = (x - projectiveFrameMin) / (projectiveFrameMax - projectiveFrameMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        projectiveFrameSlider.style.background = color;
    })
    /* move the red dot in the subspace line in the homogeneous coordinates */
    lambdaSlider.oninput = function() {
        projectiveLineScene.moveGreenDot(lambdaSlider.value);
        lambdaDisplay[0].innerHTML = lambdaSlider.value;
        lambdaDisplay[1].innerHTML = lambdaSlider.value;
        greenDotPos.innerHTML =  Math.round(affineXSlider.value * lambdaSlider.value * 100) / 100;
        lambdaOutput.innerHTML = "lambda: " + lambdaSlider.value;
    }
    lambdaSlider.addEventListener("mousemove", function(){
        var x = lambdaSlider.value;
        var result = (x - lambdaMin) / (lambdaMax - lambdaMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        lambdaSlider.style.background = color;
    })
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
