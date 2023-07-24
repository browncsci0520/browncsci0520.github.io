
import * as AFFINE from "./affine-transform-demo/main.js"
import * as PROJ from "./projective-geometry-demo/main.js"
import * as PERS from "./perspective-projection-demo/main.js"


/* affine transform demo triggers */
const resetAffineButton = document.getElementById("reset-eg-matrices-button");
const affineAnimateButton = document.getElementById('animate-button');
const affineFullTransformButton = document.getElementById('full-transform-button');
const affineCanvasButton = document.getElementById("show-initial-diagram-button");
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


/* first state */

AFFINE.start();
// $("#hide-matrices-button").css("display", "inline");
PROJ.reset();
PERS.reset();
let $input = $('#affine-transform-demo-input');
$('#affine-transform-demo-input-start').html($input);
// AFFINE.hideMatricesButton.style.display = "none";
resetAffineButton.onclick = AFFINE.resetInput;
affineCanvasButton.onclick = function(){
    AFFINE.reshow();
    PROJ.reset();
    PERS.reset();
    AFFINE.start();
    PROJ.reset();
    PERS.reset();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-start').html($input);
}
/* second state */

affineAnimateButton.onclick = function() {
    AFFINE.reshow();
    AFFINE.animate();
    PROJ.reset();
    PERS.reset();
    let $input = $('#affine-transform-demo-input');
    //AFFINE.hideMatricesButton.style.display = "block";
    $('#affine-transform-demo-input-animate').html($input);
    $("#show-initial-diagram-button").css("display", "block");
    $('#shear-2d-cross-section-canvas-wrapper').css("display", "block");
};

/* third state */

affineFullTransformButton.onclick = function() {
    AFFINE.reshow();
    AFFINE.fullTransform();
    PROJ.reset();
    PERS.reset();
    let $input = $('#affine-transform-demo-input');
    $('#affine-transform-demo-input-full-transform').html($input);
    // AFFINE.hideMatricesButton.style.display = "none";
    $("#show-initial-diagram-button").css("display", "block");
    $('#shear-2d-cross-section-canvas-wrapper').css("display", "block");

    // AFFINE.canvas3DWrapper.style.display = "block";

    $("#affine-matrix-wrapper").css("display", "block");

    $(".affine-demo-matrix-elements").css("grid-template", "repeat(3, 1fr) / repeat(3, auto)");
    $(".elem-3d").css("display", "block");

    $('#shear-3d-sliders').css("display", "inline-block");
};

/* fourth state */
projStartButton.onclick = function() {
    PROJ.reset();
    PROJ.start();
    PERS.reset();
    AFFINE.reset();
    // $(".demo-sliders").css("display", "block");
     /* The line above will cause very bad alignment issues */
    $('#affine-transform-demo-hide').html($('#affine-transform-demo-input'));
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-start').html($input);
    // AFFINE.hideMatricesButton.style.display = "block";
    // $('#projective-geometry-demo-input-start').css("display", "block");


    /* The following ensures that the diagram/animation on the right will not be cleared
    if the student returns to click this button after having clicked later buttons */
    PROJ.demo.style.display = "block";
    PROJ.canvas.style.display = "block";
    PROJ.affine1DSliderWrapper.style.display = "block";
    PROJ.canvasLineWrapper.style.display = "block";
    PROJ.projectiveLineScene.style.display = "block";
    PROJ.projectiveLineStart.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
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
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
}

/* sixth state */
projLineButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.lineState();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-line').html($input);
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
}

/* seventh state */
projPlaneButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.startPlane();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-plane').html($input);
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
}

/* eighth state */
projFrameButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.startFrame();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-frame').html($input);
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
}


/* ninth state */
projTransButton.onclick = function() {
    AFFINE.reset();
    PERS.reset();
    PROJ.startTranslation();
    let $input = $('#projective-geometry-demo-input');
    $('#projective-geometry-demo-input-translate').html($input);
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
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
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
}

persObliqueButton.onclick = function() {
    AFFINE.reset();
    PROJ.reset();
    PERS.oblique();
    let $input = $('#perspective-projection-demo-input');
    $('#perspective-projection-demo-oblique').html($input);
    // AFFINE.hideMatricesButton.style.display = "block";
    $("#show-initial-diagram-button").css("display", "block");
}

