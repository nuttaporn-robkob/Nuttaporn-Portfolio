/* ==========================================================
   1. TYPEWRITER EFFECT
   ========================================================== */
const text = " Mechatronics Engineering graduate";
const typingText = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeText() {
  if (!typingText) return;

  if (!isDeleting) {
    typingText.textContent = text.substring(0, index);
    index++;

    if (index > text.length) {
      isDeleting = true;
      setTimeout(typeText, 1500);
      return;
    }

    setTimeout(typeText, 100);

  } else {
    typingText.textContent = text.substring(0, index);
    index--;

    if (index < 0) {
      index = 0;
      isDeleting = false;
      setTimeout(typeText, 500);
      return;
    }

    setTimeout(typeText, 50);
  }
}

typeText();


/* ==========================================================
   2. ACTIVE NAVIGATION
   ========================================================== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const observerOptions = {
  root: null,
  rootMargin: "-30% 0px -70% 0px",
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const id = entry.target.getAttribute("id");

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    const activeLink = document.querySelector(`nav a[href="#${id}"]`);

    if (activeLink) {
      activeLink.classList.add("active");
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});
