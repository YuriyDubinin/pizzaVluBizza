import { tns } from "/node_modules/tiny-slider/src/tiny-slider";

function offerSlider() {
    tns({
        container: ".offer-slider__field",
        items: 4,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        controlsContainer: "#custom-slider-control",
        gutter: 10,
        nav: false,
        mouseDrag: true,
        rewind: true,
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 2,
            },
            768: {
                items: 4,
            },
            1140: {
                items: 6,
            },
        },
    });
}

export default offerSlider;
