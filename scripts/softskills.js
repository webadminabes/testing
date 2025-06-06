// let softSkillsSeo = {
//     "overview-description": {
//         "title": "",
//         "description": ""
//     },
//     "seep-team": {
//         "title": "",
//         "description": ""
//     }
// }

$(document).ready(function () {
    // tab switching function
    $(".tab-bar-heading").click(function () {
      $('html, body').animate({scrollTop:0});
      $(".padding").hide();
      $(this).addClass("selected-section")
      $(".tab-bar-heading").not(this).removeClass("selected-section");
      var target = $(this).data("target");
      $("#" + target).show();
  
//     // to update the meta title and description
//     if (grievanceSeo.hasOwnProperty(target)) {
//       document.title = grievanceSeo[target].title;
//       $('meta[name="description"]').attr('content', grievanceSeo[target].description);
//     }
    })});