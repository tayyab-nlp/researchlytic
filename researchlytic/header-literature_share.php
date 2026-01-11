<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="canonical" href="https://researchlytic.com/scholarly-literature/">
    <meta name="robots" content="noindex">
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Scholarly Literature: Find the Latest Research in Your Field</title>
    <meta name="description" content="Find the latest research with Researchlytic's Scholarly Literature search. Discover articles, journals, and books on a wide range of academic disciplines with advanced filters." />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    
    <link rel="icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon.png">
    
    <?php wp_head(); ?>
    
    <!-- Facebook Meta Image -->
    <meta property="og:image" content="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/opengraph/scholarly-literature-opengraph.webp">
    <!-- Twitter Meta Image -->
    <meta name="twitter:image" content="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/opengraph/scholarly-literature-opengraph.webp">


    
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
                    
                   <form action="/logout/" method="post">
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
            <h1>
                <span id="q_label">Scholarly Literature</span>
                <span id="q_label_description">Find the Latest Research in Your Field</span>
            </h1>
      </div>
      <div id="q_row">
        <form id="q_form">
          <input id="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
          <img id="q_icon" data-src="<?php bloginfo('template_url'); ?>/assets/images/trend/search_icon.webp" alt="" />
          <input type="submit" style="display:none" value="Submit">
        </form>
      </div>
    </header>
    <!-- Header End -->
    