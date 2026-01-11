//------------------------
// content logic
//------------------------

function content_logic(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const q = urlParams.get('q');
    
    if (window.location.href!="https://researchlytic.com/research-trends/" && !q) {
        window.location = "/research-trends/";
    } 
    
    if (window.location.href.includes("https://researchlytic.com/research-trends/") && q) {
        window.location.href = "/trends?q=" + encodeURIComponent(q);
    } 
    
}

content_logic();

//-----------------------
// Image lazy loading
//-----------------------

// select all images
var images = document.querySelectorAll("img");

// create an IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
  // loop through the entries
  entries.forEach(function(entry) {
    // if the image is intersecting with the viewport
    if (entry.intersectionRatio > 0) {
      // set the src of the image to the data-src attribute
      entry.target.src = entry.target.getAttribute("data-src");
      // stop observing the image
      observer.unobserve(entry.target);
    }
  });
});

// observe each image
images.forEach(function(image) {
  if (image.id!="first_image"){
      observer.observe(image);
  }
});


//-------------------------
// Mobile menu button
//--------------------------
var mm_btn = document.getElementById("mobile_menu_btn");
mm_btn.onclick = function (){
	var mm_link_con = document.getElementById("mobile_nav_link_con");
	if (mm_link_con.style.display == "none" || mm_link_con.style.display == ""){
		 mm_link_con.style.display = "block";
		 this.innerHTML = "×";
		 this.style.fontSize = "35px";
	}
	else {
		 mm_link_con.style.display = "none";
		 this.innerHTML = "☰";
		 this.style.color = "gray";
		 this.style.fontSize = "25px";
	}
}



//--------------------------------------------------------
// Filter javascript starts
//---------------------------------------------------------

/*
var filter_show_btn = document.getElementById("filter_show_btn");

filter_show_btn.onclick = function (){
    var filter_row = document.getElementById("filter_row");
    
    if (filter_row.style.display == "none" || filter_row.style.display == ""){
        filter_row.style.display = "block";
        this.innerHTML = "Hide Filters";
    }
    else {
        filter_row.style.display = "none";
        this.innerHTML = "Show Filters";
    }
}
*/

//--------------------------------------------------------
// functino to add searchnable filter list
//---------------------------------------------------------
function addFilterList(listCon, listQ, listBtn, listValArr, searchable){
    // add options to filter list
    var filter_list_con = document.getElementById(listCon);

    for(key in listValArr) {   
       var option = document.createElement("span")
       option.innerHTML = key + " ";
       option.className += " option";
       option.style.cursor = "pointer";
       filter_list_con.append(option);
    }

    // filter_list_con search 
    var filter_list_q = document.getElementById(listQ);

    filter_list_q.onkeyup = function (){
        var q = filter_list_q.value.toUpperCase();
        var filter_list_con = document.getElementById(listCon);
        var options = filter_list_con.querySelectorAll("span");

        for (var i = 0; i < options.length; i++){
            var txtValue = options[i].innerHTML;
            if (txtValue.toUpperCase().indexOf(q) > -1) {
                options[i].style.display = "";
            } else {
                options[i].style.display = "none";
            }        
        }
    }

    // show filter on button click
    var filter_list_btn = document.getElementById(listBtn);
    filter_list_btn.onclick = function (){
	 		filter(this);
	 }
	 
	 // show filter on angle click
	 document.getElementById(listBtn+"_triangle").onclick = function (){
	 		filter(this);
			document.getElementById(listBtn).style.display = "none";
	 }
	 
	 
	 // filter function
	 function filter (filter_btn){
        var filter_list_q = document.getElementById(listQ);
        var filter_list_con = document.getElementById(listCon);
        var country_option = filter_list_con.querySelectorAll("span");

        var close_btn = document.getElementById(listCon+"_close_btn");
        close_btn.style.display = "block";

        document.getElementById(listBtn+"_triangle").style.display = "none"; // hide triangle

        close_btn.onclick = function (){
            filter_list_con.style.display = "none";
            filter_list_q.style.display = "none";
            filter_list_btn.style.display = "block";
            this.style.display = "none";
            document.getElementById(listBtn+"_triangle").style.display = "block";  // show triangle
        }
        
        if (searchable){
            filter_btn.style.display = "none";
            filter_list_q.style.display = "block";
            filter_list_q.focus();
            filter_list_con.style.display = "inline-block";
        }
        else {
            filter_list_con.style.display = "block";
        }
        

        for (var i = 0; i < country_option.length; i++){
            country_option[i].onclick = function (){
                filter_list_btn.innerHTML = this.innerHTML;
                filter_list_btn.style.display = "block"
                filter_list_con.style.display = "none";
                filter_list_q.style.display = "none";
                close_btn.style.display = "none";
                document.getElementById(listBtn+"_triangle").style.display = "block"; // show triangle
            }
        }

    } // end of filter() function;

} // end of addFilterList function


var country_obj = { 
  Worldwide: 'WW',
  Afghanistan: 'AF',
  Albania: 'AL',
  Algeria: 'DZ',
  Angola: 'AO',
  'Antigua and Barbuda': 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  'Bolivia, Plurinational State of': 'BO',
  'Bosnia and Herzegovina': 'BA',
  Botswana: 'BW',
  Brazil: 'BR',
  'Brunei Darussalam': 'BN',
  Bulgaria: 'BG',
  'Burkina Faso': 'BF',
  Burundi: 'BI',
  'Cabo Verde': 'CV',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  'Cayman Islands': 'KY',
  'Central African Republic': 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  Colombia: 'CO',
  Congo: 'CG',
  'Congo, Democratic Republic of the': 'CD',
  'Costa Rica': 'CR',
  Croatia: 'HR',
  Cuba: 'CU',
  'CuraÃ§ao': 'CW',
  Cyprus: 'CY',
  Czechia: 'CZ',
  'CÃ´te d\'Ivoire': 'CI',
  Denmark: 'DK',
  'Dominican Republic': 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  'El Salvador': 'SV',
  Eritrea: 'ER',
  Estonia: 'EE',
  Eswatini: 'SZ',
  Ethiopia: 'ET',
  'Faroe Islands': 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  'French Guiana': 'GF',
  'French Polynesia': 'PF',
  Gabon: 'GA',
  Gambia: 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guadeloupe: 'GP',
  Guatemala: 'GT',
  Guinea: 'GN',
  'Guinea-Bissau': 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  Honduras: 'HN',
  'Hong Kong': 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  'Iran, Islamic Republic of': 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  'Korea, Democratic People\'s Republic of': 'KP',
  'Korea, Republic of': 'KR',
  Kosovo: 'XK',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  'Lao People\'s Democratic Republic': 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  Libya: 'LY',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  Martinique: 'MQ',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mexico: 'MX',
  'Moldova, Republic of': 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nepal: 'NP',
  Netherlands: 'NL',
  'New Caledonia': 'NC',
  'New Zealand': 'NZ',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  'North Macedonia': 'MK',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  'Palestine, State of': 'PS',
  Panama: 'PA',
  'Papua New Guinea': 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Poland: 'PL',
  Portugal: 'PT',
  'Puerto Rico': 'PR',
  Qatar: 'QA',
  Romania: 'RO',
  'Russian Federation': 'RU',
  Rwanda: 'RW',
  'RÃ©union': 'RE',
  'Saint Kitts and Nevis': 'KN',
  Samoa: 'WS',
  'San Marino': 'SM',
  'Sao Tome and Principe': 'ST',
  'Saudi Arabia': 'SA',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  'Sierra Leone': 'SL',
  Singapore: 'SG',
  Slovakia: 'SK',
  Slovenia: 'SI',
  Somalia: 'SO',
  'South Africa': 'ZA',
  'South Sudan': 'SS',
  Spain: 'ES',
  'Sri Lanka': 'LK',
  Sudan: 'SD',
  Suriname: 'SR',
  'Svalbard and Jan Mayen': 'SJ',
  Sweden: 'SE',
  Switzerland: 'CH',
  'Syrian Arab Republic': 'SY',
  'Taiwan, Province of China': 'TW',
  Tajikistan: 'TJ',
  'Tanzania, United Republic of': 'TZ',
  Thailand: 'TH',
  'Timor-Leste': 'TL',
  Togo: 'TG',
  'Trinidad and Tobago': 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  Uganda: 'UG',
  Ukraine: 'UA',
  'United Arab Emirates': 'AE',
  'United Kingdom of Great Britain and Northern Ireland': 'GB',
  'United States of America': 'US',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  'Venezuela, Bolivarian Republic of': 'VE',
  'Viet Nam': 'VN',
  'Virgin Islands, British': 'VG',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW' };


addFilterList("country_list", "country_q", "country_btn", country_obj, true); 


var period_obj = {
    "Past 5 years":5, 
    "Past 10 years":10, 
    "Since 2000":2000
};

addFilterList("period_list", "period_q", "period_btn", period_obj, false); 

var subject_obj = {
    "All subjects":"all", 
    "Art":"art",
    "Biology":"bio",
    "Business":"bus",
    "Computer science": "cs",
    "Chemistry":"chem",
    "Engineering":"eng",
    "Economics":"econ",
    "Environmental science":"es",
    "Geography":"geogr",
    "Geology":"geo",
    "History":"hist",
    "Mathematics":"maths",
    "Materials science":"ms",
    "Medicine":"med",
    "Physics":"phy",
    "Political science":"ps",
    "Philosophy":"phil",
    "Psychology":"psyc",
    "Sociology":"soc"
};

addFilterList("subject_list", "subject_q", "subject_btn", subject_obj, true); 

var type_obj = {
    "All studies":"all", 
    "Journal articles":"ja", 
};

addFilterList("type_list", "type_q", "type_btn", type_obj, false); 

//--------------------------------------------------------
// Filter javascript Ends
//---------------------------------------------------------


//--------------------------------------------------------
// Tooltip pop up starts
//---------------------------------------------------------

var tooltips = document.querySelectorAll(".tooltip");
tooltips.forEach(function (tooltip){
	tooltip.onclick = function (){
		
	  var overlay = this.parentElement.nextElementSibling;
	  var popup = overlay.nextElementSibling;
	  var close_btn = popup.querySelector("span");
	  
	  overlay.style.display = 'block';
	  popup.style.display = 'block';
	  document.body.style.overflow = 'hidden'; 
	  
	 close_btn.onclick = function (){
	 	  overlay.style.display = 'none';
		  popup.style.display = 'none';
		  document.body.style.overflow = 'auto'; 
	 }
		
	}
})


//--------------------------------------------------------
// Tooltip pop up ends
//---------------------------------------------------------

//-------------------------------------------------------
// getting parameters from filteres start
//-------------------------------------------------------
function getPara(){
    var q = document.getElementById("q");
    var country_btn = document.getElementById("country_btn");
    var period_btn = document.getElementById("period_btn");
    var subject_btn = document.getElementById("subject_btn");
    var type_btn = document.getElementById("type_btn");
    var tk = document.getElementById("api_token");

    var para_obj = {};

    var kw = q.value;
    var trend = country_btn.innerText;
    var period = period_btn.innerText;
    var subject = subject_btn.innerText;
    var type = type_btn.innerText;
    
    var year_start = 2000;
    var year_end = new Date().getFullYear()-1;
    
    if (period_obj[period]==5){
        year_end = new Date().getFullYear()-1;
        year_start = year_end - 5;
    }
    else if (period_obj[period]==10){
        year_end = new Date().getFullYear()-1;
        year_start = year_end - 10;
    }
    else if (period_obj[period]==2000){
        year_end = new Date().getFullYear()-1;
        year_start = 2000;
    }
    
    
    para_obj["q"]  = kw;
    para_obj["t"]  = country_obj[trend];
    para_obj["ys"]  = year_start;
    para_obj["ye"]  = year_end;
    para_obj["s"]  = subject_obj[subject];
    para_obj["tp"]  = type_obj[type];
    para_obj["pd"] = period_obj[period];
    para_obj["tk"] = tk.value;
    
    return para_obj;
} // end of getPara function 

//-------------------------------------------------------
// getting parameters from filteres end
//-------------------------------------------------------


//-------------------------------------------------------
// On  enter or filter button click start
//-------------------------------------------------------

const q_form = document.getElementById('q_form');
q_form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting
  document.getElementById("apply_filter_btn").click();

    document.body.style.backgroundColor = "#f0f2f5";
});

q_icon = document.getElementById('q_icon');
q_icon.addEventListener('click', () => {
  document.getElementById("apply_filter_btn").click();
});

var filter_btn = document.getElementById("apply_filter_btn");

filter_btn.onclick = function (){
	
    var q = document.getElementById("q");
	if (window.location.href == "https://researchlytic.com/research-trends/"){
	    if (q.value.trim() !== "") {
          window.location.href = "/trends?q=" + encodeURIComponent(q.value);
        }
	}
	
	//add laoder
    add_loader();

    //console.log(getPara());
	
	var newUrl = "https://researchlytic.com/trends?q="+getPara().q.replace(/ /g,"-")+"&td="+getPara().t+"&pd="+getPara().pd+"&sub="+getPara().s+"&typ="+getPara().tp;

    newUrl = newUrl.replace("&td=WW","").replace("&pd=2000","").replace("&sub=all","").replace("&typ=all","");

    history.pushState({}, document.title, newUrl)

    document.body.style.backgroundColor = "#f0f2f5";
	
	check_for_data ();
	
}

//-------------------------------------------------------
// On filter button click end
//-------------------------------------------------------


//-------------------------------------
// make page ready on load
//-------------------------------------

function pageLoad(is_onpopstate){
    var q = document.getElementById("q");
    var country_btn = document.getElementById("country_btn");
    var period_btn = document.getElementById("period_btn");
    var subject_btn = document.getElementById("subject_btn");
    var type_btn = document.getElementById("type_btn");
    
    // get url parameters
    var params = {};

    if (location.search) {
        var parts = location.search.substring(1).split('&');
        for (var i = 0; i < parts.length; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
        }
    }


    // object reveres loopk up
    country_obj_new = {};
    for (let key in country_obj) { 
        country_obj_new[country_obj[key]] = String(key); 
    }

    subject_obj_new = {};
    for (let key in subject_obj) { 
        subject_obj_new[subject_obj[key]] = String(key); 
    }

    period_obj_new = {
        "5":"Past 5 years",
        "10":"Past 10 years",
        "2000":"Since 2000"
    };

    type_obj_new = {
        "ja":"Journal articles",
        "all":"All studies"
    };

    // default parameters
    if (params.q==null){
        //alert("Atleast the Q parameter is required...");
    }
    // default parameters
    if (params.td==null){
        params.td = "WW";
    }
    if (params.pd==null){
        params.pd = "2000";
    }
    if (params.sub==null){
        params.sub = "all";
    }
    if (params.typ==null){
        params.typ = "all";
    }

    
    if (params.q){
        q.value  = params.q.replace(/-/g," ").replace(/%20/g," ");
    }
    country_btn.innerHTML  = country_obj_new[params.td.toUpperCase()];
    period_btn.innerHTML    = period_obj_new[params.pd.toLowerCase()];
    subject_btn.innerHTML = subject_obj_new[params.sub.toLowerCase()];
    type_btn.innerHTML  = type_obj_new[params.typ.toLowerCase()];

    getPara(); // get parameters from url
    
	 
    if (params.q != null){
        if (is_onpopstate){ // is forward/backward nav, do not set last end state
            // check for data and draw pi graph
            get_publication_interest_graph();
        }
        else { // if page onload without history navigation
            document.getElementById("apply_filter_btn").click(); // check if data exists
        }
    }
	 

} 

//--------------------------------------
// end of pageLoad function
//-------------------------------------

//-----------------------------------------
// dynamic page url change
//-----------------------------------------
window.onload = function (){
   //add loader
   add_loader();
   
   pageLoad(false);
}

// user nav forward and backward button without page load
window.addEventListener('popstate', function () {
    //add loader
   add_loader();
   
   pageLoad(true);
});

//-----------------------------------------
//end of dynamic page url change
//-----------------------------------------


//---------------------------------------
// check for data start
//---------------------------------------
function check_for_data (){

    // check for data and draw graphs
    check_for_data()
} 

//---------------------------------------
// check for data end
//---------------------------------------

//---------------------------------------
// get data for tables start
//---------------------------------------
async function get_table(cmd, con_id) {

    // fetch data from api
    var url = "https://api.researchlytic.com/trends.php?cmd="+cmd+"&q="+getPara()["q"]+"&t="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&s="+getPara()["s"]+"&tp="+getPara()["tp"]+"&tk="+getPara()["tk"];
    
    const response = await fetch(url);
    var html = await response.text();
    
    if (cmd=="scr"){
        var scr_ob = JSON.parse(html);
        document.getElementById("studies_count_con").innerHTML = document.getElementById("is_count").innerHTML;
        document.getElementById("scr_con").innerHTML = scr_ob.SCR;
        document.getElementById("scrp_con").innerHTML = scr_ob.SCR_PER;
    }
    else {
        document.getElementById(con_id).innerHTML = html;
    }

}
//---------------------------------------
// get data for tables end
//---------------------------------------

console.error = function() {};


//---------------------------------------
// check_for_data  start
//---------------------------------------
async function check_for_data() {

    // fetch data from api
    var url = "https://api.researchlytic.com/trends.php?cmd=is&q="+getPara()["q"]+"&t="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&s="+getPara()["s"]+"&tp="+getPara()["tp"]+"&tk="+getPara()["tk"];
    
    var html = "";
    
    const response = await fetch(url);
    var html = await response.text();
    
    document.getElementById("is_con").innerHTML = html;
    var study_count =  document.getElementById("is_count").innerHTML;
    //console.log(study_count);
    
    if (Number(study_count) < 20 ){
        var no_data_message =  `<div style="width:300px; text-align:center; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);">
                                    <p style="font-size: larger; color:rgba(0,0,0,.87);">It seems your query has not returned any substantial results.</p>
                                    <p style="font-size: smaller; margin-top:5px; color:rgba(0,0,0,.87);">Double check your spelling and try a more broad term or filter for better results.</p>
                               </div>`;
  
        document.getElementById('pi_graph_con').innerHTML = no_data_message;
        // hide other cons
        const cons = document.querySelectorAll('.cons_row');
        cons.forEach(function(c) {
            c.style.display = "none";
        });
    }
    else {
        
        setTimeout(function () { get_publication_interest_graph() }, 500);
        setTimeout(function () { get_interest_by_countries_map() }, 1000);
        setTimeout(function () { get_table("ibc", "ibc_con"); }, 1500);
        setTimeout(function () { get_table("ibi", "ibi_con"); }, 2500);
        setTimeout(function () { get_table("ibs", "ibs_con"); }, 3500);
        setTimeout(function () { get_table("ibp", "ibp_con"); }, 4000);
        setTimeout(function () { get_table("ibj", "ibj_con"); }, 4500);
        setTimeout(function () { get_table("ibr", "ibr_con"); }, 5000);
        setTimeout(function () { get_table("rs", "rs_con"); }, 5500);
        setTimeout(function () { get_study_type_pie_chart(); }, 6000);
        setTimeout(function () { get_access_type_pie_chart(); }, 6500);
        setTimeout(function () { get_table("scr", "scr_con"); }, 3500);
    }

}
//---------------------------------------
// check_for_data end
//---------------------------------------

//-------------------------------------
// draw publication interest graph start
//-------------------------------------
function draw_publication_interest_graph(array, year_arr, margin_left, margin_right){
      google.charts.load('current', {packages: ['corechart', 'bar']});
	  google.charts.setOnLoadCallback(drawBasic);

  	  function drawBasic() {

        var data = new google.visualization.DataTable();

        var data = google.visualization.arrayToDataTable(array);

        var options = {
           hAxis: {
              title: 'Publication Interest Over Time (0-100%)',
              format: '####',
              gridlines: {
                 color: 'none',
              },
              textStyle : {
                fontSize: 13
              },
              ticks: year_arr // from parameter
           },
           vAxis: {
              gridlines: {
                 color: 'none',
              },
               textStyle : {
                fontSize: 13
              },
              ticks: [0, 25, 50, 75, 100],
              responsive:true
           },

           legend:{
               position: 'none',
           },
           animation:{
               startup: true,
               duration: 600,
               easing: 'out'
           },
           chartArea: {
                left: margin_left,
                top: '10%',
                right: margin_right,
                width: '91%',
                //height: '80%'
            },
            tooltip: { trigger: 'selection' },
            colors: ['#2e3c56']

        };

        var chart = new google.visualization.ColumnChart(
          document.getElementById('pi_graph_con'));

        chart.draw(data, options);
      }
      
} 
//-------------------------------------
// draw publication interest graph end
//-------------------------------------

//-------------------------------------
// get publication interest graph start
// also check for data if exists
//-------------------------------------

async function get_publication_interest_graph() {
        
    // fetch data from api
    var url = "https://api.researchlytic.com/trends.php?cmd=pg&q="+getPara()["q"]+"&t="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&s="+getPara()["s"]+"&tp="+getPara()["tp"]+"&tk="+getPara()["tk"];

    
    var arrr = [ ['Year', 'Interest', { role: 'annotation' } ] ];
    
    var year_arr = [];

    const response = await fetch(url);
    const jsonArr = await response.json();
    if (jsonArr[jsonArr.length-1] == 0){
        
        var no_data_message =  `<div style="width:300px; text-align:center; position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%);">
                                    <p style="font-size: larger; color:rgba(0,0,0,.87);">It seems your query has not returned any substantial results.</p>
                                    <p style="font-size: smaller; margin-top:5px; color:rgba(0,0,0,.87);">Double check your spelling and try a more broad term for better results.</p>
                               </div>`;
  
        document.getElementById('pi_graph_con').innerHTML = no_data_message;
        // hide other cons
        const cons = document.querySelectorAll('.cons_row');
        cons.forEach(function(c) {
            c.style.display = "none";
        });
    }
    else {
        for (var i = 1; i < jsonArr.length-1; i++){
            arrr.push( [jsonArr[i][0], jsonArr[i][1], jsonArr[i][1]] );
            year_arr.push(jsonArr[i][0]);
        }
        // data found, draw pi graph

        if (window.matchMedia("(max-width: 450px)").matches) {
          draw_publication_interest_graph(arrr, year_arr, "10%", "5%")
        } 
        else {
          draw_publication_interest_graph(arrr, year_arr, "5%", "2%")
        }
        
    }
    
}  

//-------------------------------------
// get publication interest graph end
//-------------------------------------

//-------------------------------------
// draw country interest map chart start
//-------------------------------------
function draw_map_graph(array){
      google.charts.load('current', {
        'packages':['geochart'],
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(array);

        var options = {
          colorAxis: {colors: ['lightgray', 'gray', '#2e3c56']},
          responsive:true,

                            
                enableRegionInteractivity:true
            
            
        };

        var chart = new google.visualization.GeoChart(document.getElementById('ibc_geo_con'));

        chart.draw(data, options);
      }
      
} 
//-------------------------------------
// draw country interest map chart end
//-------------------------------------

//-------------------------------------
// get country interest map data start
//-------------------------------------

async function get_interest_by_countries_map() {
        
    // fetch data from api
    var url = "https://api.researchlytic.com/trends.php?cmd=ibcm&q="+getPara()["q"]+"&t="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&s="+getPara()["s"]+"&tp="+getPara()["tp"]+"&tk="+getPara()["tk"];
    
    var arrr = [ ['Country', 'Research Interest'] ];
    
    const response = await fetch(url);
    const jsonArr = await response.json();

    //document.getElementById("ibc_geo_con").parentElement.style.display = "block";
    
    for (var i = 0; i < jsonArr.length-1; i++){
        arrr.push( [country_obj[jsonArr[i][0]], jsonArr[i][1]] );
    }

    draw_map_graph(arrr);

}  
//-------------------------------------
// get country interest map data end
//-------------------------------------


//-------------------------------------
// draw studies type interest pie chart start
//-------------------------------------
function draw_studies_chart(array){      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(array);

        var options = {
            chartArea: {
                left: '-6%',
                top: '10%',
                bottom: '10%',
                width: '100%',
                height: '90%'
            },

            slices: [{
                color: '#2e3c56',
                textStyle: {
                    color: '#f0f2f5',
                    fontSize: 13
                }
            }, {
                color: '#f0f2f5',
                textStyle: {
                    color: '#2e3c56',
                    fontSize: 13
                }
            },
            {
                color: 'gray',
                textStyle: {
                    color: '#f0f2f5',
                    fontSize: 13
                }
            }
            ],

            tooltip: { trigger: 'selection' },
            enableInteractivity:false,
            fontSize:14,
            responsive:true

        };

        
        var chart = new google.visualization.PieChart(document.getElementById('ibtp_con'));

        chart.draw(data, options);
      }
 } 

 //-------------------------------------
// draw studies type interest pie chart end
//-------------------------------------

 //-------------------------------------
// get studies type interest pie chart start
//-------------------------------------
async function get_study_type_pie_chart() {
        
    // fetch data from api
    var url = "https://api.researchlytic.com/trends.php?cmd=ibtp&q="+getPara()["q"]+"&t="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&s="+getPara()["s"]+"&tp="+getPara()["tp"]+"&tk="+getPara()["tk"];
    
    var arrr = [ ['Study', 'Interest'] ];
    
    const response = await fetch(url);
    const jsonArr = await response.json();

    //document.getElementById("ibtp_con").parentElement.style.display = "block";

    if (jsonArr[0]=="No enough data found"){
        document.getElementById('ibtp_con').innerHTML = "No enough data found";
    }
    else {
        var other_studies = 0;
        for (var i = 0; i < jsonArr.length-1; i++){
            
            if (jsonArr[i][0]=="journal-article"){ 
                arrr.push( ["Journal articles", jsonArr[i][1]] );
            }
            else if (jsonArr[i][0]=="book-chapter"){
                arrr.push( ["Book chapters", jsonArr[i][1]] );
            }
            else {
                other_studies = other_studies + jsonArr[i][1];
            }
        }

        arrr.push( ["Other", other_studies] );

        draw_studies_chart(arrr);
    }
    
}  
//-------------------------------------
// get studies type interest pie chart end
//-------------------------------------

//-------------------------------------
// draw access interest pie chart start
//-------------------------------------
function draw_access_chart(array){      
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable(array);

        var options = {
            chartArea: {
                left: '-6%',
                top: '10%',
                bottom: '10%',
                width: '100%',
                height: '90%'
            },

            slices: [{
                color: '#2e3c56',
                textStyle: {
                    color: '#f0f2f5',
                    fontSize: 15
                }
            }, {
                color: '#f0f2f5',
                textStyle: {
                    color: '#2e3c56',
                    fontSize: 15
                }
            }
            ],

            tooltip: { trigger: 'selection' },
            enableInteractivity:false,
            fontSize:14,
            responsive:true

        };

        
        var chart = new google.visualization.PieChart(document.getElementById('ibam_con'));

        chart.draw(data, options);
      }
 } 
 //-------------------------------------
// draw access interest pie chart end
//-------------------------------------

//-------------------------------------
// get access interest pie chart start
//-------------------------------------
async function get_access_type_pie_chart() {
        
    // fetch data from api
    var url = "https://api.researchlytic.com/trends.php?cmd=ibam&q="+getPara()["q"]+"&t="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&s="+getPara()["s"]+"&tp="+getPara()["tp"]+"&tk="+getPara()["tk"];
    
    var arrr = [ ['Accees', 'Interest'] ];
    
    const response = await fetch(url);
    const jsonArr = await response.json();

    //document.getElementById("interest_by_access_con").parentElement.style.display = "block";

    if (jsonArr[0]=="No enough data found"){
        document.getElementById('ibam_con').innerHTML = "No enough data found";
    }
    else {
        for (var i = 0; i < jsonArr.length-1; i++){
            arrr.push( [jsonArr[i][0], jsonArr[i][1]] );
        }

        draw_access_chart(arrr);
    }
    
}  
//-------------------------------------
// get access interest pie chart end
//-------------------------------------


//-------------------------------------
// add loader function start
//-------------------------------------

function add_loader() {
    
    const cons = document.querySelectorAll('.cons_row');
    cons.forEach(function(c) {
        c.style.display = "block";
    });

    
    const graphContainers = document.querySelectorAll('.graph_con');

    graphContainers.forEach(function(graphContainer) {
        graphContainer.style.position = "relative";
        
        const loader = document.createElement('div');
        loader.className = 'loader';
        graphContainer.innerHTML = "";
        graphContainer.insertAdjacentElement('afterbegin', loader);
        loader.style.position = 'absolute';
        
        if (graphContainer.id == "pi_graph_con" || graphContainer.id == "ibi_con" || graphContainer.id == "is_con" || graphContainer.id == "rs_con"){
                loader.style.top = '30%';

                if (window.innerWidth < 525) {
                    loader.style.left = '40%';
                } else {
                    loader.style.left = '45%';
                }
        }
        else {
                loader.style.top = '30%';

                if (window.innerWidth < 770 && window.innerWidth > 425) {
                    loader.style.left = '45%';
                } else {
                    loader.style.left = '40%';
                }

        }
    });
    
    const stat_count_conn = document.querySelectorAll('.statistics_count');
    stat_count_conn.forEach(function(c) {
        c.innerHTML = "-";
    });
    

}

//-------------------------------------
// add loader function end
//-------------------------------------

//------------------------------------
// hide/show cons while loading
//------------------------------------
function toggle_con_show(){
    const cons = document.querySelectorAll('.cons_row');
    cons.forEach(function(c) {
        c.style.display = "none";
    });
}
//--------------------------------

console.clear();
