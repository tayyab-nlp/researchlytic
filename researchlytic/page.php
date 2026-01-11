<?php
/*

Template Name: Page

*/

get_header("page");

?>


<br><br>

<!--- page_content Start ---> 
<div id="individual_page_con">

<?php
    $current_page = get_queried_object();
    $content      = apply_filters( 'the_content', $current_page->post_content );
    echo $content;
?>

</div>

<?php get_footer(); ?>






