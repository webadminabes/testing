console.time("headerjs")
const navbarItems = [
  {
    title: "About",
    hasDropdown: true,
    items: [
      [
        { heading: "About Us" },
        { title: "Vision & Mission", to: "/visionmission.html" },
        { title: "Leadership Team", to: "/bog.html" },
        { title: "Chairman's Message", to: "/Chairmanmessage.html" },
        { title: "Director's Message", to: "/directorsmesssage.html" },
        { title: "Institute's Achievements", to: "/institute-achievement.html" },
        { title: "Student's Achievements", to: "/student-achievement.html" },
        { title: "ABES Alumni Association", to: "/aaa-about-aaa.html" },
      ],
      [
        { heading: "Accreditation & Rankings"},
        { title: "NBA", to: "/nba-accredited-college.html" },
        { title: "NAAC", to: "/naac-accredited-colleges.html" },
        { title: "ISO", to: "/ACC-iso.html" },
        { title: "NIRF", to: "/nirf-ranking-college.html" },
        { title: "IIC", to: "/ACC-iic_ariia.html" },
        { title: "ARIIA", to: "/ariia.html" },
      ],
    ],
  },
  {
    title: "Admissions",
    hasDropdown: true,
    items: [
      [
        { title: "Programs Offered", to: "/courses-offered.html#progs-offered-description" },
        { title: "Admission Procedure", to: "/courses-offered.html#adm-procedure-description" },
        { title: "Eligibility", to: "/courses-offered.html#eligibility-description" },
        { title: "Admissions Enquiry", to: "/courses-offered.html#adm-enquiry-description" },
        { title: "Documents Required", to: "/courses-offered.html#docs-required-description" },
        // { title: "Departmental Scholarship Policies", to: "/courses-offered.html#scholarship-description" },
      ],
      [
        { title: "Fee Structure", to: "/courses-offered.html#fee-structure-description" },
        { title: "Payment Procedure", to: "/courses-offered.html#payment-procedure-description" },
        { title: "Refund Policy", to: "/courses-offered.html#refund-policy-description" },
        { title: "Anti-Ragging (AICTE)", to: "/courses-offered.html#anti-ragging-description" },
        { title: "State/Central Scholarship Policies", to: "/courses-offered.html#scholarship-state-description" },
      ],
    ],
  },
  {
    title: "Academics",
    hasDropdown: true,
    items: [
      [
        { title: "Computer Science & Engineering", to: "/academics/computer-science-engineering.html" },
        { title: "Computer Science & Engg. - AI & ML", to: "/academics/cse-aiml.html" },
        { title: "Computer Science & Engg. - Data Science", to: "/academics/cse-datascience.html" },
        
      ],
      [
        { title: "Mechanical Engineering", to: "/academics/mechanical-engineering.html" },
        { title: "Electronics & Communication Engg", to: "/academics/ece-department.html" },
        { title: "Electrical & Computer Engineering", to: "/academics/electrical-and-computer-engineering.html" },
        { title: "Master of Business Administration (MBA)", to: "#" },
        { title: "Master of Computer Application (MCA)", to: "/academics/mca-department.html" },
      ],
      [
        { title: "Student Resource Book", to: "#" },
        { title: "Course Curriculum", to: "/course-curriculam.html" },
        { title: "Academic Calendar", to: "/Academic-Calender.html" },
        { title: "Student Grievance Cell", to: "/GRC-grievance-redressal-cell.html" },
        { title: "Center of Excellence", to: "/coe.html" },
        { title: "Training", to: "/training.html" },
      ],
    ],
  },
  {
    title: "Clubs",
    hasDropdown: true,
    items: [
      [
        { title: "Creative U Club", to: "/creative-u.html" },
        { title: "Aaghaz - Publication Club", to: "/aaghaz.html" },
        { title: "Kalakrit Club", to: "/kalakrit.html" },
        { title: "Environ Club", to: "/environ.html" },
        { title: "NSS Club", to: "/nss.html" },
        { title: "Picturesque Club", to: "/picturesque.html" },
      ],
      [
        { title: "Minerva - Literature Club", to: "/minerva.html" },
        { title: "SYC & Yoga Club", to: "/syc.html" },
        { title: "Sports Club", to: "/sports.html" },
        { title: "Samvaad Club", to: "/samvaad.html" },
        { title: "Mun Club", to: "/mun.html" },
        { title: "Youth & Tourism", to: "/youthandtourism.html" },
        { title: "Sanjeevani Society", to: "/sanjeevanisociety.html" },
      ],
    ],
  },
  {
    title: "Campus",
    hasDropdown: false,
    to: "/life@abes_new.html",
  },
  {
    title: "Placements",
    hasDropdown: false,
    to: "/placement.html",
  },
  {
    title: "Research",
    hasDropdown: true,
    to: "/innovation.html",
    items: [
      [
        { heading: "Research" },
        { title: "Research And Innovation", to: "/innovation.html" },
      ],
      [
        { heading: "Consultancy" },
        { title: "Orbits", to: "/orbits.html" },
        { title: "UAV", to: "/uav-journey.html" },
      ],
    ],
  },
  {
    title: "Entrepreneurship",
    hasDropdown: true,
    items: [
      [
        { title: "iNurture", to: "/iNurture.html" },
        { title: "E-Cell", to: "https://abes.ac.in/ecell/" },
      ],
      [
        { title: "AICTE Idea Lab", to: "/aicte-idea-lab.html" },
        { title: "IIC", to: "/ACC-iic_ariia.html" },
      ],
    ],
  },
];

function getNavbarTitles() {
  let htmlContent = "";
  let count = 0;

  navbarItems.forEach((item) => {
    if (item.hasDropdown) {
      htmlContent += `<li class="Navigation_list__item__3whsw">
            <span data-index="${count}"
               class="Text Navigation_list__link__3-4J9 Navigation_Expanding_link Navigation_list__link--submenu__eslHg Text_element__QH1xC Text_helvetica-20__1W1LS">
               <span class="Navigation_list__link__text__2p7aQ">${item.title}</span>
               
            </span>
         </li>`;
      count += 1;
    } else {
      htmlContent += `<li class="Navigation_list__item__3whsw">
                <span class="Text Navigation_list__link__3-4J9 Text_element__QH1xC Text_helvetica-20__1W1LS">
                    <span class="Navigation_list__link__text__2p7aQ"><a href="${item.to}">${item.title}</a></span>
                </span>
            </li>`;
    }
  });

  return htmlContent;
}
function getNavbarDesktopDropdown() {
  let htmlContent = "";
  let count = 0;

  navbarItems.forEach((item) => {
    if (item.hasDropdown) {
      htmlContent += ` <div data-item="${count}" class="NavigationOverlay_columns__2wq6z Navigation_Expanding_item ${`navbar-${item.title.toLowerCase()}-item`}">
        <div class="NavigationOverlay_columns__wrapper__R-0i1">`;

      item.items.forEach((i) => {
        htmlContent += `<div class="NavigationOverlay_columns__column__faK4O">
            <div class="NavigationOverlay_submenu__3KG8R">
            ${i[0].heading? `<h5
            class="Text NavigationOverlay_submenu__title__PX3VT Text_element__QH1xC Text_helvetica-14__2WKbA">
            ${i[0].heading}
         </h5>` : ""}
            <ul>`;

        i.forEach((finalItem) => {
            if (finalItem.title){
                htmlContent += ` <li class="NavigationOverlay_submenu__item__3URRe"><span
                      class="Text NavigationOverlay_submenu__link__clXAO Text_element__QH1xC Text_helvetica-32__2W2LV"><a
                      href="${finalItem.to}"  onclick=${finalItem.onclick}>${finalItem.title}</a></span></li>`;
            }
        });
        htmlContent += `</ul>
                </div>
            </div>`;
      });
      htmlContent += `</div>
      </div>`;
      count += 1;
    }
  });

  return htmlContent;
}
function getNavbarMobileDropdown() {
  let htmlContent = "";

  navbarItems.forEach((item) => {
    if (item.hasDropdown) {
      htmlContent += `    <div
      class="NavigationMenuItem NavigationMenuItem_element__1qdNi NavigationMenuItem_element__expand">
      <div class="NavigationMenuItem_header__3zLC-">
         <div
            class="Text NavigationMenuItem_header__title__2Mn0J Text_element__QH1xC Text_helvetica-42__q4Byq">
            ${item.title}
         </div>
         <div class="NavigationMenuItem_header__icon__1w-Jm"></div>
      </div>
      <div class="NavigationMenuItem_content__3LSoM">
         <div class="NavigationMenuItem_content__wrapper__rHSHJ">
            <div>
               <ul>`;

                item.items.forEach((i) => {
                    i.forEach((finalItem) => {
                      if (finalItem.title){
                        htmlContent += `<li class="NavigationMenuItem_secondary__item__17iAU"><span
                            class="Text NavigationMenuItem_secondary__link__3bXdi Text_element__QH1xC Text_helvetica-24__1QNXg"><a
                            href="${finalItem.to}">${finalItem.title}</a></span>
                        </li>`;
                    }
                    });
                });
      htmlContent += `</ul>
                 </div>
             </div>
         </div>
        </div>`;
    } else {
      htmlContent += `<div class="NavigationMenuItem NavigationMenuItem_element__1qdNi">
                            <div class="NavigationMenuItem_header__3zLC-">
                                <span class="Text NavigationMenuItem_header__title__2Mn0J Text_element__QH1xC Text_helvetica-42__q4Byq">
                                    <a href="${item.to}">${item.title}</a>
                                </span>
                            </div>
                        </div>`;
    }
  });

  return htmlContent;
}

headerHTML = `
<div id="header" class="header">
      <nav id="navigation-bar" class="Navigation Navigation_element__1zEoc ">
         <div></div>
         <div class="Navigation_wrapper__qTdqA">
            <a class="Navigation_logo__3FVW5" href="/">
            <img class="white-logo" alt="white-logo" src="../assets/logo-9.png">
            <img class="black-logo" alt="black-logo" src="../assets/logo-9.png">
            </a>
            <ul class="Navigation_list__2rJJB">
                ${getNavbarTitles()}
            </ul>
            <button id="menu-open" class="Navigation_button___4ip0" data-index="4">Open/Close Menu</button>
         </div>
         <div class="NavigationMenu NavigationMenu_element__24F02">
            <div class="NavigationMenu_wrapper__3Vf1f">
               <div class="NavigationMenu_list__1uRIp">
               ${getNavbarMobileDropdown()}
               </div>
            </div>
         </div>
         <div class="NavigationOverlay_element__Lp4rV">
            ${getNavbarDesktopDropdown()}
         </div>
      </nav>
      </div>
`;

// function trimHtmlText(htmlContent) {
//   var tempDiv = document.createElement("div");
//   tempDiv.innerHTML = htmlContent;
//   var textContent = tempDiv.textContent || tempDiv.innerText;
//   console.log(textContent);
// }

// trimHtmlText(headerHTML);
// document.getElementById("header").innerHTML = headerHTML;
document.body.insertAdjacentHTML("afterbegin", headerHTML)

var lastScrollTop = 0;
let navBar = document.getElementById("navigation-bar");
window.onscroll = function (event) {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  let isScroolDown = st > lastScrollTop;
  lastScrollTop = st <= 0 ? 0 : st;
  if (st == 0) {
    navBar.classList.remove("Navigation_element--scrolling__kK-qS");
  } else {
    navBar.classList.add("Navigation_element--scrolling__kK-qS");
    if (isScroolDown) {
      navBar.classList.add("Navigation_element--hidden__2Auiq");
    } else {
      navBar.classList.remove("Navigation_element--hidden__2Auiq");
    }
  }
};

let htmlCollectionOfLinks = document.getElementsByClassName(
  "Navigation_Expanding_link"
);
let htmlCollectionOfItem = document.getElementsByClassName(
  "Navigation_Expanding_item"
);
let links = Array.from(htmlCollectionOfLinks);
let items = Array.from(htmlCollectionOfItem);
let navigationBar = document.getElementById("navigation-bar");
let navigationOverlay = document.querySelector(
  ".NavigationOverlay_element__Lp4rV"
);
links.forEach((item, index) => {
  item.setAttribute("onmouseover", `handelMouseHover(this)`);
  // item.setAttribute("onmouseleave", `handelMouseLeave(this)`)
});

let expandingItem;
let expandingLink;
let lastActiveLink = null;
function handelMouseHover(item) {
  console.log(
    lastActiveLink != null && lastActiveLink != item.dataset.index,
    lastActiveLink,
    item.dataset.index
  );
  if (lastActiveLink != null && lastActiveLink != item.dataset.index) {
    expandingLink.classList.remove("Navigation_list__link--active__CN0HY");
    expandingItem.classList.remove("NavigationOverlay_columns--active__1AF27");
  }
  navigationBar.classList.add("Navigation_element--active__1rvRt");
  navigationOverlay.classList.add("NavigationOverlay_element--active__1kH7o");
  expandingLink = item;
  expandingLink.classList.add("Navigation_list__link--active__CN0HY");
  navigationOverlay.setAttribute("onmouseleave", `handelOverlayLeave()`);
  expandingItem = items.find((d) => {
    return d.dataset.item == item.dataset.index;
  });
  // console.log(expandingItem.classList)
  expandingItem.classList.add("NavigationOverlay_columns--active__1AF27");
  lastActiveLink = item.dataset.index;
}
function handelMouseLeave(item) {
  navigationBar.classList.remove("Navigation_element--active__1rvRt");
  item.classList.remove("Navigation_list__link--active__CN0HY");
  // expandingItem.classList.remove("NavigationOverlay_columns--active__1AF27")
  // navigationOverlay.classList.remove("NavigationOverlay_element--active__1kH7o")
}
function handelOverlayLeave() {
  navigationBar.classList.remove("Navigation_element--active__1rvRt");
  navigationOverlay.classList.remove(
    "NavigationOverlay_element--active__1kH7o"
  );
  expandingLink.classList.remove("Navigation_list__link--active__CN0HY");
  expandingItem.classList.remove("NavigationOverlay_columns--active__1AF27");
}

// mobile navbar controller/

//this is to open mobile menu

document.getElementById("menu-open").addEventListener("click", () => {
  document
    .querySelector(".NavigationMenu")
    .classList.toggle("NavigationMenu_element--active__nXb3z");
  navigationBar.classList.toggle("Navigation_element--open__CXoRd");
  if (navigationBar.classList.contains("Navigation_element--open__CXoRd")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
});

//This is to expand items i\after clicking in mobile menu.
let htmlCollectionOfLinksMobile = document.getElementsByClassName(
  "NavigationMenuItem_element__expand"
);
let linksMobile = Array.from(htmlCollectionOfLinksMobile);
linksMobile.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("NavigationMenuItem_element--active__3MUWX");
  });
});

console.timeEnd("headerjs")
