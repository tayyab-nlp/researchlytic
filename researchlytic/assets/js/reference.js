//------------------------
// content logic
//------------------------

function content_logic(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const q = urlParams.get('q');
    
    if (window.location.href!="https://researchlytic.com/reference-manager/" && !q) {
        window.location = "/reference-manager/";
    } 
    
    if (window.location.href.includes("https://researchlytic.com/reference-manager/") && q) {
        window.location.href = "/references?q=" + encodeURIComponent(q);
    } 
    
}

//content_logic();
        
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
    var current_page = document.querySelector(".current_page");

    var para_obj = {};

    var kw = q.value;
    var trend = country_btn.innerText;
    var period = period_btn.innerText;
    var subject = subject_btn.innerText;
    var type = type_btn.innerText;

    if (document.querySelector(".current_page") == null){
        var c_page = 1;
    }
    else {
        var c_page = document.querySelector(".current_page").innerText;
    }
    
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
    

    if (params.cp!=undefined){
        para_obj["cp"] = params.cp;
        ////console.log("url_p "+params.cp);
    }
    else {
        para_obj["cp"] = c_page;
        ////console.log("url_pp "+params.cp)
    }
    
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
});


q_icon = document.getElementById('q_icon');
q_icon.addEventListener('click', () => {
  document.getElementById("apply_filter_btn").click();
  //console.log("q icon clicked");
});

var filter_btn = document.getElementById("apply_filter_btn");

filter_btn.onclick = function (){
	
    var q = document.getElementById("q");
	if (window.location.href == "https://researchlytic.com/reference-manager/"){
	    if (q.value.trim() !== "") {
          window.location.href = "/references?q=" + encodeURIComponent(q.value);
        }
	}
	
	//add laoder
    add_loader();

    ////console.log(getPara());
	
	var newUrl = "https://researchlytic.com/references/?q="+getPara().q.replace(/ /g,"-")+"&td="+getPara().t+"&pd="+getPara().pd+"&sub="+getPara().s+"&typ="+getPara().tp+"&cp=1";

    newUrl = newUrl.replace("&td=WW","").replace("&pd=2000","").replace("&sub=all","").replace("&typ=all","").replace("&cp=1","");

    history.pushState({}, document.title, newUrl)
	 
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
        q.value  = decodeURIComponent(params.q).replace(/-/g," ");
    }
    country_btn.innerHTML  = country_obj_new[params.td.toUpperCase()];
    period_btn.innerHTML    = period_obj_new[params.pd.toLowerCase()];
    subject_btn.innerHTML = subject_obj_new[params.sub.toLowerCase()];
    type_btn.innerHTML  = type_obj_new[params.typ.toLowerCase()];

    getPara(); // get parameters from url
    
	 
    if (params.q != null){
        if (is_onpopstate){ // is forward/backward nav, do not set last end state
            // check for data and show keywords
            get_papers();
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

    get_papers();
    
} 

//---------------------------------------
// check for data end
//---------------------------------------



//---------------------------------------
// check for data start
//---------------------------------------
function check_for_data (){

    // check for and get papers
    get_papers();
} 

//---------------------------------------
// check for data end
//---------------------------------------

//---------------------------------------
// check for data end
//---------------------------------------

//-------------------------------------
// get get_papers start
// also check for data if exists
//-------------------------------------

async function get_papers() {
        
    // fetch data from api
    var url = "https://api.researchlytic.com/literature.php?q="+getPara()["q"]+"&td="+getPara()["t"].toLowerCase()+"&ys="+getPara()["ys"]+"&ye="+getPara()["ye"]+"&sub="+getPara()["s"]+"&typ="+getPara()["tp"];
    const response = await fetch(url);
    const jsonArr = await response.json();

    ////console.log(getPara()["cp"]);

    var numPages = Math.ceil(jsonArr.length / 5);
    
    if (numPages == 1 && getPara()["cp"]==1 ){
        display_papers(jsonArr, 0, jsonArr.length);
    }
    
    else if (numPages > 1 && getPara()["cp"] <= numPages && getPara()["cp"]==1 ){
        display_papers(jsonArr, 0, 5);
    }
    else if ( getPara()["cp"] <= numPages && getPara()["cp"]==2 ){
        display_papers(jsonArr, 5, 10);
    }
    else if ( getPara()["cp"] <= numPages && getPara()["cp"]==3 ){
        display_papers(jsonArr, 10, 15);
    }
    else if ( getPara()["cp"] <= numPages && getPara()["cp"]==4 ){
        display_papers(jsonArr, 15, 20);
    }
    else if ( getPara()["cp"] <= numPages && getPara()["cp"]==5 ){
        display_papers(jsonArr, 20, 25);
    }
    else {
        //alert("Invalid cp parameter in URL");
        console.clear();
        var no_data_message =  `<div style="width:300px; text-align:center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                    <p style="font-size: larger; color:rgba(0,0,0,.87);">It seems your query has not returned any substantial results.</p>
                                    <p style="font-size: smaller; margin-top:5px; color:rgba(0,0,0,.87);">Double check your spelling and try a more broad term or filter for better results.</p>
                               </div>`;
  
        document.getElementById('row').innerHTML = no_data_message;
    }

    // remove active class from all other pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('current_page');
        page.style.fontWeight = "normal";
        page.style.color = "#5e6d55";
    });

    // first page active as default
    ////console.log("ap_cp "+getPara().cp);

    if (document.getElementById(getPara().cp)){
        document.getElementById(getPara().cp).classList.add("current_page");
        document.getElementById(getPara().cp).style.fontWeight = "bold";
        document.getElementById(getPara().cp).style.color = "#000000";
    }
    

}

//-------------------------------------
// get get_papers() end
//-------------------------------------

function display_papers(jsonArr, i_start, i_end){
    var row = document.getElementById("row");
    //row.style.backgroundColor = "#f0f2f5";
    row.style.marginTop = "2px";
    row.style.boxShadow = "none";
    row.innerHTML = ""; 
    
    var count = 0;
    
    if (Number(jsonArr[0]["results"]) > 5){
        count = jsonArr[0]["results"];
    }
    else {
        count = jsonArr.length;
    }
    
    row.innerHTML = row.innerHTML + '<p style="font-size:19px; padding:10px; padding-left:4px">'+formatNumber(count)+' results for "'+getPara()["q"]+'"</p>';

    for (var i = i_start; i < i_end; i++){
        
        var type = jsonArr[i]["type"];  
        type = type.charAt(0).toUpperCase() + type.slice(1); // make first letter capital
        var is_oa = jsonArr[i]["is_oa"];
        var title = jsonArr[i]["title"];
        var id = jsonArr[i]["id"];
        var journal = jsonArr[i]["journal"];
        var year = jsonArr[i]["year"];
        var authors = jsonArr[i]["authors"];
        var url = "";

        if (is_oa){
            url = jsonArr[i]["oa_url"];
        }
        else {
            url = jsonArr[i]["doi"];
        }

        ////console.log(title);

        var col = document.createElement("div");
        col.style.backgroundColor = "white";
        //col.style.margin = "10px";
        col.style.padding = "10px";
        col.style.paddingTop = "15px";
        col.style.paddingBottom = "15px";
        col.style.border = "1px solid lightgray"
        col.style.borderTop = "none";

        if (i == 0){
            col.style.borderTop = "1px solid lightgray";
            col.style.borderBottom = "1px solid lightgray";
        }
        
        col.style.height = "auto";
        //col.style.maxWidth = "800px";
        //col.style.boxShadow = "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)";

        if (type!=""){
            col.innerHTML += "<span class='type'>"+type+"</span>";
        }

        if (is_oa){
            col.innerHTML += "<span class='access'><span class='bubble'></span> Open access</span>";
        }
        
        col.innerHTML += "<p class='title' id='study_"+i+"'><a class='title_anchor' href='"+url+"'>"+title+"</a></p>";

        col.innerHTML += "<p class='author_string' style='font-size:14px; font-weight:400; margin-top:1px; margin-bottom:1px; color:#006621; padding:5px;'>"+journal+" - "+authors+" - "+year+"</p>";
        
 

        // add action button

         col.innerHTML += "<hr style='margin-top:5px; margin-bottom:2px; display: block; height: 1px; border: 0; border-top: 1px solid #ffffff;'>";

        col.innerHTML += "<span class='cite_btn'>Cite</span>";
        col.innerHTML += "<span class='save_btn' style='display:none'>Save</span>";
        col.innerHTML += "<span class='study_id' style='display:none'>"+id+"</span>";

        col.innerHTML += "<span class='custom_btn save_btn'  style='float:right;  color:gray; display:none;  margin-top:30px'>Custom Style</span>";
        col.innerHTML += "<span class='harvard_btn save_btn'  style='float:right; color:gray; display:none;  margin-top:30px'>Harvard</span>";
        col.innerHTML += "<span class='mla_btn save_btn'  style='float:right;  color:gray; display:none;  margin-top:30px'>MLA</span>";
        col.innerHTML += "<span class='apa_btn save_btn'  style='float:right;  display:none; text-decoration:underline; margin-top:30px'>APA</span>";

        row.append(col);
        
        //check_saved_study("study_"+i);
        cite_studies();
        save_studies();

    }

    
    // create pagination
    const numPages = Math.ceil(jsonArr.length / 5);
    
    row.innerHTML += "<hr style='margin-top:5px; margin-bottom:2px; display: block; height: 1px; border: 0; border-top: 1px solid #ffffff;'>";

    // previous page
    var prev_page = document.createElement("a");
    prev_page.classList.add('page');
    row.append(prev_page);
    prev_page.id = "previous";
    prev_page.innerHTML = "<";
    prev_page.onclick = function (){
        var current_p = document.querySelector(".current_page");
        var prev_pg_id = current_p.previousElementSibling.id;
        if (prev_pg_id != "previous"){
            document.getElementById(Number(prev_pg_id)).click();
            ////console.log(prev_pg_id );
        }
        else {
            ////console.log("First page");
        }
    }

    // pagintation page numbers
    for (var i = 0; i < numPages; i++) {   
        var page = document.createElement("a");
        page.classList.add('page');
        row.append(page);

        page.id = i + 1;
        page.innerHTML = i + 1;
        active_page(jsonArr, page.id, (page.id*5)-5,  (page.id*5) ); 
    }

    // next page
    var next_page = document.createElement("a");
    next_page.classList.add('page');
    row.append(next_page);
    next_page.id = "next";
    next_page.innerHTML = ">";
    next_page.onclick = function (){
        var current_p = document.querySelector(".current_page");
        var next_pg_id = current_p.nextElementSibling.id;
        if (next_pg_id != "next"){
            document.getElementById(Number(next_pg_id)).click();
            ////console.log(next_pg_id );
        }
        else {
            ////console.log("Last page");
        }
    }
    
    save_studies();
    cite_studies();


}
// end of show_papers

function active_page(jsonArr, page_id, i_start, i_end){
        document.getElementById(page_id).onclick = function (){ 
            row.innerHTML = ""; 
            display_papers(jsonArr, i_start, i_end);
            
            // update url 
            var newUrl = "https://researchlytic.com/references/?q="+getPara().q.replace(/ /g,"-")+"&td="+getPara().t+"&pd="+getPara().pd+"&sub="+getPara().s+"&typ="+getPara().tp+"&cp="+page_id;

            newUrl = newUrl.replace("&td=WW","").replace("&pd=2000","").replace("&sub=all","").replace("&typ=all","").replace("&cp=1","");

            history.pushState({}, document.title, newUrl);

            window.scrollTo({top: 0, behavior: 'smooth'});

            // remove active class from all other pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('current_page');
                page.style.fontWeight = "normal";
                page.style.color = "#5e6d55";
            });

            // first page active as default
            ////console.log("ap_cp "+getPara().cp);
            document.getElementById(getPara().cp).classList.add("current_page");
            document.getElementById(getPara().cp).style.fontWeight = "bold";
            document.getElementById(getPara().cp).style.color = "#000000";

        }
}
    
    function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//-------------------------------------
// add loader function start
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
        } else {
            loader.style.left = '45%';
        }
    });
}

//-------------------------------------
// add loader function end
//-------------------------------------

function save_studies(){
    var save_btns = document.querySelectorAll(".save_btn");

    save_btns.forEach(function (btn){
        btn.onclick = function (){
            ////console.log(btn.parentElement.querySelector(".title").innerText);
            if (document.querySelector("#sign_up").innerText !="Sign up"){
                this.innerHTML = "Saving";
                var title = btn.parentElement.querySelector(".title").innerText;
    
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "/saved_item.php?t=cite_sav&title=" + encodeURIComponent(title), true);
                xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                    // The record was successfully deleted
                    // Remove the deleted study from the UI
                    btn.innerHTML = "Saved";
                  }
                };
                xhr.send();
            }
            else {
                alert("Please Sign in to save your favourite references");
            }
            
        }
    })
}

function check_saved_study (id){
    
    if (document.querySelector("#sign_up").innerText !="Sign up"){
        var xhr = new XMLHttpRequest();
        var study = document.getElementById(id);
        xhr.open('GET', 'https://researchlytic.com/saved_item.php?t=cite_check&title=' + study.innerText, true);
        
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = xhr.responseText;
            if (response == 'true') {
              document.getElementById(id).parentElement.querySelector(".save_btn").innerHTML = "Saved"
            } else if (response == 'false') {
              ////console.log('Title does not exist in the database');
            }
          }
        };
        
        xhr.send();
    }
}


function cite_studies(){
    var cite_btns = document.querySelectorAll(".cite_btn");

    cite_btns.forEach(function (btn){
        btn.onclick = function (){
            this.innerHTML = "Citing";
            var id = btn.parentElement.querySelector(".study_id").innerText;
            //console.log(id);
            
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.researchlytic.com/reference.php?q=' + id, true);
            
            xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = xhr.responseText;
                //console.log(response);
                var parent = btn.parentElement;
                parent.querySelector(".title").innerHTML = response;
                parent.querySelector(".title").setAttribute('style', 'color:black !important');
                parent.querySelector(".author_string").style.display = "none";

                if (parent.querySelector(".access") != null){
                    parent.querySelector(".access").style.display = "none";
                }
                btn.style.display = "inline-block";
                parent.querySelector(".save_btn").style.display = "inline-block";
                parent.querySelector(".save_btn").style.marginTop = "30px";

                if (parent.querySelector(".type") != null){
                    parent.querySelector(".type").style.display = "none";
                }
                
                btn.style.display = "none";
                parent.querySelector(".apa_btn").style.display = "inline-block";
                parent.querySelector(".mla_btn").style.display = "inline-block";
                parent.querySelector(".harvard_btn").style.display = "inline-block";
                parent.querySelector(".custom_btn").style.display = "inline-block";
                
                parent.querySelector(".mla_btn").onclick = function (){ alert("This feature is under construction.") }
                parent.querySelector(".harvard_btn").onclick = function (){ alert("This feature is under construction.") }
                parent.querySelector(".custom_btn").onclick = function (){ alert("This feature is under construction.") }
                
                check_saved_study(btn.parentElement.querySelector(".title").id);
              }
            };
            
            xhr.send();
            
    
        }
    })
}



console.clear();










