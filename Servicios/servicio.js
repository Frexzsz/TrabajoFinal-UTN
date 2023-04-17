// hamburger nav bar

window.addEventListener("load", function () {
    hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
      navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    };
  });
  
  // Scroll reveal Animation //
  
  window.addEventListener("load", function () {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 3000,
      delay: 100,
    });
  
    sr.reveal("catering");
    sr.reveal(".home__data", { origin: "bottom" });
    sr.reveal(".home__img", { origin: "left", delay: 100 });
  });
  
  // Dark Mode / Light mode //
  
  window.addEventListener("load", function () {
  let btn = document.getElementById("btn");
  let btnText = document.getElementById("btnText");
  let btnIcon = document.getElementById("btnIcon");
  btn.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
      btnIcon.src = "/imagenesDelHome/Sun.png"
      btnText.innerHTML = "Light";
    }else{
      btnIcon.src = "/imagenesDelHome/Moon.png"
      btnText.innerHTML = "Dark";
    }
  }
  })