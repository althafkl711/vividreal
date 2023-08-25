let currentSlide = 0;
const slideContainer = document.querySelector(".slider");

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = 1;
  } else if (currentSlide > 1) {
    currentSlide = 0;
  }
  
  slideContainer.style.transition = "transform 0.8s ease-in-out";
  slideContainer.style.transform = `translateX(-${currentSlide * 50}%)`;
  
  // Reset the transition after the animation completes
  setTimeout(() => {
    slideContainer.style.transition = "none";
  }, 800);
}
