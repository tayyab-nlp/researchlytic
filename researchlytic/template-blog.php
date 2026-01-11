<?php
/*

Template Name: Blog

*/

get_header("blog");


?>


<br>

<style>
    .post_title:hover {
        color:#ff8800;
    }
</style>

<!--- page_content Start ---> 
<div id="individual_page_con">
    
    <?php
        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => 10,
            'paged' => $paged
        );
        $query = new WP_Query( $args );
        
        if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
                $query->the_post();
                $title = get_the_title();
                $author = get_the_author();
                $category = get_the_category()[0]->name;
                $excerpt = get_the_excerpt();
                $link = get_the_permalink();
                $date = get_the_date();
        
                echo '<p style="font-size:16px; color:#333333; margin-bottom:-12px;">' . strtoupper($category) . '</p>';
                echo '<h2  style="color:#054ada;"><a style="text-decoration:none" class="post_title" href="' . $link . '">' . $title . '</a></h2>';
                echo '<p style="font-size:16px; color:#333333; margin-top:-8px; margin-bottom:5px">' . $excerpt . '</p>';
                
                echo "<div style='border-bottom:1px solid #ccc; padding-bottom:30px; margin-bottom:30px; display: flex; align-items: center;'>";
                    echo '<span style="display: inline-block; margin-right: 8px; border-radius: 50%; overflow: hidden; width: 24px; height: 24px;">';
                        echo get_avatar( get_the_author_meta( 'ID' ), 24 ); 
                    echo '</span>';
                
                    echo '<span style="font-size:15px; color:#333333; margin-right:10px">' . $author . '</span>';
                    echo '<span style="font-size:15px; color:#333333;  margin-right:10px">' . $date . '</span>';
                echo "</div>";
            }
            wp_reset_postdata();
        
        }
    ?>





</div>

<?php get_footer(); ?>






