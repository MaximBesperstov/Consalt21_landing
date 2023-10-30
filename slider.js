document.addEventListener("DOMContentLoaded", function() {
    const leftSlider = document.querySelector('.main__slider .left__slider');
    const rightSlider = document.querySelector('.main__slider .right__slider');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    let swap = false;

    function toggleSliders() {
        if (swap) {
            leftSlider.style.order = 1;
            rightSlider.style.order = 0;
        } else {
            leftSlider.style.order = 0;
            rightSlider.style.order = 1;
        }
        swap = !swap;
    }

    nextButton.addEventListener('click', toggleSliders);
    prevButton.addEventListener('click', toggleSliders);
});
