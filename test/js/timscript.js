$(document).ready(function() {

    $(".nav").hide().fadeIn(2000);
    $("ul.subnav").hide();

   $("ul.nav li:has(.subnav)").hoverIntent(function() {
        $("ul.subnav", this).slideDown(500).show();
    }, function() {
        $("ul.subnav", this).delay(600).slideUp(500);
    });

  $( ".chair" ).click(function() {
    $(".chair,.x").show();
    $(".nav").hide();
  });
  
  $( ".connection" ).click(function() {
    $(".connection,.x").show();
    $(".nav").hide();
  });

  $(".x").click(function() {
    $("#chair,#connection,.x").hide();
    $(".nav").fadeIn(1000);
  });



});