let grievanceSeo = {
  "overview-description": {
    "title": "GRC-grievance-redressal-cell ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "As per the directions of AICTE and Gazette of India, the Grievance Redressal Cell has been formed to address the grievances, complaints, malpractices and problems."
  },
  "emp-commitee-description": {
    "title": "GRC-employee-committee-member ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Central level Grievance Redressal Committee for Employee."
  },
  "student-commitee-description": {
    "title": "GRC-student-committee-member ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Central level Grievance Redressal Committee for Student."
  },
  "grc-process-description": {
    "title": "GRC-process ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Grievance Redressal Cell Process Any Person raising a request should register the grievance/ complaint through the grievance redressal portal link."
  },
}
function getTarget(){


  const queryString = this.getAttribute("href"); 
  target =  queryString.split("#")[1]
  if(target){
  const paddingElements = document.getElementsByClassName("padding");
  for (let i = 0; i < paddingElements.length; i++) {
    paddingElements[i].style.display = "none";
  }
 
  const targetElement = document.getElementById(target);

  if (targetElement) {
    targetElement.style.display = "block";
  }

  const leftMenu = document.getElementsByClassName("tab-bar-heading");
  console.log(leftMenu[0].childNodes.length);
  for (let i = 0; i < leftMenu.length; i++) {
    if(leftMenu[i].classList.contains("selected-section")){
      leftMenu[i].classList.remove("selected-section")
    }
    if(leftMenu[i].hash==queryString){
      leftMenu[i].classList.add("selected-section");
    }
  }
}else{
  const paddingElements = document.getElementsByClassName("padding");
  for (let i = 1; i < paddingElements.length; i++) {
    paddingElements[i].style.display = "none";
  }
}
}



$(document).ready(function () {
  const tabBarHeadings = document.querySelectorAll(".tab-bar-heading");
tabBarHeadings.forEach(function (tabBarHeading) {
  tabBarHeading.addEventListener("click", getTarget);
});

  // to update the meta title and description
  if (grievanceSeo.hasOwnProperty(target)) {
    document.title = grievanceSeo[target].title;
    $('meta[name="description"]').attr('content', grievanceSeo[target].description);
  }
  
  


});

