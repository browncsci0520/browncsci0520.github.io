import * as THREE from "three";

export function Sheep(scene) {



    
    const geometry = new THREE.PlaneGeometry( 25, 25, 5, 5 );
    const material = new THREE.MeshBasicMaterial({
        color: 0x80ee10, side: THREE.DoubleSide
    });
    var mesh = new THREE.Mesh( geometry, material );
    
    scene.add(mesh)

    this.update = function(matrix) { 
        mesh.geometry.applyMatrix4(matrix);
    }
}