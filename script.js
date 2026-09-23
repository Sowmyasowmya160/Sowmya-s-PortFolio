// Interactive UI logic for portfolio page
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll handler for nav anchors
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Terminal line animation effect
  const terminalLines = document.querySelectorAll('.terminal-body p');
  terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(5px)';
    line.style.transition = 'all 0.3s ease';

    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transform = 'translateY(0)';
    }, 200 * index);
  });
});