// Banner Rotation
const images = [
  'img/banner/1.jpg',
  'img/banner/2.jpg',
  'img/banner/3.jpg',
  'img/banner/4.jpg',
  'img/banner/5.jpg',
];
let Index = 0;
const banner = document.querySelector('.banner');

setInterval(() => {
  Index = (Index + 1) % images.length;
  banner.style.backgroundImage = `url(${images[Index]})`;
}, 5000);

// Auto Scroll Logos
const scrollContainer = document.getElementById("autoScrollContainer");
scrollContainer.innerHTML += scrollContainer.innerHTML;

let scrollSpeed = 1;
function infiniteScroll() {
  scrollContainer.scrollLeft += scrollSpeed;

  if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
    scrollContainer.scrollLeft = 0;
  }

  requestAnimationFrame(infiniteScroll);
}
infiniteScroll();

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const serviceCars = document.querySelectorAll('.service-car');
serviceCars.forEach(el => observer.observe(el));

const featureBoxes = document.querySelectorAll('.feature-box');
featureBoxes.forEach(el => observer.observe(el));


const imageCollection = [
  'img/others/bmw.png',
  'img/others/audi.png',
  'img/others/polo.png'
];


function changeImage(){
  const randomIndex = Math.floor(Math.random() * imageCollection.length);
  document.getElementById('randomImage').src = imageCollection[randomIndex];
}
setInterval(changeImage, 2000); // Change image every 3 seconds