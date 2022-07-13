
import * as THREE from 'three';

import DragControls from 'three-dragcontrols';
import { GeneralLight } from './scenesubjects/GeneralLight';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Grid } from './scenesubjects/Grid';

export function Perspective2DScene(canvas) {

    /* local variables */
    
    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const renderer = buildRenderer(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);
    //const controls = new OrbitControls(camera, renderer.domElement);


    /* raycast related */

    var geometry = new THREE.PlaneBufferGeometry(
        10, 10, 1, 1
    );
    geometry.translate(-60, 0, 0)
    var planeMesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        wireframe: false,
        color: "red"
    }));

 

    scene.add(planeMesh);

    var points = new THREE.Points(geometry, new THREE.PointsMaterial({
        size: 2,
        color: "black"
    }));
    scene.add(points);
    var vs = geometry.attributes.position.array;
    const linePoints = [
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( vs[0], vs[1], vs[2] ),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3( vs[3], vs[4], vs[5] ),
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( vs[6], vs[7], vs[8] ),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3( vs[9], vs[10], vs[11] ),
    ];
    var lineGeometry = new THREE.BufferGeometry().setFromPoints( linePoints );
    var line = new THREE.Line( lineGeometry, new THREE.LineBasicMaterial({color: "black"}) );
    scene.add(line);


    var raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 2;
    var mouse = new THREE.Vector2();
    var intersects = null;
    var plane = new THREE.Plane();
    var planeNormal = new THREE.Vector3();
    var currentIndex = null;
    var planePoint = new THREE.Vector3();
    var dragging = false;



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

        camera.position.set(-40, 0, 40);
        camera.lookAt(-40, 0, 0);

        return camera;
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLight(scene, {x: -20, y: -10, z: 20}, 6),
            new Grid(scene, {x: 1, y: 0, z: 0}),
        ];

        return sceneSubjects
    }

    function refreshLines() {
        scene.remove(line);
        var v = geometry.attributes.position.array;
        const linePoints = [
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( v[0], v[1], v[2] ),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3( v[3], v[4], v[5] ),
            new THREE.Vector3( 0, 0, 0 ),
            new THREE.Vector3( v[6], v[7], v[8] ),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3( v[9], v[10], v[11] ),
        ];
        lineGeometry = new THREE.BufferGeometry().setFromPoints( linePoints );
        line = new THREE.Line( lineGeometry, new THREE.LineBasicMaterial({color: "black"}) );
        scene.add(line);
    }

    function getIndex() {
        intersects = raycaster.intersectObject(points);
        if (intersects.length === 0) {
            currentIndex = null;
            return;
        }
        currentIndex = intersects[0].index;
        setPlane(intersects[0].point);
    }
      
    function setPlane(point) {
        planeNormal.subVectors(camera.position, point).normalize();
        plane.setFromNormalAndCoplanarPoint(planeNormal, point);
    }

    function setRaycaster(event) {
        getMouse(event);
        raycaster.setFromCamera(mouse, camera);
    }

      
    function getMouse(event) {
        var rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ( ( event.clientX - rect.left ) / ( rect.width - rect.left ) ) * 2 - 1;
        mouse.y = - ( ( event.clientY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
    }
      

    /* public functions */

    this.onMouseDown = function(event) {
        dragging = true;
        setRaycaster(event)
        getIndex();
    }

    this.onMouseUp = function(event) {
        dragging = false;
        currentIndex = null;
    }

    this.onMouseMove = function(event) {
        if (dragging && currentIndex !== null) {
            setRaycaster(event);
            raycaster.ray.intersectPlane(plane, planePoint);
            geometry.attributes.position.setXYZ(currentIndex, planePoint.x, planePoint.y, 0);
            geometry.attributes.position.needsUpdate = true;
        }
    }


    this.update = function() {
        const elapsedTime = clock.getElapsedTime();
        renderer.render(scene, camera);
        refreshLines();
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