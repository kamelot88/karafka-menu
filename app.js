'use script';
//! show order
const btnsOrderOpen = document.querySelector('[data-order=open-list]'),
      listOrderWrap = document.querySelector('.list-order-wrap'),
      imgOrder = document.querySelector('.order-head');

btnsOrderOpen.addEventListener('click', showOrder);
imgOrder.addEventListener('click', (e) => {
    if(e.target.matches('.count-order') || e.target.matches('img')) {
    showOrder();
    }
})
        

function showOrder() {
    if(listOrderWrap.classList.contains('hide-order-list')) {
        listOrderWrap.classList.remove('hide-order-list');
        listOrderWrap.classList.add('animation-left');
        document.querySelector('body').classList.add('body-overflow');
    } else {
        listOrderWrap.classList.remove('animation-left');
        listOrderWrap.classList.add('hide-order-list');
        listOrderWrap.classList.add('animation-left');
        document.querySelector('body').classList.remove('body-overflow');
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
        rotateLine(verticalLine);
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