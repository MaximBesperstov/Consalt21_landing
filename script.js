let offset = 0;
const slider = document.querySelector('main__slider')

document.querySelector(.right__btn).addEventListener('click', function () {
    offset = offset + 500;
    if (offset > 1440) {
        offset = 0;
    }
    slider.style.left = -offset + 'px';
});