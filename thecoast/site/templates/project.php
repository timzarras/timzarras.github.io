<?php snippet('header') ?>

<script>

    $(document).ready(function(){

      $('.container,.containerD').flickity({
      // options
        cellAlign: 'center',
        contain: true,
        imagesLoaded: true,
      });

      var top;

      $(".Projects").click(function(){

        var area = $(window).height()/2;

        console.log(area);

        var top = $(".containerD,.container,.desc").offset().top;

        console.log(top);


        $("html,body").animate({scrollTop:0},300);
        $(".preview").css({"-webkit-filter":"blur(0px)","filter":"blur(0px)"});
        $(".containerD,.container,.desc").css({"-webkit-filter":"blur(2px)","filter":"blur(2px)","opacity":"0"});

        setTimeout(function(){
          $(".main").css({"position":"absolute"});
          $(".main").css({"top": "15vh","z-index":"999"});
        },500);


      });

      $(window).scroll(function(){
        var top = $(".containerD,.container,.desc").offset().top;

        console.log(top);
      });


    });

      
</script>

  <div class="desc">
    <h1><?= $page->title()->html()?></h1>
    <?= $page->text()->kirbytext() ?>
      <div class="more"><?php snippet('more') ?></div>
  </div>

<div class="container">

<?php foreach($page->slideshow()->yaml() as $image): ?>   
  <?php if($image = $page->image($image)): ?>
    <?= $image->html($attr=array('slide')); ?>          
  <?php endif ?>
<?php endforeach; ?>
</div>
<div class="containerD">
<?php foreach($page->detail()->yaml() as $image): ?>   
  <?php if($image = $page->image($image)): ?>
    <?= $image->html($attr=array('slideD')); ?>          
  <?php endif ?>
<?php endforeach; ?>
</div>

<div class="main">

      <?php 

    $projects = $pages->children()->visible();
     foreach($projects as $project): ?>
     <?php $preview = $project->images()->first(); ?>
            <div class="previews">
       <a class="preview" href="<?= $project->url() ?>"><img class="preview thumb" src="<?= $preview->url() ?>"></a>
       <a class="caption" href="<?= $project->url() ?>"><?= $project->title() ?></a>
      </div>
   <?php endforeach;?>

</div>



<?php snippet('footer') ?>

