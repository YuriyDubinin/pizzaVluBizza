$(document).ready(function () {
    $(".header__burger").click(function (event) {
        $(".header__burger, .header__navigation").toggleClass("active");
        $("body").toggleClass("scroll-lock");
    });
});

/* main-slider */
//declaration
let slides = document.querySelectorAll(".main-slider__item"),
    btnNext = document.querySelector(".main-slider-btns__next"),
    btnPrev = document.querySelector(".main-slider-btns__prev");

let slideIndex = 0;

//functions
//next slide
function switchesToNextSlide() {
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
}

//prev slide
function switchesToPrevSlide() {
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
}

//change slides by time
function switchesSlidesByTime() {
    /* switches slides in time, stops switching when the user hovers the 
    mouse over the image or button, restores timer when leaving area */
    let timerId = setInterval(switchesToNextSlide, 4000);

    const slider = document.querySelector(".main-slider__slides");

    let images = slider.querySelectorAll("img");

    //stops automatic change of slides when howering over the image
    images.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            clearInterval(timerId);
        });
    });

    //starts automatic change of slides when the mouse leaving from the image
    images.forEach((item) => {
        item.addEventListener("mouseleave", () => {
            timerId = setInterval(switchesToNextSlide, 4000);
        });
    });

    //stops automatic change of slides when howering over the slider buttons
    [btnNext, btnPrev].forEach((item) => {
        item.addEventListener("mouseenter", () => {
            clearInterval(timerId);
        });
    });

    //starts automatic change of slides when the mouse leaving from slider buttons
    [btnNext, btnPrev].forEach((item) => {
        item.addEventListener("mouseleave", () => {
            timerId = setInterval(switchesToNextSlide, 4000);
        });
    });
}

//execution
//buttons 'next' & 'prev' in main-slider
btnNext.addEventListener("click", () => {
    switchesToNextSlide();
});
btnPrev.addEventListener("click", () => {
    switchesToPrevSlide();
});

//activation of switching slides by time
switchesSlidesByTime();
