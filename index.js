const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");
const content = document.querySelector(".main-content-section");
const container = document.querySelector(".container");

function toggleNavMenu() {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    navLinks.style.display = "block";
    content.style.display = "none";
  } else {
    navLinks.style.display = "none";
    content.style.display = "block";
    navLinks.classList.add("active");
  }
}

hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

toggleNavMenu();

function addCircles(numberOfCircles) {
  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    container.appendChild(circle);
  }
}

addCircles(7);
