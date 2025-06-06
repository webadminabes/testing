// testimonials-slider

var container = document.getElementById('testimonials-container');
var containerWidth = container.offsetWidth;
var testwidth = 0;
var testcurrent = 0;
var recruitersWidth = 0;
var recruitersIndex = 0;
var recruitersImages = 0;

const testimages = document.querySelectorAll(".testimonials-images").length;

// Set initial width
setParams(containerWidth);

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
    slideTestimages();
}

function setParams(w) {
    if (w < 450) {
        testwidth = 107;
        recognitionWidth = 104;
        recruitersWidth = 101;
        recruitersImages = document.querySelectorAll(".showSlider").length /2;
    } else {
        testwidth = 34;
        recognitionWidth = 50;
        recruitersWidth = 110;
        recruitersImages = document.querySelectorAll(".showSlider").length / 6;
    }
}

function testControl(step) {
    // Calculate the new index based on the step
    const newIndexTest = testcurrent + step;

    if (newIndexTest >= 0 && newIndexTest < testimages) {
        // Update the current index if within bounds
        testcurrent = newIndexTest;
        slideTestimages();
    }
}

function slideTestimages() {
    const container = document.querySelector(".testimonials-content");
    container.style.transform = `translateX(-${testcurrent * testwidth}%)`;
}

// Initial slide
slideTestimages();

// Recognition slider

let currentIndex = 0;

const numImages = document.querySelectorAll(".recognition-images").length;

function controller(step) {
    // Calculate the new index based on the step
    const newIndex = currentIndex + step;
    if (newIndex >= 0 && newIndex < numImages) {
        // Update the current index if within bounds
        currentIndex = newIndex;
        slideImages();
    }
}

function slideImages() {
    const container = document.querySelector(".recognition-content");
    container.style.transform = `translateX(-${currentIndex * recognitionWidth}%)`;
}

// Initial slide
slideImages();

// Recruiters slider
recruitersControl(0); // Call initially to set the initial state

function recruitersControl(step) {
    console.log(recruitersImages);
    // if (step == 1) {
    //     document.querySelector(".sliding-container").style.overflow = "visible";
    // }
    // if (step == -1) {
    //     setTimeout(() => {
    //         document.querySelector(".sliding-container").style.overflow = "hidden";
    //     }, 1000);
    // }

    // Calculate the new index based on the step
    const newIndexTest = recruitersIndex + step;

    if (newIndexTest >= 0 && newIndexTest < recruitersImages) {
        // Update the current index if within bounds
        recruitersIndex = newIndexTest;
        sliderecruitersimages();
    }
}

function sliderecruitersimages() {
    const container = document.querySelector(".sliding-container");
    container.style.transform = `translateX(-${recruitersIndex * recruitersWidth}%)`;
}


