//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
//Cuando haga click en los controles que liste los items
$(".controls").on("click","li", function(){//en esta linea actualiza la lista de colores usando el metofo on.
    //deseleccionar items hermanos
    $(this).siblings().removeClass("selected");
    //Select clicked element
    $(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
    
});
//cuando hago click en new color
$("#revealColorSelect").click(function(){
    changeColor();
    //mostrar color seleccionado
    $("#colorSelect").toggle();
    ;
});

// actualizar el new color span
function changeColor(){
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color","rgb(" + r + "," + g +", " + b + ")");
}    

    
// Cuando cambia los sliders de color
$("input[type=range]").change(changeColor); 

   

// cuando "Add color" sea presionado
$("#addNewColor").click(function(){
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
   //append el color en los controles
    $(".controls ul").append($newColor);
    $newColor.click();
});
    
//dibujando en el canvas!!!! JS puro y duro!
$canvas.mousedown(function(e){
    lastEvent = e;
    mouseDown = true;
}).mousemove(function(e){
    if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
    }
}).mouseup(function(){
    mouseDown = false;
}).mouseleave(function(){
    $canvas.mouseup();
});



