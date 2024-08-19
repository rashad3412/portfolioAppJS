const hamburger = document.querySelector(".icon");
console.log(hamburger);
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");

const contactSection = document.querySelector(".contact-section");

// function to toggle between active class for hamburger menu
function toggleNavMenu() {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    navLinks.style.display = "block";
    contactSection.style.display = "none";
  } else {
    navLinks.style.display = "none";
    contactSection.style.display = "block";
    navLinks.classList.add("active");
  }
}

// When hamburgerIcon is clicked the toggleNavMenu function will be fired.
hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

toggleNavMenu();
