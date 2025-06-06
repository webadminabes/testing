var ELCESeo = {
    "overview-description": {
      "title" : "The best ELCE engineering college in Ghaziabad, Delhi NCR, India",
      "description" : "ABES is the best ELCE engineering college among recognized institutes in Ghaziabad, UP and Delhi NCR, India."
    },
    "about-description": {
      "title" : "ELCE-about ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "To create globally competent ELCE engineers capable of working in an interdisciplinary environment, contributing to society through innovation."
    },
    "hod-description": {
      "title" : "ELCE-hod-messege ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "ELCE Engineering has been traditionally thought of as a professional discipline, applying principles from engineering, physics in design and analysis, manufacturing of ELCE systems, and the associated transfer and flow of energies."
    },
    "faculty-description": {
      "title" : "ELCE Faculty",
      "description" : "ELCE Department - Faculty Members best faculty in NCR."
    },
    "infrastructure-description": {
      "title" : "ELCE-infrastructure ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "ELCE Workshop Lab/Manufactring Process Lab Engineering Graphics & Design Lab."
    },
    "achievements-description": {
      "title" : "ELCE-achievements ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "GATE Rank Holder 2020 ABES Engineering College ."
    },
    "events-description": {
      "title" : "ELCE-event ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "Latest trends in Industry 4.0 in Automobile Sector - Future trends students should follow to succeed in industry."
    },
    "magazine-description": {
      "title" : "ELCE-magazine ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "ABES Engineering College ELCE 2021"
    },
    "gallery-description": {
      "title" : "ELCE-gallery ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "Gallery of ELCE engineering at ABES Engineering College"
    },
    "publications-description": {
      "title" : "ELCE-publication ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "ELCE Department - Publications ABES Engineering College is one of the best college in NCR."
    },
    "consultancy-description": {
      "title" : "ELCE-consultancy ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "School of Manufacturing skills,Bhartiya Skill Development University, Jaipur (BSDU)."
    },
    "industry-connect-description": {
      "title" : "ELCE-industry-connects ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "General Manager and Head of the Department, Diesel Engine ."
    },
    "training-description": {
      "title" : "ELCE-training ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : "Established in the year 2003, department nurtures professional excellence of 120 UG students in every year under its aegis."
    },
    "tech-society-description": {
      "title" : "ELCE-techsociety ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : " The Indian Institute of Welding (IIW-India) was incorporated on the 22nd April, 1966 at Calcutta to foster the development of welding science, technology and engineering in India and since then has been serving the cause of the welding."
    },
    "faq-description": {
      "title" : "ELCE-department-FAQ ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
      "description" : " The department of ELCE engineering was established in year 2003."
    }
  }
  
  $(document).ready(function () {
    // tab switching function
    $(".tab-bar-heading").click(function () {
      if(window.innerWidth>450){
        // $('html, body').animate({scrollTop:0});
      }
      $(".padding").hide();
      $(this).addClass("selected-section")
      $(".tab-bar-heading").not(this).removeClass("selected-section");
      var target = $(this).data("target");
      $("#" + target).show();
      AOS.refresh()
      // console.log(AOS) 
      // to update the meta title and description
      if (ELCESeo.hasOwnProperty(target)) {
        document.title = ELCESeo[target].title;
        $('meta[name="description"]').attr('content', ELCESeo[target].description);
      }
  })});
  
  function getTarget() {
    const queryString = window.location.hash;
    target =  queryString.split("#")[1]
  
    console.log("target", target)
    
    if(target){
      const paddingElements = document.getElementsByClassName("padding");
      for (let i = 0; i < paddingElements.length; i++) {
        paddingElements[i].style.display = "none !important";
      }
      const targetElement = document.getElementById(target);
  
      if (targetElement) {
        targetElement.style.display = "block !important";
      }
      AOS.refresh()
  
      const leftMenu = document.getElementsByClassName("tab-bar-heading");
      for (let i = 0; i < leftMenu.length; i++) {
        if(leftMenu[i].classList.contains("selected-section")){
          leftMenu[i].classList.remove("selected-section")
        }
        if(leftMenu[i].hash==queryString){
          leftMenu[i].classList.add("selected-section");
        }
      }
      // if (admissionsSeo.hasOwnProperty(target)) {
      //   document.title = admissionsSeo[target].title;
      //   $('meta[name="description"]').attr('content', admissionsSeo[target].description);
      // }
  }
  }
  
  $(document).ready(function () {
    window.addEventListener('hashchange', () => {
      getTarget()  
      if (handelOverlayLeave){
        handelOverlayLeave()
      }
    })
  });
  
  
  if(window.innerWidth < 768){
    // $(".selection-menu").on("click", function() {
    //     // Set the style of "#top-menu-mob" to make it visible
    //     $("#top-menu-mob").css("display", "flex");
    //     // $(".padding").hide()
    // });
  
    $(".selection-menu").on("click", function() {
      var dropdownDiv = document.getElementById('top-menu-mob');
      var triggerElementRect = this.getBoundingClientRect();
      dropdownDiv.style.top = (triggerElementRect.bottom + window.scrollY + 10) + 'px';
      // dropdownDiv.style.left = (document.documentElement.clientWidth - 300)/2 + 'px';
      console.log("triggerElementRect.right - 275 - 16", triggerElementRect.right - 275 - 16)
      if (triggerElementRect.right - 275 - 16 <= 0){
        dropdownDiv.style.left = '1rem';
      } else{
        dropdownDiv.style.right = (document.documentElement.offsetWidth - triggerElementRect.right) + 'px';
        
      }
  
      
      dropdownDiv.style.display = (dropdownDiv.style.display === 'flex' ? 'none' : 'flex');
    });
  
    document.addEventListener('click', function (event) {
      var dropdownDiv = document.getElementById('top-menu-mob');
      if(dropdownDiv.style.display === 'flex'){
        if (event.target.className !== "selection-menu" && event.target.className !==  'fa-solid fa-angle-down' && event.target !== dropdownDiv) {
          dropdownDiv.style.display = 'none';
          // document.body.classList.remove('disable-scroll');
        }
      }
    
    });
  }
  
      
  
    
    