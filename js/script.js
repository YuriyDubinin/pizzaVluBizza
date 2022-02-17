"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //Burger-menu
    document.querySelector(".header__burger").addEventListener("click", () => {
        document.querySelector(".header__burger").classList.toggle("active");
        document.querySelector(".header__navigation").classList.toggle("active");
        document.querySelector("body").classList.toggle("scroll-lock");
    });

    //test db
    fetch("http://localhost:3000/menu")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
});
