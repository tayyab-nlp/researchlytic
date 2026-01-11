<?php
/*

Template Name: Forgot Password

*/

session_start();


?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Forgot Password - Researchlytic</title>
    <meta name="description" content="Researchlytic Password Forgot" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    
     <link rel="icon" type="image/x-icon" href="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/researchlytic_favicon.png">
    

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
    <a href="/"><img src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/researchlytic_favicon_large.png" style="width:50px; margin-bottom:45px;" alt="Researchlytic Logo"/></a>

  <form method="post" action="/forgot_pass.php">
    
	 <h1 class="company-name">Forgot Password</h1>

	 
    <div class="form-group" style="border:1px solid #ccc;">
      <input type="text" id="email" name="institution_email"  placeholder="Institutional email">
    </div>
    
    <button id="submit_btn" type="submit">Email Password Reset Link</button>

  </form>
</div>


<script>



</script>


</body>
</html>