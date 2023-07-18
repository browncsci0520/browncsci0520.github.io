
import * as AFFINE from "./affine-transform-demo/main.js"
import * as PROJ from "./projective-geometry-demo/main.js"
import * as PERS from "./perspective-projection-demo/main.js"


/* affine transform demo triggers */
const resetAffineButton = document.getElementById("reset-eg-matrices-button");
const affineAnimateButton = document.getElementById('animate-button');
const affineFullTransformButton = document.getElementById('full-transform-button');
//const affineModelMatrixButton = document.getElementById('affine-model-matrix-button');

/* projective geometry demo triggers */
const reset1DTransButton = document.getElementById("reset-1D-translation-button");
const resetLambdaButton = document.getElementById("reset-lambda-button");

const projStartButton = document.getElementById('proj-start-button');
const projSubspaceButton = document.getElementById('proj-subspace-button');
const projLineButton = document.getElementById('proj-line-button');
const projPlaneButton = document.getElementById('proj-plane-button');
const projFrameButton = document.getElementById('proj-frame-button');
const projTransButton = document.getElementById('proj-translation-button');

/* perspective projection demo triggers */
const persStartButton = document.getElementById('pers-start-button');
const persObliqueButton = document.getElementById('pers-oblique-button');



/* first state */

AFFINE.start();
let $input = $('#affine-transform-demo-input');
$('#affine-transform-demo-input-start').html($input);
resetAffineButton.onclick = AFFINE.resetInput;

/* second state */

affineAnimateButton.onclick = function() {
    AFFINE.animate();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-animate').html($input);
};

/* third state */

affineFullTransformButton.onclick = function() {
    AFFINE.fullTransform();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-full-transform').html($input);
};

/* fourth state */
projStartButton.onclick = function() {
    PROJ.start();
    AFFINE.reset();
    $('#affine-transform-demo-hide').html($('#affine-transform-demo-input'));
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-start').html($input);
}
reset1DTransButton.onclick = PROJ.resetInput;
resetLambdaButton.onclick = PROJ.resetLambda;

/* fifth state */
projSubspaceButton.onclick = function() {
    PROJ.subspaceState();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-subspace').html($input);
}

/* sixth state */
projLineButton.onclick = function() {
    PROJ.lineState();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-line').html($input);
}

/* seventh state */
projPlaneButton.onclick = function() {
    PROJ.startPlane();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-plane').html($input);
}

/* eighth state */
projFrameButton.onclick = function() {
    PROJ.startFrame();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-frame').html($input);
}

/* ninth state */
projTransButton.onclick = function() {
    PROJ.startTranslation();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-translate').html($input);
}

/*

affineModelMatrixButton.onclick = function() {
    AFFINE.modelMatrix();
    PROJ.reset();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-model-matrix').html($input);
}
*/


persStartButton.onclick = function() {
    PROJ.reset();
    PERS.start();
    $('#projective-geometry-demo-hide').html($('#projective-geometry-demo-input'));
    let $input = $('#perspective-projection-demo-input');
    $('#perspective-projection-demo-start').html($input);
}

persObliqueButton.onclick = function() {
    PERS.oblique();
    let $input = $('#perspective-projection-demo-input');
    $('#perspective-projection-demo-oblique').html($input);
}

