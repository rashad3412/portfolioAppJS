let hamburger = document.querySelector(".icon");
let navLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".link");
let container = document.querySelector(".container");
let projectDemo = document.querySelector(".demo-project-container");
console.log(projectDemo);

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

hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

toggleNavMenu();
