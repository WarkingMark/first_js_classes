class Slider {
    constructor(sliderElements,callback,classParent) {
        this.sliderElements = sliderElements;
        this.callback = callback;
        this.classParent = classParent;
    }
    createSlider() {
        let html = this.callback();
        let parent = document.createElement('div');
        parent.classList.add('slider__items');
        parent.classList.add('swiper-wrapper');
        parent.innerHTML = html;
        return parent;
    }
    createArrow(parentClass,iconName,swiperId) {
        let arrowBox = document.createElement('div');
        arrowBox.classList.add('slider__arrow');
        arrowBox.classList.add(`${parentClass}`);
        arrowBox.classList.add(`${swiperId}`);
        let arrow = document.createElement('span');
        arrow.classList.add('material-icons');
        arrow.innerHTML = `${iconName}`;
        arrowBox.appendChild(arrow);
        return arrowBox;
    }
    render() {
        let sliderContainer = document.createElement('div');
        sliderContainer.classList.add(this.classParent)
        let slidec = this.createSlider();
        let arrowLeft = this.createArrow('left','arrow_back_ios_new','swiper-button-prev');
        let arrowRight = this.createArrow('right','arrow_forward_ios','swiper-button-next');
        sliderContainer.appendChild(arrowLeft);
        sliderContainer.appendChild(slidec);
        sliderContainer.appendChild(arrowRight);
        ROOT_CONTENT.appendChild(sliderContainer);
        
        setTimeout(() => {
            let swiper = new Swiper(`.${this.classParent}`, {
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                },
              });
        }, 1000);
    }
}