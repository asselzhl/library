'use strict'
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })  
})
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
    if (dropMenuNoAuth.classList.contains('_active')) {
        dropMenuNoAuth.classList.remove('_active')
    } 
    if (dropMenuWithAuth.classList.contains('_active')) {
        dropMenuWithAuth.classList.remove('_active')
    } 
})
/*----------------------------------BURGER_MENU----------------------------------*/
const menuIcon = document.querySelector('.menu__icon');
const navigation = document.querySelector('.navigation');
menuIcon.addEventListener('click', function (e) {
    menuIcon.classList.toggle('_active');
    navigation.classList.toggle('_active');
    if (dropMenuNoAuth.classList.contains('_active')) {
        dropMenuNoAuth.classList.remove('_active');
    }
})

/*----------------------------------DROP_MENU----------------------------------*/
const userIcon = document.querySelector('.header__user');
const dropMenuNoAuth = document.getElementById('dropMenuNoAuth');
const dropMenuWithAuth = document.getElementById('dropMenuWithAuth');
userIcon.addEventListener('click', function (e) {
    if (userIcon.getAttribute('auth') == 'true') {
        dropMenuWithAuth.classList.toggle('_active');
    } else {
        dropMenuNoAuth.classList.toggle('_active');
    }
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
    if (loginModal.classList.contains('_active')) {
        dropMenuNoAuth.classList.remove('_active');
    }
});
dropRegister.addEventListener('click', function (e) {
    registerModal.classList.add('_active');
    if (registerModal.classList.contains('_active')) {
        dropMenuNoAuth.classList.remove('_active');
    }
})
window.addEventListener('click', function (e) {
    if (e.target === loginModal) {
        loginModal.classList.remove('_active');
    } else if (e.target === registerModal) {
        registerModal.classList.remove('_active');
    } else if (e.target === buyCardModal) {
        buyCardModal.classList.remove('_active');
    } else if (e.target === profileModal) {
        profileModal.classList.remove('_active');
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
buyButtons.forEach((buyButton, i) => {
    buyButton.setAttribute('data-num', i);
    buyButton.addEventListener('click', () => {
        if (userIcon.getAttribute('auth') == 'true') {
            buyCardModal.classList.add('_active');
        } else {
            loginModal.classList.add('_active');
        }
    })
})

buyCardClose.addEventListener('click', function (e) {
    buyCardModal.classList.remove('_active');
});








/*----------------------------------VALIDATION----------------------------------*/
const formRegister = document.getElementById('registerForm');
const registerInputs = document.querySelectorAll('.register__input');
const registerButton = document.querySelector('.register__button');
let authCount = 0; 
userIcon.setAttribute('auth', false);



let cardNumber = getCardNumber(1, 15);

formRegister.addEventListener('submit', () => {
    registerInputs.forEach((field) => {
        localStorage.setItem(field.name, field.value);
        localStorage.setItem('cardNumber', cardNumber);
    })
    userIcon.setAttribute('auth', true);
    registerModal.classList.remove('_active');
    if (userIcon.getAttribute('auth') == 'true') {
        changeUserIcon();
        dropTitleWithAuth.innerHTML = localStorage.getItem('cardNumber');
        authCount++;
        
    } 
})



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

function changeUserIcon () {
    let firstName = localStorage.getItem('firstName');
    let lastName = localStorage.getItem('lastName');
    let newIcon = firstName[0] + lastName[0];
    userIcon.innerHTML = newIcon.toUpperCase();
    userIcon.style.background = '#FFF';
    userIcon.style.padding = '4.5px';
    userIcon.setAttribute('title', firstName + ' ' + lastName);
}
const dropTitleWithAuth = document.getElementById('dropTitleWithAuth');
const logOut = document.getElementById('logOut');


logOut.addEventListener('click', () => {
    userIcon.setAttribute('auth', false);
    userIcon.innerHTML = '<img src="./assets/icons/userIcon.svg" alt="">';
    userIcon.removeAttribute('style');
    dropMenuWithAuth.classList.remove('_active');
})
console.log(localStorage);

let loginInfo = [localStorage.getItem('cardNumber'), localStorage.getItem('registerEmail')];
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginForm = document.getElementById('loginForm');
const popupLoginButton = document.getElementById('popupLoginButton');
loginForm.addEventListener('submit', () => {
    if (loginInfo.includes(loginEmail.value)) {
        loginEmail.classList.remove('error');
    } else {
        loginEmail.classList.add('error');
    }
    if (loginPassword.value == localStorage.getItem('registerPassword')) {
        loginPassword.classList.remove('error');
    } else {
        loginPassword.classList.add('error');
    }
    if (!(loginEmail.classList.contains('error') && loginPassword.classList.contains('error'))) {
        userIcon.setAttribute('auth', true);
        loginModal.classList.remove('_active');
        if (userIcon.getAttribute('auth') == 'true') {
            changeUserIcon();
            dropTitleWithAuth.innerHTML = localStorage.getItem('cardNumber');
            profileCardNum.innerHTML = localStorage.getItem('cardNumber');
            profileName.innerHTML = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
            authCount++;
            localStorage.setItem('visitsCount', authCount);
        } 
    }
})

const profileCardNum = document.getElementById('profileCardNum');
const profileModal = document.getElementById('profileModal');
const profileButton = document.getElementById('myProfile');
const profileClose = document.querySelector('.close__button');
const profileName = document.querySelector('.profile__name');
profileButton.addEventListener('click', () => {
    profileModal.classList.add('_active');
    dropMenuWithAuth.classList.remove('_active');
})
profileClose.addEventListener('click', () => {
    profileModal.classList.remove('_active');
})


const copyButton = document.querySelector('.copy__button');
copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(profileCardNum.innerText);
})
const visitsCount = document.getElementById('visitsCount');
function changeVisitsCount () {
    visitsCount.innerHTML = localStorage.getItem('visitsCount'); 
    setTimeout(changeVisitsCount, 500)
}
changeVisitsCount();



const bookTitles = document.querySelectorAll('.book__title');
const bookAuthors = document.querySelectorAll('.book__author');
let books = [];
for (let i = 0; i < bookTitles.length; i++) {
    books.push(bookTitles[i].innerHTML + ', ' + bookAuthors[i].innerHTML.slice(3));
}


const checkForm = document.getElementById('form');
const checkButton = document.getElementById('checkCard');
const profileInfo = document.querySelector('.profile__info');
const checkUsername = document.getElementById('username');
const checkCardNum = document.getElementById('cardNumber');
checkForm.addEventListener('submit', () => {
    const clone = profileInfo.cloneNode(true);
    let readersName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
    if (userIcon.getAttribute('auth') == 'false'  && checkUsername.value == readersName && checkCardNum.value == localStorage.getItem('cardNumber')) {
        checkButton.style.display = 'none';
        clone.style.marginBottom = '0px';
        checkForm.appendChild(clone);
    }
    setTimeout(resetCheck, 10000)
    function resetCheck () {
        clone.style.display = 'none';
        checkButton.style.display = 'block';
        checkForm.reset();
    }
})
localStorage.clear()