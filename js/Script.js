const images = [
    'img/banner/1.jpg',
    'img/banner/2.jpg',
    'img/banner/3.jpg',
    'img/banner/4.jpg',
    'img/banner/5.jpg',
]
let Index = 0;
const banner = document.querySelector('.banner');

setInterval(() => {
    Index = (Index + 1) % images.length;
    banner.style.backgroundImage = `url(${images[Index]})`;
}, 5000);