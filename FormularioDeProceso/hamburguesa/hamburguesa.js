// hamburger nav bar por mateo

window.addEventListener("load", function () {
    hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
      navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    };
  });
  