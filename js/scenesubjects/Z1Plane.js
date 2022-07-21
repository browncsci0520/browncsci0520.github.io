import * as THREE from "three";

export function Z1Plane(scene) {

    const geometry = new THREE.PlaneGeometry( 50, 100 );
    geometry.rotateZ( - Math.PI / 2 );
    const material = new THREE.MeshPhongMaterial({
        color: 0xf12f20, 
        side: THREE.DoubleSide, 
        opacity: 0.5
    });
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(0, 0, 9.8);
    scene.add( mesh );

    this.update = function(){}
} 