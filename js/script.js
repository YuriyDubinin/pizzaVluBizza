$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__navigation").toggleClass("active");
        $("body").toggleClass("scroll-lock");
    });
});

//main-slider
let slides = document.querySelectorAll(".main-slider__item"),
    btnNext = document.querySelector(".main-slider-btns__next"),
    btnPrev = document.querySelector(".main-slider-btns__prev");

let slideIndex = 0;

btnNext.addEventListener("click", () => {
    if (slideIndex === slides.length - 1) {
        slides[slideIndex].classList.remove("show", "fade");
        slides[slideIndex].classList.add("hide");
        slideIndex = 0;
        slides[slideIndex].classList.remove("hide");
        slides[slideIndex].classList.add("show", "fade");
    } else {
        slides[slideIndex].classList.remove("show", "fade");
        slides[slideIndex].classList.add("hide");
        ++slideIndex;
        slides[slideIndex].classList.remove("hide");
        slides[slideIndex].classList.add("show", "fade");
    }
});
btnPrev.addEventListener("click", () => {
    if (slideIndex === 0) {
        slides[slideIndex].classList.remove("show", "fade");
        slides[slideIndex].classList.add("hide");
        slideIndex = slides.length - 1;
        slides[slideIndex].classList.remove("hide");
        slides[slideIndex].classList.add("show", "fade");
    } else {
        slides[slideIndex].classList.remove("show", "fade");
        slides[slideIndex].classList.add("hide");
        --slideIndex;
        slides[slideIndex].classList.remove("hide");
        slides[slideIndex].classList.add("show", "fade");
    }
});
