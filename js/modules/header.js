//Burger-menu
function header() {
    //burger-menu
    function toggleBurgerMenu() {
        document.querySelector(".header__burger").addEventListener("click", () => {
            document.querySelector(".header__burger").classList.toggle("active");
            document.querySelector(".header__navigation").classList.toggle("active");
            document.querySelector("body").classList.toggle("scroll-lock");
        });
    }

    //sets the active tab indicator in the header
    function setActiveTab() {
        const wrapper = document.querySelector(".header__navigation"),
            tabList = document.querySelectorAll(".header__link");

        wrapper.addEventListener("click", (event) => {
            tabList.forEach((link) => {
                link.classList.remove("active-tab");
            });

            if (event.target && event.target.classList.contains("header__link")) {
                event.target.classList.add("active-tab");
            }
        });
    }

    //smooth movement through the sections of the site
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"').forEach((link) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();

                let id = this.getAttribute("href").substring(1);

                const scrollTarget = document.getElementById(id);

                //calculation of the require offset
                const topOffset = document.querySelector(".header").offsetHeight;

                const elementPosition = scrollTarget.getBoundingClientRect().top;

                const offsetPosition = elementPosition - topOffset;

                //motion
                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            });
        });
    }

    //after the transition, removes the active tab from the header after a short time
    function cleanActiveTabInHeader() {
        window.addEventListener("scroll", (event) => {
            setTimeout(() => {
                document.querySelectorAll(".header__link").forEach((link) => {
                    link.classList.remove("active-tab");
                });
            }, 1000);
        });
    }

    //execution
    toggleBurgerMenu();
    setActiveTab();
    smoothScroll();
    cleanActiveTabInHeader();
}

export default header;
