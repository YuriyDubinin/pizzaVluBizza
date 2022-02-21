function menuCards() {
    class MenuCard {
        constructor(src, alt, title, descr, parentId, price = 0) {
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
    new MenuCard(
        "img/menu/pizza/vlu_bizza.jpg",
        "pizza VluBizza",
        "Vlu Bizza",
        "Dough, ham, mushrooms, a sea of cheese, aromatic mushrooms, and a few secret ingredients among which, of course, love.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/pan_america.jpg",
        "americano",
        "americano",
        "Dough, Tomato sauce, bacon, ham, Pepperoni sausages, Bavarian sausages, Mozzarella cheese, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/pepperoni.jpg",
        "pepperoni",
        "pepperoni",
        "Dough, Tomato sauce, Pepperoni sausages, Mozzarella cheese, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/margarita.jpg",
        "margarita",
        "margarita",
        "Dough, Tomato sauce, Mozzarella cheese, tomatoes, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/bbq.jpg",
        "bbq",
        "bbq",
        "Dough, BBQ sauce, ham, chicken breast, mushrooms, Mozzarella cheese, red onion, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/4_cheese.jpg",
        "4 cheese",
        "4 cheese",
        "Dough, Cheese sauce, Dor Blue cheese, Mozzarella cheese, Parmesan cheese, Cheddar cheese, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/ranch.jpg",
        "ranch",
        "ranch",
        "Dough, Ranch sauce, grilled chicken, bacon, Mozzarella cheese, tomatoes, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/bavarian.jpg",
        "bavarian",
        "bavarian",
        "Dough, BBQ sauce, Bavarian sausages, Mozzarella cheese, pickles, tomatoes, basil, oregano.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/mushroom.jpg",
        "mushroom",
        "mushroom pizza",
        "Dough, Creamy mushroom sauce, ham, mushrooms, Mozzarella cheese, basil, oregano",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/mamamia.jpg",
        "mamamia",
        "mamamia",
        "Traditional italian recipe. The recipe for this incredible pizza was left to the chef by his grandmother, and her grandmother, and so on..",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/greek.jpg",
        "greek",
        "greek",
        "Delicious and juicy pizza cooked on a dense dough with the addition of a special sauce, spinach leaves, fresh Cherry tomatoes, bell peppers and olives.",
        "#menu-pizza"
    ).render();

    new MenuCard(
        "img/menu/pizza/vegetable.jpg",
        "vegetable",
        "vegetable",
        "For true gourmets, vegetables are combined into an incredible bouquet of flavors that can pleasantly surprise even those who don't like them.",
        "#menu-pizza"
    ).render();
}

export default menuCards;
