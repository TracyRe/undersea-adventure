$(document).ready(function() {


  var scroll = $(document).height();
  console.log(scroll);

  $("#big-eye-tuna").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-tuna").show();
  });
  $("#jellyfish").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-jellyfish").show();
  });

  $("#sea-turtle").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-sea-turtle").show();
  });
  $("#octopus").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-octopus").show();
  });
  $("#puffer").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-puffer").show();
  });
  $("#razorfish").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-razorfish").show();
  });
  $("#great-white").click(function(){
    $(".info-card").children().hide()
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
  // .addIndicators() // add indicators (requires plugin)
  // .on("update", function (e) {
  // 	$("#scrollDirection").text(e.target.controller().info("scrollDirection"));
  // })
  // .on("enter leave", function (e) {
  // 	$("#state").text(e.type == "enter" ? "inside" : "outside");
  // })
  // .on("start end", function (e) {
  // 	$("#lastHit").text(e.type == "start" ? "top" : "bottom");
  // })
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

    console.log(meters, e.progress);

  });

  });


  // $(".depth-indicator").addClass("three-thousand");


  // $(".depth-indicator").addClass("twenty-five");


  // $(".depth-indicator").addClass("two-thousand");


  // $(".depth-indicator").addClass("fifteen-hundred");


  // $(".depth-indicator").addClass("thousand");


  // $(".depth-indicator").addClass("five-hundred");
