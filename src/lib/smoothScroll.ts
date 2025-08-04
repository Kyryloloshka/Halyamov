export const smoothScrollTo = (targetId: string) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  // Враховуємо відступ для навігації (70px)
  const navbarOffset = 70;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  
  // Розраховуємо тривалість скролу на основі відстані
  // Мінімум 500мс, максимум 2000мс
  const duration = Math.max(500, Math.min(2000, Math.abs(distance) * 0.8));
  
  const startTime = performance.now();
  
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  requestAnimationFrame(animateScroll);
}; 