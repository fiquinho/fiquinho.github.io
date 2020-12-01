$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 0,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10,
    auto: true
  });
});

$(".project-background").hide();
$(".viewProject").hide();
$(".technologies-used").hide();


function showInformation() {
    $(".viewProject").show();
    $(".technologies-used").show();
}


$("#open-online-coder").on("click", function(e) {
     window.open("http://ficobogado.com/OnlineCoder.html");
 });


$("#open-reaction-tester").on("click", function(e) {
     window.open("http://ficobogado.com/reaction-tester.html");
 });

 
$("#open-tf-random-uniform").on("click", function(e) {
     window.open("http://ficobogado.com/tf.random_uniform.html");
 });

$("#open-servicio-tecnico-INDIV").on("click", function(e) {
     window.open("http://ficobogado.com/servicio_tecnico_INDIV/listado-puesta-en-marcha.html");
 });

$(".portfolio-section-image").mouseenter(function() {
    $(".project-background").show( "blind", 250, showInformation);
});


$(".portfolio-section-image").mouseleave(function() {
    $(".project-background").stop(true, true);
    $(".project-background").hide();
    $(".viewProject").hide();
    $(".technologies-used").hide();
});




