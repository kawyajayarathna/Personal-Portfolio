// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  