<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

//-----------------------
// add stylesheets
//-----------------------
function rl_styles(){
	
	wp_enqueue_style( "footer_css", get_template_directory_uri(). "/assets/css/footer.css" );
	
	if (is_front_page()){
	    wp_enqueue_style( "style", get_stylesheet_uri() );
	} 
	
	else if (is_page( "research-trends" ) ){
	    wp_enqueue_style( "trend_style", get_template_directory_uri(). "/assets/css/trend.css"  );
	}
	
	else {
	    wp_enqueue_style( "trend_style", get_template_directory_uri(). "/assets/css/trend.css"  );
	}
	
}

add_action("wp_enqueue_scripts", "rl_styles");

//-----------------------
// add javascripts
//-----------------------
function rl_scripts(){
	
	if (is_front_page() || 
	    is_page_template( 'page.php' ) || 
	    is_page_template( 'page.php' ) || 
	    is_page_template( 'template-blog.php' ) ||
	    is_page_template( 'template-dashboard.php' ) ||
	    is_page_template( 'template-tutorials.php' )) 
	{
	    wp_enqueue_script( "index_js", get_template_directory_uri(). "/assets/js/index.js" );
	} 
	
	if (is_page( "research-trends" ) || is_page( "trends" )  ){
	    wp_enqueue_script( "trend_js", get_template_directory_uri(). "/assets/js/trend.js" );
	}
	
	if (is_page( "research-ideas" ) || is_page( "ideas" ) ){
	    wp_enqueue_script( "ideas_js", get_template_directory_uri(). "/assets/js/ideas.js" );
	}
	
	if (is_page( "scholarly-literature" ) || is_page( "literature" ) ){
	    wp_enqueue_script( "literature_js", get_template_directory_uri(). "/assets/js/literature.js" );
	}
	
	if (is_page( "reference-manager" ) || is_page( "references" ) ){
	    wp_enqueue_script( "reference_manager_js", get_template_directory_uri(). "/assets/js/reference.js" );
	}
}

add_action("wp_footer", "rl_scripts");



/*

//REMOVE GUTENBERG BLOCK LIBRARY CSS FROM LOADING ON FRONTEND
function remove_wp_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
    wp_dequeue_style( 'wc-block-style' ); // REMOVE WOOCOMMERCE BLOCK CSS
    wp_dequeue_style( 'global-styles' ); // REMOVE THEME.JSON
}
add_action( 'wp_enqueue_scripts', 'remove_wp_block_library_css', 100 );

// REMOVE DEFAULT WP EMOJI CODE
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

//REMOVE DEFAULT WP JSON API
function remove_json_api () {

    // Remove the REST API lines from the HTML Header
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 );
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 );

    // Remove the REST API endpoint.
    remove_action( 'rest_api_init', 'wp_oembed_register_route' );

    // Turn off oEmbed auto discovery.
    add_filter( 'embed_oembed_discover', '__return_false' );

    // Don't filter oEmbed results.
    remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );

    // Remove oEmbed discovery links.
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );

   // Remove all embeds rewrite rules.
   add_filter( 'rewrite_rules_array', 'disable_embeds_rewrites' );

}
add_action( 'after_setup_theme', 'remove_json_api' );

*/

?>