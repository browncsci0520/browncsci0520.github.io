


import * as THREE from "three";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

import { Grid } from '../grid.js';
import { Subspace } from '../subspace.js';

export function ProjectivePlaneScene(canvas) {

    /* local variables */
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);
    const controls = new OrbitControls(camera, renderer.domElement);


    var plane = buildPlane(25);
    scene.add(plane);

    /* private functions */
    var subspaces = buildSubspaces(scene, 20);

    function buildScene() {

        const scene = new THREE.Scene();
        scene.background = null;

        return scene;
    }

    function buildRenderer({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            antialias: true,
            alpha: true
        });
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fov = 60;
        const nearPlane = 1;
        const farPlane = 1000;
        const camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane)

        camera.position.set(-50, 0, 0);
        camera.lookAt(0, 0, 0);
        camera.rotation.y =  -Math.PI / 2;
        
        return camera;
    }

    function buildSubspaces(scene, n) {
        var subspaces = []
        
        const goldenRatio = (1 + 5**0.5)/2
        for(var i = 0; i < n; i++){
            var theta = 2 *3.14159 * i / goldenRatio
            var phi = Math.acos(1 - 2*(i+0.5)/n)
            subspaces.push(new Subspace(scene, {
                x: Math.cos(theta) * Math.sin(phi), 
                y: Math.sin(theta) * Math.sin(phi), 
                z: Math.cos(phi)
            }))

		}
        return subspaces;
    }

    function clearSubspaces() {
        for (var i = 0; i < subspaces.length; i++) {
            scene.remove(subspaces[i].destroy(scene));
        }
    }

    function buildPlane(offset) {
        const geometry = new THREE.PlaneGeometry( 50, 50 );
        const material = new THREE.MeshBasicMaterial({
            color: 0x0000ff, 
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5
        });
        const plane = new THREE.Mesh( geometry, material );
        plane.position.set(0, 0, offset);
        return plane;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new Grid(scene, {x: 0, y: 1, z: 0}),

        ];

        return sceneSubjects;
    }

    /* public functions */

    this.moveFrame = function(frameOffset) {
        scene.remove(plane);
        plane = buildPlane(frameOffset);
        scene.add(plane);
    }

    this.resetSubspaces = function(numSubspaces) {
        clearSubspaces();
        subspaces = buildSubspaces(scene, numSubspaces);
    }

    this.render = function() {
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