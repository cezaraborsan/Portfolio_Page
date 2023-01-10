const loadText = document.querySelector(".loading-text");
const container = document.querySelector(".container");
const scollTop = document.querySelector(".up-arrow-btn");
const projectsBtn = document.querySelector(".projects-btn");
const projectsSection = document.querySelector(".projects-section");
const contactBtn = document.querySelector(".contact-btn");
const contactSection = document.querySelector(".contact-section");
const aboutMeBtn = document.querySelector(".aboutme-btn");
const aboutMeSection = document.querySelector(".aboutme-section");

// Scroll sections into view (Porjects and Contact sections)

projectsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTargetAdjusted(projectsSection);
});

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTargetAdjusted(contactSection);
});

aboutMeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTargetAdjusted(aboutMeSection);
});

function scrollToTargetAdjusted(section) {
  section.classList.remove("translate");
  const headerOffset = 100;
  const sectionPosition = section.getBoundingClientRect().top;
  const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
  });
}

// let load = 0;

// let loaderInterval = setInterval(bluring);

// Intersection Observer, section pop up when scoll into view

const target = document.querySelectorAll(".translate");
const body = document.querySelector("body");

const options = {
  rootMargin: "-20px 0px 0px",
};

const translateOnScroll = new IntersectionObserver(function (
  entries,
  translateOnScroll
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
},
options);

target.forEach((section) => {
  translateOnScroll.observe(section);
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scollTop.addEventListener("click", (e) => {
  e.preventDefault();
  topFunction();
});

// DARK MODE

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const lightMode = document.querySelector(".lightmode-icon");
const darkMode = document.querySelector(".darkmode-icon");

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
};

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  if (body.classList.contains("darkmode")) {
    lightMode.style.transform = "translateX(0vw)";
    darkMode.style.transform = "translateX(100vw)";
  } else {
    lightMode.style.transform = "translateX(100vw)";
    darkMode.style.transform = "translateX(0vw)";
  }
});
