
/* 
The function creates the wireframe for the cube in Projection and Perspective
*/
export function CubeWireframe(scene) {

    let transform = new THREE.Matrix4();

    const material = new THREE.LineBasicMaterial({
        color: 0x0000ff
    });    

    const points = [];

    /* top face */
    points.push( new THREE.Vector3( 5, 5, -5 ) );
    points.push( new THREE.Vector3( -5, 5, -5 ) );

    points.push( new THREE.Vector3( -5, 5, -5 ) );
    points.push( new THREE.Vector3( -5, 5, 5 ) );

    points.push( new THREE.Vector3( -5, 5, 5 ) );
    points.push( new THREE.Vector3( 5, 5, 5 ) );

    points.push( new THREE.Vector3( 5, 5, 5 ) );
    points.push( new THREE.Vector3( 5, 5, -5 ) );

    /* bottom face */
    points.push( new THREE.Vector3( 5, -5, -5 ) );
    points.push( new THREE.Vector3( -5, -5, -5 ) );

    points.push( new THREE.Vector3( -5, -5, -5 ) );
    points.push( new THREE.Vector3( -5, -5, 5 ) );

    points.push( new THREE.Vector3( -5, -5, 5 ) );
    points.push( new THREE.Vector3( 5, -5, 5 ) );

    points.push( new THREE.Vector3( 5, -5, 5 ) );
    points.push( new THREE.Vector3( 5, -5, -5 ) );

    /* bridges */
    points.push( new THREE.Vector3( 5, 5, -5 ) );
    points.push( new THREE.Vector3( 5, -5, -5 ) );

    points.push( new THREE.Vector3( -5, 5, -5 ) );
    points.push( new THREE.Vector3( -5, -5, -5 ) );

    points.push( new THREE.Vector3( 5, 5, 5 ) );
    points.push( new THREE.Vector3( 5, -5, 5 ) );

    points.push( new THREE.Vector3( -5, 5, 5 ) );
    points.push( new THREE.Vector3( -5, -5, 5 ) );


    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const mesh = new THREE.LineSegments( geometry, material );

    return mesh;


    let update = function(){}
} 