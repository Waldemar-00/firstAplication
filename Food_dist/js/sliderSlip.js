window.addEventListener('DOMContentLoaded', () => {
    const sliderPrev = document.querySelector('.offer__slider-prev');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');
    const sliderNext = document.querySelector('.offer__slider-next');
    const offerSlides = document.querySelectorAll('.offer__slide');
    const slidersWrapper = document.querySelector('.offer__slider-wrapper');
    const slidersInner = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidersWrapper).width;
    
    slidersInner.style.width = 100 * offerSlides.length + '%';
    slidersInner.style.display = 'flex';
    slidersInner.style.transition = 'all 0.6s';
    offerSlides.forEach(slide => { slide.style.width = width; });

    slidersWrapper.style.overflow = 'hidden';

    let offset = 0;
    function increment() {
        if(current.innerHTML < total.innerHTML)current.innerHTML = '0' + (+current.innerHTML + 1);
        else current.innerHTML = '01';
    }
    function decrement() {
        if(current.innerHTML > 1)current.innerHTML = '0' + (current.innerHTML - 1);
        else current.innerHTML = total.innerHTML;
    }
    sliderNext.addEventListener('click', () => {
        if(offset == width.slice(0, width.length - 2) * (offerSlides.length -1)) offset = 0;
        else offset += +width.slice(0, width.length - 2);
        slidersInner.style.transform = `translateX(-${offset}px)`;
        increment();
    });

    sliderPrev.addEventListener('click', () => {
    if(offset == 0) offset += +width.slice(0, width.length - 2) * (offerSlides.length -1);
    else offset -= width.slice(0, width.length - 2);
    slidersInner.style.transform = `translateX(-${offset}px)`;
    decrement();
});

});