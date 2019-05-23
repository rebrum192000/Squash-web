if (screen.width >= '768') {
    /* Индекс слайда по умолчанию */
    var slideI = 1;
    showSlides2(slideI);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide2() {
        showSlides2(slideI += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide2() {
        showSlides2(slideI -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide2(m) {
        showSlides2(slideI = m);
    }

    /* Основная функция слайдера */
    function showSlides2(m) {
        var i;
        var slides = document.getElementsByClassName("club-slider__item");
        var dots = document.getElementsByClassName("club-slider-button");
        if (m > slides.length) {
          slideI = 1;
        }
        if (m < 1) {
            slideI = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("club-slider-button-active", "");
        }

        var pred = slideI - 1;
        var sled = slideI + 1;
        if (slideI < 2) {
            pred = slides.length;
        } 
        if (slideI > slides.length - 1 ) {
            sled = 1;
        } 
        for (i = 0; i < slides.length; i++) {
            slides[i].className = slides[i].className.replace("club-slider__prev", "");
            slides[i].className = slides[i].className.replace("club-slider__next", "");
        }
        slides[pred - 1].className += " club-slider__prev";
        slides[sled - 1].className += " club-slider__next";
        slides[pred - 1].style.display = "block";
        slides[sled - 1].style.display = "block";



        slides[slideI - 1].style.display = "block";
        dots[slideI - 1].className += " club-slider-button-active";
    };
}

else {

    var slideI = 1;
    showSlides2(slideI);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide2() {
        showSlides2(slideI += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide2() {
        showSlides2(slideI -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide2(m) {
        showSlides2(slideI = m);
    }

    /* Основная функция слайдера */
    function showSlides2(m) {
        var j;
        var slidess = document.getElementsByClassName("club-slider__item");
        if (m > slidess.length) {
          slideI = 1;
        }
        if (m < 1) {
            slideI = slidess.length;
        }
        for (j = 0; j < slidess.length; j++) {
            slidess[j].style.display = "none";
        }

        slidess[slideI - 1].style.display = "block";
    };

}