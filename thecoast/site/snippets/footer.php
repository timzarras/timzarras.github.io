<footer class="footer cf" role="contentinfo">

<p class="goaway">X</p>

<p class="bio"><?= $site->more()->html()?>
</p>
<p class="contax"><?= $site->info()->html()?>
</p>
    <div class="wrap wide">
      <p class="footer-copyright">
      	<?php echo html::decode($site->copyright()->kirbytext())?>
      	
      </p>

    
    </div>
  </footer>
  
</body>
<script>

    $(document).ready(function(){

      $("<li id='c' class='menu-item'><p>Contact</p></li>").appendTo(".menu");

        $("#c").click(function(){
          $(".footer").addClass("top");
        });

        $(".goaway").click(function(){
          $(".footer").removeClass("top");
        });


    });

</script>
</html>