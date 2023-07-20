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
    }
});

for (let closeButton of closeButtons) {
    closeButton.addEventListener('click', function (e) {
        loginModal.classList.remove('_active');
        registerModal.classList.remove('_active');
    })
}


