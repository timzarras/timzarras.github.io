$(document).ready(function(){


Prismic.Api('https://carvans.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "paint"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $("body");



      for (var i = 0; i < results.length; i++) {

        number = results[i].getNumber("paint.order");
        title = results[i].getStructuredText("paint.title").asText();
        desc = results[i].getStructuredText("paint.desc").asHtml();
        image = results[i].getImage("paint.image").asHtml();

        var titleP = $("<p class='title'></p>");
        var descP = $("<p class='desc'></p>");
        var projectD = $("<div class='project'></div>");
        var orderP = $("<p class='number' style='display:none'></p>");

        orderP.append(number)
        titleP.append(title);
        descP.append(desc);
        projectD.append(orderP,image,titleP,descP);

        body.append(projectD);

      }

      var $divs = $(".project");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo("body");

      var movers = $("<div class='moverS'></div>");

      movers.appendTo("body");

      $(".title").clone().appendTo(".moverS");

      $(".project:last > img").hide();

      // $(".project:last").css({"margin-bottom":"-1000px !important","background-color":"yellow"});



      // $("img").eq(0).clone().css({"position":"fixed","top":"0","height":"100vh","width":"auto","left":"50vw"}).appendTo("body");


			if ($(window).width()>750) {

        $(".moverS > .title:last-child").css("margin-top","60px");

        $("img").each(function(){
          $(this).attr("align","right");
        });


                    $(".moverS > .title").click(function(){
                      var num = $(this).index();
                      console.log(num);
                      var target = $(".project").eq(num);
                      var yup = $(target).offset();
                      var hello = $(yup).top;

                      $("html,body").animate({scrollTop: yup.top-15},0);
                    });


				} else {

          $(".moverS > .title:last-child").css("margin-top","20px");

          $(".moverS > .title").click(function(){
            $(".menu").show();
            var num = $(this).index();
            var height = $(window).outerHeight()/4;
            console.log(num);
            var target = $(".project").eq(num);
            var yup = $(target).offset();
            var hello = $(yup).top;

            $("html,body").animate({scrollTop: yup.top-60},0);
          });

          $(".menu").click(function(){
            $("html,body").scrollTop(0);
            $(".menu").hide();
          });

          $(window).scroll(function(){
            var far = $(window).scrollTop();
            var height = $(window).outerHeight();
            console.log(far,height);

            if (far > height-60 ){
              $(".menu").show();
            } else {
              $(".menu").hide();
            }
          });



        }

        if( /iPad/i.test(navigator.userAgent) ) {

        } else {
          // normal //
        }






    });



  }, "MC5XazdWaGg4QUFKNDQ2MDFn.Rj9U77-977-9Fu-_ve-_ve-_ve-_ve-_vUsZBO-_vTMX77-9aTfvv70S77-9SEQG77-977-9cu-_ve-_vVg");



//
});
