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
const lightModeBtn = document.querySelector(".lightmode-icon");
const darkModeBtn = document.querySelector(".darkmode-icon");
let darkMode = localStorage.getItem("darkmode");

// const disableDarkMode = () => {
//   document.body.classList.remove("darkmode");
// };

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enabled");
  lightModeBtn.style.transform = "translateX(0vw)";
  darkModeBtn.style.transform = "translateX(100vw)";
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "disabled");
  lightModeBtn.style.transform = "translateX(100vw)";
  darkModeBtn.style.transform = "translateX(0vw)";
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  // if (body.classList.contains("darkmode")) {
  //   lightMode.style.transform = "translateX(0vw)";
  //   darkMode.style.transform = "translateX(100vw)";
  // } else {
  //   lightMode.style.transform = "translateX(100vw)";
  //   darkMode.style.transform = "translateX(0vw)";
  // }

  darkMode = localStorage.getItem("darkmode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// LOADER

const loader = document.querySelector(".loader");
const loaderWrapper = document.querySelector(".loader-wrapper");

function fadeIn() {
  loader.classList.add("fadeIn");
}

function overflowVisible() {
  body.style.overflowY = "scroll";
}

function translateWrapper() {
  loaderWrapper.style.transform = "translateY(-200vh)";
  loaderWrapper.style.visibility = "hidden";
  setTimeout(overflowVisible, 1000);
}

window.addEventListener("load", (e) => {
  fadeIn();
  setTimeout(translateWrapper, 3500);
});
