window.addEventListener('DOMContentLoaded', () => {
    const sliderPrev = document.querySelector('.offer__slider-prev');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');
    const sliderNext = document.querySelector('.offer__slider-next');
    const offerSlides = document.querySelectorAll('.offer__slide');
    slider(sliderPrev, current, total, sliderNext, offerSlides);
    function slider(sliderPrev, current, total, sliderNext, offerSlides) {
    offerSlides.forEach((slide, index) => {
        if(index === 2) slide.classList.add('show');
        else slide.classList.add('hide');
    });
    sliderPrev.addEventListener('click', () => {
        if(current.innerHTML == 1)return;
        else {
            current.innerHTML -= 1;
            offerSlides.forEach((slide, index) => {
                if(current.innerHTML == index + 1) {
                    slide.classList.add('show');
                    slide.classList.remove('hide');
                } else {
                    slide.classList.add('hide');
                    slide.classList.remove('show');
                }
            });
        }
    });
    sliderNext.addEventListener('click', () => {
    if(+current.innerHTML == total.innerHTML)return;
    else {
        current.innerHTML = +current.innerHTML + 1;
        offerSlides.forEach((slide, index) => {
            if(current.innerHTML == index + 1) {
                slide.classList.add('show');
                slide.classList.remove('hide');
                } else {
                    slide.classList.add('hide');
                    slide.classList.remove('show');
                    }
        });
    }
});
}
});

