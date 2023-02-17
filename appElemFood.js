'use script';

//! Classes of dish

class MenuDish {
    constructor(title, descr, price, parendSelector) {
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.parend = document.querySelector(parendSelector);
    }
    render() {
        const element = document.createElement('div');
        element.classList.add('item-wrap-dish');
        element.innerHTML = `
            <h3 class="item-title">${this.title}</h3>
            <div class="item-content-wrap main_flex flex__jcontent_between">
                <p class="item-content">${this.descr}</p>
                <div class="item-price-order-wrap main_flex_column flex__jcontent_between">
                    <p class="item-price">${this.price}</p>
                    <button data-order='add-order'>zamówić</button>
                </div>
            </div>
        `;
        this.parend.append(element);
    }
}

class foodSection {
    constructor(title, classes, parendSelector, span) {
        this.title = title;
        this.classes = classes;
        this.parend = document.querySelector(parendSelector);
        this.span = span;
    }
    render() {
        const element = document.createElement('section');
        element.classList.add('wrap');
        element.classList.add(`${this.classes}`);
        element.innerHTML = `
            <div class="show-more">
                <div class="line-horizontal line"></div>
                <div class="line-vertical line"></div>
            </div>
            <h2 class='title-section'>&#11045;${this.title}<span>${this.span}</span>&#11045;</h2>
        `;
        this.parend.append(element);
    }
}

new foodSection(
    "Sałaty",
    "salat",
    "main",
    "",
).render();

        new MenuDish(
            "Sałatka Karafka",
            "Sałata lodowa z mixem warzyw, filet z kurczaka w cieście naleśnikowym, sos winegret, tacosy, sezam.",
            "29,50",
            'section.salat'
        ).render();

        new MenuDish(
            "Cesare z curczakiem",
            "Sałata lodowa z cesarskim dresingiem, żółty ser, grzanki i grillowany kurcazak.",
            "29,50",
            'section.salat'
        ).render();

        new MenuDish(
            "Cesare z łososiem",
            "Sałata lodowa z cesarskim dresingiem, żółty ser, grillowany łosoś i grzanki.",
            "30,50",
            'section.salat'
        ).render();
        
        new MenuDish(
            "Kapsalon <br> (frytki po holendersku)",
            `&#11045; Kebab, sos amerykański, prażona cebula, pikle, rukola. <br> &#11045; Kurczak po azjatycku, sos mango-mayo, pikle, sezam, rukola.`,
            "22,50",
            'section.salat'
        ).render();

new foodSection(
    "Zupy",
    "soup",
    "main",
    "",
).render();

        new MenuDish(
            "Krem pomidorowo-paprykowy",
            "Lekki krem z pieczonej papryki, pomidory, ciecierzyca",
            "15,50",
            'section.soup'
        ).render();

        new MenuDish(
            "Żurek z uszkami",
            "Żurek zabielany z chrzanem, boczkiem, podawany z uszkami z białą kiełbasa.",
            "17,50",
            'section.soup'
        ).render();

new foodSection(
    "Menu dla dzieci",
    "kids-menu",
    "main",
    "",
).render();

        new MenuDish(
            "Nuggetsy",
            "Sześć nuggetsów z ketchupem.",
            "14,50",
            'section.kids-menu'
        ).render();

        new MenuDish(
            "Spaghetti",
            "Spaghetti bolognese.",
            "15,50",
            'section.kids-menu'
        ).render();

        new MenuDish(
            "Pancake",
            "Trzy pancake z nutellą.",
            "14,50",
            'section.kids-menu'
        ).render();

new foodSection(
    "Dania mięsne",
    "meat-food",
    "main",
    "",
).render();

        new MenuDish(
            "Classic burger",
            "160g polskiej wołowiny, ser cheddar, pomidor, mix sałat, cebula, sos amerykański.",
            "24,50",
            'section.meat-food'
        ).render();

        new MenuDish(
            "Bacon burger",
            "160g polskiej wołowiny, chrupiący bekon, pomidor, mix sałat, ogórek kiszony, cebula, sos.",
            "25,50",
            'section.meat-food'
        ).render();

        new MenuDish(
            "Burger cesarski",
            "Grillowany kurczak, mix sałat, sos cesar, ser żółty.",
            "23,50",
            'section.meat-food'
        ).render();

        new MenuDish(
            "Burger Premium",
            "160g polskiej wołowiny, prażona cebula, ser cheddar, bekon, warzywa, sałaty, sos BBQ.",
            "27,50",
            'section.meat-food'
        ).render();

new foodSection(
    "Dodatki",
    "accessories",
    "main",
    "",
).render();

        new MenuDish(
            "Frytki stekowe",
            "200 gramów frytek stekowych, sos.",
            "12,50",
            'section.accessories'
        ).render();

        new MenuDish(
            "Frytki z batatów",
            "200 gramów frytek z batatów, sos Mango-Mayo.",
            "15,00",
            'section.accessories'
        ).render();

        new MenuDish(
            "Mix warzyw",
            "Mix marynowanych warzyw, sos winegret.",
            "4,00",
            'section.accessories'
        ).render();

new foodSection(
    "Z grilla",
    "barbeku",
    "main",
    " (450-500g)",
).render();

        new MenuDish(
            "Kebab z kurczaka po grechu",
            "Marynowany w jogurcie kurczak, sos tzatzyki, frytki stekowe, marynowane warzywa.",
            "31,50",
            'section.barbeku'
        ).render();

        new MenuDish(
            "Grillowana pierś z kurczaka",
            "Filet macerowany w sosie śródziemnomorskim, frytki stekowe, marynowane warzywa, sos.",
            "30,50",
            'section.barbeku'
        ).render();

        new MenuDish(
            "Żeberka BBQ (350g)",
            "Marynowane w piwie, miodzie i czosnku z ziołami, serwowane z puree i mixem marynowanych warzyw, domowy sos BBQ.",
            "34,50",
            'section.barbeku'
        ).render();

new foodSection(
    "Pierogi domowe",
    "vareniks",
    "main",
    " (9szt.)",
).render();

        new MenuDish(
            "Ruskie z okrasą",
            "Pierogi z ziemniakami i serem.",
            "20,50",
            'section.vareniks'
        ).render();

        new MenuDish(
            "Ruskie inaczej",
            "Pierogi z oliwą, czosnkiem, grana padano (twardy włoski ser) i natką.",
            "21,50",
            'section.vareniks'
        ).render();

        new MenuDish(
            "Pierogi z kiszoną kapustą i grzybami",
            "Podąwane z okrasą lub oliwą.",
            "22,50",
            'section.vareniks'
        ).render();