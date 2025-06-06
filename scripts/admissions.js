document.addEventListener('DOMContentLoaded', function () {
  $(".section-9").hide()
  $(".section-10").hide()

  var links = document.querySelectorAll('.sec-4-link');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      if (link.dataset.page === '1') {
        links.forEach(function (link) {
          if (link.dataset.page === '1') {
            link.style.backgroundColor = "black";
            link.style.color = "white";
          }
          else {
            link.style.backgroundColor = 'transparent';
            link.style.color = 'grey';
          }
        })

        $(".section-5 p").text("85% seats of total approved intake will be filled through Counseling based on the CUET (PG)-2025 and eligibility notified by AICTE/AKTU for the session 2025-26.")
        $(".section-6 h2").show()
        $(".section-6 .procedure").show()
        $(".section-6 hr").show()
        $(".section-6 .right p").eq(0).html('For participating in the counseling, the candidates are required to visit official website of the university <a href="https://www.aktu.ac.in">www.aktu.ac.in</a> regularly for detailed information which will be announced shortly.')
        $(".section-6 .right p").eq(1).html('After the counseling the candidate will get an Allotment letter.')
        $(".section-6 .right p").eq(2).html('Thereafter the candidate is required to visit the alloted college on the dates as mentioned in the Allotment letter for the final reporting along with the required fees and documents.')
        $(".section-6 .right p").eq(3).html('Please click the below mentioned link for the detailed information of the Fee structure (Academic & hostel) and required documents. <strong><a href="https://www.abes.ac.in/courses-offered.html">https://www.abes.ac.in/courses-offered.html</a></strong>')
        $(".section-6 .right p").eq(4).html('Before coming for the reporting to the college kindly visit the college website www.abes.ac.in to know the detailed information.')
        $(".section-7 .left_side p").text('15% of the seats will be offered to eligible candidates through direct admissions based on the guidelines of AICTE / AKTU and as per the college policy of the session 2025-26.')
        $(".section-8 .procedure").show()
        $(".section-8 h2").show()
        $(".section-8 hr").show()
        $(".section-8 .right p").eq(0).html('Candidate has to apply online through the college website<a href="https://www.abes.ac.in/courses-offered.html">https://www.abes.ac.in/courses-offered.html</a>')
        $(".section-8 .right p").eq(1).text('Institute will shortlist the candidates on the basis of their Aggregate in qualifying exam and CUET Score / Rank.')
        $(".section-8 .right p").eq(2).text('Thereafter, candidate will be called for test and interview.')
        $(".section-8 .right p").eq(3).text('On the basis of marks scored in the test and Interview. The candidate will be offered seat for the admission.')
        $(".section-9").hide()
        $(".section-10").hide()
      }
      else if (link.dataset.page === '2') {
        links.forEach(function (link) {
          if (link.dataset.page === '2') {
            link.style.backgroundColor = "black";
            link.style.color = "white";
          }
          else {
            link.style.backgroundColor = 'transparent';
            link.style.color = 'grey';
          }
        })
        $(".section-5 p").text(`Lateral Entry to Second Year under Graduate Degree Course shall be permissible up to
a maximum of 10% of the “Approved Intake” which shall be over and above,
supernumerary to the “Approved Intake”, plus the unfilled vacancies of the First year.
The seats will be filled through counselling based on the entrance exam CUETUG-2025
and eligibility notified by AICTE/AKTU for the session 2025-26.`)
        $(".section-6 h2").show()
        $(".section-6 .procedure").show()
        $(".section-6 hr").show()
        $(".section-6 .right p").eq(0).html('For participating in the written exam and counseling, the candidates are required to visit official website of the university <a href="www.aktu.ac.in">www.aktu.ac.in</a> regularly for detailed information which will be announced shortly.')
        $(".section-6 .right p").eq(1).html('After the counseling the candidate will get an Allotment letter.')
        $(".section-6 .right p").eq(2).html('Thereafter the candidate is required to visit the alloted college on the dates as mentioned in the Allotment letter for the final reporting along with the required fees and documents.')
        $(".section-6 .right p").eq(3).html('Please click the below mentioned link for the detailed information of the Fee structure (Academic & hostel) and required documents. <strong><a href="https://www.abes.ac.in/courses-offered.html">https://www.abes.ac.in/courses-offered.html</a></strong> Before coming for the reporting to the college kindly visit the college website www.abes.ac.in to know the detailed information.')
        $(".section-6 .procedure").eq(4).hide()
        $(".section-6 hr").eq(4).hide()
        $(".section-8 .procedure").show()
        $(".section-8 h2").show()
        $(".section-8 hr").show()
        $(".section-7 .left_side p").text(`Lateral Entry to Second Year under Graduate Degree Course shall be permissible up to
a maximum of 10% of the “Approved Intake” which shall be over and above,
supernumerary to the “Approved Intake”, plus the unfilled vacancies of the First year
alongwith vacant seats arising out of the students withdrawing the admission in the First
Year shall also be considered for Lateral Entry.`)
        $(".section-8 .right p").eq(0).html('Candidate has to apply online through the college website <a href="https://www.abes.ac.in/courses-offered.html">https://www.abes.ac.in/courses-offered.html</a>')
        $(".section-8 .right p").eq(1).text('Institute will shortlist the candidates on the basis of their Aggregate in qualifying exam and CUET Score / Rank.')
        $(".section-8 .right p").eq(2).text('Thereafter, candidate will be called for test and interview.')
        $(".section-8 .right p").eq(3).text('On the basis of marks scored in the test and Interview. The candidate will be offered seat for the admission.')
        $(".section-9").hide()
        $(".section-10").hide()
      }
      else if (link.dataset.page === '3') {
        links.forEach(function (link) {
          if (link.dataset.page === '3') {
            link.style.backgroundColor = "black";
            link.style.color = "white";
          }
          else {
            link.style.backgroundColor = 'transparent';
            link.style.color = 'grey';
          }
        })
        $(".section-5 p").text("85% seats of total approved intake will be filled through Counseling based on the CUET (PG)-2025 and eligibility notified by AICTE/AKTU for the session 2025-26.")
        $(".section-6 h2").show()
        $(".section-6 .procedure").show()
        $(".section-6 hr").show()
        $(".section-6 .right p").eq(0).html('For participating in the counseling, the candidates are required to visit official website of the university <a href="https://www.aktu.ac.in">www.aktu.ac.in</a> regularly for detailed information which will be announced shortly.')
        $(".section-6 .right p").eq(1).html('After the counseling the candidate will get an Allotment letter')
        $(".section-6 .right p").eq(2).html('Thereafter the candidate is required to visit the alloted college on the dates as mentioned in the Allotment letter for the final reporting along with the required fees and documents.')
        $(".section-6 .right p").eq(3).html('Please click the below mentioned link for the detailed information of the Fee structure (Academic & hostel) and required documents. <strong><a href="https://www.abes.ac.in/courses-offered.html">https://www.abes.ac.in/courses-offered.html</a></strong>')
        $(".section-6 .procedure").eq(4).show()
        $(".section-6 hr").eq(4).show()
        $(".section-8 .procedure").show()
        $(".section-8 h2").show()
        $(".section-8 hr").show()
        $(".section-6 .right p").eq(4).html('Before coming for the reporting to the college kindly visit the college website www.abes.ac.in to know the detailed information')
        $(".section-7 .left_side p").text('15% of the seats will be offered to eligible candidates through direct admissions based on the guidelines of AICTE / AKTU and as per the college policy of the session 2025-26.')
        $(".section-8 .right p").eq(0).html('Candidate has to apply online through the college website<a href="https://www.abes.ac.in/courses-offered.html">https://www.abes.ac.in/courses-offered.html</a>')
        $(".section-8 .right p").eq(1).text('Institute will shortlist the candidates on the basis of their Aggregate in qualifying exam and CUET Score / Rank.')
        $(".section-8 .right p").eq(2).text('Thereafter, candidate will be called for test and interview.')
        $(".section-8 .right p").eq(3).text('On the basis of marks scored in the test and Interview. The candidate will be offered seat for the admission.')
        $(".section-9").hide()
        $(".section-10").hide()
      }
      else if (link.dataset.page === '4') {
        links.forEach(function (link) {
          if (link.dataset.page === '4') {
            link.style.backgroundColor = "black";
            link.style.color = "white";
          }
          else {
            link.style.backgroundColor = 'transparent';
            link.style.color = 'grey';
          }
        })
        $(".section-5 p").text("For admissions in M.Tech. Program candidates are required to appear in the Entrance Examination and counseling conducted by the University AKTU as per the eligibility notified by AICTE/AKTU for the session 2025-26.")
        $(".section-6 .procedure").hide()
        $(".section-6 hr").hide()
        $(".section-6 hr").eq(4).show()
        $(".section-6 h2").hide()
        $(".section-7 .left_side p").text('Seats will be offered to eligible candidate through direct admissions based on the guidelines of AICTE / AKTU and as per the College policy for the session 2025-26.')
        $(".section-8 .procedure").hide()
        $(".section-8 h2").hide()
        $(".section-8 hr").hide()
        $(".section-8 hr").eq(3).show()
        $(".section-9").show()
        $(".section-10").show()
      }

    });
  });

})
var admissionsSeo = {
  "progs-offered-description":
  {
    "title": "Courses Offered",
    "description": "Notification regarding admission for session 2022-23 through JEE (Main), NATA and  CUET in place of UPSE."
  },
  "adm-procedure-description":
  {
    "title": "Admission Procedure | ADMISSION PROCEDURE 2022-23 (THROUGH JOINT ENTRANCE EXAMINATION) ",
    "description": "ADMISSION PROCEDURE 2022-23 (THROUGH JOINT ENTRANCE EXAMINATION) admission open in all branches CSE IT ECE ME CS DATA SCIENCE "
  },
  "eligibility-description":
  {
    "title": "Eligibility ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "ABES Engineering College is one of the best college in NCR."
  },
  "adm-enquiry-description":
  {
    "title": "Admission Enquiry |Admission Enquiry (College Code:032) Admission 2025-26 ",
    "description": "Admission Enquiry (College Code:032) Admission 2025-26 | Top placement college in NCR | ABES Engineering College is one of the best college in NCR."
  },
  "docs-required-description":
  {
    "title": "Documents-required ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "ABES Engineering College is one of the best college in NCR."
  },
  "fee-structure-description":
  {
    "title": "Fee-structure ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Fee Structure of College Btech 2022-23 ."
  },
  "payment-procedure-description":
  {
    "title": "Payment-procedure ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Mode of Payment bothe mode online and ofline is available."
  },
  "refund-policy-description":
  {
    "title": "Refund-policy ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "In case of cancellation of admission, fee will be refunded as per the  APH & Notification of AICTE published on 25-10-2021."
  },
  "anti-ragging-description": {
    "title": "Anti-Ragging AICTE Notification ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "View the official notification from AICTE regarding anti-ragging policies in ABES Engineering College Ghaziabad for the academic year 2022-23. Stay informed and ensure a safe and welcoming environment for all students."
  },
  "scholarship-description":
  {
    "title": "Scholarship-policies ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Meritorious students seeking admission in <b>Mechanical and Electrical Engineering."
  },
  "scholarship-state-description": {
    "title": "Scholarship-policies ABES Engineering College Ghaziabad | Ranked 1 Engineering College in AKTU",
    "description": "Meritorious students seeking admission in <b>Mechanical and Electrical Engineering."
  }
};

$(document).ready(function () {
  // tab switching function
  $(".tab-bar-heading").click(function () {
    if (window.innerWidth > 768) {
      $('html, body').animate({ scrollTop: 0 });
    }
    $(".padding").hide();
    $(this).addClass("selected-section")
    $(".tab-bar-heading").not(this).removeClass("selected-section");
    var target = $(this).data("target");
    $("#" + target).show();
    AOS.refresh()
    $("#left-menu-mob").attr("style", "display: none !important");
    if (window.innerWidth < 768) {
      $("#top-menu-mob").hide()
    }

    // to update the meta title and description
    if (admissionsSeo.hasOwnProperty(target)) {
      document.title = admissionsSeo[target].title;
      $('meta[name="description"]').attr('content', admissionsSeo[target].description);
    }
  });


});

// to open the selection menu on mini nav button click on mobile

$(document).ready(function () {
  if (window.innerWidth < 768) {
    // $(".selection-menu").on("click", function() {
    //     // Set the style of "#top-menu-mob" to make it visible
    //     $("#top-menu-mob").css("display", "flex");
    //     // $(".padding").hide()
    // });

    $(".selection-menu").on("click", function () {
      var dropdownDiv = document.getElementById('top-menu-mob');
      var triggerElementRect = this.getBoundingClientRect();
      dropdownDiv.style.top = (triggerElementRect.bottom + window.scrollY + 10) + 'px';
      // dropdownDiv.style.left = (document.documentElement.clientWidth - 300)/2 + 'px';
      console.log("triggerElementRect.right - 275 - 16", triggerElementRect.right - 275 - 16)
      if (triggerElementRect.right - 275 - 16 <= 0) {
        dropdownDiv.style.left = '1rem';
      } else {
        dropdownDiv.style.right = (document.documentElement.offsetWidth - triggerElementRect.right) + 'px';

      }


      dropdownDiv.style.display = (dropdownDiv.style.display === 'flex' ? 'none' : 'flex');
    });

    document.addEventListener('click', function (event) {
      var dropdownDiv = document.getElementById('top-menu-mob');
      if (dropdownDiv.style.display === 'flex') {
        if (event.target.className !== "selection-menu" && event.target.className !== 'fa-solid fa-angle-down' && event.target !== dropdownDiv) {
          dropdownDiv.style.display = 'none';
          // document.body.classList.remove('disable-scroll');
        }
      }

    });
  }
})

