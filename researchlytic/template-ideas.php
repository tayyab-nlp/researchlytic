<?php
/*

Template Name: Research Ideas Page

*/


get_header("ideas");
?>


<br><br>

<!--- page_content Start ---> 
<div id="page_content">

    <div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Generate fresh research ideas quickly</h2>
			<p class="heading2_description">Quickly discover emerging <a href="/research-trends/" class="internal_link">research trends</a> and generate fresh  research ideas in just seconds. No more staring at a blank page or struggling to come up with new ideas.</p>
		</div>

        <figure>
			<img class="page_feature_image" id="first_image"  src="<?php bloginfo('template_url'); ?>/assets/images/ideas/research-ideas-generator.webp" alt="Generate research ideas"/>
		    <figcaption class="page_feature_image_caption">Generate research ideas</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->


	<div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Explore a variety of topics and niches</h2>
			<p class="heading2_description">Explore a wide range of topics and niches in a diverse array of disciplines and subjects.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/ideas/explore-research-topics.webp" alt="Explore research topics"/>
		    <figcaption class="page_feature_image_caption">Explore research topics</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->


    <div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Find inspiration for your next project</h2>
			<p class="heading2_description">Whether you're conducting a <a href="/scholarly-literature/" class="internal_link">literature research</a> or searching for new research ideas, our research idea generator can assist you in finding inspiration for your next project, making it easier to move forward with your work.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/ideas/get-research-inspirations.webp" alt="Get research inspirations"/>
		    <figcaption class="page_feature_image_caption">Get research inspirations</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
	<div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Discover new research directions</h2>
			<p class="heading2_description">Explore new research directions and discover new areas of interest.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/ideas/discover-new-research-directions.webp" alt="Discover new research possibilities"/>
		    <figcaption class="page_feature_image_caption">Discover new research possibilities</figcaption>
		</figure>


		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
	
	<div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Utilize advanced filters to narrow down results</h2>
			<p class="heading2_description">Refine your search by using advanced filters to narrow down the results and find the most relevant ideas for your project.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/ideas/use-advanced-research-filters.webp" alt="Use advanced search filters"/>
		    <figcaption class="page_feature_image_caption">Use advanced search filters</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
	
	<div class="page_feature_row"> <!--- start of feature_row div --->
		<div class="page_feature_col">
			<h2 class="heading2">Save your favorite ideas for later</h2>
			<p class="heading2_description">Save your favorite ideas for later <a href="/reference-manager/" class="internal_link">reference</a> and keep track of all the interesting research ideas you come across.</p>
		</div>

        <figure>
			<img class="page_feature_image" data-src="<?php bloginfo('template_url'); ?>/assets/images/ideas/save-your-research-ideas.webp" alt="Save your favourite ideas"/>
		    <figcaption class="page_feature_image_caption">Save your favourite ideas</figcaption>
		</figure>

		<div class="page_feature_divider"></div>
	</div> <!--- end of feature_col div --->
	
	
	
<!--- page_content Start ---> 
</div>

<!--- analytics_content Start ---> 
<div id="analytics_content" style="display:none;">

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
            <span id="save_idea_mobile_btn" style="float:right; margin-right:25px; font-size:16px; margin-top:12px">Save Idea</span>
        </div>
    </div> <!--- End of Apply Filter BUtton -->
    
</div>
<!--- Filter Row End ---> 


<div id="row" class="row" style="padding:10px; max-width:1000px; margin:auto; min-height:300px; margin-top:20px; background:white; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)">
</div>

</div>
<!--- analytics_content Start ---> 
    


<script src="https://cdnjs.cloudflare.com/ajax/libs/wordcloud2.js/1.0.1/wordcloud2.min.js"></script>

<?php get_footer(); ?>






