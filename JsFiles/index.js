const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".link");
const content = document.querySelector(".main-content-section");
const container = document.querySelector(".container");
const menuIcon = document.querySelector(".icon");
const navLinks2 = document.querySelector(".nav-links");
const projectComponent = document.getElementById("project-component");
const aboutSection = document.getElementById("about-section");
const projectLink = document.getElementById("project-link");

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

hamburger.addEventListener("click", () => {
  toggleNavMenu();
});

toggleNavMenu();

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
  const projectLink = document.getElementById("project-link");
  const aboutLink = document.getElementById("about-link");
  const projectSection = document.getElementById("project-component");
  const aboutSection = document.getElementById("about-section");

  // Function to load a component
  function loadComponent(component, url) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        component.innerHTML = data;
      })
      .catch((error) => console.error("Error loading component:", error));
  }

  // Function to handle smooth scrolling
  function handleScroll(e, section) {
    if (window.innerWidth >= 1024 && section) {
      e.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  // Function to handle window resize events
  function windowResize() {
    if (window.innerWidth >= 1024) {
      loadComponent(projectSection, "project.html");
      loadComponent(aboutSection, "about.html");
      projectSection.style.display = "block";
      aboutSection.style.display = "block";
    } else {
      // Hide or clear the components when the width is less than 1024px
      projectSection.style.display = "none";
      aboutSection.style.display = "none";
    }
  }

  // Add event listeners for scrolling
  if (projectLink && projectSection) {
    projectLink.addEventListener("click", (e) =>
      handleScroll(e, projectSection)
    );
  }

  if (aboutLink && aboutSection) {
    aboutLink.addEventListener("click", (e) => handleScroll(e, aboutSection));
  }

  // Call windowResize on initial load
  windowResize();

  // Listen for window resize events
  window.addEventListener("resize", windowResize);
});
