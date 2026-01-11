<?php
/*

Template Name: Home

*/
 get_header("home");  

?>
    
    
    <div class="scroll-down"></div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FFD580" fill-opacity="1" d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,240C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
    <!-- Title section start -->
    <div id="feature_row_con">
      <div id="title_row">
        <h2 class="title3">What can you do with Researchlytic</h2>
        <br>
      </div>
      <!-- Title section end -->
      <!-- Feature section start -->
      <div id="feature_row">
        
            <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/trend_icon.webp" alt="research trends icon" />
              <h3 class="feature_col_label">Discover research trends</h3>
              <p class="feature_col_description">Uncover the <a href="/research-trends/" class="internal_link">latest research trends</a> in your field, from countries and institutions, to subjects and journals, to researchers and studies.</p>
              <div class="q_row2">
                <form id="trend_form" method="get">
                  <input id="trend_q" class="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
                  <img id="trend_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Research trends" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
              </div>
              <p class="q_example">For example, <span id="trend_example">food processing</span>
              </p>
            </div>
        
        
        
        <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/idea_icon.webp" alt=" research ideas icon" />
              <h3 class="feature_col_label">Generate research ideas</h3>
              <p class="feature_col_description">Explore <a href="/research-ideas/" class="internal_link">new research possibilities</a> and find inspiration for your next project by generating research ideas from a seed keyword.</p>
              <div class="q_row2">
                <form id="idea_form" method="get">
                  <input id="idea_q" class="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
                  <img id="idea_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Generate research ideas" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
              </div>
              <p class="q_example">For example, <span id="idea_example">information retrieval</span>
              </p>
            </div>
            
            <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/study_icon.webp" alt="scholarly literature icon" />
              <h3 class="feature_col_label">Search scholarly literature</h3>
              <p class="feature_col_description">Easily access and search through a vast collection of <a href="/scholarly-literature/" class="internal_link">scholarly literature</a>, including articles, journals, and books.</p>
              <div class="q_row2">
               
                <form id="literature_form" method="get">
                  <input id="literature_q" class="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
                  <img id="literature_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Search scholarly literature" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
                
              </div>
              <p class="q_example">For example, <span id="literature_example">world peace</span>
              </p>
            </div>
            
            <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/citation_icon.webp" alt="reference manager icon" />
              <h3 class="feature_col_label">Advanced reference manager</h3>
              <p class="feature_col_description">Manage and <a href="/reference-manager/" class="internal_link">organize your references</a> with advanced features such as import, export, and custom reference style creation.</p>
              <div class="q_row2">
    
                <form id="reference_form" method="get">
                  <input id="reference_q" class="q" type="text" placeholder="Enter a study title" autocomplete="off" />
                  <img id="reference_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Advanced reference manager" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
                
              </div>
              <p class="q_example">For example, <span id="reference_example">federated machine learning</span>
              </p>
            </div>
        <br>
      </div>
    </div>
    <!-- Feature section End -->
    
    <!-- https://getwaves.io/  -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FFD580" fill-opacity="1" d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    
    <!-- Demo section start -->
    <div id="demo_row">
      <h2 id="demo_title">Students, professors, or professional researchers</h2>
      <p id="demo_description">you will find Researchlytic a valuable resource</p>
      
      <img id="demo_video" src="<?php bloginfo('template_url'); ?>/assets/images/index/research-trends-explorer.webp" alt="Research Ideas Generator"/>
      
      <p class="demo_btn_con">
        <span class="demo_btn demo_btn_active" id="demo_btn_trends">Research trends</span> / 
        <span class="demo_btn" id="demo_btn_ideas">Research ideas</span> / 
        <span class="demo_btn" id="demo_btn_literature">Scholarly literature</span> / 
        <span class="demo_btn" id="demo_btn_reference">Reference manager</span>
      </p>
      
      <br>
      <br>
      <div style="border-bottom:1px solid #D3D3D3; width:100%;"></div>
      <button id="demo_play_btn"><a id="demo_btn_link" href="/research-trends/" style="color:white; text-decoration:none">Try For Free</a></button>
    </div>
    <!-- Demo section end -->
    
    <!-- Statistic section start -->
    <div id="statistics_row">
      <h2 id="statistics_title">Researchlytic doesn’t just provide data – it offers valuable insights</h2>
      <p id="statistics_description">with one of the world’s most comprehensive research database</p>
      <div class="statistics_col col">
        <p class="statistics_col_label">500M+</p>
        <p class="statistics_col_description">Keywords</p>
      </div>
      <div class="statistics_col col">
        <p class="statistics_col_label">245M+</p>
        <p class="statistics_col_description">Studies</p>
      </div>
      <div class="statistics_col col">
        <p class="statistics_col_label">263M+</p>
        <p class="statistics_col_description">Researchers</p>
      </div>
      <div class="statistics_col col">
        <p class="statistics_col_label">100K+</p>
        <p class="statistics_col_description">Institutions</p>
      </div>
    </div>
    <!-- Statistic section end -->
    <!-- Testimonial section start -->
    <div id="testimonial_row">
      <h2 id="testimonial_title">What researchers say about Researchlytic</h2>
      <br>
      <div class="testimonial_col col">
        <img class="testimonial_col_icon" src="<?php bloginfo('template_url'); ?>/assets/images/index/testimonial_a.webp" alt="Researchlytic review" />
        <p class="testimonial_col_label">Robert Smith</p>
        <p class="testimonial_col_description">As a researcher, I was struggling to keep up with the latest trends in my field. But with the Researchlytic platform, I can easily find publication interest, influential studies, and research activity in countries, institutions, and subjects that matter to me. It's a game-changer.</p>
      </div>
      <div class="testimonial_col col">
        <img class="testimonial_col_icon" src="<?php bloginfo('template_url'); ?>/assets/images/index/testimonial_b.webp" alt="Researchlytic review" />
        <p class="testimonial_col_label">Rachel Johnson</p>
        <p class="testimonial_col_description">I've been using the Researchlytic platform for a few months now and it has completely transformed the way I do research. It's so easy to find the leading journals and researchers in my field. I highly recommend it to any researcher looking to stay on top of their game.</p>
      </div>
      <div class="testimonial_col col">
        <img class="testimonial_col_icon" src="<?php bloginfo('template_url'); ?>/assets/images/index/testimonial_c.webp" alt="Researchlytic review" />
        <p class="testimonial_col_label">David Jones</p>
        <p class="testimonial_col_description">As a graduate student, I was overwhelmed by the sheer volume of research out there. The Researchlytic platform has made it so much easier for me to discover trends and stay up-to-date with the latest research. It's an invaluable resource for anyone working in academia.</p>
      </div>
    </div>
    <!-- Testimonial section end -->
    <!-- Learning resources section start -->
    <br>
    <div id="learning_resources_row">
      <h2 id="learning_resources_title">Free learning resources</h2>
      <p id="learning_resources_description">Get the most out of Researchlytic plateform by exploring free learning resources</p>
      <br>
      <div class="learning_resources_col col">
        <img class="learning_resources_col_icon" src="<?php bloginfo('template_url'); ?>/assets/images/index/blog_icon.webp" alt="Reseachlytic Blog" />
        <h3 class="learning_resources_col_label">Blog</h3>
        <p class="learning_resources_col_description">Stay up-to-date with the latest news and insights on our blog.</p>
        <a id="read_blog_btn" href="/blog/">Read blog</a>
      </div>
      <div class="learning_resources_col col">
        <img class="learning_resources_col_icon" src="<?php bloginfo('template_url'); ?>/assets/images/index/tutorial_icon.webp" alt="Researchlytic Tutorials" />
        <h3 class="learning_resources_col_label">Tutorials</h3>
        <p class="learning_resources_col_description">Learn how to use Researchlytic with our comprehensive tutorials.</p>
        <a id="watch_tutorials_btn" href="/tutorials/">Watch tutorials</a>
      </div>
      <div class="learning_resources_col col">
        <img class="learning_resources_col_icon" src="<?php bloginfo('template_url'); ?>/assets/images/index/help_icon.webp" alt="Researchlytic Help Center" />
        <h3 class="learning_resources_col_label">Help Center</h3>
        <p class="learning_resources_col_description">Find answers to your questions and get support from our team.</p>
        <a id="get_help_btn" href="/help-center/">Get help</a>
      </div>
    </div>
    <!-- Learning resources  section end -->
    <!-- Call to action section start -->
    <br>
    <div id="call_to_action_row">
      <h2 id="call_to_action_title">Get started with Researchlytic today</h2>
      <p id="call_to_action_description">Leverage the power of data to advance your research goals</p>
      <a id="call_to_action_btn2" href="/signup/">Join Researchlytic for free</a>
    </div>
    <!-- Call to action section end -->
    

   
    <?php get_footer();  ?>
    