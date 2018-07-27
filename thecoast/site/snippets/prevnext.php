



<a class='prev' href="<?= $image->next() ?>"><?php $left = (new Asset('assets/images/arrow-left.png'))->html($attr=array('arrow-left')); echo $left;?></a>

<a class='next'><?php $right = (new Asset('assets/images/arrow-right.png'))->html($attr=array('arrow-right')); echo $right; ?></a>

<?php $page->images()->indexOf(); ?>