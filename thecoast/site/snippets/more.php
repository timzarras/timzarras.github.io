    <?php 
      $content = $page->content();

      foreach($content as $key => $value):
        if($key == 'fields'):         
          foreach($value as $field):
            $hidden = ($field == 'title'|| $field == 'text' || $field == 'slideshow'|| $field == 'gallery'|| $field == 'info' || $field == 'detail' || $field == 'detail_gallery');
              if($field != $hidden ):

                 ?>
                <p><?php echo(ucfirst($field));?></p>
               <p><?php echo($page->$field());?></p>
              <? endif;
          endforeach;
        endif;
      endforeach;
    ?>