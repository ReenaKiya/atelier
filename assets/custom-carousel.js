// Fix Carousel Navigation - All Slides
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.ai-carousel-container');
  if (!carousel) return;
  
  const slidesContainer = carousel.querySelector('.ai-carousel-slides');
  const slides = carousel.querySelectorAll('.ai-carousel-slide');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  
  if (!slidesContainer || !slides.length || !prevButton || !nextButton) return;
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  // Function to update carousel position
  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    const offset = -currentIndex * slideWidth;
    slidesContainer.style.transform = `translateX(${offset}px)`;
    
    // Update button states
    prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
    nextButton.style.opacity = currentIndex === totalSlides - 1 ? '0.5' : '1';
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === totalSlides - 1;
  }
  
  // Next button click
  nextButton.addEventListener('click', function() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  });
  
  // Previous button click
  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      updateCarousel();
    }, 250);
  });
  
  // Initialize
  updateCarousel();
  
  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  slidesContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  slidesContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentIndex < totalSlides - 1) {
        // Swipe left - next slide
        currentIndex++;
        updateCarousel();
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right - previous slide
        currentIndex--;
        updateCarousel();
      }
    }
  }
});
