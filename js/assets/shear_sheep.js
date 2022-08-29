
export function ShearSheep(scene, height, depth_pos) {

    let transform = new THREE.Matrix4();
    let scaleMat = new THREE.Matrix4();

    const geometry = new THREE.BoxGeometry( 10, height, 10);
    geometry.rotateX( - Math.PI / 2 );
    geometry.translate(0, 0, depth_pos);

    const material = new THREE.MeshPhongMaterial({
        color: 0x80ee10,
        shininess: 100,
        clippingPlanes: [
            new THREE.Plane( new THREE.Vector3( 0, 0, 1 ), -9.999)
        ],
        clipShadows: true,
        side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh( geometry, material );

    scene.add(mesh);

    this.scaleHeight = function(h) {
        mesh.geometry.applyMatrix4(scaleMat.invert());
        scaleMat.set (1, 0, 0, 0,
                        0, 1, 0, 0,
                        0, 0, h, 0,
                        0, 0, 0, 1);
        mesh.geometry.applyMatrix4(scaleMat);
    }

    this.setPos = function(z) {
        mesh.position.z = z;
    }

    this.applyTransform = function(matrix) {
        mesh.geometry.applyMatrix4( transform.invert() );
        transform = matrix;
        mesh.geometry.applyMatrix4( transform );
    }
}