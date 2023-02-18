'use script';
//! show order
const btnsOrderOpen = document.querySelector('[data-order=open-list]'),
      listOrderWrap = document.querySelector('.list-order-wrap');

btnsOrderOpen.addEventListener('click', () => {
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
const collectionSection = document.querySelectorAll('section');
const showMore = document.querySelector('.show-more'),
      lineVerticalCol = document.querySelectorAll('.line-vertical');

for(let line of lineVerticalCol) {
    line.classList.add('rotate-line');
} 

collectionSection.forEach(item => {
    item.addEventListener('click', (event) => {
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
const btnsOrderAdd = document.querySelectorAll('[data-order=add-order]');

btnsOrderAdd.forEach(btnElem => {
    btnElem.addEventListener('click', (e) => {
        let parendMeal = e.target.closest('.item-wrap-dish');
        let nameMeal = parendMeal.children[0].textContent;
        let price = parendMeal.children[1].children[1].children[0].textContent;
        document.querySelector('.modal__title').innerHTML = `Dodać do zamówienia <b>${nameMeal}</b>?`;
        document.querySelector('.price-modal').innerHTML = `Cena - <b>${price} zł</b>`;
        document.querySelector('.price-modal').innerHTML = `Cena - <b>${price} zł</b>`;
        showModal();
        let countMeal = document.querySelector('[name=count-meal]').value;
        document.querySelector('[name=btn_yes]').addEventListener('click', (e) => {
            e. preventDefault();
            document.querySelector('.order').innerHTML += `
            <div class="order-elem">
                <span></span>
                <div>${nameMeal}</div>
                <p class="text-count">${countMeal}</p>
                <p class="text-sum">${parseFloat(price) * countMeal}zł</p>
                <img src="assets/urn.svg" alt="">
            </div>
            `;
            hideModal();
        })
        document.querySelector('[name=btn_no]').addEventListener('click', (e) => {
            e. preventDefault();
            countMeal = '';
            hideModal();
        })
    })
})
document.querySelector('.modal').addEventListener('click', (e) => {
    if(!(e.target.matches('.modal__dialog')) && e.target.matches('.modal') || e.target.matches('.modal__close')) {
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


