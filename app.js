'use script';
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

function showSection(activElem) {
    activElem.classList.toggle('section-show');
    activElem.classList.toggle('animation-height');
}
function rotateLine(elemLine) {
    if(elemLine.classList.contains('rotate-line')) {
        elemLine.classList.remove('rotate-line');
        elemLine.classList.add('animation-rotate');
        // document.querySelector('section').classList.add('animation-height');
    } else {
        elemLine.classList.remove('animation-rotate');
        elemLine.classList.add('rotate-line');
        elemLine.classList.add('animation-rotate');
        // document.querySelector('section').classList.remove('animation-height');
        // document.querySelector('section').classList.add('animation-height');
    }
}






//! style theme
let radio = document.querySelector('#radio');
let showMoreCollection = document.querySelectorAll('.show-more');
let lineCollection = document.querySelectorAll('.line');

radio.addEventListener('change', ()=>{
if(radio.checked) {
    document.querySelector('body').classList.add('background-them-body');
    for(let elem of showMoreCollection) {
        elem.classList.add('color-show-more');
    }
    for(let line of lineCollection) {
        line.classList.add('color-line');
    }
    document.querySelector('.foot').classList.add('background-footer');
} else {
    document.querySelector('body').classList.remove('background-them-body');
    for(let elem of showMoreCollection) {
        elem.classList.remove('color-show-more');
    }
    for(let line of lineCollection) {
        line.classList.remove('color-line');
    }
    document.querySelector('.foot').classList.remove('background-footer');
}
})


let round = document.querySelector('.slider:before');



//! Scroll
window.addEventListener('scroll', function() {
    if(pageYOffset > 20) {
     document.querySelector('header > .wrap').classList.add('background');
     document.querySelector('#blur').classList.add('blur');
    } else {
     document.querySelector('header > .wrap').classList.remove('background');
     document.querySelector('#blur').classList.remove('blur');
    }
   });


// for(let elem of lineCollection) {
//     elem.classList.remove('color-line');
// }