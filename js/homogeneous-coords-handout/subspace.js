import * as THREE from "three";

export function Subspace(scene, {x, y, z}) {

    const bigNum = 10000;

    const material = new THREE.LineBasicMaterial({
        color: 0xff0000
    });
    
    const points = [];
    points.push( new THREE.Vector3( bigNum * x, bigNum * y, bigNum * z ) );
    points.push( new THREE.Vector3( -bigNum * x, -bigNum * y, -bigNum * z ) );

    
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const line = new THREE.Line( geometry, material );
    scene.add( line );

    this.destroy = function(scene){
        scene.remove(line);
    }

    this.update = function(){}
} 