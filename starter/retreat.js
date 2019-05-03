$(document).ready(function(){


Prismic.Api('https://startertest.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $(".arch");
      var bodys = $("body");
      var table = $("table");
      var colors = [];

      for (var i = 0; i < results.length; i++) {

        color = results[i].getColor("project.color");
        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asText();
        image = results[i].getStructuredText("project.content").asHtml();
        sign = results[i].getStructuredText("project.sign").asText();

        colors.push(color);

        var targ = $("<p class='mover'></p>");
				var row = $("<div class='row'></div>");
        var titleD = $("<div class='title'></div>");
        var imageD = $("<div class='images'></div>");
        var signD = $("<div class='sign'></div>");
        var numberD = $("<td class='number' style='display:none'></td>");

        titleD.append(title);
        imageD.append(image);
        numberD.append(number);
        signD.append(sign);

        row.append(titleD,imageD,numberD,signD);
        body.append(row);

      }


      var targSpace = $("<div class='moverS'></div>");

      $(targSpace).appendTo(".arch");

      $(".load").hide();

      var $divs = $(".row");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo(".arch");


      $(".title").clone().appendTo(".moverS");

      var all = $(".arch img").length;
      var random = Math.floor(Math.random()*all);
      $(".arch img").eq(0).clone().addClass("latest").appendTo(".arch");


      $(".row:first > .images > .block-img:first > img").hide();

     







			if ($(window).width()>750) {



                  var $window = $(window),
                    
                      $stick = $('.row:first');
                      elTop = $stick.offset().top;

                     


                      $window.scroll(function() {
                        $(".moverS > .title").toggleClass('sticky', $window.scrollTop() > elTop)
                        $(".moverS").toggleClass('background', $window.scrollTop() > elTop);

                  
                    });


              




                    // $(".row > .materials > p > a").each(function(){
                    //   // var hello = $("<img class='arrow' src='arrow.svg'>");
                    //   $(this).not(".l > .materials > p > a ").append("&nbsp;&nearr;");
                    // });

                    $(".moverS > .title").click(function(){
                      $(".moverS > .title").not(this).css("color","rgba(255, 255, 255, .45)");

                      var self = $(this);
                      
                      setTimeout(function(){
                        $(self).css({"color":"rgba(255, 255, 255, 1)"});
                      },500);

                      var num = $(this).index();
                      var dis = $(".moverS").height();
                      var half = $(window).outerHeight()/2;
                      console.log(num);
                      var target = $(".row").eq(num);
                      var yup = $(target).offset();
                      var hello = $(yup).top;
                      console.log(yup);


                        $("html,body").animate({scrollTop: (yup.top-dis)-30},1000);

                    });



            
                    $(window).scroll(function(){

                      var image = $("img").offset();
                      var top = image.top;
                      console.log(top);

                      $(".moverS").css("top","-15vh");

                     clearTimeout($.data(this, 'scrollTimer'));
                      $.data(this, 'scrollTimer', setTimeout(function() {
                        $(".moverS").css("top","0vh");
                      // do something
                      console.log("Haven't scrolled in 250ms!");
                      }, 100));


                      if ($(window).scrollTop() > 500) {
                        $(".tim").css({"width":"4.5%","padding-top":".65%"});
                      } else {
                        $(".tim").css({"width":"9vw","padding-top":"0%"});
                        $(".moverS > .title").css("color","rgba(255, 255, 255, 1)");
                      }

                    });

                  


                  // $(".arch img").click(function(){
                  //   console.log("hello");
                  //   if ($(this).height() > 200) {
                  //     console.log("hellno");
                  //     $(this).not(".latest").css({"height" : "23vh",
                  //     "width" : "auto","margin-right":"3vw"});
                  //   } else {
                  //     $(this).not(".latest").css({"height":"auto","width":"48vw","margin-right":"90vw"});
                  //   }
                  // });

				} else {

          $(".materials").css("width","90%");
          $("img").css({"width":"90%","height":"auto"});

          $(".moverS > .title").click(function(){
            var num = $(this).index();
            var dis = $(".moverS").height();
            console.log(num);
            var target = $(".row").eq(num);
            var yup = $(target).offset();
            var hello = $(yup).top;
            console.log(yup);
            $("html,body").animate({scrollTop: (yup.top-dis)-80},600);
          });



        }

        if( /iPad/i.test(navigator.userAgent) ) {
         $(".latest").hide();

        } else {
          // normal //
        }






    });



  }, "MC5YTGVUUFJRQUFDbFE1YlJm.77-9C2Btce-_vSnvv71q77-9RXISWO-_ve-_ve-_ve-_vU3vv73vv71-77-9Ue-_ve-_vVbvv73vv73vv70777-9");

  $(".about").click(function(){
    var height = $(document).height();
    $("html,body").animate({scrollTop:height},500);
  });


//
});
