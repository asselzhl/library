'use strict'
/*----------------------------------ABOUT_SLIDER----------------------------------*/
const wrapper = document.querySelector('.slider__wrapper');
const dots = document.querySelectorAll('.dot');
const dotsWrapper = document.querySelector('.about__dots');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const prevButton = document.getElementById('prev__button');
const nextButton = document.getElementById('next__button');
const sliderImage = document.querySelectorAll('.slider__image');
let currentIndex = 0;
function dotControl (e) {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == currentIndex) {
        return; 
    } else {
        removeClass();
        currentIndex = clickedDotNum;
        changeClientWidth();
        addClass();
    }
}
dots.forEach((dot, i) => {
    dot.setAttribute('data-num', i);
    dot.addEventListener('click', dotControl);
});

function nextSlide () {
    if (currentIndex == sliderImage.length - 1) {
        return;
    } else {
        removeClass();
        currentIndex++;
        changeClientWidth();
        addClass();
    }
}
function prevSlide () {
    if (currentIndex == 0) {
        return;
    } else {
        removeClass();
        currentIndex--;
        changeClientWidth();
        addClass();
    }
}
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

function changeClientWidth () {
    let imageWidth = wrapper.firstElementChild.clientWidth;
    let pixels = (-imageWidth * currentIndex) - (currentIndex * 25);
    wrapper.style.transform = 'translateX(' + pixels + 'px)';
}
function removeClass () {
    dots[currentIndex].classList.remove('active');
}
function addClass () {
    dots[currentIndex].classList.add('active');
}


/*----------------------------------FAVORITES-SLIDER----------------------------------*/
const pickerButtons = document.querySelectorAll('.options__input');
const seasonBlocks = document.querySelectorAll('.cards__wrapper');
let index = 0;
let newIndex = 0;
pickerButtons.forEach((button, i) => {
  button.setAttribute('data-num', i)
  button.addEventListener('click', function () {
    seasonBlocks[index].classList.add("faded-out");
    seasonBlocks[index].classList.remove("faded-in");
    if (this.checked) {
      newIndex = this.dataset.num;
      index = +newIndex;
    }
    seasonBlocks[index].classList.add("faded-in");
    seasonBlocks[index].classList.remove("faded-out"); 
  })
})
const favoritesCards = document.querySelector('.favorites__cards');
favoritesCards.style.paddingBottom = favoritesCards.firstElementChild.clientHeight + 'px';
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
    if (dropMenu.classList.contains('_active')) {
        dropMenu.classList.remove('_active');
    }
})

/*----------------------------------DROP_MENU----------------------------------*/
const userIcon = document.querySelector('.header__user');
const dropMenu = document.querySelector('.drop__menu');
userIcon.addEventListener('click', function (e) {
    dropMenu.classList.toggle('_active');
    if (menuIcon.classList.contains('_active')) {
        menuIcon.classList.remove('_active');
        navigation.classList.remove('_active');
    }
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



/*----------------------------------REGISTER-VALIDATION----------------------------------*/
const formRegister = document.getElementById('registerForm');
const inputFields = document.querySelectorAll('.register__input');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validate (e) {
  
  inputFields.forEach(field => {
    if ((field.value == '') || (field.type == 'password' && field.value.length < 8) || (field.name == 'registerEmail' && !(emailRegex.test(field.value)))) {
      field.classList.add('error');
      return false;
    } 
    field.classList.remove('error');
    return true;
  })
  e.preventDefault();
  
}

formRegister.addEventListener('submit', validate);


function getCardNumber(min, max) {
    let lengthOfNumber = 9;
    let arrayOfNums = [];
    for (let i = 0; i < lengthOfNumber; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        arrayOfNums.push((Math.floor(Math.random() * (max - min + 1) + min)).toString(16));
    }
    return arrayOfNums.join('').toUpperCase();
}



