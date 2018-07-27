<?php snippet('header') ?>

  <main class="main" role="main">
      
    <?php 

    $projects = $page->children()->visible();
     foreach($projects as $project): ?>
     <?php $preview = $project->images()->first(); ?>
            <div class="previews">
       <a class="preview" href="<?= $project->url() ?>"><img class="preview thumb" src="<?= $preview->url() ?>"></a>
       <a class="caption" href="<?= $project->url() ?>"><?= $project->title() ?></a>
      </div>
   <?php endforeach;?>

  </main>

<?php snippet('footer') ?>