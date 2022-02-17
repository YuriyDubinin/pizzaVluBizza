//Burger-menu
function header() {
    //burger-menu
    document.querySelector(".header__burger").addEventListener("click", () => {
        document.querySelector(".header__burger").classList.toggle("active");
        document.querySelector(".header__navigation").classList.toggle("active");
        document.querySelector("body").classList.toggle("scroll-lock");
    });
}

export default header;
