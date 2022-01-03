$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__navigation").toggleClass("active");
        $("body").toggleClass("scroll-lock");
    });
});

//main-slider

let slides = document.querySelectorAll(".main-slider__item"),
    btnRight = document.querySelector(".main-slider-btn-right"),
    btnLeft = document.querySelector(".main-slider-btn-left");

let mainSliderCounter = 0;

btnLeft.addEventListener("click", function () {
    if (mainSliderCounter === 0) {
        slides[mainSliderCounter].style.display = "none";
        mainSliderCounter = slides.length - 1;
        slides[mainSliderCounter].style.display = "block";
    } else {
        slides[mainSliderCounter].style.display = "none";
        --mainSliderCounter;
        slides[mainSliderCounter].style.display = "block";
    }
});
btnRight.addEventListener("click", function () {
    if (mainSliderCounter === slides.length - 1) {
        slides[mainSliderCounter].style.display = "none";
        mainSliderCounter = 0;
        slides[mainSliderCounter].style.display = "block";
    } else {
        slides[mainSliderCounter].style.display = "none";
        ++mainSliderCounter;
        slides[mainSliderCounter].style.display = "block";
    }
});
