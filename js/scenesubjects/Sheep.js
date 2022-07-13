import * as THREE from 'three';
import { DoubleSide } from 'three';

export function Sheep(scene, 
                      rotMatrixHTML,
                      refMatrixHTML,
                      scaleMatrixHTML,
                      shearMatrixHTML) {

    let rotMatrix = buildMatrix(rotMatrixHTML);
    let refMatrix = buildMatrix(refMatrixHTML);
    let scaleMatrix = buildMatrix(scaleMatrixHTML);
    let shearMatrix = buildMatrix(shearMatrixHTML);
    let matrix = rotMatrix
                 .multiply(refMatrix)
                 .multiply(scaleMatrix)
                 .multiply(scaleMatrix)
                 .multiply(shearMatrix);

    
    const geometry = new THREE.PlaneGeometry( 25, 25, 5, 5 );
    const material = new THREE.MeshBasicMaterial({
        color: 0x80ee10, side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh( geometry, material );
    
    mesh.geometry.applyMatrix4(rotMatrix);

    scene.add(mesh)

    applyTransformation(
        rotMatrixHTML,
        refMatrixHTML,
        scaleMatrixHTML,
        shearMatrixHTML
    );



    function applyTransformation(rotMatrixHTML,
                                 refMatrixHTML,
                                 scaleMatrixHTML,
                                 shearMatrixHTML) {
        mesh.geometry.applyMatrix4( matrix.invert() );
        rotMatrix = buildMatrix( rotMatrixHTML );
        refMatrix = buildMatrix( refMatrixHTML );
        scaleMatrix = buildMatrix( scaleMatrixHTML );
        shearMatrix = buildMatrix( shearMatrixHTML );
        matrix = rotMatrix
                 .multiply(refMatrix)
                 .multiply(scaleMatrix)
                 .multiply(scaleMatrix)
                 .multiply(shearMatrix);
        mesh.geometry.applyMatrix4( matrix );
    }

    function buildMatrix(matrixHTML) {

        let ret = new THREE.Matrix4();

        let arr = []
        for (let i = 0; i < 4; i++) {
            arr[i] = matrixHTML[i].innerHTML;
        }

        ret.set (arr[0], arr[2], 0,       0,
                 arr[1], arr[3], 0,       0,
                 0,      0,      1,       0,
                 0,      0,      0,       1 );
        
        return ret;
    }

    this.update = function(time,
                           rotMatrixHTML,
                           refMatrixHTML,
                           scaleMatrixHTML,
                           shearMatrixHTML) { 
        applyTransformation(
            rotMatrixHTML,
            refMatrixHTML,
            scaleMatrixHTML,
            shearMatrixHTML
        );
    }
}