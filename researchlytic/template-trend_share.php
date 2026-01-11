<?php
/*

Template Name: Research Trends Share

*/


get_header("trend_share");
?>


<br><br>

<!--- analytics_content Start ---> 
<div id="analytics_content" style="display:block;">

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


<!-- Publication interest graph start -->

<div class="row full_con pi_graph_row" style="max-width:1010px">
	
	<div id="statistics_row">
		
		<div class="statistics_col">
			<p class="statistics_label">
				Studies
				<span id="studies_count_ttp" class="tooltip tooltip_small">?</span>
			</p>
			
			<div class="overlay"></div>
			<div class="tp_popup">
				<p class="tp_pupup_title">Studies</p>
				<span class="tp_pupup_close_btn">x</span>
				<p class="tp_pupup_description">Total number of studies published on the given research keyword during the time period in filter.</p>
			</div>
		
			<p id="studies_count_con" class="statistics_count">-</p>
		</div>
		
		<div class="statistics_col">
			<p class="statistics_label">
				SCR
				<span id="scr_ttp" class="tooltip tooltip_small">?</span>
			</p>
			
			<div class="overlay"></div>
			<div class="tp_popup">
				<p class="tp_pupup_title">Study Citation Ratio (SCR)</p>
				<span class="tp_pupup_close_btn">x</span>
				<p class="tp_pupup_description">The Study Citation Ratio (SCR) is the ratio of the total number of studies published in the last 3 years to the ratio of citations recieved by them. The SCR (3:1) means there is one citation for every 3 studies published in the last 3 years. The SCR helps understand the most recent trends in research for a given keyword.</p>
			</div>
			
			<p id="scr_con" class="statistics_count">-</p>
		</div>
		
		<div class="statistics_col">
			<p class="statistics_label">
				SCRP
				<span id="scrp_ttp" class="tooltip tooltip_small">?</span>
			</p>
			
			<div class="overlay"></div>
			<div class="tp_popup">
				<p class="tp_pupup_title">Study Citation Ratio Percentage (SCRP)</p>
				<span class="tp_pupup_close_btn">x</span>
				<p class="tp_pupup_description">The Study Citation Ratio Percentage (SCRP) is the Study Citation Ratio (SCR) given in a percentage from -100 to 100. A positive SCRP shows there are less studies and more research interest for a given keyword and vice versa.</p>
			</div>
			
			<p id="scrp_con" class="statistics_count">-</p>
		</div>
		
	</div>
	
	<div id="pi_graph_con" class="graph_con" style="width: 100%; !important; height:250px !important;"></div>
</div>

<!-- Publication interest graph end -->


<!-- Interest by countries start -->

<div class="row full_con cons_row">
	<div class="half_con no_shadow">
		<p class="graph_label"> 
			<span id="countries_graph_label">Interest by countries </span>
			<span id="countries_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by countries</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by countries on a scale of 0-100%.</p>
		</div>
	
		<div id="ibc_geo_con" class="graph_con"></div>
	</div>
	
	<div class="half_con no_shadow second_half_con">
		<p class="graph_label" style="color:white; margin-top:3px">.</p>
        <br>
		<div id="ibc_con" class="graph_con"></div>
	</div>
</div>

<!-- Interest by countries End -->

<!-- Interest by institution start -->

<div class="row full_con cons_row">
	<p class="graph_label"> 
		<span id="institution_graph_label">Interest by institutions </span>
		<span id="institutions_ttp" class="tooltip">?</span>
	</p>
	
	<div class="overlay"></div>
	<div class="tp_popup">
		<p class="tp_pupup_title">Interest by institutions</p>
		<span class="tp_pupup_close_btn">x</span>
		<p class="tp_pupup_description">It shows interest by institutions on a scale of 0-100%.</p>
	</div>
	

	<?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
        <div id="ibi_con" class="graph_con blur_class"></div>
	<?php } else { ?>
	    <div id="ibi_con" class="graph_con"></div>
	<?php } ?>
		 
</div>

<!-- Interest by institution End -->

<!-- Interest by subject and publisher start -->

<div class="row cons_row">
	
	<!-- Interest by subject start -->
	<div class="half_con">
		<p class="graph_label"> 
			Interest by subjects 
			<span id="subjects_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by subjects</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by subjects on a scale of 0-100%.</p>
		</div>
	

			<?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
                <div id="ibs_con" class="graph_con blur_class"></div>
        	<?php } else { ?>
        	    <div id="ibs_con" class="graph_con"></div>
        	<?php } ?>
	</div>
	<!-- Interest by subject end -->
	
	<!-- Interest by publisher start -->
	<div class="half_con second_half_con">
		
		<p class="graph_label"> 
			Interest by publishers 
			<span id="publishers_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by publishers</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by publishers on a scale of 0-100%.</p>
		</div>
		
		    <?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
                <div id="ibp_con" class="graph_con blur_class"></div>
        	<?php } else { ?>
        	    <div id="ibp_con" class="graph_con"></div>
        	<?php } ?>
	</div>
	<!-- Interest by publisher end -->
	
</div>

<!-- Interest by subject and publisher end -->

<!-- Interest by journal and researcher start -->

<div class="row cons_row">
	
	<!-- Interest by journal start -->
	<div class="half_con">
		<p class="graph_label"> 
			Interest by journals 
			<span id="journals_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by journals</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by journals on a scale of 0-100%.</p>
		</div>
	

		    <?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
                <div id="ibj_con" class="graph_con blur_class"></div>
        	<?php } else { ?>
        	    <div id="ibj_con" class="graph_con"></div>
        	<?php } ?>
        	
	</div>
	<!-- Interest by journal end -->
	
	<!-- Interest by researcher start -->
	<div class="half_con second_half_con">
		
		<p class="graph_label"> 
			Interest by researchers 
			<span id="researchers_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by researchers</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by researchers on a scale of 0-100%.</p>
		</div>
		

		    <?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
                <div id="ibr_con" class="graph_con blur_class"></div>
        	<?php } else { ?>
        	    <div id="ibr_con" class="graph_con"></div>
        	<?php } ?>
        	
	</div>
	<!-- Interest by researcher end -->
	
</div>

<!-- Interest by journal and researcher end -->

<!-- Interest by study type and acces start -->

<div class="row cons_row">
	
	<!-- Interest by study type start -->
	<div class="half_con">
		<p class="graph_label"> 
			Interest by study types 
			<span id="study_type_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by study types</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by study type from 0-100%</p>
		</div>
	
	     <?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
		    <div id="ibtp_con" class="graph_con blur_class"></div>
		 <?php } else { ?>
		    <div id="ibtp_con" class="graph_con"></div>
		 <?php } ?>
		 
		    
	</div>
	<!-- Interest by study type end -->
	
	<!-- Interest by access mode start -->
	<div class="half_con second_half_con">
		
		<p class="graph_label"> 
			Interest by access mode 
			<span id="access_mode_ttp" class="tooltip">?</span>
		</p>
		
		<div class="overlay"></div>
		<div class="tp_popup">
			<p class="tp_pupup_title">Interest by access mode</p>
			<span class="tp_pupup_close_btn">x</span>
			<p class="tp_pupup_description">It shows interest by access mode from 0-100%</p>
		</div>
		
		 <?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
		    <div id="ibam_con" class="graph_con blur_class"></div>
		 <?php } else { ?>
		    <div id="ibam_con" class="graph_con"></div>
		 <?php } ?>
		 
	</div>
	<!-- Interest by access mode end -->
	
</div>

<!-- Interest by study type and access mode end -->

<!-- Influential studies start -->

<div class="row full_con study_row cons_row">
	<p class="graph_label"> 
		Influential studies
		<span id="is_ttp" class="tooltip">?</span>
	</p>
	
	<div class="overlay"></div>
	<div class="tp_popup">
		<p class="tp_pupup_title">Influential studies</p>
		<span class="tp_pupup_close_btn">x</span>
		<p class="tp_pupup_description">It shows influential studies</p>
	</div>
	
        	<div id="is_con" class="graph_con"></div>
</div>

<!-- Influential studies End -->

<!-- Recent studies start -->

<div class="row full_con study_row cons_row">
	<p class="graph_label"> 
		Recent studies
		<span id="rs_ttp" class="tooltip">?</span>
	</p>
	
	<div class="overlay"></div>
	<div class="tp_popup">
		<p class="tp_pupup_title">Recent studies</p>
		<span class="tp_pupup_close_btn">x</span>
		<p class="tp_pupup_description">It shows recent studies.</p>
	</div>
	
	        <?php if(!isset($_SESSION['email']) || $_SESSION['email'] == '') {  ?>
                <div id="rs_con" class="graph_con blur_class"></div>
        	<?php } else { ?>
        	    <div id="rs_con" class="graph_con"></div>
        	<?php } ?>
</div>

<!-- Recent studies End -->


</div>
<!--- analytics_content Start ---> 
    

<?php get_footer(); ?>






