
<?php

/*

Template Name: Verify

*/


//error_reporting(E_ALL);
//ini_set('display_errors', 1);

// Connect to the database
$conn = mysqli_connect('localhost','u436423042_Researchlytic','@Tayyab786@','u436423042_rl_user_db');
if (!$conn) {
  die("Error connecting to database: " . mysqli_connect_error());
}

$message = "";

// Check for a valid verification code in the URL parameter
if (isset($_GET['code'])) {
  $code = mysqli_real_escape_string($conn, $_GET['code']);
    
  
  // Look up the code in the database
  $query = "SELECT * FROM user_table WHERE verification_code = '$code'";
  $result = mysqli_query($conn, $query);

  // If the code is found, mark the user's email as verified
  if (mysqli_num_rows($result) > 0) {
    $query = "UPDATE user_table SET is_verified = 1 WHERE verification_code = '$code'";
    mysqli_query($conn, $query);
    $message = '<p style="margin-top:-20px">Your email has been verified. You can now login</p> <a href="/login" style="display:block; width:100%; margin-left:10px"><button id="login_btn">Login</button></a>';
  } else {
    $message = 'Invalid verification code. Please try again.';
  }
  
  
} 
else {
   $message = 'No verification code provided. Please follow the link in your email.';
}

// check for if account is created but email not verified
if (isset($_GET['email'])) {
  $email = mysqli_real_escape_string($conn, $_GET['email']);
    
  // Look up the email in the database
  $query = "SELECT is_verified FROM user_table WHERE email = '$email'";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) > 0) {
    $user = mysqli_fetch_assoc($result);
    if ($user['is_verified'] == 1) {
      $message = "Verified";
    } else {
      $message = '<p style="margin-top:-20px">Your account is pending verification. Please follow the link in email sent to you to verify your account.';
    }
  } else {
    $message = "Email not found in database.";
  }
}

// Close the database connection
mysqli_close($conn);

?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Email Verification</title>
    <meta name="description" content="Researchlytic email verification." />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="icon" type="image/x-icon" href="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/researchlytic_favicon_large.png">
    
    

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
  height: 60vh;
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

#login_btn {
  padding: 10px 20px;
  background-color: #4CAF50;
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


#login_btn:hover {
  background-color: #3e8e41 !important;
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

</style>


  </head>

<body>

<div class="login-form">
  <a href="/"><img src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/researchlytic_favicon.png" style="width:50px; margin-bottom:25px;"/></a>
  
    
           <div class="verify_box">
            <p style="text-align:center; font-size:18px; ">Email Verification</p>
            <p style="text-align:left; font-size:16px; ">
                <?php echo $message; ?>
            </p>
        </div>
                
</div>

<script>

</script>

</body>
</html>









