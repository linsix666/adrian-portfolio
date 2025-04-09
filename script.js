document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const navLinks = document.querySelectorAll(".nav-menu a");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  });

  new Typed("#typed-text", {
    strings: ["Welcome to my <span>Digital Portfolio!</span>"],
    typespeed: 40,
    backspeed: 20,
    startDelay: 800,
    backDelay: 3000,
    loop: true,
    smartBackspace: false,
    showCursor: true,
    cursorChar: '|'
  })
});


