var slider = document.getElementById('rotation-slider');
var output = document.getElementById('value');
var max = document.getElementById('rotation-slider').max;

output.innerHTML = slider.value;
// slider.oninput = function(){
//     output.innerHTML = this.value;
// }


slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 
    "linear-gradient(90deg, rgb(122, 158, 237)" + 100*(x/max) + "%, rgb(214, 214, 214)" + 100*(x/max) + "%";
    slider.style.background = color;
})