<?php
/*

Template Name: Reference Manager

*/


get_header("reference");
?>


<br><br>

<!--- page_content Start ---> 
<div id="page_content">

    <div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Organize and manage your references</h2>
			<p class="heading2_description">Easily organize and manage all of your references, including the ability to create from various sources, create custom styles, export in your preferred format, and more.</p>
		</div>

        <figure>
			<img class="page_feature_image" id="first_image" src="<?php bloginfo('template_url'); ?>/assets/images/reference/organize_manage_your_references.webp" alt="Organize and manage your references"/>
		    <figcaption class="page_feature_image_caption">Organize and manage your references</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->


	<div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Create references for a variety of sources</h2>
			<p class="heading2_description">Quickly and easily add new references to your collection without the need for manual data entry from a variety of sources, including <a href="/scholarly-literature/" class="internal_link">research articles, books and more.</a></p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/reference/quickly_create_new_references.webp" alt="Quickly create new references"/>
		    <figcaption class="page_feature_image_caption">Quickly create new references</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->


    <div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Create custom reference styles</h2>
			<p class="heading2_description">Format your references correctly and save time by creating custom reference styles as required for your specific field or publication.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/reference/create_your_custom_reference_style.webp" alt="Create your custom reference style"/>
		    <figcaption class="page_feature_image_caption">Create your custom reference style</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
    <div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Save references in your preferred format</h2>
			<p class="heading2_description">Organize your <a href="/research-ideas/" class="internal_link">research ideas</a> more efficiently by saving your references in your preferred format, making it easier to use your selected research keywords in your work</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/reference/save_your_favourite_references.webp" alt="Save your favourite references"/>
		    <figcaption class="page_feature_image_caption">Save your favourite references</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
    <div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Stay up-to-date with the citation guidelines</h2>
			<p class="heading2_description">Stay up-to-date with the latest citation guidelines and ensure that your references are always formatted correctly, saving you time and ensuring compliance with rules and regulations.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/reference/stay_up-to-date_with_citation_guidelines.webp" alt="Staty up-to-date with citation guidelines"/>
		    <figcaption class="page_feature_image_caption">Staty up-to-date with citation guidelines</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
	
	
	
<!--- page_content Start ---> 
</div>

<!--- analytics_content Start ---> 
<div id="analytics_content" style="display:none; background:white">

<!--- Filter Row Start 

<div id="filter_show_btn">
    <button>Show Filters</button>
</div>

---> 

<div id="filter_row">


    <!--- Trend Filter Start ---> 
    <div class="filter_con trend_con">
        <div class="filter_btn_con">
            <button id="country_btn" class="filter_btn">
            	Worldwide 
            </button>
            <span id="country_btn_triangle" class="triangle"></span>
            <input id="country_q" autocomplete="off" type="text" class="filter_q"/>
            <span id="country_list_close_btn" class="filter_close">x</span>
            <div id="country_list" class="filter_list"></div>
        </div>
      <br><br><span class="filter_label">Trend</span>
        
    </div> 
    <!--- Trend Filter End --->
    
    
    <!--- Period Filter Start ---> 
    <div class="filter_con period_con">
        <div class="filter_btn_con period_con">
            <button id="period_btn" class="filter_btn">
            	Since 2000 
            </button>
            <span id="period_btn_triangle" class="triangle"></span>
            <input id="period_q" autocomplete="off" type="text" class="filter_q"/>
            <span id="period_list_close_btn" class="filter_close">x</span>
            <div id="period_list" class="filter_list"></div>
        </div>
      <br><br><span class="filter_label">Period</span>
        
    </div> 
    <!--- Period Filter End --->
    
    <!--- Subject Filter Start ---> 
    <div class="filter_con subject_con">
        <div class="filter_btn_con">
            <button id="subject_btn" class="filter_btn">
            	All subjects 
            </button>
            <span id="subject_btn_triangle" class="triangle"></span>
            <input id="subject_q" autocomplete="off" type="text" class="filter_q"/>
            <span id="subject_list_close_btn" class="filter_close">x</span>
            <div id="subject_list" class="filter_list"></div>
        </div>
      <br><br><span class="filter_label">Subject</span>
        
    </div> 
    <!--- Subject Filter End --->
    
    <!--- Type Filter Start ---> 
    <div class="filter_con type_con">
        <div class="filter_btn_con type_con">
            <button id="type_btn" class="filter_btn">
            	All studies 
            </button>
            <span id="type_btn_triangle" class="triangle"></span>
            <input id="type_q" autocomplete="off" type="text" class="filter_q"/>
            <span id="type_list_close_btn" class="filter_close">x</span>
            <div id="type_list" class="filter_list"></div>
        </div>
      <br><br><span class="filter_label">Type</span>
        
    </div> 
    <!--- Type Filter End --->
	 
	 <!--- Apply Filter Button --->
    <div class="filter_con filter_btn_conn">
        <div class="filter_btn_connn">
            <button class="w3-button" id="apply_filter_btn">Filter</button>
        </div>
    </div> <!--- End of Apply Filter BUtton -->
    
</div>
<!--- Filter Row End ---> 


<div id="row" class="row" style="padding:10px; max-width:1000px; margin:auto; min-height:300px; margin-top:20px; background:white; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)">
</div>

</div>
<!--- analytics_content Start ---> 
    


<?php get_footer(); ?>






