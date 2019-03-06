$(document).ready(function() {


  var scroll = $(document).height();
  // console.log(scroll);

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
  $("#octopus").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    $("#info-octopus").show();
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

            if (meters > 0 && meters < 1000) {
              $(".depth-text").text("100 M");
            } else if (meters >= 1000 && meters <= 2499) {
                $(".depth-text").text("500 M");
            } else if (meters >= 2500) {
                $(".depth-text").text("1000 M");
              }
            });






});
