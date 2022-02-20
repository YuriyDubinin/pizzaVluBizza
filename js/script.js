"use strict";

import header from "./modules/header";
import offerSlider from "./modules/offer-slider";
import comboSlider from "./modules/combo-slider";

document.addEventListener("DOMContentLoaded", () => {
    header();
    offerSlider();
    comboSlider();

    //test db
    fetch("http://localhost:3000/menu")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
});
