import * as THREE from "three";

export function Sheep(scene) {
    
    const geometry = new THREE.PlaneGeometry( 12.5, 12.5, 5, 5 );
    const material = new THREE.MeshPhongMaterial({
        color: 0x80ee10,
        shininess: 100,
        side: THREE.DoubleSide, 
        clipShadows: true
    });
    const mesh = new THREE.Mesh( geometry, material );
    let transform = new THREE.Matrix4();
    
    scene.add(mesh)

    this.applyTransform = function(matrix){
        mesh.geometry.applyMatrix4(transform.invert());
        transform = matrix;
        mesh.geometry.applyMatrix4(transform);
    }
}