"use strict";

import header from "./modules/header";
import offerSlider from "./modules/offer-slider";

document.addEventListener("DOMContentLoaded", () => {
    header();
    offerSlider();

    //test db
    fetch("http://localhost:3000/menu")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
});
