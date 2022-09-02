


import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { Subspace } from '../assets/subspace.js';
import { Dot } from '../assets/dot.js';


export function ProjectivePlaneScene(canvas) {

    /* local letiables */
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const controls = new OrbitControls(camera, renderer.domElement);
    let translate = false;

    let plane = buildPlane(12.5);
    scene.add(plane);

    let frame = 12.5
    let A = 0;
    let B = 0;

    let URDot = buildDot(0x0000ff, {
        x: 5, y: 5, z: 12.5
    })

    let BRDot = buildDot(0x0000ff, {
        x: 5, y: -5, z: 12.5
    })

    let ULDot = buildDot(0x0000ff, {
        x: -5, y: 5, z: 12.5
    })

    let BLDot = buildDot(0x0000ff, {
        x: -5, y: -5, z: 12.5
    })



    /* private functions */
    let subspaces = buildSubspaces(scene, 20);
    let dots = buildDots(scene);

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

    this.applyTransform = function(matrix) {
        A = matrix.clone().elements[8];
        B = matrix.clone().elements[9];

        for (let i = 0; i < subspaces.length; i++) {
            subspaces[i].applyTransform(matrix.clone());
        }
        buildSquare();
    }

    function buildSquare() {
        let lambda = frame / 12.5;
        scene.remove(ULDot);
        scene.remove(BLDot);
        scene.remove(URDot);
        scene.remove(BRDot);
       URDot = buildDot(0x0000ff, {
            x: lambda * (5 + A * 12.5), y: lambda * (5 + B * 12.5), z: lambda * 12.5
        })
    
        BRDot = buildDot(0x0000ff, {
            x: lambda * (5 + A * 12.5), y: lambda * (-5 + B * 12.5), z: lambda * 12.5
        })
    
        ULDot = buildDot(0x0000ff, {
            x: lambda * (-5 + A * 12.5), y: lambda * (5 + B * 12.5), z: lambda * 12.5
        })
    
        BLDot = buildDot(0x0000ff, {
            x: lambda * (-5 + A * 12.5), y: lambda * (-5 + B * 12.5), z: lambda * 12.5
        })
        scene.add(ULDot);
        scene.add(BLDot);
        scene.add(URDot);
        scene.add(BRDot); 
    
    }

    function buildSubspaces(scene, n) {
        let subspaces = []
        
        const goldenRatio = (1 + 5**0.5)/2
        for(let i = 0; i < n; i++){
            let theta = 2 *3.14159 * i / goldenRatio
            let phi = Math.acos(1 - 2*(i+0.5)/n)
            subspaces.push(new Subspace(scene, {
                x: Math.cos(theta) * Math.sin(phi), 
                y: Math.sin(theta) * Math.sin(phi), 
                z: Math.cos(phi)
            }))

		}
        return subspaces;
    }

    function buildDots(scene) {
        let dots = []
        for (let i = 0; i < subspaces.length; i++) {
            dots.push(new Dot(scene, 0x0000ff,{ x: (subspaces[i].posX * frame) / (subspaces[i].posZ) , y: (subspaces[i].posY * frame) / (subspaces[i].posZ) , z: frame }))
        }
        return dots;
    }

    function buildDot(c, {x, y, z}) {
        const geometry = new THREE.SphereGeometry( 1, 32, 16 );
        const material = new THREE.MeshBasicMaterial( { color: c } );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.set(x, y, z);
        return mesh;
    }

    function clearSubspaces() {
        for (let i = 0; i < subspaces.length; i++) {
            scene.remove(subspaces[i].destroy(scene));
        }
    }

    function clearDots() {
        for (let i = 0; i < dots.length; i++) {
            dots[i].destroy(scene);
        }
    }

    function buildPlane(offset) {
        const geometry = new THREE.PlaneGeometry( 500, 500 );
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


    /* public functions */

    this.moveFrame = function(frameOffset) {
        if (!translate) {
            scene.remove(plane);
            plane = buildPlane(frameOffset);
            frame = frameOffset;
            clearDots();
            dots = buildDots(scene);
            scene.add(plane);
        } else {
            frame = frameOffset;
            scene.remove(plane);
            plane = buildPlane(frameOffset);
            scene.add(plane);
            buildSquare();
            console.log(frameOffset);
          

        }
    }

    this.startAnimation = function() {
        this.moveFrame(12.5);
        translate = true;
        clearSubspaces();
        clearDots();

        scene.add(ULDot);
        scene.add(BLDot);
        scene.add(URDot);
        scene.add(BRDot);

        subspaces.push(new Subspace(scene, {
            x: 5, y: 5, z: frame
        }))
        subspaces.push(new Subspace(scene, {
            x: -5, y: 5, z: frame
        }))
        subspaces.push(new Subspace(scene, {
            x: 5, y: -5, z: frame
        }))
        subspaces.push(new Subspace(scene, {
            x: -5, y: -5, z: frame
        }))
    }


    this.resetSubspaces = function(numSubspaces) {
        clearSubspaces();
        clearDots();
        subspaces = buildSubspaces(scene, numSubspaces);
        dots = buildDots(scene);

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