document.querySelectorAll('.smooth-scroll').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

function handleScroll() {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);

// For touch devices, use the 'touchmove' event instead of 'scroll'
window.addEventListener('touchmove', handleScroll);