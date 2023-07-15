'use strict'
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

