export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const handleScroll = (callback) => {
  const handleScrollEvent = () => {
    const scrollTop = window.scrollY;
    callback(scrollTop);
  };

  window.addEventListener('scroll', handleScrollEvent);
  return () => window.removeEventListener('scroll', handleScrollEvent);
};

export const isElementInView = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
};