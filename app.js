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
    constructor(title, classes, parendSelector) {
        this.title = title;
        this.classes = classes;
        this.parend = document.querySelector(parendSelector);
    }
    render() {
        const element = document.createElement('section');
        element.classList.add('wrap');
        element.classList.add(`${this.classes}`);
        element.innerHTML = `
            <div class="show-more">
                <div class="line-horizontal"></div>
                <div class="line-vertical"></div>
            </div>
            <h2 class='title-section'>&#11045; ${this.title} &#11045;</h2>
        `;
        this.parend.append(element);
    }
}

new foodSection(
    "Sałaty",
    "salat",
    "main",
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




//! show order
const btnsOrder = document.querySelector('[data-order=open-list]'),
      listOrderWrap = document.querySelector('.list-order-wrap');

btnsOrder.addEventListener('click', () => {
    if(listOrderWrap.classList.contains('hide-order-list')) {
        listOrderWrap.classList.remove('hide-order-list');
        listOrderWrap.classList.add('animation-left');
    } else {
        listOrderWrap.classList.remove('animation-left');
        listOrderWrap.classList.add('hide-order-list');
        listOrderWrap.classList.add('animation-left');
    }
    
});

//! Show section food 
const showMore = document.querySelector('.show-more'),
      lineVertical = document.querySelector('.line-vertical');

lineVertical.classList.add('rotate-line');

showMore.addEventListener('click', (e) => {
    document.querySelector('section').classList.toggle('section-show');
    if(showMore.lastElementChild.classList.contains('rotate-line')) {
        lineVertical.classList.remove('rotate-line');
        lineVertical.classList.add('animation-rotate');
        document.querySelector('section').classList.add('animation-height');
    } else {
        lineVertical.classList.remove('animation-rotate');
        lineVertical.classList.add('rotate-line');
        lineVertical.classList.add('animation-rotate');
        document.querySelector('section').classList.remove('animation-height');
        document.querySelector('section').classList.add('animation-height');
    }
});