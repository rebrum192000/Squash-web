if (screen.width >= '768') {
    /* Индекс слайда по умолчанию */
    /* Индекс слайда по умолчанию */
    var slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция слайдера */
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("feedback__item-pair");
        var dots = document.getElementsByClassName("feedback-button");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("feedback-button-active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " feedback-button-active";
    };

}  else {
    /* Индекс слайда по умолчанию */
    var slideIndex = 1;
    showSlides(slideIndex);

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide() {
        showSlides(slideIndex += 1);
    }

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
    function minusSlide() {
        showSlides(slideIndex -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Основная функция слайдера */
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("feedback__item");
        if (n > slides.length) {
          slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    };
}