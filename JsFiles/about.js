const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");
const container = document.querySelector(".container");
const aboutSection = document.querySelector(".about-section");
const aboutSectionCircle = document.querySelector(".about-section-circle");

function toggleNavMenu() {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    navLinks.style.display = "block";
    aboutSection.style.display = "none";
  } else {
    navLinks.style.display = "none";
    aboutSection.style.display = "flex";
    navLinks.classList.add("active");
  }
}

hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

function addCircles(numberOfCircles) {
  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    aboutSectionCircle.appendChild(circle);
  }
}

addCircles(7);

toggleNavMenu();
