$(document).ready(function() {
    // $(".info-card-container").show();

  $(".big-eye-tuna").click(function(){
    $(".info-card").children().hide()
    $(".info-card").fadeIn(600);
    // $(".info-card").removeClass("fade-out");
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



  // $(".info-card").click(function(){
  //   // $(".info-card").removeClass("fade-in");
  //   // $(".info-card-container").hide();
  // });

  $(".info-card-container").click(function() {
    $(".info-card").fadeOut(800);
    // $(".info-card").children().hide();
    // $(".info-card-container").children().removeClass("fade-in");
  });

});
