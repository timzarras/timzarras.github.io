<?php snippet('header') ?>

<script>

    $(document).ready(function(){

        $(".Projects").click(function(){

        var area = $(window).height()/2;

        console.log(area);

        $(".main").css({"top": "15vh","position":"absolute"});
        $(".preview").css({"-webkit-filter":"blur(0px)","filter":"blur(0px)"});
        $(".intro").css({"-webkit-filter":"blur(2px)","filter":"blur(2px)","opacity":".2"});

      });


    });

</script>


<div class="intro">
      <?= $page->intro()->html() ?>

      


    </div>

    <main class="main" role="main">
      
    <?php 

    $projects = $pages->children()->visible();
     foreach($projects as $project): ?>
     <?php $preview = $project->images()->first(); ?>
            <div class="previews">
       <a class="preview" href="<?= $project->url() ?>"><img class="preview thumb" src="<?= $preview->url() ?>"></a>
       <a class="caption" href="<?= $project->url() ?>"><?= $project->title() ?></a>
      </div>
   <?php endforeach;?>

  </main>

  


<?php snippet('footer') ?>

