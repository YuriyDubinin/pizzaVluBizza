import { getData } from "../services/services";

function menuCards(path, parentId) {
    //path - path to the server where to get the data from
    //parentId - id of the element where the cards should be inserted

    class MenuCard {
        constructor(src, alt, title, descr, price, parentId) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.parent = document.querySelector(parentId);
            this.price = price;
        }

        render() {
            //creating an HTML card structure
            const element = document.createElement("div");

            element.classList.add("menu-field__item");
            element.innerHTML = `
                <div class="menu-field__image">
                    <img src=${this.src} alt=${this.alt} />
                </div>
                <div class="menu-field__label label">${this.title}</div>
                <div class="menu-field__text">${this.descr}</div>
                <div class="menu-field__btn">
                    <a href="order.html" class="menu-field__link btn-1">order</a>
                </div>
            `;

            //push card to the rest
            this.parent.append(element);
        }
    }

    //creating cards
    getData(path).then((data) => {
        data.forEach(({ src, altimg, title, descr, price }) => {
            new MenuCard(src, altimg, title, descr, price, parentId).render();
        });
    });
}

export default menuCards;
