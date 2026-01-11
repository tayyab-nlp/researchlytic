<?php

session_start();

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Researchlytic: Discover the Latest in Research Trends, Ideas and Literature</title>
    <meta name="description" content="Discover research trends & generate new research ideas. Find scholarly literature & manage references with advanced features." />

    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon.png">
    
    <?php wp_head();  ?>
    
  </head>
  <body>
    <!-- Header Start -->
    <header>
      <!-- Navbar Desktop Start -->
      <div id="navbar">
        
            <a href="/">
               <p id="logo">
                   <span id="logo_first">research</span>lytic
                </p>
            </a>
        
        <div id="desktop_navbar">
          
          <?php if (isset($_SESSION['email'])){ ?>
                <a class="nav_link" id="sign_up" href="/dashboard/">Dashboard</a>
          <?php } else { ?>
                <a class="nav_link" id="sign_up" href="/signup/">Sign up</a>
          <?php }  ?>
          
          
          <?php if (isset($_SESSION['email'])){ ?>
               
               <form action="/logout/" method="post">
                  <input type="submit" value="Sign out" class="nav_link" id="logout_btn" name="logout" style="background:none; border:none; cursor:pointer; outline:none">
               </form>
          
          <?php } else { ?>
                <a class="nav_link" href="/login/">Sign in</a>
          <?php }  ?>
          
          
          
          
          <a class="nav_link" href="/blog/">Blog</a>
          
          <div class="dropdown nav_link">
                <span class="dropdown-button">Tools ⌄</span>
                <div class="dropdown-content">
                    <a href="/research-trends/">Research Trends</a>
                    <a href="/research-ideas/">Research Ideas</a>
                    <a href="/scholarly-literature/">Scholarly Literature</a>
                    <a href="/reference-manager/">Reference Manager</a>
                </div>
            </div>
            
        </div>
        <div id="mobile_navbar">
          <span class="nav_link" id="mobile_menu_btn">☰</span>
          <div id="mobile_nav_link_con">
            <p id="mobile_logo">
              <span id="logo_first">research</span>lytic
            </p>
            
              <?php if (isset($_SESSION['email'])){ ?>
                    <a class="mobile_link" href="/dashboard/">Dashboard</a>
              <?php } else { ?>
                    <a class="mobile_link" href="/signup/">Sign up</a>
              <?php }  ?>
              
              
              <?php if (isset($_SESSION['email'])){ ?>
                    
                   <form action="/logout" method="post">
                      <input type="submit" value="Sign out" class="mobile_link" id="logout_btn" name="logout" style="background:none; border:none; cursor:pointer; outline:none">
                   </form>
              
              <?php } else { ?>
                    <a class="mobile_link" href="/login/">Sign in</a>
              <?php }  ?>
          
            <a class="mobile_link" href="/blog/">Blog</a>
            
            <div class="dropdown">
                <button class="dropdown-button mobile_link">Tools ⌄</button>
                <div class="dropdown-content">
                    <a href="/research-trends/">Research Trends</a>
                    <a href="/research-ideas/">Research Ideas</a>
                    <a href="/scholarly-literature/">Scholarly Literature</a>
                    <a href="/reference-manager/">Reference Manager</a>
                </div>
            </div>

          </div>
        </div>
      </div>
      <!-- Navbar Desktop End -->
      <div id="q_label_row">
        <h1 id="title" class="title2">Researchlytic: discover the latest in research trends, ideas, and literature</h1>
        <p id="q_label">Discover <span style="border-bottom:2px solid #fd5f69">research trends</span> & generate new <span style="border-bottom:2px solid orange">research ideas</span>. Find <span style="border-bottom:2px solid green">scholarly literature</span> & manage <span style="border-bottom:2px solid #0521ca">references</span> with advanced features. </p>
        <a id="call_to_action_btn" href="/signup/">Join Researchlytic for free</a>
      </div>
      <div id="q_row">
        <img id="art" src="<?php bloginfo('template_url'); ?>/assets/images/index/art.webp" alt="Researchlytic Home" />
      </div>
      
        
        
    </header>
    <!-- Header End -->