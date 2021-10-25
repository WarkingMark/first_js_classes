function getElement(selector) {
    let elem = document.querySelector(selector);
    return elem;
}
function createAttribute(elem,attr,value) {
    elem.setAttribute(attr, value);
}

function showAnimeBox() {
    let anime__box__slider = getElement('.content__anime-box');
    let scroll__top = window.scrollY;
    let intersection = anime__box__slider.offsetHeight / 2;
    if(scroll__top >= intersection) {
        anime__box__slider.classList.add('scroll-elem-slider');
    } else {
        anime__box__slider.classList.remove('scroll-elem-slider');
    }
}
function ShowContentSlider() {
    let content__slider = getElement('.content__slider');
    setTimeout(() => {
        content__slider.classList.add('scroll-elem-slider-content');
    },500)
}

function ShowAudioPlayer() {
    let content__audio__player = getElement('.content__audio-plyer');
    let scroll__top = window.scrollY;
    let intersection = content__audio__player.offsetHeight;
    const cordination = scroll__top - intersection;
    if(scroll__top >= (scroll__top  + intersection)) {
        content__audio__player.classList.add('scroll-elem-slider-content');  
    } else {
        content__audio__player.classList.remove('scroll-elem-slider-content');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ShowContentSlider();
    window.addEventListener('scroll', () => {
        showAnimeBox();
        ShowAudioPlayer();
    })
})