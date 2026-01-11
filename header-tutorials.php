<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title> <?php echo get_the_title(); ?> </title>
    <meta name="description" content="Learn how to make the most of Researchlytic with our comprehensive tutorials. Our expert team guides you through the ins and outs of Research Trends Explorer, Research Ideas Generator, Scholarly Literature Search, and Reference Manager, so you can take your research to the next level. Visit us now and start learning!" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">

    <link rel="icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon.png">
    
    <?php wp_head(); ?>
    
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
               
               <form action="/logout" method="post">
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
            <a class="mobile_link" href="/signup/">Sign up</a>
            <a class="mobile_link" href="/login/">Sign in</a>
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
           <br>
            <h1 id="q_label">
                Researchlytic Tutorials
            </h1>
            <span id="q_label_description"></span>
            <br>
      </div>
      
    </header>
    <!-- Header End -->
    