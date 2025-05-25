// JavaScript for the website
// Toggle navigation menu
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

// Auto-scrolling functionality
const scrollContainer = document.getElementById("autoScrollContainer");

  // Step 1: Duplicate logos for seamless scroll
  scrollContainer.innerHTML += scrollContainer.innerHTML;

  let scrollSpeed = 1; // Adjust scroll speed (pixels per frame)

  function infiniteScroll() {
    scrollContainer.scrollLeft += scrollSpeed;

    // Reset scroll to the start when half scrolled (since we duplicated once)
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 5) {
      scrollContainer.scrollLeft = 0;
    }

    requestAnimationFrame(infiniteScroll);
  }

  infiniteScroll();
