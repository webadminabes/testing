function getTarget() {
  const queryString = window.location.hash;
  target =  queryString.split("#")[1]
  
  
  // display the target element
  if(target){
  const paddingElements = document.getElementsByClassName("padding");
  for (let i = 0; i < paddingElements.length; i++) {
    paddingElements[i].style.display = "none";
  }
  const targetElement = document.getElementById(target);
  //  document.getElementsByClassName(target)[0];
  if (targetElement) {
    targetElement.style.display = "block";
  }

  // emboldening the selected tab
  const leftMenu = document.getElementsByClassName("tab-bar-heading");
  for (let i = 0; i < leftMenu.length; i++) {
    if(leftMenu[i].classList.contains("selected-section")){
      leftMenu[i].classList.remove("selected-section")
    }
    if(leftMenu[i].hash==queryString){
      leftMenu[i].classList.add("selected-section");
    }
  }
  if (admissionsSeo.hasOwnProperty(target)) {
    document.title = admissionsSeo[target].title;
    $('meta[name="description"]').attr('content', admissionsSeo[target].description);
  }
}else{
  const paddingElements = document.getElementsByClassName("padding");
  const leftMenu = document.getElementsByClassName("tab-bar-heading");
  for (let i = 0; i < leftMenu.length; i++) {
    if(leftMenu[i].hash=="#progs-offered-description"){
      leftMenu[i].classList.add("selected-section");
    }
  }

  for (let i = 1; i < paddingElements.length; i++) {
    paddingElements[i].style.display = "none";
  };

  paddingElements[0].style.display = "block";
}
}

  // var elements = document.querySelectorAll(`[data-target=${target}"]`);
  // elements[0].classList.add("selected-section");

  // $(document).ready(function () {
  //   $(".adm-pages").click(function () {
  //     console.log(this) 
  //     $(".padding").hide();
  //     $(".target").show
  //     document.getElementsByClassName("padding")[0].style.display = "none"
  //   //   $(this).addClass("selected-section")
  //   //   $(".heading").not(this).removeClass("selected-section");
  //     var target_param = target
  //     $("." + target_param).show();
  //     // window.scrollTo(0, 0);
  //     console.log(target_param)
  
  //   });
  // });
  


  $(document).ready(function(){
    getTarget()
    window.addEventListener('hashchange', () => {
      getTarget()  
      if (handelOverlayLeave){
        handelOverlayLeave()
      }
      console.log("handelOverlayLeave", handelOverlayLeave)
    })

  });



// all_links =document.getElementsByClassName("adm-pages")[0].addEventListener("click",getTarget())

// getTarget()


 