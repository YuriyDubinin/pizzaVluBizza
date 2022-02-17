"use strict";

import header from "./modules/header";

document.addEventListener("DOMContentLoaded", () => {
    header();

    //test db
    fetch("http://localhost:3000/menu")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
});
