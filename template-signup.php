<?php
/*

Template Name: Signup

*/

//get_header("blog");
$show_verification_message = false;

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Join Researchlytic for free</title>
    <meta name="description" content="Join Researchlytic for free" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    
    <link rel="icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon.png">
    
    <style>


*{
    font-family: "Roboto", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.error {
    color: #EE4B2B;
    margin-top:10px;
    margin-bottom:-10px;
    display:block;
    margin-left:3px;
    width:80%;
}


body {
	padding:0px;
    margin:0px;
    background-color: #f2f2f2;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 95vh;
}

.company-name {
  margin-bottom: 20px;
  font-size:20px;
  font-weight:normal;
}

form, .verify_box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom:10px;
  padding-top:15px;
  background-color: #ffffff;
  border-radius: 10px;
  width:auto;
  min-width:370px;
  max-width:370px;
  margin:10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
}

input[type="email"],
input[type="text"],
input[type="password"] {
  padding: 10px;
  font-size: 16px;
  width: 92%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left:3px;
}

.password-toggle {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  width:98%;
  font-size:16px;
  font-weight:bold;
}

#new_account_btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: -7px;
  margin-bottom:2px;
  font-weight:bold;
  font-size:16px;
}


button[type="submit"]:hover {
  background-color: #1168d4 !important;
  color:white !important;
}

#new_account_btn:hover {
  background-color: #3e8e41 !important;
  color:white !important;
}

a {
  color: #2d333a;
  margin-top: 5px;
  text-decoration: underline;
}

p {
	color: #2d333a;
	font-size:14px;
}

@media screen and (max-width: 480px) {
    form, .verify_box {
      width:auto;
      min-width:80%;
    }
}



</style>

  </head>

<body>


<div class="login-form">
  <a href="/"><img src="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon_large.png" style="width:50px; margin-bottom:25px;" alt="Researchlytic Logo"/></a>
  
  <?php if (!$show_verification_message) { ?>
  
  <form method="post" action="/signup.php">
    
	 <h1 class="company-name">Join Researchlytic for free</h1>
    
	 <div class="form-group">
      <input type="text" name="first_name" placeholder="First name" >
      <span class="error"><?php if (!empty($error_arr["first_name_error"])) { echo $error_arr['first_name_error']; } ?></span>
    </div>
	 
	 <div class="form-group">
      <input type="text" name="last_name" placeholder="Last name">
      <span class="error"><?php if (!empty($error_arr["last_name_error"])) { echo $error_arr['last_name_error']; } ?></span>
    </div>
	 
	 <div class="form-group">
      <input type="email" name="institution_email" placeholder="Institutional email" >
      <span class="error"><?php if (!empty($error_arr["institution_email_error"])) { echo $error_arr['institution_email_error']; } ?></span>
    </div>
	 
    <div class="form-group">
      <input type="password" name="password" placeholder="Password" >
		<i class="far fa-eye" id="togglePassword" style="display:none; margin-left: -40px; cursor: pointer;"></i>
		<span class="error"><?php if (!empty($error_arr["password_error"])) { echo $error_arr['password_error']; } ?></span>
    
	 </div>
	 <p style="max-width:370px; font-size:14px; padding:5px; margin-top:-10px">
                    By clicking Sign Up, you agree to our <a href="/terms/">Terms of Service</a> and acknowledge the <a href="/privacy/">Privacy Policy</a>
    </p>
	 
    <button type="submit" id="new_account_btn">Sign Up</button>
    <p> Already have an account? <a href="/login/" style="color:blue">Sign in</a></p>
    
  </form>
  <?php } ?>
  
   <?php if ($show_verification_message) { ?>
        <div class="verify_box">
            <p style="text-align:center; font-size:18px; ">Account Verification</p>
            <p style="text-align:left; font-size:16px; ">
                Welcome to Researchlytic! We are excited to have you join us. 
                <br><br>
                To complete your account setup, please check your email and follow the instructions to verify your account. 
                <br><br>
                In case you haven't received the email, please check your spam folder or wait a few minutes and then try again. 
                <br><br>
                Thank you for signing up and we look forward to helping you make the most of your Researchlytic experience!
            </p>
        </div>
    <?php } ?>
            
</div>

<script>


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

password.onkeydown = function (){
    togglePassword.style.display = "inline-block";
}

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


</script>

</body>
</html>





<?php //get_footer(); ?>






