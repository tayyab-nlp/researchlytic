//------------------------
// content logic
//------------------------

function content_logic(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const q = urlParams.get('q');
    
    if (window.location.href!="https://researchlytic.com/research-ideas/" && !q) {
        window.location = "/research-ideas/";
    } 
    
    if (window.location.href.includes("https://researchlytic.com/research-ideas/") && q) {
        window.location.href = "/ideas?q=" + encodeURIComponent(q);
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
	if (window.location.href == "https://researchlytic.com/research-ideas/"){
	    if (q.value.trim() !== "") {
          window.location.href = "/ideas?q=" + encodeURIComponent(q.value);
        }
	}
	
    //add laoder
    add_loader();

    //console.log(getPara());
	
	var newUrl = "https://researchlytic.com/ideas?q="+getPara().q.replace(/ /g,"-")+"&td="+getPara().t+"&pd="+getPara().pd+"&sub="+getPara().s+"&typ="+getPara().tp;

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
            get_keyword_ideas();
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
    get_keyword_ideas();
} 

//---------------------------------------
// check for data end
//---------------------------------------

//---------------------------------------
// check for data end
//---------------------------------------

//-------------------------------------
// get get_keyword_ideas start
// also check for data if exists
//-------------------------------------

async function get_keyword_ideas() {
        
    var jsonArr;
    try {
        // fetch data from api
        var url = "https://api.researchlytic.com/ideas.php?q="+getPara()["q"]+"&td="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&sub="+getPara()["s"]+"&typ="+getPara()["tp"];
        
        const response = await fetch(url);
        jsonArr = await response.json();
    
        var row = document.getElementById("row");
        row.style.backgroundColor = "#f0f2f5";
        row.style.marginTop = "5px";
        row.style.boxShadow = "none";
        row.innerHTML = "";    
    
        if (jsonArr[0]=="No enough data"){
            row.innerHTML = `<div style="width:98%; background:white; height:300px; margin:10px; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); padding-top:30px;"><div style="width:300px; text-align:center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                    <p style="font-size: larger; color:rgba(0,0,0,.87);">It seems your query has not returned any substantial results.</p>
                                    <p style="font-size: smaller; margin-top:5px; color:rgba(0,0,0,.87);">Double check your spelling and try a more broad term or filter for better results.</p>
                               </div></div>`;
        }
        else {
            
            row.innerHTML = row.innerHTML + '<p style="font-size:22px; padding:10px;">'+jsonArr["count"]+' research ideas for "'+getPara()["q"]+'" <span id="save_idea_desktop_btn" style="float:right; margin-right:25px; font-size:16px; margin-top:8px;">Save Idea</span></p>';
        
            row.innerHTML = row.innerHTML + '<div style="overflow-x:auto; width:96%; background:white; height:300px; margin:10px; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); padding-top:30px;"> <center><canvas id="canvas" style=""></canvas></center></div>';
            add_word_cloud(jsonArr["word_cloud"]);
            
        }
    
    
        var counter = 1;
    
        for (var key in jsonArr["keywords"]) {
             var cat = key;
             var kw_arr = jsonArr["keywords"][key];
             
             var col = document.createElement("div");
             col.style.backgroundColor = "white";
             col.style.margin = "10px";
             col.style.padding = "10px";
             col.style.paddingTop = "20px";
             col.style.paddingLeft = "30px";
             col.style.minHeight = "200px";
             col.style.width = "96%";
             col.style.height = (kw_arr.length * 40) + "px"; // dynamic height based on number of keywords
             col.style.overflowX = "auto";
             col.id = "col_"+counter;
             col.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)";
             col.className = "col";
             col.style.visibility= "hidden";
    
             var word_tree_arr = [];
             var word_tree_node_id_start = counter + 3;
             var word_tree_node_id_end = word_tree_node_id_start + kw_arr.length;
    
             kw_arr.forEach(function (k){
                word_tree_arr.push( [counter, k, 0, 1, "black"] );
                counter++;
             })
            
             //console.log("----");
             //console.log(word_tree_node_id_start);
             //console.log(word_tree_node_id_end);
             
             row.append(col);
    
             add_word_tree(cat, word_tree_arr, col.id);

        }
        
        document.getElementById('save_idea_desktop_btn').innerHTML = 'Save Idea';
    document.getElementById('save_idea_mobile_btn').innerHTML = 'Save Idea';
    
        save_idea();

    }
    catch {
        //console.clear();
        //console.log("some error has occured");
        
        var no_data_message =  `<div style="width:98%; background:white; height:300px; margin:10px; box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); padding-top:30px;"><div style="width:300px; text-align:center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                    <p style="font-size: larger; color:rgba(0,0,0,.87);">It seems your query has not returned any substantial results.</p>
                                    <p style="font-size: smaller; margin-top:5px; color:rgba(0,0,0,.87);">Double check your spelling and try a more broad term or filter for better results.</p>
                               </div></div>`;

        document.getElementById('row').innerHTML = no_data_message;
    }
       

    
    function mobile_ideas(){
        var cols = document.querySelectorAll(".col");
        cols.forEach(function (col){        
            var textEls = col.querySelectorAll("text");
            var node_texts = jsonArr["keywords"][ textEls[0].innerHTML ];
            var kws = "";
            col.style.height = "auto";
            kws += "<h3>" + node_texts[0][0] + "</h3><br>";
            for (var i = 1; i < textEls.length; i++){
                kws += "<p style='margin-bottom:10px;'>" + node_texts[i-1].replace(/[?.]$/, "") + "</p>";
            }
            
            kws += "<br>";
            col.innerHTML = kws;
            col.style.visibility= "visible";

            //console.log( jsonArr["keywords"][ textEls[0].innerHTML ] );
        });
    }
    
    
    function desktop_ideas(){
        var cols = document.querySelectorAll(".col");
        cols.forEach(function (col){        
            var textEls = col.querySelectorAll("text");
            var node_texts = jsonArr["keywords"][ textEls[0].innerHTML ];

            for (var i = 1; i < textEls.length; i++){
                textEls[i].style.width = "500px";
                textEls[i].innerHTML = node_texts[i-1].replace(/[?.]$/, "");     

                //prevent tooltip
                textEls[0].style.pointerEvents = "none"; 
                textEls[i].style.pointerEvents = "none";       
                textEls[i].style.webkitUserSelect = "text";
                textEls[i].style.mozUserSelect = "text";
                textEls[i].style.userSelect = "text";
            }
            
            col.style.visibility= "visible";

            //console.log( jsonArr["keywords"][ textEls[0].innerHTML ] );
        });
    }
    
  
    function myFunction(x) {
      if (x.matches) { // If media query matches
            setTimeout(function (){ mobile_ideas(); }, 2000);
      } 
      else {
            setTimeout(function (){ desktop_ideas(); }, 2000); 
      }
    }
    
    var x = window.matchMedia("(max-width: 500px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes


}

//-------------------------------------
// get get_keyword_ideas end
//-------------------------------------


//-------------------------------------
// add loader function start
//-------------------------------------

function add_loader() {

    const graphContainers = document.querySelectorAll('.row');

    graphContainers.forEach(function(graphContainer) {
        graphContainer.style.position = "relative";
        graphContainer.style.backgroundColor = "white";
        graphContainer.style.marginTop = "20px";
        graphContainer.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)";
        
        const loader = document.createElement('div');
        loader.className = 'loader';
        graphContainer.innerHTML = "";
        graphContainer.insertAdjacentElement('afterbegin', loader);
        loader.style.position = 'absolute';
        loader.style.top = '33%';
        
        if (window.innerWidth < 525) {
            loader.style.left = '40%';
        } 
        
        else {
            loader.style.left = '45%';
        }
    });
}

//-------------------------------------
// add loader function end
//-------------------------------------

//-------------------------------------
// word cloud
//-------------------------------------
function add_word_cloud(kw_array) {
  function myFunction(x) {
    var canvas = document.getElementById("canvas");
    const ratio = window.devicePixelRatio;
    if (x.matches) {
      canvas.width = 300 * ratio;
      canvas.height = 125 * ratio;
    } else {
      canvas.width = 600 * ratio;
      canvas.height = 250 * ratio;
    }
    canvas.style.width = canvas.width / ratio + "px";
    canvas.style.height = canvas.height / ratio + "px";
    canvas.getContext("2d").scale(ratio, ratio);
  }

  var x = window.matchMedia("(max-width: 1030px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes

  WordCloud(document.getElementById('canvas'), {
    list: kw_array,
    fontFamily: 'roboto',
    fontWeight: 'normal',
    color: 'random-dark',
    minSize: 0, // 0 to disable
    weightFactor: 1,
    clearCanvas: true,
    backgroundColor: '#fff', // opaque white = rgba(255, 255, 255, 1)
    gridSize: 8,
    drawOutOfBound: false,
    shrinkToFit: false,
    origin: null, // origin of the wordcloud in [x, y]
    drawMask: false, // visualize the grid
    maskColor: 'rgba(255,0,0,0.3)',
    maskGapWidth: 0.8,
    wait: 0,
    abortThreshold: 0, // disabled
    abort: function noop () {},
    minRotation: -Math.PI / 2,
    maxRotation: Math.PI / 2,
    rotationSteps: 0,
    shuffle: true,
    rotateRatio: 0.1,
    // circle, cardioid, diamond, square, triangle-forward, 
    // triangle, pentagon, and star
    shape: 'square',
    ellipticity: 0.65,
    // allows the user to define the class of the span elements
    classes: null,
    // callback
    hover: null,
    click: null
  });
}

//------------

function add_word_cloud2(){
    // List of words
    var myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {word: "Climbing", size: "50"}, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"} ]
    
    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 450 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
    
    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    var layout = d3.layout.cloud()
      .size([width, height])
      .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
      .padding(5)        //space between words
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .fontSize(function(d) { return d.size; })      // font size of words
      .on("end", draw);
    layout.start();
    
    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
      svg
        .append("g")
          .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
          .selectAll("text")
            .data(words)
          .enter().append("text")
            .style("font-size", function(d) { return d.size; })
            .style("fill", "#69b3a2")
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function(d) {
              return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}

add_word_cloud2()

//----------------------------
// Add add_word_tree()
//----------------------------
function add_word_tree(root,child_arr,con){
      
      google.charts.load('current', {packages:['wordtree']});
      google.charts.setOnLoadCallback(drawSimpleNodeChart);
      function drawSimpleNodeChart() {
        
        var data_arr = [
            ['id', 'childLabel', 'parent', 'size', { role: 'style' }],
            [0, root, -1, 1, 'black'],
          ]

          for (var i = 0; i < child_arr.length; i++){
          		data_arr.push(child_arr[i]);
          }
        
        var nodeListData = new google.visualization.arrayToDataTable(data_arr);

        var options = {
          colors: ['black', 'black', 'black'],
          wordtree: {
            format: 'explicit',
            type: 'suffix',
          },
          fontName:'robot',
          maxFontSize:27,
        };


        var wordtree = new google.visualization.WordTree(document.getElementById(con));
        wordtree.draw(nodeListData, options);
      }
      
}
//----------------------------
// end of add_word_tree()
//----------------------------


//----------------------------
// save ideas logic
//----------------------------

function save_idea(){
    
    if (document.querySelector("#sign_up").innerText !="Sign up"){
        check_saved_idea();
    }
    if (document.getElementById("save_idea_desktop_btn") != null){
        document.getElementById("save_idea_desktop_btn").onclick = function (){
            if (document.querySelector("#sign_up").innerText !="Sign up"){
                this.innerHTML = "Saving";
                var title = document.getElementById("q").value;
        
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "/saved_item.php?t=idea_sav&title=" + encodeURIComponent(title), true);
                xhr.onreadystatechange = function() {
                     if (xhr.readyState === 4 && xhr.status === 200) {
                        // The record was successfully deleted
                        // Remove the deleted study from the UI
                        document.getElementById("save_idea_desktop_btn").innerHTML = "Saved";
                      }
                };
                xhr.send();
            }
            else {
                alert("Please Sign in to save your favourite Research Ideas");
            }
        }
    }
    
    if (document.getElementById("save_idea_mobile_btn") != null){
        document.getElementById("save_idea_mobile_btn").onclick = function (){
            if (document.querySelector("#sign_up").innerText !="Sign up"){
                this.innerHTML = "Saving";
                var title = document.getElementById("q").value;
        
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "/saved_item.php?t=idea_sav&title=" + encodeURIComponent(title), true);
                xhr.onreadystatechange = function() {
                     if (xhr.readyState === 4 && xhr.status === 200) {
                        // The record was successfully deleted
                        // Remove the deleted study from the UI
                        document.getElementById("save_idea_mobile_btn").innerHTML = "Saved";
                      }
                };
                xhr.send();
            }
            else {
                alert("Please Sign in to save your favourite Research Ideas");
            }
        }
    }
        
}




function check_saved_idea(){
    var xhr = new XMLHttpRequest();
    var title = document.getElementById("q").value;
    xhr.open('GET', 'https://researchlytic.com/saved_item.php?t=idea_check&title=' + title, true);
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = xhr.responseText;
        if (response == 'true') {
          //console.log('Title already exists in the database');
          document.getElementById('save_idea_desktop_btn').innerHTML = 'Saved';
          document.getElementById('save_idea_mobile_btn').innerHTML = 'Saved';
        } else if (response == 'false') {
          //console.log('Title does not exist in the database');
        }
      }
    };
    
    xhr.send();

}

console.clear();



