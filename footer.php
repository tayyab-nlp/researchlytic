<?php

if (isset($_SESSION["email"])) {
  $email = $_SESSION["email"];
  // Connect to the database
  $con = mysqli_connect('localhost','u436423042_Researchlytic','@Tayyab786@','u436423042_rl_user_db') or die('Unable To connect');
  // Get the api_token value based on the email
  $query = "SELECT api_token FROM user_table WHERE email = ?";
  $stmt = $con->prepare($query);
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $result = $stmt->get_result();
  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $apiToken = $row['api_token'];
    echo '<input type="hidden" id="api_token" value="' . $apiToken . '">';
  }
}
else {
    echo '<input type="hidden" id="api_token" value="123">';
}


?>

<!-- Footer Start -->
    <br>
    <footer>
      <div id="footer_col">
			 
			 <div class="footer_links_con">
				  <p class="footer_link_heading">Tools</p>
				  <a class="footer_link" href="/research-trends/">Research Trends</a>
				  <a class="footer_link" href="/research-ideas/">Research Ideas</a>
				  <a class="footer_link" href="/scholarly-literature/">Scholarly Literature</a>
				  <a class="footer_link" href="/reference-manager/">Reference Manager</a>
			 </div>
			 
			 <div class="footer_links_con">
				  <p class="footer_link_heading">Company</p>
				  <a class="footer_link" href="/about/">About</a>
				  <a class="footer_link" href="/privacy/">Privacy</a>
				  <a class="footer_link" href="/terms/">Terms</a>
				  <a class="footer_link" href="/contact/">Contact</a>
			 </div>
			 
			 <div class="footer_links_con">
				  <p class="footer_link_heading">Resources</p>
				  
				  <!---
				  <a class="footer_link" href="/blog/">Blog</a>
				  --->
				  <a class="footer_link" href="/tutorials/">Tutorials</a>
				  <a class="footer_link" href="/help-center/">Help Center</a>
				  <a class="footer_link" href="/data/">Our Data</a>
			 </div>
			 
			 <div class="footer_links_con">
			      <!---
				  <p class="footer_link_heading">Social</p>
				  <a class="footer_link" href="https://www.facebook.com/researchlytic/">Facebook</a>
				  
				 
				  <a class="footer_link" href="#">Youtube</a>
				  <a class="footer_link" href="#">Twitter</a>
				  <a class="footer_link" href="#">Linkedin</a>
				  --->
				  
			 </div>
			 
			 
			 <p id="footer_copyright">© 2023 Researchlytic. All rights reserved.</p>
			 
      </div>
    </footer>
    <!-- Footer End -->

    <?php wp_footer();  ?>
  </body>
</html>