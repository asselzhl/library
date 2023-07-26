'use strict'

/*----------------------------------ABOUT_SLIDER----------------------------------*/
const wrapper = document.querySelector('.slider__wrapper');
const dots = document.querySelectorAll('.dot');


let activeDotnum = 0;

dots.forEach ((dot, i) => {
    dot.setAttribute('data-num', i);

    dot.addEventListener('click', changeClientWidth);

    function changeClientWidth (e) {
        let clickedDotNum = e.target.dataset.num;
        if (clickedDotNum == activeDotnum) {
            return;
        } else {
            let imageWidth = wrapper.firstElementChild.clientWidth;
            let pixels = (-imageWidth * clickedDotNum) - (clickedDotNum * 25)
            wrapper.style.transform = 'translateX(' + pixels + 'px)';
            dots[activeDotnum].classList.remove('active');
            dots[clickedDotNum].classList.add('active');
            activeDotnum = clickedDotNum;
        }
    }
});

/*----------------------------------SCROLLTO----------------------------------*/
const links = document.querySelectorAll('.navigation__link[data-goto]');


for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = link.dataset.goto;

        const block = document.querySelector(id);
        if (menuIcon.classList.contains('_active')) {
            menuIcon.classList.remove('_active');
            navigation.classList.remove('_active');
        }
        block.scrollIntoView ({behavior: "smooth"});
    })
}
const main = document.querySelector('.main');
main.addEventListener ('click', function (e) {
    if (menuIcon.classList.contains('_active')) {
        menuIcon.classList.remove('_active');
        navigation.classList.remove('_active');
    }
    if (dropMenu.classList.contains('_active')) {
        dropMenu.classList.remove('_active')
    }
})
/*----------------------------------BURGER_MENU----------------------------------*/
const menuIcon = document.querySelector('.menu__icon');
const navigation = document.querySelector('.navigation');
menuIcon.addEventListener('click', function (e) {
    menuIcon.classList.toggle('_active');
    navigation.classList.toggle('_active');
})

/*----------------------------------DROP_MENU----------------------------------*/
const userIcon = document.querySelector('.header__user');
const dropMenu = document.querySelector('.drop__menu');
userIcon.addEventListener('click', function (e) {
    dropMenu.classList.toggle('_active');
});
/*----------------------------------MODAL----------------------------------*/
const dropLogin = document.getElementById('dropLogin');
const loginModal = document.getElementById('loginModal');
const dropRegister = document.getElementById('dropRegister');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.form-popup__close');
dropLogin.addEventListener ('click', function (e) {
    loginModal.classList.add('_active');
});
dropRegister.addEventListener('click', function (e) {
    registerModal.classList.add('_active');
})
window.addEventListener('click', function (e) {
    if (e.target === loginModal) {
        loginModal.classList.remove('_active');
    } else if (e.target === registerModal) {
        registerModal.classList.remove('_active');
    } else if (e.target === buyCardModal) {
        buyCardModal.classList.remove('_active');
    }
});

for (let closeButton of closeButtons) {
    closeButton.addEventListener('click', function (e) {
        loginModal.classList.remove('_active');
        registerModal.classList.remove('_active');
    })
}
const signupButton = document.getElementById('signupButton');
const loginButton = document.getElementById('loginButton');
signupButton.addEventListener('click', function (e) {
    registerModal.classList.add('_active');
});
loginButton.addEventListener('click', function (e) {
    loginModal.classList.add('_active');
});

/*----------------------------------BUY-CARD__MODAL----------------------------------*/
const buyButtons = document.querySelectorAll('.card__button');
const buyCardModal = document.querySelector('.modal__buy-card');
const buyCardClose = document.querySelector('.buy-card__close');
for (let buyButton of buyButtons) {
    buyButton.addEventListener('click', function (e) {
        buyCardModal.classList.add('_active');
    })
};
buyCardClose.addEventListener('click', function (e) {
    buyCardModal.classList.remove('_active');
});




const checkButton = document.querySelector('.form__button');
const loginTitle = document.querySelector('.login__title');
const loginText = document.querySelector('.login__text');
checkButton.addEventListener('submit', e => {
    e.preventDefault ();

    loginTitle.innerHTML = 'Visit your profile';
    loginText.innerHTML = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.'
})




/*----------------------------------FAVORITES-PICKER----------------------------------*/

const radioButtons = document.querySelectorAll('input[type=radio]');
const winterWrapper = document.getElementById('winterWrapper');
const springWrapper = document.getElementById('springWrapper');
const summerWrapper = document.getElementById('summerWrapper');
const autumnWrapper = document.getElementById('autumnWrapper');
