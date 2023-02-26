'use script';
//! Create element food-menu
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
            <div class="title-section-box">&#11045;<h2 class='title-section'>${this.title}<span>${this.span}</span></h2>&#11045;</div>
        `;
        this.parend.append(element);
    }
}
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

const foodDB_pl = {
    salat: {
        name: "Sałaty",
        class: "salat",
        parend: "main",
        option: "",
        children: {
            "Sałatka Karafka": [29.50, "Sałata lodowa z mixem warzyw, filet z kurczaka w cieście naleśnikowym, sos winegret, tacosy, sezam."],
            "Cesare z curczakiem": [29.50, "Sałata lodowa z cesarskim dresingiem, żółty ser, grzanki i grillowany kurcazak."],
            "Cesare z łososiem": [30.50, "Sałata lodowa z cesarskim dresingiem, żółty ser, grillowany łosoś i grzanki."],
            "Kapsalon <br> (frytki po holendersku)": [22.50, `&#11045; Kebab, sos amerykański, prażona cebula, pikle, rukola. <br> &#11045; Kurczak po azjatycku, sos mango-mayo, pikle, sezam, rukola.`],
        }
    },
    soup: {
        name: "Zupy",
        class: "soup",
        parend: "main",
        option: "",
        children: {
            "Krem pomidorowo-paprykowy": [15.50, "Lekki krem z pieczonej papryki, pomidory, ciecierzyca"],
            "Żurek z uszkami": [17.50, "Żurek zabielany z chrzanem, boczkiem, podawany z uszkami z białą kiełbasa."],
        }
    },
    kidsMenu: {
        name: "Menu dla dzieci",
        class: "kids-menu",
        parend: "main",
        option: "",
        children: {
            "Nuggetsy": [14.50, "Sześć nuggetsów z ketchupem."],
            "Spaghetti": [15.50, "Spaghetti bolognese."],
            "Pancake": [14.50, "Trzy pancake z nutellą."]
        }
    },
    meatFood: {
        name: "Dania mięsne",
        class: "meat-food",
        parend: "main",
        option: "",
        children: {
            "Classic burger": [24.50, "160g polskiej wołowiny, ser cheddar, pomidor, mix sałat, cebula, sos amerykański."],
            "Bacon burger": [25.50, "160g polskiej wołowiny, chrupiący bekon, pomidor, mix sałat, ogórek kiszony, cebula, sos."],
            "Burger cesarski": [23.50, "Grillowany kurczak, mix sałat, sos cesar, ser żółty."],
            "Burger Premium": [27.50, "160g polskiej wołowiny, prażona cebula, ser cheddar, bekon, warzywa, sałaty, sos BBQ."]
        }
    },
    accessories: {
        name: "Dodatki",
        class: "accessories",
        parend: "main",
        option: "",
        children: {
            "Frytki stekowe": [12.50, "200 gramów frytek stekowych, sos."],
            "Frytki z batatów": [15.00, "200 gramów frytek z batatów, sos Mango-Mayo."],
            "Mix warzyw": [4.00, "Mix marynowanych warzyw, sos winegret."]
        }
    },
    barbeku: {
        name: "Z grilla",
        class: "barbeku",
        parend: "main",
        option: " (450-500g)",
        children: {
            "Kebab z kurczaka po grechu": [31.50, "Marynowany w jogurcie kurczak, sos tzatzyki, frytki stekowe, marynowane warzywa."],
            "Grillowana pierś z kurczaka": [30.50, "Filet macerowany w sosie śródziemnomorskim, frytki stekowe, marynowane warzywa, sos."],
            "Żeberka BBQ (350g)": [34.50, "Marynowane w piwie, miodzie i czosnku z ziołami, serwowane z puree i mixem marynowanych warzyw, domowy sos BBQ."]
        }
    },
    vareniks: {
        name: "Pierogi domowe",
        class: "vareniks",
        parend: "main",
        option: " (9szt.)",
        children: {
            "Ruskie z okrasą": [20.50, "Pierogi z ziemniakami i serem."],
            "Ruskie inaczej": [21.50, "Pierogi z oliwą, czosnkiem, Grana Padano (twardy włoski ser) i natką."],
            "Pierogi z kiszoną kapustą i grzybami": [22.50, "Podąwane z okrasą lub oliwą."],
            "Pierogi szpinakowe z kozim syrem": [22.50, "Podąwane z oliwą czosnkiem, Grana Padano (twardy włoski ser) i natka."],
            "Pierogi mięsne z okrasą": [22.50, "Pierogi mięsne z okrasą."],
            "Pierogi z serem na słodko": [1950, "Pierogi z serem na słodko."]
        }
    },
    pasta: {
        name: "Makarony",
        class: "pasta",
        parend: "main",
        option: " (400-450g)",
        children: {
            "Tagliatelle ze szpinakiem kurczakiem lub suszonymi pomidorami": [29.50, "Zielonym groszkiem w sosie śmietanowym."],
            "Tagliatelle z grillowanym łososiem": [30.50, "Suszonymi pomidorami w sosie winnym."],
            "Tagliatelle z grillowanym łososiem": [30.50, "Suszonymi pomidorami w sosie winnym."],
            "Spaghetti Bolognese": [27.50, "Makaron, sos pomidorowy, ser."]
        }
    },
    pancakes: {
            name: "Naleśniki wytrawne",
            class: "pancakes",
            parend: "main",
            option: "",
            children: {
                "Gyros": [29.50, "Karkówka z surówką i sosami."],
                "Shaorma": [28.50, "Kawałki kurczaka z surówką i sosami."],
                "Bolognese z tacosami": [25.50, "Mięso bolognese z serem, fasolą, tacosy, sos."],
                "Kebab z kurczaka po grecku": [26.50, "Dwa placki naleśnikowe z marynowanym kurczakiem, warzywa, sos tzatzyki."],
                "Taco meksykańskie": [28.50, "Dwa różne placki kukurydziane, bolognese, karkówka, świeże warzywa, sosy."],
                "Mięsno-szpinakowy": [24.50, "Mięso mielone wieprzowe, szpinak, sos."],
                "Cesare z kurczakiem": [25.50, "Kurczak z serem, sos cesarski, sałata, grzanki."]
            }
        },
        pancakesVege: {
        name: "Naleśniki vege",
        class: "pancakes-vege",
        parend: "main",
        option: "",
        children: {
            "Szpinak, ser rokpol lub feta, sos": [23.50, "Szpinak, ser rokpol lub feta, sos."],
            "Szpinak, mozzarella, suszone pomidory, sos": [25.50, "Szpinak, mozzarella, suszone pomidory, sos."]
        }
    },
    pancakesZapiekan: {
            name: "Naleśniki zapiekane",
            class: "pancakes-zapiekan",
            parend: "main",
            option: "",
            children: {
                "Lasagne naleśnikowa mięśna": [29.50, "Z sosem pomidorowym."]
            }
        },
        panCake: {
            name: "Pancake",
            class: "pan-cake",
            parend: "main",
            option: " (5 szt.)",
            children: {
                "Nutella z wiśniami/malinami": [20.50, "Nutella z syropem wiśniowym/syropem malinowym."],
                "Oreo z sosami czekoladowymi": [20.50, "Sos z czarnej i białej czekolady, bita śmietana."],
                "Amerykański": [20.50, "Syrop klonowy, bita śmietana, owoce."]
            }
        },
        pancakeSweet: {
            name: "Naleśniki słodkie",
            class: "pancake-sweet",
            parend: "main",
            option: "",
            children: {
                "Z cukrem pudrem": [9.50, "Z cukrem pudrem."],
                "Z dżemem/konfiturą": [11.50, "Z dżemem/konfiturą."],
                "Jesienny z sosem śliwkowym": [20.50, "Jesienny z sosem śliwkowym."],
                "Nutella z wiśniami w sosie czekoladowym": [20.50, "Sos czekoladowy i śmietankowy, bita śmietana."],
                "Karmelizowane banany": [20.50, "Mus bananowo-czekoladowy, orzechy włoskie, bita śmietana."],
                "Sernikowy": [18.50, "Z sosem truskawkowym sos waniliowy, bita śmietana."],
                "Sernikowy": [20.50, "Z sosem malinowym."],
                "Sernikowy": [18.50, "Z wiśniowym, bezy, bita śmietana."]
            }
        },
        dessert: {
            name: "Desery",
            class: "dessert",
            parend: "main",
            option: "",
            children: {
                "Tiramisu klasyczne": [11.50, "Włoski deser z mascarpone przełożony nasączonymi w kawie i alkoholu biszkoptami."],
                "Jabłecznik": [15.50, "Klasyczny jabłecznik podany z lodem i bitą śmietaną."],
                "Sernik": [15.50, "Sernik rossa z gorącymi wiśniami i bitą śmietaną."],
                "Brownie czekoladowe": [14.50, "Z lodem waniliowym."],
                "Mini Pavlova": [10.50, "Wypiekane przez nas bezy z kremem mascarpone, konfitura rabarbarowa."],
                "Chałwa w czekoladzie": [10.50, "Czekoladowy krem z wiśnią i chałwą."]
            }
        },
        potable: {
            name: "Napoje zimne",
            class: "potable",
            parend: "main",
            option: "",
            children: {
                "Karafka wody": [9.50, "Karafka wody / 1L."],
                "Karafka soków": [15.50, "Karafka soków / 1L."],
                "Karafka lemoniady cytrynowej": [23.50, "Karafka lemoniady cytrynowej/ 1L."],
                "Lemoniada": [13.50, "Lemoniada / 300 ML."],
                "Świeży sok": [15.50, "Sok ze świeżych pomarańczy."],
                "Coca-Cola": [8.50, "Coca-Cola / 0,25 L."],
                "Fanta": [8.00, "Fanta / 0,25 L."],
                "Sprite": [8.00, "Sprite / 0,25 L."],
                "Kinley": [8.00, "Kinley  / 0,25 L."],
                "Kropla Beskidu": [7.00, "Kropla Beskidu gaz / 0,33 L."],
                "Kropla Beskidu": [7.00, "Kropla Beskidu n.gaz / 0,33 L."],
                "Furę": [8.00, "Furę / 0,25 L."],
                "Cappy": [8.00, "Cappy /0,25 L."],
                "Biorn": [8.50, "Biorn / 0,25 L."],
                "Red Bull": [8.50, "Red Bull / 0,25 L."]
            }
        },
}

for(let key in foodDB_pl) {
    new foodSection(
        foodDB_pl[key].name,
        foodDB_pl[key].class,
        foodDB_pl[key].parend,
        foodDB_pl[key].option,
    ).render();
    for(let keyChild in foodDB_pl[key].children) {
        new MenuDish(
            keyChild,
            foodDB_pl[key].children[keyChild][1],
            foodDB_pl[key].children[keyChild][0].toFixed(2),
            `.${foodDB_pl[key].class}`
        ).render();
    }
}



//! show order
const btnsOrderOpen = document.querySelector('[data-order=open-list]'),
      listOrderWrap = document.querySelector('.list-order-wrap'),
      imgOrder = document.querySelector('.order-head'),
      arrowImg = document.querySelectorAll('.btn-show-list>img');

btnsOrderOpen.addEventListener('click', showOrder);
imgOrder.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.matches('.count-order') || e.target.matches('img')) {
    showOrder();
    }
})
        

function showOrder() {
    if(listOrderWrap.classList.contains('hide-order-list')) {
        listOrderWrap.classList.remove('hide-order-list');
        listOrderWrap.classList.add('animation-left');
        document.querySelector('body').classList.add('body-overflow');
        for(let arrow of arrowImg) {
            arrow.classList.add('ratete-arrow');
        }
    } else {
        listOrderWrap.classList.remove('animation-left');
        listOrderWrap.classList.add('hide-order-list');
        listOrderWrap.classList.add('animation-left');
        document.querySelector('body').classList.remove('body-overflow');
        for(let arrow of arrowImg) {
            arrow.classList.remove('ratete-arrow');
        }
    }
}

//! Show section food 
const collectionSection = document.querySelectorAll('section');
const showMore = document.querySelector('.show-more'),
      lineVerticalCol = document.querySelectorAll('.line-vertical');

for(let line of lineVerticalCol) {
    line.classList.add('rotate-line');
} 

collectionSection.forEach(item => {
    item.addEventListener('click', (event) => {
        // rotateLine(verticalLine);
        if(event.target.matches('.show-more') || event.target.matches('.line')) {
            let sectionParent = event.target.closest('section');
            let verticalLine = sectionParent.children[0].children[1];
            showSection(sectionParent);
            rotateLine(verticalLine);
        }
    })
})

const collectionTitleSection = document.querySelectorAll('.title-section');
collectionTitleSection.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let sectionParent = event.target.closest('section');
        let verticalLine = sectionParent.children[0].children[1];
        showSection(sectionParent);
        rotateLine(verticalLine);
    })
})



function showSection(activElem) {
    activElem.classList.toggle('section-show');
    activElem.classList.toggle('animation-height');
}
function rotateLine(elemLine) {
    if(elemLine.classList.contains('rotate-line')) {
        elemLine.classList.remove('rotate-line');
        elemLine.classList.add('animation-rotate');
    } else {
        elemLine.classList.remove('animation-rotate');
        elemLine.classList.add('rotate-line');
        elemLine.classList.add('animation-rotate');
    }
}

//! style theme
let radio = document.querySelector('#radio');
let showMoreCollection = document.querySelectorAll('.show-more');
let lineCollection = document.querySelectorAll('.line');


window.addEventListener('change', ()=>{
if(!radio.checked) {
    document.querySelector('body').classList.remove('background-them-body');
    for(let elem of showMoreCollection) {
        elem.classList.remove('color-show-more');
    }
    for(let line of lineCollection) {
        line.classList.remove('color-line');
    }
    document.querySelector('.foot').classList.remove('background-footer');
    for(let title of document.querySelectorAll('.title-section')) {
        title.classList.remove('color-title');
    }
    document.querySelector('.btn-show-list').classList.remove('background-footer');
    document.querySelector('.list-order').classList.remove('background-footer');
    document.querySelector('.list-order>h3').classList.remove('color-title-order');
    document.querySelector('#titleOrder').style.color='#9071a3';
    document.querySelector('.total').style.color='#9071a3';
    document.querySelectorAll('[data-order=add-order]').forEach(elem => {
        elem.style.backgroundColor='white';
    })
    document.querySelector('.modal__content').classList.remove('background-footer');
    document.querySelectorAll('.them').forEach(elem => {
        elem.style.backgroundColor='white';
    })
} else {
    document.querySelector('body').classList.add('background-them-body');
    for(let elem of showMoreCollection) {
        elem.classList.add('color-show-more');
    }
    for(let line of lineCollection) {
        line.classList.add('color-line');
    }
    document.querySelector('.foot').classList.add('background-footer');
    for(let title of document.querySelectorAll('.title-section')) {
        title.classList.add('color-title');
    }
    document.querySelector('.btn-show-list').classList.add('background-footer');
    document.querySelector('.list-order').classList.add('background-footer');
    document.querySelector('#titleOrder').classList.add('color-title-order');
    document.querySelector('header > .wrap ').classList.remove('background');
    document.querySelector('header > .wrap ').classList.add('background-header-them');
    document.querySelector('#titleOrder').style.color='#ffe700';
    document.querySelector('.total').style.color='#ffe700';
    document.querySelectorAll('[data-order=add-order]').forEach(elem => {
        elem.style.backgroundColor='#b5c4e0';
    })
    document.querySelector('.modal__content').classList.add('background-footer');
    document.querySelectorAll('.them').forEach(elem => {
        elem.style.backgroundColor='#b5c4e0';
    })

}
})

//! Scroll
function scrollTo() {
    window.addEventListener('scroll', function() {
        if(pageYOffset > 20) {
            document.querySelector('header > .wrap').classList.add('background');
            document.querySelector('#blur').classList.add('blur');
            if(radio.checked) {
                document.querySelector('header > .wrap').classList.remove('background');
                document.querySelector('header > .wrap').classList.add('background-header-them');
            }
        } else {
            document.querySelector('header > .wrap').classList.remove('background');
            document.querySelector('#blur').classList.remove('blur');
        }
    });
}
scrollTo();

//! Add order
const orderDB = {
    nameMeal: [],
    countMeal: [],
    priceMeal: []
};

const btnsOrderAdd = document.querySelectorAll('[data-order=add-order]'),
      form = document.querySelector('.modal__content>form');

for(let btnElem of btnsOrderAdd) {
    btnElem.addEventListener('click', (e) => {
        let parendMeal = e.target.closest('.item-wrap-dish');
        let nameMeal = parendMeal.children[0].textContent;
        let priceMeal = parendMeal.children[1].children[1].children[0].textContent;
        document.querySelector('.modal__title').innerHTML = `Dodać do zamówienia <b>${nameMeal}</b>?`;
        document.querySelector('.price-modal').innerHTML = `Cena - <b>${priceMeal} zł</b>`;
        showModal();
            orderDB.nameMeal.push(nameMeal);
            orderDB.priceMeal.push(priceMeal);
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let countMeal = document.querySelector('[type="number"]').value;
    orderDB.countMeal.push(countMeal);
    createOrderList();
    addNumerList();
    sumOrder();
    hideModal();
    event.target.reset();
})

function createOrderList() {
    let parent = document.querySelector('.list-order>.order');
    parent.innerHTML = "";
    orderDB.nameMeal.forEach((position, i) => {
        parent.innerHTML += `
        <div class="order-elem">
            <span></span>
            <div>${position}</div>
            <p class="text-count">${orderDB.countMeal[i]}</p>
            <p class="text-sum">${Number(orderDB.priceMeal[i]) * orderDB.countMeal[i]}zł</p>
            <img src="assets/urn.svg" alt="icon urn"></img>
        </div>
        `;
    });
}

document.querySelector('.modal').addEventListener('click', (e) => {
    if(!(e.target.matches('.modal__dialog')) && e.target.matches('.modal') || e.target.matches('.modal__close') || e.target.matches('.btn_no')) {
        orderDB.nameMeal.pop();
        orderDB.priceMeal.pop();
        hideModal();
    }
})
function showModal() {
    document.querySelector('.modal').classList.add('show-block');
    document.querySelector('body').classList.add('body-overflow');
}
function hideModal() {
    document.querySelector('.modal').classList.remove('show-block');
    document.querySelector('body').classList.remove('body-overflow');
}

//! total sum order
function sumOrder() {
    const totalOrder = document.querySelector('.total');
    const countOrder = document.querySelector('.count-order');
    let order = document.querySelector('.order');
    if(order.childNodes.length === 1) {
        let content = parseFloat(order.firstElementChild.children[3].textContent);
        totalOrder.textContent = `Podsumowanie zamówienia: ${content}zł`;
        countOrder.textContent = `${content}zł`;
    } else if(order.childNodes.length > 1) {
        let orders = order.children;
        let content = 0;
        for(let elem of orders) {
            content += parseFloat(elem.children[3].textContent);
        }
        totalOrder.textContent = `Podsumowanie zamówienia: ${content}zł`;
        countOrder.textContent = `${content}zł`;
    } else {
        totalOrder.textContent = ``;
        countOrder.textContent = `0zł`;
    }
}

//! Remove order
document.querySelector('.order').addEventListener('click', (e) => {
    if(e.target.matches('.order-elem > img')) {
        let orderElem = e.target.closest('.order-elem');
        let position = parseFloat(orderElem.children[0].textContent);
        orderDB.nameMeal.splice(position-1, 1);
        orderDB.countMeal.splice(position-1, 1);
        orderDB.priceMeal.splice(position-1, 1);
        orderElem.remove();
        sumOrder();
        addNumerList();
    }
})

//! add numer list-order
function addNumerList() {
    let order = document.querySelector('.order');
    let orders = order.children;
    let i = 1;
    for(let elem of orders) {
        elem.children[0].textContent = `${i}.`;
        i++;
    }
}



document.querySelector('.number-minus').addEventListener('click', (e) => {
    e.target.nextElementSibling.stepDown(); 
    // e.target.nextElementSibling.onchange();
})
document.querySelector('.number-plus').addEventListener('click', (e) => {
    e.target.previousElementSibling.stepUp(); 
    // e.target.previousElementSibling.onchange();
})