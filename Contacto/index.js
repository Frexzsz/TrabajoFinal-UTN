
//  ====================== header ===========================

window.addEventListener("load", function () {
    hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    };
});

// ================== form ============================
// ------------ campos obligatorios--------------


function validarForm() {
    var nombre = document.getElementById('imp1').value;
    var email = document.getElementById('imp4').value;
    var texto= document.getElementById('textof');
    var entrar=false;
   texto.innerHTML="";

    if (nombre == "" && email == "") {
        
        
        entrar = true;
        
    }
    else if (nombre == "" && email != ""){
        
    
        entrar = true;
       
        
    }
    else if (nombre != "" && email == "") {
        
        
        entrar = true;


    }
    else {
        texto.innerHTML += "<p>¡Enviado!</p>";
       
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



// ---------------------map API--------------------
function iniciarMap() {
    var coord = { lat: -34.5956145, lng: -58.4431949 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

// Dark Mode / Light mode //

window.addEventListener("load", function () {
    let btn = document.getElementById("btn");
    let btnText = document.getElementById("btnText");
    let btnIcon = document.getElementById("btnIcon");
    btn.onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            btnIcon.src = "/ImagenesDelHome/Sun.png"
            btnText.innerHTML = "Light";
        } else {
            btnIcon.src = "/ImagenesDelHome/Moon.png"
            btnText.innerHTML = "Dark";
        }
    }
})
