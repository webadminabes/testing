let careerSeo = {
    "overview-description": {
        "title": "",
        "description": ""
    },
    "policy-documents": {
        "title": "CAREER-policy-document ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
        "description": "Policies of ABES Engineering College."
    },
} 

$(document).ready(function () {
    // tab switching function
    $(".tab-bar-heading").click(function () {
      $('html, body').animate({scrollTop:0});
      $(".padding").hide();
      $(this).addClass("selected-section")
      $(".tab-bar-heading").not(this).removeClass("selected-section");
      var target = $(this).data("target");
      $("#" + target).show();
  
    // to update the meta title and description
    if (careerSeo.hasOwnProperty(target)) {
      document.title = careerSeo[target].title;
      $('meta[name="description"]').attr('content', careerSeo[target].description);
    }
    });
  
  
  });