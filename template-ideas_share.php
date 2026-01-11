<?php
/*

Template Name: Research Ideas Share

*/


get_header("ideas_share");
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
            <span id="save_idea_mobile_btn" style="float:right; margin-right:25px; font-size:16px; margin-top:12px">Save Idea</span>
        </div>
    </div> <!--- End of Apply Filter BUtton -->
    
</div>
<!--- Filter Row End ---> 

<!-- Load d3.js -->
<script src="https://d3js.org/d3.v4.js"></script>

<!-- Load d3-cloud -->
<script src="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/d3.layout.cloud.js"></script>

<!-- Create a div where the graph will take place -->
<div id="my_dataviz"></div>


<div id="row" class="row" style="padding:10px; max-width:1000px; margin:auto; min-height:300px; margin-top:20px; background:white; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)">
</div>

</div>
<!--- analytics_content Start ---> 


<script src="https://cdnjs.cloudflare.com/ajax/libs/wordcloud2.js/1.0.1/wordcloud2.min.js"></script>

<?php get_footer(); ?>






