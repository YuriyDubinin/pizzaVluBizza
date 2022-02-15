"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* burger menu */
    $(document).ready(function () {
        $(".header__burger").click(function (event) {
            $(".header__burger, .header__navigation").toggleClass("active");
            $("body").toggleClass("scroll-lock");
        });
    });
});
