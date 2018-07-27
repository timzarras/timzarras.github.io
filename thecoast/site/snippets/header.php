<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <meta name="description" content="<?= $site->description()->html() ?>">
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.1.2/flickity.pkgd.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.1.2/flickity.css" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
  <?= css('assets/css/index.css') ?>
  <?= js('assets/js/index.js') ?>
</head>
<body>

  <header class="header" role="banner">
    
      <?php snippet('menu') ?>

  
  </header>
