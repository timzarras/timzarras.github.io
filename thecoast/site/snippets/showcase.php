<?php

$projects = $page->children()->visible();


if(isset($limit)) $projects = $projects->limit($limit);


?>

<ul class="showcase grid">

  <?php foreach($projects as $project): ?>

    <li class="showcase-item column">
        <a href="<?= $project->url() ?>" class="showcase-link">
          <?php if($image = $project->images()->limit(1)->first()):?>
            <img src="<?= $image->url() ?>" alt="Thumbnail for <?= $project->title()->html() ?>" class="showcase-image" />
          <?php endif ?>
          <div class="showcase-caption">
            <h3 class="showcase-title"><?= $project->title()->html() ?></h3>
          </div>
        </a>
    </li>

  <?php endforeach ?>

</ul>