
      <?php
        get_header("single");
        
          if ( have_posts() ) {
            while ( have_posts() ) {
              the_post();
              $title = get_the_title();
              $author = get_the_author();
              $category = get_the_category()[0]->name;
              $content = get_the_content();
              $date = get_the_date();
              $author_id = get_the_author_meta( 'ID' );
              $author_description = get_the_author_meta( 'description' );
              $author_avatar = get_avatar( $author_id, 64 );

        ?>
            
      <div id="single_post_title_row" style="width:700px"> 
           <br>
            <p id="single_post_cat"> <?php echo strtoupper($category) ?> </p>
            <h1 id="single_post_title">
                <?php echo $title ?>
            </h1>
            <span id="q_label_description"></span>
            <p id="single_post_cat" style="display:inline-block; margin-right:15px;"> <?php echo $author ?> </p>
            <p id="single_post_cat" style="display:inline-block;"> <?php echo $date ?> </p>
            <br>
      </div>
      
    </header>
    <!-- Header End -->
    
    <?php
    
    echo '<div id="post_container">';
      
      echo '<div id="post_left_nav">';
            echo '<h2>Contents</h2>';
            
            echo '<div id="content_list_con"></div>';
      echo '</div>';
      
      echo '<div id="single_post_content"';
        echo '<p>' . $content . '</p>';
      echo '</div>';
      
      echo '<div id="post_right_nav">';
            
            // author info 
            
            echo '<p id="avatar">';
                    echo $author_avatar; 
            echo '</p>';
                    
            echo '<h2> '. $author .' </h2>';
            echo '<p> '. $author_description .' </p>';
            
            // social sharing 
            
            echo '<div style="margin-top:30px;">';
                echo '<h2 id="social_share_heading">Share this article</h2>';
                
                
                
                echo '<a style="text-decoration:none; margin-right:8px" href="https://twitter.com/share?url='. urlencode(get_the_permalink(). " by @researchlytic") .'&text='. urlencode($title) .'"> <img style="width:30px; height:30px" src="https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png" /> </a>';
                
                echo '<a style="text-decoration:none; margin-right:8px" href="https://www.facebook.com/sharer/sharer.php?u='.urlencode(get_the_permalink()).'"> <img style="width:30px; height:30px" src="https://cdn-icons-png.flaticon.com/512/145/145802.png" /> </a>';
                
                echo '<a style="text-decoration:none" href="https://www.linkedin.com/shareArticle?mini=true&url='.urlencode(get_the_permalink()).'&title='. urlencode($title) .'&source=Researchlytic.com"> <img style="width:30px; height:30px" src="https://cdn-icons-png.flaticon.com/512/145/145807.png" /> </a>';
                
            echo '</div>';
            
            // mailing list joining
            
            echo '<div style="margin-top:30px;">';
                echo '<h2 id="subscribe_heading">Subscribe for blog updates</h2>';
                
                echo '<input id="subscribe_q" type="text" placeholder="Enter your email"/>';
                
                echo '<input id="subscribe_btn" type="submit" value="Subscribe" />';
                
                echo '<p id="subscribe_status" style="font-size:16px; color:#333333; margin-top:10px;"></p>';
            echo '</div>';
            
            
      echo '</div>';
      
      
    echo '</div>';
    
    
    }
    wp_reset_postdata();
  }
  
  
?>


<script>
    var content_con = document.getElementById("single_post_content");
    var content_list_con = document.getElementById("content_list_con"); 
    
    var h2s = content_con.querySelectorAll("h2");
    
    id_counter = 1;
    h2s.forEach(function (h2){
        
        h2.id = "heading_" + id_counter;
        
        content_list_con.innerHTML +=  '<p><a href="#'+h2.id+'" onclick="scrollToSection('+h2.id+')">'+ h2.innerText +'</a></p>';
        
        id_counter++;
    })
    
    function scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    //-----------------
    // Subscription js
    //-----------------
    
    const subscribeBtn = document.getElementById("subscribe_btn");
    const subscribeInput = document.getElementById("subscribe_q"); 
    const subscribeStatus = document.getElementById("subscribe_status");
    
    subscribeBtn.addEventListener("click", function(event) {
      event.preventDefault();
      
      const email = subscribeInput.value;
      const xhr = new XMLHttpRequest();
    
      xhr.open("GET", `https://researchlytic.com/subscribe.php?email=${email}`, true);
      xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = this.responseText;
          subscribeStatus.innerHTML = response;
        }
      };
    
      xhr.send();
    });
</script>

<?php
    get_footer();
?>
