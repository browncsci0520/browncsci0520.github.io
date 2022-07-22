
import * as THREE from "three";
import { Grid } from '../grid.js';
import { Subspace } from '../subspace.js';

export function ProjectiveLineScene(canvas) {

    /* local variables */
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    var line = buildLine(25);
    scene.add( line );

    var subspaces = buildSubspaces(scene, 20);


    /* private functions */

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

        camera.position.set(0, 0, 50);
        return camera;
    }

    function buildSubspaces(scene, n) {
        var subspaces = []
        var angle = (2 * Math.PI)/n;
		var i=0;
		for(var a = 0; a<(2*Math.PI); a+=angle){
			i++;
            subspaces.push(new Subspace(scene, {x: Math.cos(a), y: Math.sin(a), z: 0}),)
		}
        return subspaces;
    }

    function clearSubspaces() {
        for (var i = 0; i < subspaces.length; i++) {
            scene.remove(subspaces[i].destroy(scene));
        }
    }

    function buildLine(offset) {
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x0000ff
        });
        
        const linePoints = [];
        linePoints.push( new THREE.Vector3( offset, -100, 0 ) );
        linePoints.push( new THREE.Vector3( offset, 100, 0 ) );
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints( linePoints );
        
        const line = new THREE.Line( lineGeometry, lineMaterial );
        return line;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new Grid(scene, {x: 1, y: 0, z: 0}),
        ];
        return sceneSubjects
    }

    /* public functions */

    this.moveFrame = function(frameOffset) {
        scene.remove(line);
        line = buildLine(frameOffset);
        scene.add(line);
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