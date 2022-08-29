
import { Shear3DScene } from './shear3d.js'
import { Shear2DCrossSectionScene } from './shear2d_cross_section.js'
import { ModelMatrix } from "./model_matrix.js";
import { Matrix4 } from 'three';

const canvas3DWrapper = document.getElementById('shear-3d-canvas-wrapper');
const canvas3D = document.getElementById('shear-3d-canvas');
const canvas2D = document.getElementById('shear-2d-cross-section-canvas');
const canvas4DWrapper = document.getElementById('model-matrix-canvas-wrapper');
const canvas4D = document.getElementById('model-matrix-canvas');

const affine = document.getElementById('affine-matrix');
const demo = document.getElementById('affine-transform-demo');


canvas3DWrapper.style.display = "none";
canvas4DWrapper.style.display = "none";



const rotMatrixHTML = document.getElementById('rotation-2d-matrix').getElementsByTagName('span');
const refMatrixHTML = document.getElementById('reflection-2d-matrix').getElementsByTagName('span');
const scaleMatrixHTML = document.getElementById('scaling-2d-matrix').getElementsByTagName('span');
const shearMatrixHTML = document.getElementById('shear-2d-matrix').getElementsByTagName('span');
const affineMatrixHTML = affine.getElementsByTagName('span');
const modelMatrixHTML = document.getElementById('model-matrix').getElementsByTagName('span');

let matrix = new THREE.Matrix4();

const shear3DScene = new Shear3DScene(canvas3D);
const shear2DCrossSectionScene = new Shear2DCrossSectionScene(canvas2D);
const modelMatrixScene = new ModelMatrix(canvas4D);

const shearYXSlider = document.getElementById("shear-yx-slider");
const shearYZSlider = document.getElementById("shear-yz-slider");
const shearXSlider = document.getElementById("shear-x-slider");
const shearYSlider = document.getElementById("shear-y-slider");
const rotSlider = document.getElementById("rotation-slider");
const scaleXSlider = document.getElementById("scaling-x-slider");
const scaleYSlider = document.getElementById("scaling-y-slider");
const reflectXCheck = document.getElementById('reflect-x');
const reflectYCheck = document.getElementById('reflect-y');




bindEventListeners();
render();

export function start() {
    console.log("EEE");
    demo.style.display = "block";
    $("#affine-matrix-wrapper").css("display", "none");
    $("#affine-x").css("display", "none");
    $('#shear-3d-sliders').css("display", "none");
}

export function animate(){
    $(".affine-demo-matrix-elements").css("grid-template", "repeat(3, 1fr) / repeat(3, auto)");
    $(".elem-3d").css("display", "block");
    $("#affine-matrix-wrapper").css("display", "block");
    canvas3DWrapper.style.display = "block";
    shear3DScene.start();
    shear2DCrossSectionScene.applyTransform(new Matrix4());
    resetInput();

    $("#rotation-matrix-wrapper").css("display", "none");
    $("#reflection-matrix-wrapper").css("display", "none");
    $("#scaling-matrix-wrapper").css("display", "none");
    $("#shear-matrix-wrapper").css("display", "none");
    $(".big").css("display", "none");
    $("#model-matrix-wrapper").css("display", "none");

    $('#shear-3d-sliders').css("display", "inline-block");

    $('#shear-2d-sliders').css("display", "none");
    $('#rotation-sliders').css("display", "none");
    $('#scaling-sliders').css("display", "none");
    $('#reflect-sliders').css("display", "none");


}

export function fullTransform() {

    $("#rotation-matrix-wrapper").css("display", "block");
    $("#reflection-matrix-wrapper").css("display", "block");
    $("#scaling-matrix-wrapper").css("display", "block");
    $("#shear-matrix-wrapper").css("display", "block");
    $(".big").css("display", "block");
    $("#model-matrix-wrapper").css("display", "block");
    $("#affine-x").css("display", "block");


    $('#shear-2d-sliders').css("display", "inline-block");
    $('#rotation-sliders').css("display", "inline-block");

    $('#scaling-sliders').css("display", "inline-block");

    $('#reflect-sliders').css("display", "inline-block");


}

export function modelMatrix() {


    $(".affine-demo-matrix-elements").css("grid-template", "repeat(4, 1fr) / repeat(4, auto)");
    $(".elem-4d").css("display", "block");
   
    canvas4DWrapper.style.display = "block";
}

export function reset() {
    $('#shear-2d-cross-section-canvas-wrapper').css("display", "none");
    $('#shear-3d-canvas-wrapper').css("display", "none");
    

}

function bindEventListeners() {

    reflectXCheck.oninput = function() {
        refMatrixHTML[0].innerHTML = -1 * parseInt(refMatrixHTML[0].innerHTML);
        updateMatrix();
        update();
    }

    reflectYCheck.oninput = function() {
        refMatrixHTML[5].innerHTML = -1 * parseInt(refMatrixHTML[5].innerHTML);
        console.log(refMatrixHTML);
        updateMatrix();
        update();
    }

    rotSlider.oninput = function() {
        console.log(rotSlider.value);

        let cos = Math.cos(rotSlider.value);
        let sin = Math.sin(rotSlider.value);

        rotMatrixHTML[0].innerHTML = Math.round(cos * 100) / 100;
        rotMatrixHTML[1].innerHTML = Math.round(sin * 100) / 100;
        rotMatrixHTML[4].innerHTML = Math.round(-sin * 100) / 100;
        rotMatrixHTML[5].innerHTML = Math.round(cos * 100) / 100;

        updateMatrix();
        update();
    };

    scaleXSlider.oninput = function() {
        scaleMatrixHTML[0].innerHTML = scaleXSlider.value;
        updateMatrix();
        update();
    }

    scaleYSlider.oninput = function() {
        scaleMatrixHTML[5].innerHTML = scaleYSlider.value;
        updateMatrix();
        update();
    }

    shearXSlider.oninput = function() {
     
        shearMatrixHTML[1].innerHTML = shearXSlider.value;
        updateMatrix();
        update();
    };

    shearYSlider.oninput = function() {
        console.log(shearMatrixHTML[2].innerHTML);
        console.log("val: " + shearYSlider.value);
        shearMatrixHTML[4].innerHTML = shearYSlider.value;
        updateMatrix();
        update();
    };


    shearYXSlider.oninput = function() {
        affineMatrixHTML[9].innerHTML = shearYXSlider.value;
        updateMatrix();
        update();
    };

    shearYZSlider.oninput = function() {
        affineMatrixHTML[8].innerHTML = shearYZSlider.value;
        updateMatrix();
        update();
    };
}

function render() {
    requestAnimationFrame(render);
    shear3DScene.render();
    shear2DCrossSectionScene.render();
    modelMatrixScene.render();
}

function updateMatrix() {
    let rotMatrix = buildMatrix( rotMatrixHTML );
    let refMatrix = buildMatrix( refMatrixHTML );
    let scaleMatrix = buildMatrix( scaleMatrixHTML );
    let shearMatrix = buildMatrix( shearMatrixHTML );
    let affineMatrix = buildMatrix( affineMatrixHTML );
    matrix = rotMatrix
    .multiply(refMatrix)
    .multiply(scaleMatrix)
    .multiply(scaleMatrix)
    .multiply(shearMatrix)
    .multiply(affineMatrix);
    buildToHTML(matrix, modelMatrixHTML)
}

function buildMatrix(matrixHTML) {
    let ret = new THREE.Matrix4();

    let arr = []
    for (let i = 0; i < 16; i++) {
        arr[i] = Math.round(matrixHTML[i].innerHTML * 100) / 100;
    }

    ret.set (arr[0], arr[4], arr[8],  arr[12],
             arr[1], arr[5], arr[9],  arr[13],
             arr[2], arr[6], arr[10], arr[14],
             arr[3], arr[7], arr[11], arr[15]);
    
    return ret;
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

function makeIdentity(matrixHTML) {
    buildToHTML(new THREE.Matrix4(), matrixHTML);
}

function resetInput() {
    makeIdentity(rotMatrixHTML);
    makeIdentity(refMatrixHTML);
    makeIdentity(scaleMatrixHTML);
    makeIdentity(shearMatrixHTML);
    makeIdentity(affineMatrixHTML);
    shearYXSlider.value = 0;
    shearYZSlider.value = 0;
    shearXSlider.value = 0;
    shearYSlider.value = 0;
    rotSlider.value = 0;
    scaleXSlider.value = 0;
    scaleYSlider.value = 0;
    reflectXCheck.value = 0;
    reflectYCheck.value = 0;
}

function update() {
    shear2DCrossSectionScene.applyTransform(matrix.clone());
    shear3DScene.applyTransform(matrix.clone());
    modelMatrixScene.applyTransform(matrix.clone());
}

