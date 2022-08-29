
export function Dot(scene, c, {x, y, z}) {
    const geometry = new THREE.SphereGeometry( 1, 32, 16 );
    const material = new THREE.MeshBasicMaterial( { color: c } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(x, y, z);
    scene.add(mesh);
    this.destroy = function() {
        geometry.dispose();
        material.dispose();
        scene.remove(mesh);
    }
} 