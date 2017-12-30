$(document).ready(function(){


Prismic.Api('https://timzarras.prismic.io/api', function (err, Api) {
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
        year = results[i].getStructuredText("project.year").asText();
        materials = results[i].getStructuredText("project.materials").asHtml();
        type = results[i].getGroup("project.type").asHtml();
        image = results[i].getGroup("project.project_images").asHtml();

        colors.push(color);

        var targ = $("<p class='mover'></p>");
				var row = $("<div class='row'></div>");
        var titleD = $("<div class='title'></div>");
        var yearD = $("<div class='year'></div>");
        var materialsD = $("<div class='materials'></div>");
        var typeD = $("<div class='type'></div>");
        var imageD = $("<div class='images'></div>");
        var numberD = $("<td class='number' style='display:none'></td>");

        titleD.append(title);
        yearD.append(year);
        materialsD.append(materials);
        typeD.append(type);
        imageD.append(image);
        numberD.append(number);

        row.append(titleD,yearD,materialsD,imageD,numberD,typeD);
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
      var all = $("img").length;
      var random = Math.floor(Math.random()*all);
      $("img").eq(0).clone().addClass("latest").appendTo(".arch");

      $(".row:last").addClass("l");









			if ($(window).width()>750) {

                  var $window = $(window),
                      $stick = $('.moverS'),
                      elTop = $stick.offset().top;

                      $window.scroll(function() {
                        $stick.toggleClass('sticky', $window.scrollTop() > elTop);
                    });



                    $(".row > .materials > p > a").each(function(){
                      // var hello = $("<img class='arrow' src='arrow.svg'>");
                      $(this).not(".l > .materials > p > a ").append("&nbsp;&nearr;");
                    });

                    $(".moverS > .title").click(function(){
                      var num = $(this).index();
                      var dis = $(".moverS").height();
                      var half = $(window).outerHeight()/2;
                      console.log(num);
                      var target = $(".row").eq(num);
                      var yup = $(target).offset();
                      var hello = $(yup).top;
                      console.log(yup);

                      if ($(".moverS").hasClass("sticky")){
                        $("html,body").animate({scrollTop: (yup.top-dis)-40},600);
                      } else {
                        $("html,body").animate({scrollTop: (yup.top-dis)+half-107.5},600);
                      }

                    });

                  $("img").click(function(){
                    console.log("hello");
                    if ($(this).height() > 100) {
                      console.log("hellno");
                      $(this).not(".latest").css({"height" : "10vh",
                      "width" : "auto","margin-right":"1vw"});
                    } else {
                      $(this).not(".latest").css({"height":"auto","width":"48vw","margin-right":"90vw"});
                    }
                  });

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
            $("html,body").animate({scrollTop: (yup.top-dis)-40},600);
          });



        }

        if( /iPad/i.test(navigator.userAgent) ) {
         $(".latest").hide();

        } else {
          // normal //
        }






    });



  }, "MC5XVkFyMUNRQUFEU3M3eU1V.77-9Tu-_vQPvv71Q77-977-977-9cwZF77-977-9LO-_vQ3vv71JMgrvv71u77-977-9FO-_vXHvv71Q77-977-9");

  $(".about").click(function(){
    var height = $(document).height();
    $("html,body").animate({scrollTop:height},500);
  });


//
});
