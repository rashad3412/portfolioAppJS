const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");
const content = document.querySelector(".main-content-section");
const container = document.querySelector(".container");
const projectPage = document.getElementById("#projects-section");

// function to toggle between active class for hamburger menu
function toggleNavMenu() {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.toggle("active");
    navLinks.style.display = "block";
    content.style.display = "none";
  } else {
    navLinks.style.display = "none";
    content.style.display = "block";
    navLinks.classList.add("active");
  }
}

// When hamburgerIcon is clicked the toggleNavMenu function will be fired.
hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

toggleNavMenu();

const menuIcon = document.querySelector(".icon");
const navLinks2 = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks2.classList.toggle("active");
});

// A function that will add circles to the page.
function addCircles(numberOfCircles) {
  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    container.appendChild(circle);
  }
}

addCircles(7);

document.addEventListener("DOMContentLoaded", () => {
  const projectComponent = document.getElementById("project-component");

  // Function to load project.html content
  function loadProjectComponent() {
    fetch("project.html")
      .then((response) => response.text())
      .then((data) => {
        projectComponent.innerHTML = data;
      })
      .catch((error) => console.log("Error loading Project Component:", error));
  }

  // Check screen size on initial load
  if (window.innerWidth >= 1024) {
    loadProjectComponent();
  }

  // Check screen size on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      loadProjectComponent();
      projectComponent.style.display = "block";
      projectSectionHeader.style.display = "none";
    } else {
      projectComponent.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projectLink = document.getElementById("project-link");

  const projectSection = document.getElementById("project-component");

  projectLink.addEventListener("click", (e) => {
    if (window.innerWidth >= 1024) {
      e.preventDefault();
      projectSection.scrollIntoView({
        behavior: "auto",
      });
    } else {
    }
  });
});
