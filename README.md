# Portfolio Website

## Description

This is a fully responsive personal portfolio website built using **HTML**, **CSS**, and **JavaScript**. The site showcases my projects, skills, and contact information, with a focus on an optimized user experience across both mobile and desktop devices. Interactive elements, such as an animated hamburger menu and smooth scrolling, are implemented for enhanced navigation.

## Features

- **Responsive Design**: The website adapts to various screen sizes using **CSS Flexbox**, **Grid**, and media queries.
- **Dynamic Navigation**: The portfolio features a hamburger menu for mobile devices, enabling dynamic loading of content and smooth scrolling to specific sections.
- **Animated Circles**: Created interactive, animated circles to enhance visual appeal.
- **Mobile-First Approach**: Designed with mobile in mind and adapted for larger screen sizes.

## Project Structure

## Demo

You can view the live version of the project [here](https://rashadportfolio.netlify.app/).

## Technologies Used

- **HTML5**
- **CSS3 (Flexbox, Grid)**
- **JavaScript (ES6)**

## How to Use

### Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/rashad3412/portfolioAppJS.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolioAppJS
   ```
3. Open the `index.html` file in your browser.

### Dependencies

This project does not require any additional dependencies.

## Code Highlights

Here are some key code snippets from the project:

### Hamburger Menu Toggle

```javascript
const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
```
