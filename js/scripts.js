




$(document).ready(function() {
  var scroll = $(document).height();

  $("#big-eye-tuna").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-tuna").show();
  });
  $("#jellyfish").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-jellyfish").show();
  });
  $("#sea-turtle").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-sea-turtle").show();
  });
  $("#octopus").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-octopus").show();
  });
  $("#puffer").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-puffer").show();
  });
  $("#razorfish").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-razorfish").show();
  });
  $("#angler-fish").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-angler-fish").show();
  });
  $("#great-white").click(function(){
    $(".info-card").children().hide();
    $(".info-card").fadeIn(600);
    $("#info-great-white").show();
  });
  $(".info-card-container").click(function() {
    $(".info-card").fadeOut(800);
  });

  // init controller
  var controller = new ScrollMagic.Controller();
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: scroll })
  .addTo(controller)
  .on("progress", function (e) {
    var meters = (e.progress.toFixed(3) * 3688).toFixed(0);

    if ( meters > 2900 ) {
      $(".depth-text").text("3000 m");
    } else if ( meters > 2500 ) {
      $(".depth-text").text("2500 m");
    } else if ( meters > 2100 ) {
      $(".depth-text").text("2000 m");
    } else if ( meters > 1700 ) {
      $(".depth-text").text("1500 m");
    } else if ( meters > 1400 ) {
      $(".depth-text").text("1000 m");
    } else if ( meters > 1000 ) {
      $(".depth-text").text("500 m");
    } else {
      $(".depth-text").text("100 m");
    }
  });



  $( ".sea-creature").click( function(event) {
    $(".info-card-container").css( {position:"absolute", top:event.pageY, left: event.pageX});
  });

});
