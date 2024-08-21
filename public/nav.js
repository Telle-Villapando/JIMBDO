// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
};

// Header toggles functionality
const headerToggles = document.querySelectorAll(".headerToggle");

headerToggles.forEach((headerToggle) => {
  headerToggle.addEventListener("click", (event) => {
    event.stopPropagation();  // Prevent closing the toggle on the same click
    headerToggle.classList.toggle("active");
    
    // Ensure other toggles are closed
    headerToggles.forEach((otherToggle) => {
      if (otherToggle !== headerToggle) {
        otherToggle.classList.remove("active");
      }
    });
  });
});

// Close all toggles when clicking outside
document.addEventListener("click", () => {
  headerToggles.forEach((headerToggle) => {
    headerToggle.classList.remove("active");
  });
});
