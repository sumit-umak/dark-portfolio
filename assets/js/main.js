const currentPage = window.location.pathname;
document.querySelectorAll("nav.main-menu ul a").forEach((link) => {
  if (link.getAttribute("href").includes(currentPage)) {
    link.classList.add("active");
  }
});

// mobile menu

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".mobile-menu-toggle");
  const mainMenu = document.querySelector(".main-menu");

  toggleButton.addEventListener("click", function () {
    // Toggle the "open" class on the button and "active" class on the menu
    toggleButton.classList.toggle("open");
    mainMenu.classList.toggle("active");
  });
});
