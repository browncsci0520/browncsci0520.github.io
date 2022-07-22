import * as THREE from "three";

export function ShearSheep(scene, height) {

    let transform = new THREE.Matrix4();

    const geometry = new THREE.BoxGeometry( 10, height, 10);
    geometry.rotateX( - Math.PI / 2 );

    const material = new THREE.MeshPhongMaterial({
        color: 0x80ee10,
        shininess: 100,
        clippingPlanes: [
            new THREE.Plane( new THREE.Vector3( 0, 0, 1 ), -9.999)
        ],
        clipShadows: true
    })
    const mesh = new THREE.Mesh( geometry, material );

    scene.add(mesh)

    this.applyTransform = function(matrix) {
        mesh.geometry.applyMatrix4( transform.invert() );
        transform = matrix;
        mesh.geometry.applyMatrix4( transform );
    }
}