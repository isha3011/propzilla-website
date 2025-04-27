// js for swiper start
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    on: {
      slideChangeTransitionStart: function () {
        // Restart animation when slide changes
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
          slide.style.animation = 'none';
          slide.offsetHeight; // trigger reflow
          slide.style.animation = '';
        });
      }
    }
  });

// js for swiper ends

let currentIndex = 0;
const cards = document.querySelectorAll('.carousel .card');
const totalCards = cards.length / 2; // Considering the duplicate cards
const carousel = document.querySelector('.carousel');

// Autoplay interval (change every 3 seconds)
const autoplayInterval = 3000; // 3000ms = 3 seconds

// Function to move to the next card
function showNextCard() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first card
    carousel.style.transition = 'none'; // Disable transition for instant reset
    carousel.style.transform = `translateX(0)`; // Reset to the first card
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    }, 50); // Small delay to allow reset to happen
  }
  updateCarouselPosition();
}

// Function to move to the previous card
function showPrevCard() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1; // Loop back to the last card
    carousel.style.transition = 'none'; // Disable transition for instant reset
    carousel.style.transform = `translateX(${(totalCards - 1) * - (cards[0].offsetWidth + 30)}px)`; // Reset to the last card
    setTimeout(() => {
      carousel.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    }, 50); // Small delay to allow reset to happen
  }
  updateCarouselPosition();
}

// Update the carousel's position to show the current card
function updateCarouselPosition() {
  const offset = -currentIndex * (cards[0].offsetWidth + 30); // 30px is the margin between cards
  carousel.style.transform = `translateX(${offset}px)`;
}

// Event listeners for manual navigation
document.getElementById('nextBtn').addEventListener('click', showNextCard);
document.getElementById('prevBtn').addEventListener('click', showPrevCard);

// Autoplay logic using setInterval
setInterval(showNextCard, autoplayInterval); // Automatically move to the next card every 3 seconds


//awards crousel
$(document).ready(function(){
    $('.awards-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1200: { items: 3 }
      }
    });
  });
  