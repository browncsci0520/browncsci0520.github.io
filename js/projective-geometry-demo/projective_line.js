
import { Subspace } from '../assets/subspace.js';
import { Dot } from '../assets/dot.js';

import { GridBasis } from '../assets/grid_basis.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';

export function ProjectiveLineScene(canvas) {

    /* local letiables */
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);

    const controls = new OrbitControls(camera, renderer.domElement);

    let transform = new THREE.Matrix4();

    let line = buildLine(0);
    scene.add( line );

    let blueDot = buildDot(0x0000ff);
    scene.add( blueDot );


    let greenDot = buildDot(0xff0000);

    let p = buildSubspace(scene, {x: 0, y: 1, z: 0 });
    let grid = new GridBasis(scene, 0);

    let frame = 12.5;

   // let grid = Grid(scene, {x: 1, y: 0, z: 0});

    let subspaces = null;
    let dots = null;


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
        let subspaces = []
        let angle = (2 * Math.PI)/n;
		let i=0;
		for(let a = 0; a<(2*Math.PI); a+=angle){
			i++;
            subspaces.push(new Subspace(scene, {x: Math.cos(a), y: Math.sin(a), z: 0}),)
		}
        return subspaces;
    }

    function buildDots(scene, subspacez) {
        let dots = []
        for (let i = 0; i < subspacez.length; i++) {
            dots.push(new Dot(scene, 0x0000ff,{ x: (subspacez[i].posX) * frame / (subspacez[i].posY) , y: frame, z: 0 }));
            console.log()
        }
        return dots;
    }

    function buildSubspace(scene, {x, y, z}) {
        const bigNum = 10000;

        const material = new THREE.LineBasicMaterial({
            color: 0xff0000
        });
            
        const points = [];
        points.push( new THREE.Vector3( bigNum * x, bigNum * y, 0.1 ) );
        points.push( new THREE.Vector3( -bigNum * x, -bigNum * y, 0.1 ) );
    
        
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        
        const line = new THREE.Line( geometry, material );
        scene.add( line );
        return line;
    }

    function clearSubspaces() {
        for (let i = 0; i < subspaces.length; i++) {
            subspaces[i].destroy(scene);
        }
    }

    function clearDots() {
        for (let i = 0; i < dots.length; i++) {
            dots[i].destroy(scene);
        }
    }

    function buildLine(offset) {
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00963e
        });
        
        const linePoints = [];
        linePoints.push( new THREE.Vector3( -100, offset, 0.1 ) );
        linePoints.push( new THREE.Vector3(100, offset, 0.1 ) );
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints( linePoints );
        
        const line = new THREE.Line( lineGeometry, lineMaterial );
        return line;
    }

    function buildDot(c) {
        const geometry = new THREE.CircleGeometry( 1, 32 );
        const material = new THREE.MeshBasicMaterial( { color: c } );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.set(0, 0, 0);
        return mesh;
    }

    /* public functions */

    this.applyTransform = function(matrix) {
        let A = matrix.clone().elements[4];
        blueDot.position.x = A * 12.5;
        p.geometry.applyMatrix4(transform.invert());
        transform = matrix;
        p.geometry.applyMatrix4(transform);

        console.log(matrix);

       
    }

    this.start = function() {
        let offset = {y: 0};
        let targetOffset = {y: 12.5};
        let moveLine = new TWEEN.Tween(offset).to(targetOffset, 1000);
        moveLine.delay(1000);
        moveLine.onUpdate(function() {
            line.position.y = offset.y;
            blueDot.position.y = offset.y;
        });
        moveLine.start();
    }

    this.subspaceState = function() {
        scene.add(greenDot);
    }

    this.lineState = function() {
        scene.remove(p);
        scene.remove(blueDot);
        scene.remove(greenDot);
        subspaces = buildSubspaces(scene, 20);
        dots = buildDots(scene, subspaces);
    }

    this.moveGreenDot = function(lambda) {
        greenDot.position.x = lambda * blueDot.position.x;
        greenDot.position.y = lambda * blueDot.position.y;
    }

    this.moveFrame = function(frameOffset) {
        scene.remove(line);
        line = buildLine(frameOffset);
        frame = frameOffset;
        clearDots();
        dots = buildDots(scene, subspaces);
        scene.add(line);
    }

    this.resetSubspaces = function(numSubspaces) {
        clearSubspaces();
        clearDots();
        subspaces = buildSubspaces(scene, numSubspaces);
        dots = buildDots(scene, subspaces);
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