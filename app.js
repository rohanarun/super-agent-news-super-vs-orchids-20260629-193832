(function(){
  if (typeof window.gsap === 'undefined') return;
  gsap.from('.hero h1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
  gsap.from('.hero-sub', { y: 20, opacity: 0, delay: 0.2, duration: 0.8 });
  gsap.from('.media-frame', { y: 60, opacity: 0, delay: 0.4, duration: 1 });
})();