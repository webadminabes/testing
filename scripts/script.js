// $(document).ready(function () {
//   $("#navbarMenu").click(function () {
//     $("#menuDropdown").slideToggle();
//   });

//   $(".close-icon").click(function () {
//     $("#menuDropdown").slideUp();
//   });

//   $(".academics-dropdown-toggle").click(function () {
//     $(".academics-dropdown").slideToggle();
//   });

//   $(document).click(function (event) {
//     if (
//       !$(event.target).closest(".navbar-items p:contains('Academics')")
//         .length &&
//       !$(event.target).closest(".academics-dropdown").length
//     ) {
//       $(".academics-dropdown").hide();
//     }
//   });

//   $(".admissions-dropdown-toggle").click(function () {
//     $(".admissions-dropdown").slideToggle();
//   });

//   $(document).click(function (event) {
//     if (
//       !$(event.target).closest(".navbar-items p:contains('Admissions')")
//         .length &&
//       !$(event.target).closest(".admissions-dropdown").length
//     ) {
//       $(".admissions-dropdown").hide();
//     }
//   });
// });

// $(document).ready(function () {
//     $("#navbarMenu").click(function () {
//       $("#menuDropdown").show();
//     });

//     $(".close-icon").click(function () {
//       $("#menuDropdown").hide();
//     });

//     $(".navbar-items p:contains('About Us')").hover(
//         function () {
//           $(".aboutus-dropdown").show();
//           $(this).addClass("dropdown-open");
//         },
//         function () {
//           $(".aboutus-dropdown").hide();
//           $(this).removeClass("dropdown-open");
//         }
//       );

//     $(".navbar-items p:contains('Academics')").hover(
//       function () {
//         $(".academics-dropdown").show();
//         $(this).addClass("dropdown-open");
//       },
//       function () {
//         $(".academics-dropdown").hide();
//         $(this).removeClass("dropdown-open");
//       }
//     );

//     $(".navbar-items p:contains('Admissions')").hover(
//       function () {
//         $(".admissions-dropdown").show();
//         $(this).addClass("dropdown-open");
//       },
//       function () {
//         $(".admissions-dropdown").hide();
//         $(this).removeClass("dropdown-open");
//       }
//     );
//   });

//   $(document).ready(function () {
//     let activeDropdown = null;

//     function showDropdown(dropdown, triggerElement) {
//       if (activeDropdown) {
//         hideDropdown(activeDropdown);
//       }
//       dropdown.show();
//       activeDropdown = dropdown;
//       activeDropdown.triggerElement = triggerElement;
//       triggerElement.addClass("dropdown-open");
//     }

//     function hideDropdown(dropdown) {
//       if (dropdown.triggerElement) {
//         dropdown.triggerElement.removeClass("dropdown-open");
//       }
//       dropdown.hide();
//       activeDropdown = null;
//     }

//     $(".navbar-items p:contains('About Us')").hover(
//       function () {
//         showDropdown($(".aboutus-dropdown"), $(this));
//       }
//     );
//     $(".aboutus-dropdown").mouseleave(function () {
//       hideDropdown($(".aboutus-dropdown"));
//     });

//     $(".navbar-items p:contains('Academics')").hover(
//       function () {
//         showDropdown($(".academics-dropdown"), $(this));
//       }
//     );
//     $(".academics-dropdown").mouseleave(function () {
//       hideDropdown($(".academics-dropdown"));
//     });

//     $(".navbar-items p:contains('Admissions')").hover(
//       function () {
//         showDropdown($(".admissions-dropdown"), $(this));
//       }
//     );
//     $(".admissions-dropdown").mouseleave(function () {
//       hideDropdown($(".admissions-dropdown"));
//     });
//   });

$(document).ready(function () {
    var dropdownTimeout;
    var hoveringDropdown = false;

    $("#navbarMenu").click(function () {
        $("#menuDropdown").show();
    });

    $(".close-icon").click(function () {
        $("#menuDropdown").hide();
    });

    function openDropdown(dropdown, menuItem) {
        clearTimeout(dropdownTimeout);
        dropdown.show();
        menuItem.addClass("dropdown-open");
    }

    function closeDropdown(dropdown, menuItem) {
        dropdownTimeout = setTimeout(function () {
            if (!hoveringDropdown) {
                dropdown.hide();
                menuItem.removeClass("dropdown-open");
            }
        }, 10);
    }

    $(".navbar-items .aboutus-dropdown-toggle").mouseenter(function () {
        openDropdown($(".aboutus-dropdown"), $(this));
    }); 

    $(".navbar-items .aboutus-dropdown-toggle").mouseleave(function () {
        closeDropdown($(".aboutus-dropdown"), $(this));
    });

    $(".aboutus-dropdown").mouseenter(function () {
        hoveringDropdown = true;
    });

    $(".aboutus-dropdown").mouseleave(function () {
        hoveringDropdown = false;
        $(this).hide();
        $(".navbar-items .aboutus-dropdown-toggle").removeClass("dropdown-open");
    });
});

$(document).ready(function () {
    var dropdownTimeout;
    var hoveringDropdown = false;

    function openDropdown(dropdown, menuItem) {
        clearTimeout(dropdownTimeout);
        dropdown.show();
        menuItem.addClass("dropdown-open");
    }

    function closeDropdown(dropdown, menuItem) {
        dropdownTimeout = setTimeout(function () {
            if (!hoveringDropdown) {
                dropdown.hide();
                menuItem.removeClass("dropdown-open");
            }
        }, 10);
    }

    $(".navbar-items .admissions-dropdown-toggle").mouseenter(function () {
        openDropdown($(".admissions-dropdown"), $(this));
    });

    $(".navbar-items .admissions-dropdown-toggle").mouseleave(function () {
        closeDropdown($(".admissions-dropdown"), $(this));
    });

    $(".admissions-dropdown").mouseenter(function () {
        hoveringDropdown = true;
    });

    $(".admissions-dropdown").mouseleave(function () {
        hoveringDropdown = false;
        $(this).hide();
        $(".navbar-items .admissions-dropdown-toggle").removeClass("dropdown-open");
    });
});

$(document).ready(function () {
    var dropdownTimeout;
    var hoveringDropdown = false;

    function openDropdown(dropdown, menuItem) {
        clearTimeout(dropdownTimeout);
        dropdown.show();
        menuItem.addClass("dropdown-open");
    }

    function closeDropdown(dropdown, menuItem) {
        dropdownTimeout = setTimeout(function () {
            if (!hoveringDropdown) {
                dropdown.hide();
                menuItem.removeClass("dropdown-open");
            }
        }, 10);
    }

    $(".navbar-items .academics-dropdown-toggle").mouseenter(function () {
        openDropdown($(".academics-dropdown"), $(this));
    });

    $(".navbar-items .academics-dropdown-toggle").mouseleave(function () {
        closeDropdown($(".academics-dropdown"), $(this));
    });

    $(".academics-dropdown").mouseenter(function () {
        hoveringDropdown = true;
    });

    $(".academics-dropdown").mouseleave(function () {
        hoveringDropdown = false;
        $(this).hide();
        $(".navbar-items .academics-dropdown-toggle").removeClass("dropdown-open");
    });
});

$(document).ready(function () {
    var dropdownTimeout;
    var hoveringDropdown = false;

    function openDropdown(dropdown, menuItem) {
        clearTimeout(dropdownTimeout);
        dropdown.show();
        menuItem.addClass("dropdown-open");
    }

    function closeDropdown(dropdown, menuItem) {
        dropdownTimeout = setTimeout(function () {
            if (!hoveringDropdown) {
                dropdown.hide();
                menuItem.removeClass("dropdown-open");
            }
        }, 10);
    }

    $(".navbar-items .training-dropdown-toggle").mouseenter(function () {
        openDropdown($(".training-dropdown"), $(this));
    });

    $(".navbar-items .training-dropdown-toggle").mouseleave(function () {
        closeDropdown($(".training-dropdown"), $(this));
    });

    $(".training-dropdown").mouseenter(function () {
        hoveringDropdown = true;
    });

    $(".training-dropdown").mouseleave(function () {
        hoveringDropdown = false;
        $(this).hide();
        $(".navbar-items .training-dropdown-toggle").removeClass("dropdown-open");
    });
});