import * as THREE from "https://unpkg.com/three@0.138.0/build/three.module.js";

export function ShearSheep(scene, matrixHTML) {

    let shearMatrix = buildShearMatrix(matrixHTML);

    const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
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

    mesh.geometry.applyMatrix4(shearMatrix);

    scene.add(mesh)


    function applyShear(matrixHTML) {
        mesh.geometry.applyMatrix4( shearMatrix.invert() );
        shearMatrix = buildShearMatrix(matrixHTML);
        mesh.geometry.applyMatrix4( shearMatrix );
    }

    function buildShearMatrix(matrixHTML) {

        let ret = new THREE.Matrix4();

        let arr = []
        for (let i = 0; i < 9; i++) {
            arr[i] = matrixHTML[i].innerHTML;
        }

        ret.set (arr[0], arr[3], arr[6],  0,
                 arr[1], arr[4], arr[7],  0,
                 arr[2], arr[5], arr[8],  0,
                 0,      0,      0,       1 );
        
        return ret;
    }

    this.update = function(time, matrixHTML) {
        applyShear(matrixHTML);
    }
}