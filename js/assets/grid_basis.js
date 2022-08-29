

export function GridBasis(scene, z) {

    const size = 2000;
    const divisions = 160;
    
    let transform = new THREE.Matrix4();

    let pointsH = [];
    let pointsV = [];

    let lowest = -(size / 2);
    let highest = size / 2;
    for (let i = 0; i < size / 2; i++) {
        pointsH.push(new THREE.Vector3(lowest, lowest + i * (size / divisions), z)); // start
        pointsH.push(new THREE.Vector3(highest, lowest + i * (size / divisions), z)); // end

        pointsV.push(new THREE.Vector3(lowest + i * (size / divisions), lowest, z)); // start
        pointsV.push(new THREE.Vector3(lowest + i * (size / divisions), highest, z)); // end
    }

    const material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });


    
    const points = pointsH.concat(pointsV);
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const mesh = new THREE.LineSegments( geometry, material );

    scene.add( mesh );

    this.applyTransform = function(matrix){
        mesh.geometry.applyMatrix4(transform.invert());
        transform = matrix;
        mesh.geometry.applyMatrix4(transform);
    }

    this.rotateX = function(theta) {
        mesh.geometry.rotateX(theta);
    }

    this.rotateZ = function(theta) {
        mesh.geometry.rotateZ(theta);
    }

    this.rotateY = function(theta) {
        mesh.geometry.rotateY(theta);
    }

    this.setDepth = function(depth) {
        mesh.position.z = depth;
    }
}

