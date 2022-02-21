"use strict";

import header from "./modules/header";
import offerSlider from "./modules/offer-slider";
import comboSlider from "./modules/combo-slider";
import menuCards from "./modules/menu-cards";

//for test db
import { getData } from "../js/services/services";

document.addEventListener("DOMContentLoaded", () => {
    header();
    offerSlider();
    comboSlider();
    menuCards();

    //test db
    getData("http://localhost:3000/menu").then((data) => console.log(data.pizza));
});
