
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
const resetSubspacesButton = document.getElementById("reset-subspaces-button");
const resetFrameButton = document.getElementById("reset-frame-button");
const reset2DTransButton = document.getElementById("reset-2D-translation-button");

const projStartButton = document.getElementById('proj-start-button');
const projSubspaceButton = document.getElementById('proj-subspace-button');
const projLineButton = document.getElementById('proj-line-button');
const projPlaneButton = document.getElementById('proj-plane-button');
const projFrameButton = document.getElementById('proj-frame-button');
const projTransButton = document.getElementById('proj-translation-button');

/* perspective projection demo triggers */
const persStartButton = document.getElementById('pers-start-button');
const persObliqueButton = document.getElementById('pers-oblique-button');


// hideMatricesButton.onclick = function(){
//     if (hideMatricesButton.innerText == "Hide Matrices"){
//         hideMatricesButton.innerText = "Show Matrices";
//         $("#rotation-matrix-wrapper").css("display", "none");
//         $("#reflection-matrix-wrapper").css("display", "none");
//         $("#scaling-matrix-wrapper").css("display", "none");
//         $("#shear-matrix-wrapper").css("display", "none");
//         $(".big").css("display", "none");
//         $("#model-matrix-wrapper").css("display", "none");

//         $('#shear-2d-sliders').css("display", "none");
//         $('#rotation-sliders').css("display", "none");
//         $('#scaling-sliders').css("display", "none");
//         $('#reflect-sliders').css("display", "none");
//     }
//     else{
//         hideMatricesButton.innerText = "Hide Matrices";
//         // AFFINE.start();
//         $("#rotation-matrix-wrapper").css("display", "block");
//         $("#reflection-matrix-wrapper").css("display", "block");
//         $("#scaling-matrix-wrapper").css("display", "block");
//         $("#shear-matrix-wrapper").css("display", "block");
//         $(".big").css("display", "block");
//         $("#affine-x").css("display", "none");
//         $("#model-matrix-wrapper").css("display", "block");

//         $('#shear-2d-sliders').css("display", "block");
//         $('#rotation-sliders').css("display", "block");
//         $('#scaling-sliders').css("display", "block");
//         $('#reflect-sliders').css("display", "block");
//     }
// }
/* first state */

AFFINE.start();
// $("#hide-matrices-button").css("display", "inline");
PROJ.reset();
PERS.reset();
let $input = $('#affine-transform-demo-input');
$('#affine-transform-demo-input-start').html($input);
resetAffineButton.onclick = AFFINE.resetInput;
/* second state */

affineAnimateButton.onclick = function() {
    AFFINE.animate();
    PROJ.reset();
    PERS.reset();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-animate').html($input);
};

/* third state */

affineFullTransformButton.onclick = function() {
    AFFINE.fullTransform();
    PROJ.reset();
    PERS.reset();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-full-transform').html($input);
};

/* fourth state */
projStartButton.onclick = function() {
    PROJ.start();
    PERS.reset();
    AFFINE.reset();
    $('#affine-transform-demo-hide').html($('#affine-transform-demo-input'));
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-start').html($input);
}
reset1DTransButton.onclick = PROJ.resetInput;
resetLambdaButton.onclick = PROJ.resetLambda;
resetSubspacesButton.onclick = PROJ.resetSubspaces;
resetFrameButton.onclick = PROJ.resetFrame;
reset2DTransButton.onclick = PROJ.resetTrans;

/* fifth state */
projSubspaceButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.subspaceState();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-subspace').html($input);
}

/* sixth state */
projLineButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.lineState();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-line').html($input);
}

/* seventh state */
projPlaneButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.startPlane();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-plane').html($input);
}

/* eighth state */
projFrameButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.startFrame();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-frame').html($input);
}

/* ninth state */
projTransButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
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
    AFFINE.reset();
    PROJ.reset();
    PERS.start();
    $('#projective-geometry-demo-hide').html($('#projective-geometry-demo-input'));
    let $input = $('#perspective-projection-demo-input');
    $('#perspective-projection-demo-start').html($input);
}

persObliqueButton.onclick = function() {
    AFFINE.reset();
    PROJ.reset();
    PERS.oblique();
    let $input = $('#perspective-projection-demo-input');
    $('#perspective-projection-demo-oblique').html($input);
}

