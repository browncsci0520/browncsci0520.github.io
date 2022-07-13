

import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";

export function Grid(scene, {x, y, z}) {

    const size = 200;
    const divisions = 16;
    
    const grid = new THREE.GridHelper( size, divisions );
    grid.material.opacity = 0.05;

    if (x == 1) {
        grid.rotateX( Math.PI / 2 );
    }
    if (y == 1) {
        grid.rotateY( Math.PI / 2 );
    }
    if (z == 1) {
        grid.rotateZ( Math.PI / 2 );
    }

    scene.add( grid );


    this.update = function(){}
}

