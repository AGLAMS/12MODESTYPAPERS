document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;

    // Toggle the active state for the accordion button
    button.classList.toggle('active');

    // Show or hide the accordion content based on its current state
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Handle Back to Top button visibility based on scroll position
window.onscroll = function() {
  const backToTopButton = document.getElementById('backToTop');
  // Show or hide the button depending on scroll position
  backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
};

// Back to Top button functionality with smooth scroll
document.getElementById('backToTop').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
