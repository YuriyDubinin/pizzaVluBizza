function adv() {
    //animate the blok adv__body when adv blok enters the scope
    function animateTheCard() {
        const advParent = document.querySelector("#partners-section"),
            advTitleBlock = advParent.querySelector(".adv__title"),
            advTitle = advParent.querySelector("h3"),
            advList = advParent.querySelector(".adv__list"),
            advBtn = advParent.querySelector(".adv__button");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("true");

                    advTitleBlock.style.animation = "sliding-appearance 2s ease 0s";
                    advTitle.style.animation = "sliding-appearance 2.6s ease 0s";
                    advList.style.animation = "sliding-appearance 2s ease 0s";
                    advBtn.style.animation = "provocative-action 1.5s ease 0s infinite";
                } else {
                    advTitleBlock.style.animation = "none";
                    advTitle.style.animation = "none";
                    advList.style.animation = "none";
                    advBtn.style.animation = "none";
                }
            });
        });

        observer.observe(advParent);
    }

    //execution
    animateTheCard();
}

export default adv;
