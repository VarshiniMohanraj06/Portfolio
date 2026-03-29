// Smooth scroll for navbar
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Button scroll
document.getElementById("projectBtn").addEventListener("click", () => {
  document.getElementById("projects")
    .scrollIntoView({ behavior: "smooth" });
});