let currentSlide = 0;
const playSlider = () => {
    const slides = document.querySelectorAll('.slider__slide');
    slides.forEach((slide, index) => {
        slide.classList.add('slider__slide--hidden');
        if(index===currentSlide) {
            slide.classList.remove('slider__slide--hidden');
        }
    });
    currentSlide++;
    if(currentSlide+1 > slides.length) { currentSlide = 0 }
    setTimeout(playSlider, 2000)
}

playSlider();
