<nav class="navigation column" role="navigation">
  <ul class="menu">
  	  <a class="home" href="<?= url() ?>" rel="home"><?= $site->title()->html() ?></a>
    <?php foreach($pages->visible() as $item): ?>
    <li class="menu-item<?= r($item->isOpen(), ' is-active') ?>">
      <p class="<?= $item->title() ?>"><?= $item->title()->html() ?></p>
    </li>
    <?php endforeach ?>
  </ul>
</nav>