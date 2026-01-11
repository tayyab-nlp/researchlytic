<?php

/*

Template Name: Dashboard

*/

get_header("dashboard");

if (isset($_SESSION['email'])) {
/*
if (!isset($_SESSION['email'])) {
  echo "<script>location.href='https://researchlytic.com/login';</script>";
  exit;
}
*/
 

?>


<br><br>

 <style>
     body {
         background:#f0f2f5 !important;
     }
     
     #tab_con {
         max-width:1030px;
         margin:auto;
         margin-top:-25px;
     }
     
     /* Style the tab */
    .tab {
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      border-bottom:none;
    }
    
    /* Style the buttons inside the tab */
    .tab button {
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;
      font-size: 17px;
    }
    
    /* Change background color of buttons on hover */
    .tab button:hover {
      background-color: #ddd;
    }
    
    /* Create an active/current tablink class */
    .tab button.active {
      background-color: #ccc;
    }
    
    /* Style the tab content */
    .tabcontent {
      display: none;
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-top: none;
    }
    
    .list_con {
        border:1px solid #ccc; padding:10px; background:white; margin-top:10px; margin-bottom:10px; height:300px; overflow-y:auto;
    }
    
    .list_item {
        border-bottom:1px solid #ccc; padding:10px;
    }
    
    .list_link_con{
        font-size:small;
    }
    
    .list_link {
        margin-right:10px; float:right; margin-top:0px; color:#0000ee; cursor:pointer;
    }
    
    .list_link:hover {
        text-decoration:underline;
    }
 </style>
 
 <!--- Start of tab_con section --->
<div id="tab_con">
    
    <!--- Tools tab buttons start --->
    <div class="tab">
      <button class="tablinks active" onclick="openCity(event, 'tools')">Tools</button>
      <button class="tablinks" onclick="openCity(event, 'library')">Library</button>
    </div>
    <!--- Tools tab buttons end --->
    
    
    <!--- Tools tab start --->
    <div id="tools" class="tabcontent" style="display:block">
        <div id="feature_row_con">
      <div id="title_row">
        <h2 class="title3">What can you do with Researchlytic</h2>
        <br>
      </div>
      <!-- Title section end -->
      <!-- Feature section start -->
      <div id="feature_row">
        
            <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/trend_icon.webp" alt="research trends icon" />
              <h3 class="feature_col_label">Discover research trends</h3>
              <p class="feature_col_description">Uncover the latest research trends in your field, from countries and institutions, to subjects and journals, to researchers and studies.</p>
              <div class="q_row2">
                <form id="trend_form" method="get">
                  <input id="trend_q" class="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
                  <img id="trend_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Research trends" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
              </div>
              <p class="q_example">For example, <span id="trend_example">food processing</span>
              </p>
            </div>
        
        
        
        <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/idea_icon.webp" alt=" research ideas icon" />
              <h3 class="feature_col_label">Generate research ideas</h3>
              <p class="feature_col_description">Explore new research possibilities and find inspiration for your next project by generating research ideas from a seed keyword.</p>
              <div class="q_row2">
                <form id="idea_form" method="get">
                  <input id="idea_q" class="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
                  <img id="idea_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Generate research ideas" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
              </div>
              <p class="q_example">For example, <span id="idea_example">information retrieval</span>
              </p>
            </div>
            
            <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/study_icon.webp" alt="scholarly literature icon" />
              <h3 class="feature_col_label">Search scholarly literature</h3>
              <p class="feature_col_description">Easily access and search through a vast collection of scholarly literature, including articles, journals, and books.</p>
              <div class="q_row2">
               
                <form id="literature_form" method="get">
                  <input id="literature_q" class="q" type="text" placeholder="Enter a research term or a topic" autocomplete="off" />
                  <img id="literature_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Search scholarly literature" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
                
              </div>
              <p class="q_example">For example, <span id="literature_example">world peace</span>
              </p>
            </div>
            
            <div class="feature_col col">
              <img class="feature_col_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/citation_icon.webp" alt="reference manager icon" />
              <h3 class="feature_col_label">Advanced reference manager</h3>
              <p class="feature_col_description">Manage and organize your references with advanced features such as import, export, and custom reference style creation.</p>
              <div class="q_row2">
    
                <form id="reference_form" method="get">
                  <input id="reference_q" class="q" type="text" placeholder="Enter a study title" autocomplete="off" />
                  <img id="reference_icon" class="q_icon" src="https://researchlytic.com/wp-content/themes/researchlytic/assets/images/index/search_icon.webp" alt="Advanced reference manager" />
                  <input type="submit" style="display:none" value="Submit">
                </form>
                
              </div>
              <p class="q_example">For example, <span id="reference_example">federated machine learning</span>
              </p>
            </div>
        <br>
      </div>
    </div>
    
    </div>
    <!--- Tools tab end --->
    
    
    <!--- Library tab start --->
    <div id="library" class="tabcontent">
          
          <h3>Research Ideas</h3>
          <div class="list_con">
            
             <?php
             
                $con = mysqli_connect('localhost','u436423042_Researchlytic','@Tayyab786@','u436423042_rl_user_db') or die('Unable To connect');
                $email = $_SESSION['email'];
                $result = mysqli_query($con, "SELECT * FROM saved_ideas_table WHERE user_email='$email'");
                
                if (mysqli_num_rows($result) > 0) {
                  while ($row = mysqli_fetch_array($result)) {
                    $html = '<div class="list_item" id="title_'.$row["id"].'">
                                <p>' .$row['title']. '</p>
                                <p class="list_link_con">
                                	<span style="visibility:hidden">Tags: ' .$row['tag']. '</span>
                                    <a  onclick="deleteItem(' .$row["id"]. ',\'idea_del\');"><span class="list_link delete_btn">Delete</span></a>
                                    <a href="https://researchlytic.com/ideas?q=' .urldecode($row['title']). '"><span class="list_link">View</span></a>
                                </p>
                             </div>';
                         
                    echo $html;
                  }
                } else {
                  $msg = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                               <p style="text-align: center; margin: 0;">Your saved research ideas will appear here.</p>
                           </div>';
                  echo $msg;
                }

             
             ?>

          </div>
          
          
          <h3>Studies</h3>
          <div class="list_con">
            
             
             
             <?php
             
                $result = mysqli_query($con, "SELECT * FROM saved_studies_table WHERE user_email='$email'");
                
                if (mysqli_num_rows($result) > 0) {
                  while ($row = mysqli_fetch_array($result)) {
                    $html = '<div class="list_item" id="title_'.$row["id"].'">
                                <p>' .$row['title']. '</p>
                                <p class="list_link_con">
                                	<span style="visibility:hidden">Tags: ' .$row['tag']. '</span>
                                    <a  onclick="deleteItem(' .$row["id"]. ',\'study_del\');"><span class="list_link delete_btn">Delete</span></a>
                                    <a href="https://researchlytic.com/literature/?q=' .urldecode($row['title']). '"><span class="list_link">View</span></a>
                                </p>
                             </div>';
                         
                    echo $html;
                  }
                } else {
                  $msg = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                               <p style="text-align: center; margin: 0;">Your saved studies will appear here.</p>
                           </div>';
                  echo $msg;
                }

             
             ?>

          </div>
          
          
          <h3>References</h3>
          <div class="list_con">
            
             
             
             <?php
             
                $result = mysqli_query($con, "SELECT * FROM saved_references_table WHERE user_email='$email'");
                
                if (mysqli_num_rows($result) > 0) {
                  while ($row = mysqli_fetch_array($result)) {
                    $html = '<div class="list_item" id="title_'.$row["id"].'">
                                <p>' .$row['title']. '</p>
                                <p class="list_link_con">
                                	<span style="visibility:hidden">Tags: ' .$row['tag']. '</span>
                                    <a  onclick="deleteItem(' .$row["id"]. ',\'cite_del\');"><span class="list_link delete_btn">Delete</span></a>
                                    <span class="list_link lit_list_link">Copy</span>
                                </p>
                             </div>';
                         
                    echo $html;
                  }
                } else {
                  $msg = '<div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                               <p style="text-align: center; margin: 0;">Your saved references will appear here.</p>
                           </div>';
                  echo $msg;
                }

             
             ?>

          </div>
  
    </div>
    <!--- Library tab end --->
    
</div>
<!--- End of tab_con section --->

    
    <script>
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
        
        
        //------------------------------
        const links = document.querySelectorAll(".lit_list_link");
        
        links.forEach(link => {
          link.addEventListener("click", () => {
            const previousElement = link.parentElement.previousElementSibling;
            
            navigator.clipboard.writeText(previousElement.innerText);
            
            link.innerText = "Copied";
            setTimeout(() => {
              link.innerText = "Copy";
            }, 2000);
          });
        });
        //--------------------
      
      function openCity(evt, cityName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(cityName).style.display = "block";
          evt.currentTarget.className += " active";
        }
        
        
        
        function deleteItem(id,type) {
           
            document.getElementById("title_" + id).querySelector(".delete_btn").innerHTML = "Deleting";
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/saved_item.php?t="+type+"&id=" + id, true);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4 && xhr.status === 200) {
                // The record was successfully deleted
                // Remove the deleted study from the UI
                var element = document.getElementById("title_" + id); 
                element.parentNode.removeChild(element);
              }
            };
            xhr.send();
       }
       console.clear();

    </script>

<?php get_footer(); 

}
else {
    echo "<script>location.href='https://researchlytic.com/login/';</script>";
    exit;
}// end of isset email

?>
    
    
    
    
    
    
    
    