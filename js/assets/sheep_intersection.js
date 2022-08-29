
export function SheepIntersection(scene) {

    let transform = new THREE.Matrix4();

    const material = new THREE.LineBasicMaterial({
        color: 0xff0000,
        depthTest: false
    });    

    const points = [];
    points.push( new THREE.Vector3( 5, 5, 0 ) );
    points.push( new THREE.Vector3( 5, -5, 0 ) );
    points.push( new THREE.Vector3( 5, 5, 0 ) );
    points.push( new THREE.Vector3( -5, 5, 0 ) );
    points.push( new THREE.Vector3( -5, -5, 0 ) );
    points.push( new THREE.Vector3( -5, 5, 0 ) );
    points.push( new THREE.Vector3( -5, -5, 0 ) );
    points.push( new THREE.Vector3( 5, -5, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const intersection = new THREE.Line( geometry, material );


    this.applyTransform = function(matrix) {
        intersection.geometry.applyMatrix4(transform.invert());
        transform = matrix;
        intersection.geometry.applyMatrix4(transform);
    }

    this.setDepth = function(depth) {
        intersection.position.z = depth;
    }
    
    scene.add(intersection);

    let update = function(){}
} 