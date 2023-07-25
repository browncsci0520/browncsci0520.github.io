

export function SubspaceHide(scene, {x, y, z}) {

    const bigNum = 100000;

    this.posX = x;
    this.posY = y;
    this.posZ = z;

    const material = new THREE.LineBasicMaterial({
        color: 0xff0000,
        opacity: 0,
        transparent: true,
    });

    let transform = new THREE.Matrix4();
    
    const points = [];
    points.push( new THREE.Vector3( bigNum * x, bigNum * y, bigNum * z ) );
    points.push( new THREE.Vector3( -bigNum * x, -bigNum * y, -bigNum * z ) );

    
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
    const line = new THREE.Line( geometry, material );
    scene.add( line );

    this.destroy = function(scene){
        geometry.dispose();
        material.dispose();
        scene.remove(line);
    }

    this.applyTransform = function(matrix) {
        line.geometry.applyMatrix4(transform.invert());
        transform = matrix;
        line.geometry.applyMatrix4(transform);
    }

    this.rotate = function(x, y, z) {
        line.rotation.x += x;
        line.rotation.y += y;
        line.rotation.z += z;
    }

    this.setRotation = function(x, y, z) {
        line.rotation.set(x, y, z);
    }

    this.getPosition = function() {
        const positionAttribute = geometry.getAttribute( 'position' );

        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute( positionAttribute, 0 );
        return line.localToWorld( vertex ).normalize();
    }

    let update = function(){}
} 