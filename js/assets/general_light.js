
/*
This function creates a light at position (x, y, z) and with provided brightness in the given scene
*/
export function GeneralLight(scene, {x, y, z}, brightness) {
    
    const dirLight = new THREE.DirectionalLight( 0x55505a, brightness );
    dirLight.position.set( x, y, z );
    dirLight.castShadow = true;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 10;

    dirLight.shadow.camera.right = 1;
    dirLight.shadow.camera.left = - 1;
    dirLight.shadow.camera.top	= 1;
    dirLight.shadow.camera.bottom = - 1;

    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add( dirLight );
    this.update = function(){}
}