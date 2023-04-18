// Dark Mode / Light mode hecho por mateo//

window.addEventListener("load", function () {
    let btn = document.getElementById("btn");
    let btnText = document.getElementById("btnText");
    let btnIcon = document.getElementById("btnIcon");
    btn.onclick = function () {
      document.body.classList.toggle("dark-theme");
      
      if(document.body.classList.contains("dark-theme")){
        btnIcon.src = "/ImagenesDelHome/Sun.png"
        btnText.innerHTML = "Light";
      }else{
        btnIcon.src = "/ImagenesDelHome/Moon.png"
        btnText.innerHTML = "Dark";
      }
    }
    })