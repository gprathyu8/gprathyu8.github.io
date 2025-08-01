// Parallax grid animation (already handled by CSS)
// Add any additional JS for interactivity here

document.addEventListener('DOMContentLoaded', function() {
  // Animated scroll for CTA links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
