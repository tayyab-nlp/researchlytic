
//-------------------------
// Demo play button
//--------------------------

if (document.getElementById("demo_play_btn") != null){
    var demo_play_btn = document.getElementById("demo_play_btn");
    demo_play_btn.onclick = function () {
        var video = document.getElementById("demo_video");
        video.currentTime = 0;
        video.play();
    }
}


if (document.getElementById("demo_video") != null){
    var video = document.getElementById("demo_video");
     // hide watch demo button on video stop
    video.addEventListener("play", function() {
    	demo_play_btn.style.display = "none";
    });
    // show watch demo button on video stop
    video.addEventListener("pause", function() {
    	demo_play_btn.style.display = "inline-block";
    });
}

  
// End of play_demo();

//-------------------------
// Mobile menu button
//--------------------------

if (document.getElementById("mobile_menu_btn") != null){
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
}

/*
q_icon = document.getElementById('q_icon');
q_icon.addEventListener('click', () => {
  document.getElementById("apply_filter_btn").click();
});
*/


        document.getElementById("trend_form").addEventListener("submit", function(event) {
            event.preventDefault();
            var q = document.querySelector("#trend_q").value;
            window.location.href = "/trends?q=" + encodeURIComponent(q);
        });
        
        document.getElementById("idea_form").addEventListener("submit", function(event) {
        event.preventDefault();
        var q = document.querySelector("#idea_q").value;
        window.location.href = "/ideas?q=" + encodeURIComponent(q);
      });
      
      document.getElementById("literature_form").addEventListener("submit", function(event) {
        event.preventDefault();
        var q = document.querySelector("#literature_q").value;
        window.location.href = "/literature?q=" + encodeURIComponent(q);
      });
      
      document.getElementById("reference_form").addEventListener("submit", function(event) {
        event.preventDefault();
        var q = document.querySelector("#reference_q").value;
        window.location.href = "/references?q=" + encodeURIComponent(q);
      });
      
      if ((document.getElementById("demo_btn_ideas") != null)){
          document.getElementById("demo_btn_ideas").onclick = function (){
              document.getElementById("demo_video").src = "https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/research-ideas-generator.webp";
              document.getElementById("demo_video").alt = "Research Ideas Generator";
              
              document.querySelectorAll(".demo_btn").forEach(function (btn){
                  btn.classList.remove("demo_btn_active");
              })
              this.classList.add("demo_btn_active");
              document.getElementById("demo_btn_link").href = "/research-ideas/";
    
          }
      }
      
      if ((document.getElementById("demo_btn_ideas") != null)){
          document.getElementById("demo_btn_trends").onclick = function (){
              document.getElementById("demo_video").src = "https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/research-trends-explorer.webp";
              document.getElementById("demo_video").alt = "Research Trends Explorer";
              
              document.querySelectorAll(".demo_btn").forEach(function (btn){
                  btn.classList.remove("demo_btn_active");
              })
              this.classList.add("demo_btn_active");
              
              document.getElementById("demo_btn_link").href = "/research-trends/";
          }
      }
      
      if ((document.getElementById("demo_btn_ideas") != null)){
          document.getElementById("demo_btn_literature").onclick = function (){
              document.getElementById("demo_video").src = "https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search-scholarly-literature.webp";
              document.getElementById("demo_video").alt = "Search Scholarly Literature";
              
              document.querySelectorAll(".demo_btn").forEach(function (btn){
                  btn.classList.remove("demo_btn_active");
              })
              this.classList.add("demo_btn_active");
              document.getElementById("demo_btn_link").href = "/scholarly-literature/";
          }
      }
      
      if ((document.getElementById("demo_btn_ideas") != null)){
          document.getElementById("demo_btn_reference").onclick = function (){
              document.getElementById("demo_video").src = "https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/reference-manager.webp";
              document.getElementById("demo_video").alt = "Reference Generator";
              
              document.querySelectorAll(".demo_btn").forEach(function (btn){
                  btn.classList.remove("demo_btn_active");
              })
              this.classList.add("demo_btn_active");
              document.getElementById("demo_btn_link").href = "/reference-manager/";
          }
      }
      
//--------------------------------------------------

function search_example(example_id, example_q){
    var example = document.getElementById(example_id);
    example.onclick = function (){
        var q = document.getElementById(example_q);
        q.value = this.innerText;
    }
}

search_example("trend_example", "trend_q");
search_example("idea_example", "idea_q");
search_example("literature_example", "literature_q");
search_example("reference_example", "reference_q");


//---------------------------------------

function submitFormIfInputNotEmpty(trendIconId, trendQId, trendFormId, page) {
  const trendIcon = document.getElementById(trendIconId);
  const trendQ = document.getElementById(trendQId);
  const trendForm = document.getElementById(trendFormId);

  trendIcon.addEventListener("click", function(event) {
    event.preventDefault(); // prevent the default action of the click event
    if (trendQ.value.trim() !== "") {
      window.location.href = "/"+page+"?q=" + encodeURIComponent(trendQ.value);
    }
  });
}

submitFormIfInputNotEmpty("trend_icon", "trend_q", "trend_form", "trends");
submitFormIfInputNotEmpty("idea_icon", "idea_q", "idea_form", "ideas");
submitFormIfInputNotEmpty("literature_icon", "literature_q", "literature_form", "literature");
submitFormIfInputNotEmpty("reference_icon", "reference_q", "reference_form", "references");
//-------------------------------------


console.clear();







