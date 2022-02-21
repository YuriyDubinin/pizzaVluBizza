"use strict";

import header from "./modules/header";
import offerSlider from "./modules/offer-slider";
import comboSlider from "./modules/combo-slider";
import menuCards from "./modules/menu-cards";

document.addEventListener("DOMContentLoaded", () => {
    header();
    offerSlider();
    comboSlider();
    menuCards("http://localhost:3000/pizza", "#menu-pizza"); //adding pizza menu
    menuCards("http://localhost:3000/milkshake", "#menu-milkshake"); //adding milkshake menu
});
