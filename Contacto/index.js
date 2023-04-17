
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

    if (nombre == "" || email == "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return false;
    }
    else {
        return true;
    }
}



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