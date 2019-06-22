$(document).ready(function(){




Prismic.Api('https://robertoconnell.prismic.io/api', function (err, Api) {
    Api.form("everything")
    .ref(Api.master())
    .query(Prismic.Predicates.at("document.type", "project"))
    .submit(function (err, response) {
      var results = response.results;
      var body = $(".arch");
      var bodys = $("body");
      var table = $("table");



      for (var i = 0; i < results.length; i++) {

        number = results[i].getNumber("project.number");
        title = results[i].getStructuredText("project.title").asHtml();
        year = results[i].getStructuredText("project.year").asHtml();
        materials = results[i].getStructuredText("project.Description").asHtml();
        image = results[i].getGroup("project.project_images").asHtml();

        var targ = $("<p class='mover'></p>");
        var row = $("<div class='row'></div>").attr("name",i+1);
        var titleD = $("<div class='title'></div>").attr("name",i+1);
        var yearD = $("<div class='year'></div>");
        var materialsD = $("<div class='materials'></div>");
        var typeD = $("<div class='type'></div>");
        var imageD = $("<div class='images'></div>");
        var numberD = $("<td class='number' style='display:none'></td>");
        var span = $("<span class='text'>Text</>").attr("name",i+1);
        var spans = $("<span class='i'>Images</>");

        titleD.append(title,year);
        materialsD.append(materials);
        imageD.append(image);
        numberD.append(number);

        row.append(titleD,span,imageD,materialsD,numberD);
        body.append(row);

      }

      var targSpace = $("<div class='moverS'><p class='proj'>Projects</p></div>");

      $(targSpace).appendTo(".arch");

      var $divs = $(".row");
      // sort projects by hidden number value, largest to smallest //
      var ordered = $divs.sort(function (a, b) {
        return $(b).find(".number").text() - $(a).find(".number").text();
      });
      // append reordered divs to project section //
      $(ordered).appendTo(".arch");


      $(".title").clone().appendTo(".moverS");

      $(".moverS > .title > h1:nth-child(2)").remove();


      if ($(window).width()>737) {

        
        $("html").fadeIn(500);

                    $(".moverS > .title").click(function(){
                      var self = $(this);
                      $("html,body").animate({scrollTop:0},400);
                      $('.row').hide();
                      $(".row[name=" + self.attr("name") + "]").show();
                    });

                    $(".rob").click(function(){
                      $(".row").hide();
                      $(".proj").removeClass("no");
                      $(".moverS > .title").hide();
                    });


        } else {


                    $(".moverS > .title").click(function(){
                      var self = $(this);
                      var arch = $(window).height();
                      $("html,body").animate({scrollTop:arch},400);
                      setTimeout(function(){
                        $(".up").show();
                      },450);
                      $('.row').hide();
                      $(".row[name=" + self.attr("name") + "]").show();
                    });

                    $(".up").click(function(){
                      $("html,body").animate({scrollTop:0},200);
                      $(this).hide();
                    });

                    $(window).scroll(function(){
                      var height = $(window).height()/2;
                      var scroll = $(window).scrollTop();
                      console.log(scroll);
                      if ( scroll > height ) {
                        $(".up").show();
                        console.log("greater");
                      } else {
                        $(".up").hide();
                        console.log("less");
                      }

                    });


        }


                  $(".text").click(function(){
                    var self = $(this);
                    var top = $(".row[name=" + self.attr("name") + "] > .materials").offset();
                    var T = top.top;
                    console.log(T);
                    $("html,body").animate({scrollTop:T-75},500);
                  });

                  $(".proj").click(function(){
                    $(this).toggleClass("no");
                    $(".moverS > .title").toggle();
                  });


    });



  }, "MC5YUXB5RlJJQUFPNHgxcHVD.S--_ve-_ve-_vXfvv71677-9Fnnvv73vv71DD0k677-977-977-9PO-_vSM277-9O--_ve-_ve-_vTTvv73vv70w");

  
});