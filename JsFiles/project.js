const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");
const container = document.querySelector(".container");
const projectDemo = document.querySelector(".demo-project-container");

// function to toggle between active class for hamburger menu
function toggleNavMenu() {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    navLinks.style.display = "block";
    projectDemo.style.display = "none";
  } else {
    navLinks.style.display = "none";
    projectDemo.style.display = "flex";
    navLinks.classList.add("active");
  }
}

// When hamburgerIcon is clicked the toggleNavMenu function will be fired.
hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

toggleNavMenu();
