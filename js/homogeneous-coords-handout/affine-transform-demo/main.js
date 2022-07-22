import * as THREE from "three";

import { Shear3DScene } from './shear3d.js'
import { Shear2DCrossSectionScene } from './shear2d_cross_section.js'

const canvas3D = document.getElementById('shear-3d-canvas');
const canvas2D = document.getElementById('shear-2d-cross-section-canvas');

const matrices2D = document.getElementById('matrices-2d');
const matrices3D = document.getElementById('matrices-3d');
const affine = document.getElementById('affine-matrix');
const otherTransformSliders = document.getElementById('other-transform-sliders');
const affineTransformSliders = document.getElementById('affine-transform-sliders');


matrices3D.style.display = "none";
affine.style.display = "none";
affineTransformSliders.style.display = "none";
canvas3D.style.display = "none";


const rotMatrix2DHTML = document.getElementById('rotation-2d-matrix').getElementsByTagName('td');
const refMatrix2DHTML = document.getElementById('reflection-2d-matrix').getElementsByTagName('td');
const scaleMatrix2DHTML = document.getElementById('scaling-2d-matrix').getElementsByTagName('td');
const shearMatrix2DHTML = document.getElementById('shear-2d-matrix').getElementsByTagName('td');

const rotMatrix3DHTML = document.getElementById('rotation-3d-matrix').getElementsByTagName('td');
const refMatrix3DHTML = document.getElementById('reflection-3d-matrix').getElementsByTagName('td');
const scaleMatrix3DHTML = document.getElementById('scaling-3d-matrix').getElementsByTagName('td');
const shearMatrix3DHTML = document.getElementById('shear-3d-matrix').getElementsByTagName('td');
const affineMatrix3DHTML = affine.getElementsByTagName('td');

const rotMatrixHTML = rotMatrix3DHTML;
const refMatrixHTML = refMatrix3DHTML;
const scaleMatrixHTML = scaleMatrix3DHTML;
const shearMatrixHTML = shearMatrix3DHTML;
const affineMatrixHTML = affineMatrix3DHTML;



let matrix = new THREE.Matrix4();

const shear3DScene = new Shear3DScene(canvas3D);
const shear2DCrossSectionScene = new Shear2DCrossSectionScene(canvas2D);

const shearYXSlider = document.getElementById("shear-yx-3d-slider");
const shearYZSlider = document.getElementById("shear-yz-3d-slider");
const shearXSlider = document.getElementById("shear-x-3d-slider");
const shearYSlider = document.getElementById("shear-y-3d-slider");
const rotSlider = document.getElementById("rotation-3d-slider");
const scaleXSlider = document.getElementById("scaling-x-3d-slider");
const scaleYSlider = document.getElementById("scaling-y-3d-slider");

const animateButton = document.getElementById('animate-button');
const fullTransformButton = document.getElementById('full-transform-button');
const resetButton = document.getElementById('reset-button');


bindEventListeners();
render();

function bindEventListeners() {

    animateButton.onclick = function() {
        if (affine.style.display === "none") {
            affine.style.display = "block";
            matrices2D.style.display = "none";
            affineTransformSliders.style.display = "block";
            otherTransformSliders.style.display = "none";
            canvas3D.style.display = "block";  /* this will be an animation! */
        } else {
            affine.style.display = "none";
            matrices2D.style.display = "block";
            affineTransformSliders.style.display = "none";
            otherTransformSliders.style.display = "block";
            canvas3D.style.display = "none";
        }
    }

    fullTransformButton.onclick = function() {
        if (matrices3D.style.display === "none") {
            matrices3D.style.display = "block";
            otherTransformSliders.style.display = "block";
            rotMatrixHTML = rotMatrix3DHTML;
            refMatrixHTML = refMatrix3DHTML;
            scaleMatrixHTML = scaleMatrix3DHTML;
            shearMatrixHTML = shearMatrix3DHTML;
            affineMatrixHTML = affineMatrix3DHTML;
        } else {
            matrices3D.style.display = "none";
            otherTransformSliders.style.display = "none";
            rotMatrixHTML = rotMatrix2DHTML;
            refMatrixHTML = refMatrix2DHTML;
            scaleMatrixHTML = scaleMatrix2DHTML;
            shearMatrixHTML = shearMatrix2DHTML;
        }
    }

    resetButton.onclick = function() {
        canvas3D.style.display = "none";
        matrices3D.style.display = "none";
        affine.style.display = "none";
        affineTransformSliders.style.display = "none";
        matrices2D.style.display = "block";
        otherTransformSliders.style.display = "block";
    }

    rotSlider.oninput = function() {
        console.log(rotSlider.value);
        rotMatrix3DHTML[0].innerHTML = Math.cos(rotSlider.value);
        rotMatrix3DHTML[3].innerHTML = Math.sin(rotSlider.value);
        rotMatrix3DHTML[1].innerHTML = -Math.sin(rotSlider.value);
        rotMatrix3DHTML[4].innerHTML = Math.cos(rotSlider.value);

        rotMatrix2DHTML[0].innerHTML = Math.cos(rotSlider.value);
        rotMatrix2DHTML[2].innerHTML = Math.sin(rotSlider.value);
        rotMatrix2DHTML[1].innerHTML = -Math.sin(rotSlider.value);
        rotMatrix2DHTML[3].innerHTML = Math.cos(rotSlider.value);

        updateMatrix();
        update();
    };

    scaleXSlider.oninput = function() {
        scaleMatrix3DHTML[0].innerHTML = scaleXSlider.value;
        scaleMatrix2DHTML[0].innerHTML = scaleXSlider.value;
        updateMatrix();
        update();
    }

    scaleYSlider.oninput = function() {
        scaleMatrix3DHTML[0].innerHTML = scaleYSlider.value;
        scaleMatrix2DHTML[0].innerHTML = scaleYSlider.value;
        updateMatrix();
        update();
    }

    shearXSlider.oninput = function() {
        shearMatrix3DHTML[1].innerHTML = shearXSlider.value;
        shearMatrix2DHTML[1].innerHTML = shearXSlider.value;
        updateMatrix();
        update();
    };

    shearYSlider.oninput = function() {
        shearMatrix3DHTML[3].innerHTML = shearYSlider.value;
        shearMatrix2DHTML[2].innerHTML = shearYSlider.value;
        updateMatrix();
        update();
    };


    shearYXSlider.oninput = function() {
        affineMatrixHTML[2].innerHTML = shearYXSlider.value;
        updateMatrix();
        update();
    };

    shearYZSlider.oninput = function() {
        affineMatrixHTML[5].innerHTML = shearYZSlider.value;
        updateMatrix();
        update();
    };
}

function render() {
    requestAnimationFrame(render);
    shear3DScene.render();
    shear2DCrossSectionScene.render();
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
}

function buildMatrix(matrixHTML) {
    let ret = new THREE.Matrix4();

    let arr = []
    for (let i = 0; i < 9; i++) {
        arr[i] = matrixHTML[i].innerHTML;
    }

    ret.set (arr[0], arr[1], arr[2],  0,
             arr[3], arr[4], arr[5],  0,
             arr[6], arr[7], arr[8],  0,
             0,      0,      0,       1 );
    
    return ret;
}

function update() {
    shear2DCrossSectionScene.applyTransform(matrix.clone());
    shear3DScene.applyTransform(matrix.clone());
}

