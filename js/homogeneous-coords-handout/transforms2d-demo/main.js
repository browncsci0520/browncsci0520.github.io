import * as THREE from "three";

import { Transforms2DScene } from './transforms2d.js'

const canvas = document.getElementById('transforms-2d-canvas');
const rotMatrixHTML = document.getElementById('rotation-2d-matrix').getElementsByClassName('limit-dp');
const refMatrixHTML = document.getElementById('reflection-2d-matrix').getElementsByClassName('limit-dp');
const scaleMatrixHTML = document.getElementById('scaling-2d-matrix').getElementsByClassName('limit-dp');
const shearMatrixHTML = document.getElementById('shear-2d-matrix').getElementsByClassName('limit-dp');

const rotSlider =  document.getElementById('rotation-2d-slider');
const shearXSlider =  document.getElementById('shearX-2d-slider');
const shearYSlider =  document.getElementById('shearY-2d-slider');
const scaleXSlider = document.getElementById('scaling-x-2d-slider');
const scaleYSlider = document.getElementById('scaling-y-2d-slider');

let matrix = new THREE.Matrix4();

const transforms2DScene = new Transforms2DScene(canvas);

bindEventListeners();
render();

function bindEventListeners() {
    rotSlider.oninput = function() {
        rotMatrixHTML[0].innerHTML = Math.cos(rotSlider.value);
        rotMatrixHTML[1].innerHTML = Math.sin(rotSlider.value);
        rotMatrixHTML[2].innerHTML = -Math.sin(rotSlider.value);
        rotMatrixHTML[3].innerHTML = Math.cos(rotSlider.value);
        updateMatrix();
        transforms2DScene.applyTransform(matrix);
    };

    shearXSlider.oninput = function() {
        shearMatrixHTML[2].innerHTML = shearXSlider.value;
        updateMatrix();
        transforms2DScene.applyTransform(matrix.clone());
    };
    
    shearYSlider.oninput = function() {
        shearMatrixHTML[1].innerHTML = shearYSlider.value;
        updateMatrix();
        transforms2DScene.applyTransform(matrix.clone());
    };

    scaleXSlider.oninput = function() {
        scaleMatrixHTML[0].innerHTML = scaleXSlider.value;
        updateMatrix();
        transforms2DScene.applyTransform(matrix.clone());
    }

    scaleYSlider.oninput = function() {
        scaleMatrixHTML[3].innerHTML = scaleYSlider.value;
        updateMatrix();
        transforms2DScene.applyTransform(matrix.clone());
    }
}

function render() {
    requestAnimationFrame(render);
    transforms2DScene.render();
}

function updateMatrix() {
        let rotMatrix = buildMatrix( rotMatrixHTML );
        let refMatrix = buildMatrix( refMatrixHTML );
        let scaleMatrix = buildMatrix( scaleMatrixHTML );
        let shearMatrix = buildMatrix( shearMatrixHTML );
        matrix = rotMatrix
        .multiply(refMatrix)
        .multiply(scaleMatrix)
        .multiply(scaleMatrix)
        .multiply(shearMatrix);
}


function buildMatrix(matrixHTML) {

    let ret = new THREE.Matrix4();

    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr[i] = matrixHTML[i].innerHTML;
    }

    ret.set (arr[0], arr[2], 0,       0,
             arr[1], arr[3], 0,       0,
             0,      0,      1,       0,
             0,      0,      0,       1 );

    return ret;
}