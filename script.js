// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dark mode toggle
  document.getElementById('toggle-dark-mode').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  console.log("Portfolio Website Loaded with Smooth Scroll and Beautiful Dark Mode");
  