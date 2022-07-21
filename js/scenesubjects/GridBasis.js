import * as THREE from "three";
import { Vector3 } from "three";

export function GridBasis(scene, {x, y, z}) {

    const size = 200;
    const divisions = 16;
    
    let pointsH = [];
    let pointsV = [];

    let lowest = -(size / 2);
    let highest = size / 2;
    for (let i = 0; i < size / divisions; i++) {
        pointsH.push(new Vector3(lowest, lowest + i * divisions, 0)); // start
        pointsH.push(new Vector3(highest, lowest + i * divisions, 0)); // end

        pointsV.push(new Vector3(lowest + i * divisions, lowest, 0)); // start
        pointsV.push(new Vector3(lowest + i * divisions, highest, 0)); // end
    }

    const material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });


    
    const points = pointsH.concat(pointsV);
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const grid = new THREE.LineSegments( geometry, material );

    scene.add( grid );

    this.update = function(matrix){
        grid.geometry.applyMatrix4(matrix);
    }
}

