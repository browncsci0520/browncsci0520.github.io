import { OrthographicProjectionScene } from "./orthographic-projection.js";


const canvasOrtho = document.getElementById('orthographic-projection-canvas');
const canvasScreen = document.getElementById('screen-canvas');
const demo = document.getElementById('perspective-projection-demo');


const orthographicProjectionScene = new OrthographicProjectionScene(canvasOrtho, canvasScreen);

const pauseButton = document.getElementById('stop-rotation-button');
const realignButton = document.getElementById('realign-camera-button');
const resetRotationButton = document.getElementById('reset-rotation-button');

const obliqueAngleSlider = document.getElementById('oblique-angle-slider');
var obliqueAngleOutput = document.getElementById("oblique-angle-val");
var obliqueAngleMax = document.getElementById("oblique-angle-slider").max;

const obliqueMatrixWrapper = document.getElementById('oblique-matrix-wrapper');
const obliqueMatrix = document.getElementById('oblique-matrix').getElementsByTagName('span');;


bindEventListeners();
render();

export function reset() {
    demo.style.display = "none";
}

export function start() {
    demo.style.display = "block";
    orthographicProjectionScene.start();
    obliqueMatrixWrapper.style.display = "none";
    obliqueAngleSlider.style.display = "none";
    $('.demo-sliders').css("display", "none");
}

export function oblique() {
    obliqueMatrixWrapper.style.display = "block";
    obliqueAngleSlider.style.display = "block";
    $('.demo-sliders').css("display", "block");

}
obliqueAngleOutput.innerHTML = " Move slider below to change \alpha\: " + (obliqueAngleSlider.value/  Math.PI).toFixed(2);
function bindEventListeners() {

    pauseButton.onclick = function() {
        orthographicProjectionScene.pause();
    }

    realignButton.onclick = function() {
        orthographicProjectionScene.realign();
    }

    resetRotationButton.onclick = function() {
        orthographicProjectionScene.resetRotation();
    }

    obliqueAngleSlider.oninput = function() {
        orthographicProjectionScene.oblique(obliqueAngleSlider.value);
        let cos = Math.cos(obliqueAngleSlider.value / 2);
        let sin = Math.sin(obliqueAngleSlider.value / 2);
        obliqueMatrix[8].innerHTML = Math.round(cos * 100) / 100;
        obliqueMatrix[9].innerHTML = Math.round(sin * 100) / 100;
        obliqueAngleOutput.innerHTML = " Move slider below to change \alpha\: " + (obliqueAngleSlider.value/  Math.PI).toFixed(2);
    }
    obliqueAngleSlider.addEventListener("mousemove", function(){
        var x = obliqueAngleSlider.value;
        var result = 100*(x/obliqueAngleMax);
        var color = 
        "linear-gradient(90deg, rgb(122, 158, 237)" + result + "%, rgb(214, 214, 214)" + result + "%";
        obliqueAngleSlider.style.background = color;
    })
}

function render() {
    requestAnimationFrame(render);
    orthographicProjectionScene.render();
}

