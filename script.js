const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationPlayState = 'running';
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';
  appearOnScroll.observe(fader);
});

console.log("Welcome to Mahi Ullah’s portfolio!");
