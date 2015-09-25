$(document).ready(function() {

    $(".nav,.links").hide().fadeIn(2000);
     $(".up").hide();


    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html,body').stop().animate({
            'scrollTop': $target.offset().top - 100
        }, 750, function () {
            window.location.hash = target;
        });
    });
    
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('.up').fadeIn(1000);
          $('.car,.Ltire,.Rtire').fadeOut(100);

        } else {
          $('.up').fadeOut(300);
          $('.car,.Ltire,.Rtire').fadeIn(100);
          $('.link').removeClass('selected');
        }
      });
  
      $('.up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 900);
        $('.link').removeClass('selected');
      });


      $('ul.links a').on('click', function() {
        $(this).parent().prepend(this);
      });

      var selector = '.link';

      $(selector).on('click', function(){
      $(selector).removeClass('selected');
      $(this).addClass('selected');
      });


      //i3// 

      $(document).on('mousemove', function(e){
        $('.car').css({
          left:  e.pageX,
          top: '38%'
        });
      });
      $(document).on('mousemove', function(e){
        $('.Ltire').show();
        $('.Ltire').css({
          left:  e.pageX-125,
          top: '39.5%',
          "-webkit-transform": 'rotateZ(' + e.pageX + 'deg)',
          transform: 'rotateZ(' + e.pageX + 'deg)'
        });
      });
      $(document).on('mousemove', function(e){
        $('.Rtire').show();
        $('.Rtire').css({
          left:  e.pageX+73,
          top: '39.5%',
          "-webkit-transform": 'rotateZ(' + e.pageX + 'deg)',
          transform: 'rotateZ(' + e.pageX + 'deg)'
        });
      });
      
});