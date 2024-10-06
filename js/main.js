// Get the button
var backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block"; // Show the button
  } else {
    backToTopBtn.style.display = "none"; // Hide the button
  }
}

// When the user clicks on the button, scroll to the top
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
