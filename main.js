document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = carousel.querySelector('.carousel__prev');
    const nextButton = carousel.querySelector('.carousel__next');
    const imagesContainer = carousel.querySelector('.carousel__images-container');
    const images = carousel.querySelectorAll('.carousel__images-container img');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
    
    function showPreviousImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = totalImages - 1;
      }
      updateCarousel();
    }
    
    function showNextImage() {
      currentIndex++;
      if (currentIndex >= totalImages) {
        currentIndex = 0;
      }
      updateCarousel();
    }
    
    function updateCarousel() {
      images.forEach((image, index) => {
        if (index === currentIndex) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
      const imageWidth = images[0].clientWidth;
      const translateXValue = -currentIndex * imageWidth;
      imagesContainer.style.transform = `translateX(${translateXValue}px)`;
    }
  });