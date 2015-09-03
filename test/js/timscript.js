$(document).ready(function() {

    $(".nav,.arrow").hide().fadeIn(2000);
    $("ul.subnav").hide();

   $("ul.nav li:has(.subnav)").hoverIntent(function() {
        $("ul.subnav", this).slideDown(500).show();
    }, function() {
        $("ul.subnav", this).delay(600).slideUp(500);
    });

  $( ".chair" ).click(function() {
    $(".chair,.x").show();
    $(".nav,.arrow").hide();
  });
  
  $( ".connection" ).click(function() {
    $(".connection,.x").show();
    $(".nav,.arrow").hide();
  });

  $( ".about" ).click(function() {
    $("#aboutme,.x").show();
    $(".nav,.arrow").hide();
  });

  $(".x").click(function() {
    $("#chair,#connection,#aboutme,.x").hide();
    $(".nav,.arrow").fadeIn(1000);
  });



});