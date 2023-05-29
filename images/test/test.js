const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const slideWidth = slides[0].offsetWidth;
let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 5;
  }
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.length - 4) {
    slideIndex = 0;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  const translateXValue = -slideIndex * slideWidth;
  sliderContainer.style.transform = `translateX(${translateXValue}px)`;
}