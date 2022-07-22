import * as THREE from "three";

import { ProjectiveLineScene } from './projective_line.js'
import { ProjectivePlaneScene } from './projective_plane.js'

const projectiveLineCanvas = document.getElementById('projective-line-canvas');
const projectiveLineScene = new ProjectiveLineScene(projectiveLineCanvas);

const projectivePlaneCanvas = document.getElementById('projective-plane-canvas');
const projectivePlaneScene = new ProjectivePlaneScene(projectivePlaneCanvas);

const numSubspacesSlider = document.getElementById("num-subspaces-slider");
const projectiveFrameSlider = document.getElementById("projective-frame-slider");


bindEventListeners();
render();

function bindEventListeners() {

    numSubspacesSlider.oninput = function() {
        projectiveLineScene.resetSubspaces(numSubspacesSlider.value);
        projectivePlaneScene.resetSubspaces(numSubspacesSlider.value);
    }

    projectiveFrameSlider.oninput = function() {
        projectiveLineScene.moveFrame( projectiveFrameSlider.value);
        projectivePlaneScene.moveFrame( projectiveFrameSlider.value);
    }
}

function render() {
    requestAnimationFrame(render);
    projectivePlaneScene.render();
    projectiveLineScene.render();
}

function update() {

}
