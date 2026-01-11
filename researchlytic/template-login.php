<?php
/*

Template Name: Login

*/

//get_header("blog");

    session_start();

    $message="";
    $email = "";
    if(count($_POST)>0) {
        $con = mysqli_connect('localhost','u436423042_Researchlytic','@Tayyab786@','u436423042_rl_user_db') or die('Unable To connect');
        $result = mysqli_query($con,"SELECT * FROM user_table WHERE email='" . $_POST["email"] . "' and password = '". $_POST["password"]."'");
        $row  = mysqli_fetch_array($result);

        if(is_array($row)) {
            $_SESSION["id"] = $row['user_id'];
            $_SESSION["email"] = $row['email'];
            $_SESSION["is_verified"] = $row['is_verified'];
        } 
        else {
            $message = "<br>Invalid Username or Password!";
            $email = $_POST["email"];
        }
    }
    if(isset($_SESSION["email"])) {
        if ( $_SESSION["is_verified"] == 1 ){
            echo "<script>location.href='/dashboard';</script>";
        }
        else {
            echo "<script>location.href='/verify?email=".$_SESSION["email"]."';</script>";
            session_destroy();
            
        }
    }


?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Login to Researchlytic</title>
    <meta name="description" content="Join Researchlytic for free and gain access to a powerful suite of research tools. Our platform offers Research Trends Explorer, Research Ideas Generator, Scholarly Literature Search, and Reference Manager to help researchers stay organized and informed. Sign up now and start enhancing your research!" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    
    <link rel="icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon.png">
    
    <style>

body {
	padding:0px;
    margin:0px;
    background-color: #f2f2f2;
}

*{
    font-family: "Roboto", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.error {
    color: #EE4B2B;
    margin-top:-10px;
    margin-bottom:10px;
    display:block;
    margin-left:3px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.company-name {
  font-size:26px;
  font-weight:500px;
  color: #343541;
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  width:auto;
  min-width:350px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
  height:43px;
}

label {
  font-weight: bold;
  margin-bottom: 10px;
}

input[type="email"],
input[type="text"],
input[type="password"] {
  padding: 10px;
  padding-top:12px;
  padding-bottom:12px;
  font-size: 16px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left:3px;
  outline:none;
  border:none;
}

.password-toggle {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

button[type="submit"] {
  padding: 10px 20px;
  padding-top:12px;
  padding-bottom:12px;
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
  margin-top: 20px;
  margin-bottom:10px;
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
  color: blue;
  margin-top: 10px;
  text-decoration: none;
}

@media screen and (max-width: 480px) {
    form {
      width:auto;
      min-width:80%;
    }
}

@media screen and (max-width: 375px) {
    input[type="email"],
    input[type="text"],
    input[type="password"] {
      width: 75%;
    }
}
</style>

  </head>

<body>

<div class="login-form">
  <a href="/"><img src="<?php bloginfo('template_url'); ?>/assets/images/researchlytic_favicon_large.png" style="width:50px; margin-bottom:45px;" alt="Researchlytic Logo"/></a>
  
  <form method="post" action="/login">
    
	 <h1 class="company-name">Welcome back</h1>
	 <span class="error"><?php if($message!="") { echo $message; } ?> </span>
    <div class="form-group" style="border:1px solid #ccc;">
      <input type="text" id="email" name="email" placeholder="Institutional email" value="<?php if($email!="") { echo $email; } ?>" >
    </div>
    
    <div class="form-group" style="border:1px solid #ccc;">
      <input type="password" id="password" name="password" placeholder="Password" />
		<i class="far fa-eye" id="togglePassword" style=" margin-left: 7px; cursor: pointer;"></i>
    </div>
    
    <button type="submit">Login</button>
    <a href="/forgot-password/">Forgot password?</a>
    
    <button id="new_account_btn"><a href="/signup/" style="color:white; text-decoration:none">Create New Account</a></button>
  </form>
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






