document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".carousel-wrapper");
  
    if (wrapper) {
      const leftFade = document.createElement("div");
      const rightFade = document.createElement("div");
  
      leftFade.className = "carousel-fade left";
      rightFade.className = "carousel-fade right";
  
      wrapper.style.position = "relative";
      wrapper.appendChild(leftFade);
      wrapper.appendChild(rightFade);
    }
  });

  const carousel = document.querySelector('.carousel');
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    } else if (e.key === 'ArrowLeft') {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }
  });