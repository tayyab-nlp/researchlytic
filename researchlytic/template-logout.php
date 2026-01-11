<?php
/*

Template Name: Logout

*/

session_start();

if (isset($_POST['logout'])) {
  session_destroy();
  echo "<script>location.href='/';</script>";
}

?>