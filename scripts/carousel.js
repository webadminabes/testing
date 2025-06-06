$(document).ready(function () {
  $(".carousel-image > img").click(function () {
    // console.log(this)
    var $smallImages = $(this).attr("src");
    $(".carousel-main-image > img").attr("src", $smallImages);
  });
});

$(document).ready(function () {
  $(".carousel-image").click(function () {
    $(this).removeClass("non-selected-image");
    $(".carousel-image").not(this).addClass("non-selected-image");
  });

  $(".slider-image > img").click(function () {
    var $smallImages = $(this).attr("src");
    $(".carousel-main-image > img").attr("src", $smallImages);
  });

  $(".slider-image").click(function () {
    $(this).removeClass("non-selected-image");
    $(".slider-image").not(this).addClass("non-selected-image");
  });

  let currentPosition = 0;
let isSliding = false;
slider = (direction) => {
  if (isSliding) {
    return;
  }

  isSliding = true;
  // console.log("hiii")
  img = document.querySelector(".slider-image");
  slide = document.getElementById("carousel");

  imgWidth = img.offsetWidth;
  // console.log(img.offsetWidth)
  length = document.querySelectorAll(".slider-image").length;

  //forward slide
  if (direction == 1) {
    currentPosition -= imgWidth;
    if (currentPosition < -(imgWidth * (length - 1))) {
      currentPosition = 0;
    }

    slide.style.transform = `translateX(${currentPosition}px)`;
  }

  //backward slide
  if (direction == -1) {
    // console.log(currentPosition);
    currentPosition += imgWidth;

    if (currentPosition > 0) {
      currentPosition = -(imgWidth * (length - 1));
    }
    console.log(slide);
    slide.style.transform = `translateX(${currentPosition}px)`;
  }
  setTimeout(() => {
    isSliding = false;
  }, 500);
};
});



let currentPosition = 0;
let isSliding = false;
slider = (direction) => {
  if (isSliding) {
    return;
  }

  isSliding = true;
  // console.log("hiii")
  img = document.querySelector(".slider-image");
  slide = document.querySelectorAll(".carousel")[1];

  imgWidth = img.offsetWidth;
  // console.log(img.offsetWidth)
  length = document.querySelectorAll(".slider-image").length;

  //forward slide
  if (direction == 1) {
    currentPosition -= imgWidth;
    if (currentPosition < -(imgWidth * (length - 1))) {
      currentPosition = 0;
    }

    slide.style.transform = `translateX(${currentPosition}px)`;
  }

  //backward slide
  if (direction == -1) {
    // console.log(currentPosition);
    currentPosition += imgWidth;

    if (currentPosition > 0) {
      currentPosition = -(imgWidth * (length - 1));
    }
    console.log(slide);
    slide.style.transform = `translateX(${currentPosition}px)`;
  }
  setTimeout(() => {
    isSliding = false;
  }, 500);
};


