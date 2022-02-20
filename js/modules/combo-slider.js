import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

function comboSlider() {
    tns({
        container: ".combo-slider__field",
        items: 6,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-combo-slider-control",
        gutter: 20,
        nav: false,
        mouseDrag: true,
        rewind: true,
        speed: 1500,
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 2,
            },
            768: {
                items: 4,
                gutter: 10,
            },
            1140: {
                items: 5,
                gutter: 25,
            },
        },
    });
}

export default comboSlider;
