"use strict";

import header from "./modules/header";
import offerSlider from "./modules/offer-slider";
import comboSlider from "./modules/combo-slider";

//for test db
import { getData } from "../js/services/services";

document.addEventListener("DOMContentLoaded", () => {
    header();
    offerSlider();
    comboSlider();

    //test db
    getData("http://localhost:3000/menu").then((data) => console.log(data.pizza));
});
