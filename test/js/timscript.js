$(document).ready(function() {

      $('html').hide().fadeIn(2000);
      $(".up").hide();

      // Scroll to selected project //

      $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html,body').stop().animate({
            'scrollTop': $target.offset().top - 78
        }, 500, function () {
            window.location.hash = target;
        });
      });
    
      // Hide and show up-arrow and car //

      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('.up').fadeIn(300);
          $('.car,.Ltire,.Rtire').fadeOut(100);

        } else {
          $('.up').fadeOut(300);
          $('.car,.Ltire,.Rtire').fadeIn(500);
          $('.link').removeClass('selected');
        }
      });

      // Make project title bold when its top line is reached //

      $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
      if (windscroll >= 300) {
        $('.projectlist img.line').each(function(i) {
            if ($(this).position().top <= windscroll - 500) {
                $('.links a.selected').removeClass('selected');
                $('.links a').eq(i).addClass('selected');
            }
        });

      } else {
        $('.links a.selected').removeClass('selected');
      }

      });


      // Auto scroll back to top of page //
  
      $('.up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 900);
      });
      
      // Move selected project to top of list //
      
      //
      
      //$('ul.links a').on('click', function() {
       // $(this).parent().prepend(this);
      //});//


      // Make selected project bold //
      
      var selector = '.link';

      $(selector).on('click', function(){
      $(selector).removeClass('selected');
      $(this).addClass('selected');
      });


      // Move i3 // 

      $(document).on('mousemove', function(e){
        $('.car').css({
          left:  e.pageX,
          top: '38%'
        });
      });

      // Wheel Rotation //

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


      $('.resumelink').click(function() {
        $('.resume').slideToggle(400);
        $('.resumelink').text(function(i, text){
          return text === "Resume" ? "Close" : "Resume";
        })
      });
      
});