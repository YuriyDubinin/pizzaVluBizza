"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* burger menu */
    $(document).ready(function () {
        $(".header__burger").click(function (event) {
            $(".header__burger, .header__navigation").toggleClass("active");
            $("body").toggleClass("scroll-lock");
        });
    });

    /* main-slider */
    //declaration
    const slides = document.querySelectorAll(".main-slider__item"),
        slidesWrapper = document.querySelector(".main-slider__slider-wrapper"),
        slidesField = document.querySelector(".main-slider__inner"),
        btnNext = document.querySelector(".main-slider-btns__next"),
        btnPrev = document.querySelector(".main-slider-btns__prev"),
        width = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(".content__main-slider");

    let slideIndex = 1,
        offset = 0;

    function controlSlideIndex(index) {
        if (index > slides.length) {
            //transition from the last slide to the first
            slideIndex = 1;
            console.log(slideIndex); //log for checking slideIndex
        } else if (index < 1) {
            //transition from the first slide to the last
            slideIndex = slides.length;
            console.log(slideIndex); //log for checking slideIndex
        } else {
            slideIndex = slideIndex;
            console.log(slideIndex); //log for checking slideIndex
        }
    }

    function offsetOfSlide(offset = 0) {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function switchToNextSlide() {
        //check indentation
        if (offset == removeNonDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += removeNonDigits(width);
        }

        //movement
        offsetOfSlide(offset);
    }

    function switchToPrevSlide() {
        //check indentation
        if (offset == 0) {
            offset = removeNonDigits(width) * (slides.length - 1);
        } else {
            offset -= removeNonDigits(width);
        }

        //movement
        offsetOfSlide(offset);
    }

    //displaying active indicator
    function showActiveSliderIndicator() {
        dots.forEach((dot, i) => {
            dot.style.opacity = ".5";
        });
        dots[slideIndex - 1].style.opacity = "1";
    }

    //extracts only a number from a string
    function removeNonDigits(str) {
        return +str.replace(/\D/g, "");
    }

    //execution
    //setting slidesField width depnding of the number of slides
    slidesField.style.width = 100 * slides.lenght + `%`;

    //setting clean width to every slide
    slides.forEach((slide) => {
        slide.style.width = width;
    });

    //slider navigation
    //create a wrapper for indicators
    const indicators = document.createElement("ol");

    indicators.classList.add("carousel-indicators");

    slider.append(indicators);

    //creation of indicators equal to the number of slides
    for (let i = 0; i < slides.length; i++) {
        const indicator = document.createElement("li");

        indicator.classList.add("dot");

        indicator.setAttribute("data-indicator-number", i + 1);

        indicators.append(indicator);
    }

    const dots = document.querySelectorAll(".dot"); //all formed indicators

    //setting the initial position of slider
    showActiveSliderIndicator(); //initial active indicator

    offset = removeNonDigits(width) * (slideIndex - 1); //initial offset

    offsetOfSlide(offset); //initial slide

    //interaction with slider buttons
    btnNext.addEventListener("click", () => {
        slideIndex++;
        controlSlideIndex(slideIndex);
        showActiveSliderIndicator();
        switchToNextSlide();
    });
    btnPrev.addEventListener("click", () => {
        slideIndex--;
        controlSlideIndex(slideIndex);
        showActiveSliderIndicator();
        switchToPrevSlide();
    });

    //interaction with slider navigation
    indicators.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("dot")) {
            slideIndex = event.target.getAttribute("data-indicator-number");

            offset = removeNonDigits(width) * (slideIndex - 1);

            offsetOfSlide(offset);

            showActiveSliderIndicator();
        }
    });
});
