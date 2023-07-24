
import { Shear3DScene } from './shear3d.js'
import { Shear2DCrossSectionScene } from './shear2d_cross_section.js'
import { ModelMatrix } from "./model_matrix.js";

export const canvas3DWrapper = document.getElementById('shear-3d-canvas-wrapper');
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

export const shear3DScene = new Shear3DScene(canvas3D);
const shear2DCrossSectionScene = new Shear2DCrossSectionScene(canvas2D);
const modelMatrixScene = new ModelMatrix(canvas4D);

const shearYZSlider = document.getElementById("shear-yz-slider");
var shearYZOutput = document.getElementById("translateX-val");
var shearYZMax = document.getElementById("shear-yz-slider").max;
var shearYZMin = document.getElementById("shear-yz-slider").min;
const shearYXSlider = document.getElementById("shear-yx-slider");
var shearYXOutput = document.getElementById("translateY-val");
var shearYXMax = document.getElementById("shear-yx-slider").max;
var shearYXMin = document.getElementById("shear-yx-slider").min;
// need to switch x and y because the original effect seems to be more counterintuitive
const shearXSlider = document.getElementById("shear-x-slider"); 
var shearXOutput = document.getElementById("shearX-val");
var shearXMax = document.getElementById("shear-x-slider").max;
const shearYSlider = document.getElementById("shear-y-slider");
var shearYOutput = document.getElementById("shearY-val");
var shearYMax = document.getElementById("shear-y-slider").max;

const rotSlider = document.getElementById("rotation-slider");
var rotOutput = document.getElementById('rotate-val');
var rotMax = document.getElementById('rotation-slider').max;

const scaleXSlider = document.getElementById("scaling-x-slider");
var scaleXOutput = document.getElementById('scaleX-val');
var scaleXMax = document.getElementById('scaling-x-slider').max;
var scaleXMin = document.getElementById('scaling-x-slider').min;
const scaleYSlider = document.getElementById("scaling-y-slider");
var scaleYOutput = document.getElementById('scaleY-val');
var scaleYMax = document.getElementById('scaling-y-slider').max;
var scaleYMin = document.getElementById('scaling-y-slider').min;

const reflectXCheck = document.getElementById('reflect-x');
const reflectYCheck = document.getElementById('reflect-y');

// export const hideMatricesButton = document.getElementById("hide-matrices-button");



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
    shear2DCrossSectionScene.applyTransform(new THREE.Matrix4());
    // resetInput();
    
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

    $("#hide-matrices-button").css('display', "block");
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
rotOutput.innerHTML = "Rotation: " + (rotSlider.value);
scaleXOutput.innerHTML = "Scaling X: " + (scaleXSlider.value);
scaleYOutput.innerHTML = "Scaling Y: " + (scaleYSlider.value);
shearXOutput.innerHTML = "Shear X: " + (shearXSlider.value);
shearYOutput.innerHTML = "Shear Y: " + (shearYSlider.value);

export function reshow(){
    $('#shear-2d-cross-section-canvas-wrapper').css("display", "block");
    resetInput();
    $("#rotation-matrix-wrapper").css("display", "block");
    $("#reflection-matrix-wrapper").css("display", "block");
    $("#scaling-matrix-wrapper").css("display", "block");
    $("#shear-matrix-wrapper").css("display", "block");
    $(".big").css("display", "block");
    $("#affine-x").css("display", "none");
    $("#model-matrix-wrapper").css("display", "block");

    $('#shear-2d-sliders').css("display", "block");
    $('#rotation-sliders').css("display", "block");
    $('#scaling-sliders').css("display", "block");
    $('#reflect-sliders').css("display", "block");
}

function bindEventListeners() {
    // affineCanvasButton.onclick = function(){
    //     // demo.style.display = "block";
    //     // $("#affine-matrix-wrapper").css("display", "none");
    //     // $("#affine-x").css("display", "none");
    //     // $('#shear-3d-sliders').css("display", "none");
    //     // canvas2D.style.display = "block";
    //     $('#shear-2d-cross-section-canvas-wrapper').css("display", "block");
    // }
    /* Show and hide the "affine" (except translation) matrices*/
    // hideMatricesButton.onclick = function(){
    //     if (hideMatricesButton.innerText == "Hide rotation, reflection, scaling, shear matrices"){
    //         hideMatricesButton.innerText = "Show rotation, reflection, scaling, shear matrices";
    //         $("#rotation-matrix-wrapper").css("display", "none");
    //         $("#reflection-matrix-wrapper").css("display", "none");
    //         $("#scaling-matrix-wrapper").css("display", "none");
    //         $("#shear-matrix-wrapper").css("display", "none");
    //         $(".big").css("display", "none");
    //         $("#model-matrix-wrapper").css("display", "none");

    //         $('#shear-2d-sliders').css("display", "none");
    //         $('#rotation-sliders').css("display", "none");
    //         $('#scaling-sliders').css("display", "none");
    //         $('#reflect-sliders').css("display", "none");
    //     }
    //     else{
    //         resetInput();
    //         hideMatricesButton.innerText = "Hide rotation, reflection, scaling, shear matrices";
    //         $("#rotation-matrix-wrapper").css("display", "block");
    //         $("#reflection-matrix-wrapper").css("display", "block");
    //         $("#scaling-matrix-wrapper").css("display", "block");
    //         $("#shear-matrix-wrapper").css("display", "block");
    //         $(".big").css("display", "block");
    //         $("#affine-x").css("display", "none");
    //         $("#model-matrix-wrapper").css("display", "block");

    //         $('#shear-2d-sliders').css("display", "block");
    //         $('#rotation-sliders').css("display", "block");
    //         $('#scaling-sliders').css("display", "block");
    //         $('#reflect-sliders').css("display", "block");
    //     }
    //  }
    /* reflection along the x axis*/
    reflectXCheck.oninput = function() {
        refMatrixHTML[0].innerHTML = -1 * parseInt(refMatrixHTML[0].innerHTML);
        updateMatrix();
        update();
    }
    /* reflection along the y axis*/
    reflectYCheck.oninput = function() {
        refMatrixHTML[5].innerHTML = -1 * parseInt(refMatrixHTML[5].innerHTML);
        console.log(refMatrixHTML);
        updateMatrix();
        update();
    }
    /* rotation */
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
        
        rotOutput.innerHTML = "Rotation: " + (rotSlider.value /  Math.PI).toFixed(2);
    }
    rotSlider.addEventListener("mousemove", function(){
        var x = rotSlider.value;
        var result = 100*(x/rotMax);
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        rotSlider.style.background = color;
    })
    /* scaling along the x axis*/
    scaleXSlider.oninput = function() {
        scaleMatrixHTML[0].innerHTML = scaleXSlider.value;
        updateMatrix();
        update();

        scaleXOutput.innerHTML = "Scaling X: " + scaleXSlider.value;
    }
    scaleXSlider.addEventListener("mousemove", function(){
        var x = scaleXSlider.value;
        var result = (x - scaleXMin) / (scaleXMax - scaleXMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        scaleXSlider.style.background = color;
    })
    /* scaling along the y axis*/
    scaleYSlider.oninput = function() {
        scaleMatrixHTML[5].innerHTML = scaleYSlider.value;
        updateMatrix();
        update();
        scaleYOutput.innerHTML = "Scaling Y: " + scaleYSlider.value;
    }
    scaleYSlider.addEventListener("mousemove", function(){
        var x = scaleYSlider.value;
        var result = (x - scaleYMin) / (scaleYMax - scaleYMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        scaleYSlider.style.background = color;
    })
    /* shearing along the x axis*/
    shearXSlider.oninput = function() {
     
        shearMatrixHTML[4].innerHTML = shearXSlider.value;
        updateMatrix();
        update();
        shearXOutput.innerHTML = "Shear X: " + shearXSlider.value;
    };
    shearXSlider.addEventListener("mousemove", function(){
        var x = shearXSlider.value;
        var result = x / shearXMax * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        shearXSlider.style.background = color;
    })
    /* shearing along the y axis*/
    shearYSlider.oninput = function() {
        console.log(shearMatrixHTML[2].innerHTML);
        console.log("val: " + shearYSlider.value);
        shearMatrixHTML[1].innerHTML = shearYSlider.value;
        updateMatrix();
        update();
        shearYOutput.innerHTML = "Shear Y: " + shearYSlider.value;
    };
    shearYSlider.addEventListener("mousemove", function(){
        var x = shearYSlider.value;
        var result = x / shearYMax * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        shearYSlider.style.background = color;
    })
    /* shearing along the x axis*/
    shearYZSlider.oninput = function() {
        affineMatrixHTML[8].innerHTML = shearYZSlider.value;
        updateMatrix();
        update();
        shearYZOutput.innerHTML = "Translate X: " + shearYZSlider.value;
    };
    shearYZSlider.addEventListener("mousemove", function(){
        var x = shearYZSlider.value;
        var result = (x - shearYZMin) / (shearYZMax - shearYZMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        shearYZSlider.style.background = color;
    })
    /* shearing along the y axis*/
    shearYXSlider.oninput = function() {
        affineMatrixHTML[9].innerHTML = shearYXSlider.value;
        updateMatrix();
        update();
        shearYXOutput.innerHTML = "Translate Y: " + shearYXSlider.value;
    };
    shearYXSlider.addEventListener("mousemove", function(){
        var x = shearYXSlider.value;
        var result = (x - shearYXMin) / (shearYXMax - shearYXMin) * 100;
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        shearYXSlider.style.background = color;
    })
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

export function resetInput() {
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

    reflectXCheck.checked = false;
    reflectYCheck.checked = false;
    rotOutput.innerHTML = "Rotation: 0";
    scaleXOutput.innerHTML = "Scaling X: 1";
    scaleYOutput.innerHTML = "Scaling Y: 1";
    shearXOutput.innerHTML = "Shear X: 0";
    shearYOutput.innerHTML = "Shear Y: 0";
    shearYZOutput.innerHTML = "Translate X: 0";
    shearYXOutput.innerHTML = "Translate Y: 0";

    $('.slider').css("background", "linear-gradient(90deg, rgb(214, 214, 214) 60%, rgb(214, 214, 214) 60%");
    $('.slider-mid').css("background", "linear-gradient(90deg, rgb(122, 158, 237) 50%, rgb(214, 214, 214) 60%");
    $('.slider-20').css("background", "linear-gradient(90deg, rgb(122, 158, 237) 20%, rgb(214, 214, 214) 60%");

    updateMatrix();
    update();
}

function update() {
    shear2DCrossSectionScene.applyTransform(matrix.clone());
    shear3DScene.applyTransform(matrix.clone());
    modelMatrixScene.applyTransform(matrix.clone());
}

