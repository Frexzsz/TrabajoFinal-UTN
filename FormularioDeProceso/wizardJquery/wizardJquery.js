/*-----WIZARD JQUERY-----hecho por benjamin y juan*/

$("document").ready(function () {
    $(".btn_siguiente-1").click(function () {
      $(".paso2").css({ "border-color": "#08FF00", color: "#08FF00" });
      $(".progreso").css({ background: "#08FF00", width: "30%" });
      $(".paso3").css({ "border-color": "lightgray", color: "lightgray" });
      $(".activo").text("✓");
      $(".paso2").text("2");
      /*-------siguiente formulario = de Usuario al Servicio (2) --------*/
      $("#Usuario").hide();
      $("#Confirmacion").hide();
      $("#Servicio").show();
      $("#btn1").hide();
    });

    /*Boton "atras(pasa del 2 al 1)"*/
    $("#btn-Back1").click(function(){  
      $(".paso1").css({ "border-color": "#08FF00", color: "#08FF00" });
      $(".progreso").css({ background: "#08FF00", width: "" });
      $(".paso2").css({ "border-color": "lightgray", color: "lightgray" });
      $(".activo").text("1");
      $(".paso1").text("2");

      $("#Confirmacion").hide();
      $("#Servicio").hide();
      $("#btn1").show();
      $("#Usuario").show();
    })

    $(".btn_siguiente-2").click(function () {
      $(".paso3").css({ "border-color": "#08FF00", color: "#08FF00" });
      $(".progreso").css({ background: "#08FF00", width: "60%" });
      $(".paso4").css({ "border-color": "lightgray", color: "lightgray" });
      $(".paso2").text("✓");
      $(".paso3").text("3");
      /*----------siguiente formulario = de servicio a Confirmacion (3) ----------*/
      $("#Usuario").hide();
      $("#Servicio").hide();
      $("#Confirmacion").show();
      $("#btn2").hide();
      $("#btn-Back");
    });

    /*Boton "atras(pasa del 3 al 2)"*/
    $("#btn-Back2").click(function(){  
      $(".paso2").css({ "border-color": "#08FF00", color: "#08FF00" });
      $(".progreso").css({ background: "#08FF00", width: "30%" });
      $(".paso3").css({ "border-color": "lightgray", color: "lightgray" });
      $(".activo").text("✓");
      $(".paso2").text("2");

      $("#Usuario").hide();
      $("#Servicio").show();
      $("#Confirmacion").hide();
      $("#btn2").show();
      
    })

    

    $(".btn_finalizar").click(function () {
      $(".paso4").css({ "border-color": "#08FF00", color: "#08FF00" });
      $(".progreso").css({ background: "#08FF00", width: "90%" });
      $(".paso3").text("✓");
      $(".paso4").text("✓");
      /*----------siguiente formulario final Check (4) ----------*/
      $("#Usuario").hide();
      $("#Servicio").hide();
      $("#Confirmacion").hide();
      $("#btn3").hide();
      $("#Check").show();
    });

    $(".enviar-form").click(function () {
      $(".paso4").text("✓");
    });
  });

  /*------- validacion --------*/
  const datoUsuario = () => {
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidoUsuario = document.getElementById("apellido").value;
    let telefonoUsuario = document.getElementById("telefono").value;
    let correoUsuario = document.getElementById("correo").value;
    let servicioElegido = document.getElementById("servicioSelect").value;
    let fechaElegido = document.getElementById("fecha").value;
    let comentarioComida = document.getElementById("comentarioComida").value;
    let comidaElegida = document.getElementById("comida").value;

    document.getElementById("resultadoNombre").innerHTML = nombreUsuario
    document.getElementById("resultadoApellido").innerHTML = apellidoUsuario
    document.getElementById("resultadoTelefono").innerHTML = telefonoUsuario
    document.getElementById("resultadoCorreo").innerHTML = correoUsuario
    document.getElementById("resultadoServicio").innerHTML = servicioElegido
    document.getElementById("resultadoFecha").innerHTML = fechaElegido
    document.getElementById("resultadoComentario").innerHTML = comentarioComida
    document.getElementById("resultadoComidaElegida").innerHTML = comidaElegida
};
console.log(datoUsuario);

/*----- convertir pdf ------*/

function convertirpdf(){
  let convnombre = document.getElementById("nombre").value;
  let convapellido = document.getElementById("apellido").value;
  let convtelefono = document.getElementById("telefono").value;
  let convcorreo = document.getElementById("correo").value;

  let convpaquete = document.getElementById("servicioSelect").value;
  let convfecha = document.getElementById("fecha").value;
  let convcomidatextarea = document.getElementById("comentarioComida").value;
  let convcomida = document.getElementById("comida").value;

  const doc = new jsPDF();
    doc.fromHTML(convnombre, 10, 10);
    doc.fromHTML(convapellido, 10, 15);
    doc.fromHTML(convtelefono, 10, 20);
    doc.fromHTML(convcorreo, 10, 25);

    doc.fromHTML(convpaquete, 10, 35);
    doc.fromHTML(convfecha, 10, 40);
    doc.fromHTML(convcomidatextarea, 10, 45);
    doc.fromHTML(convcomida, 10, 50);

    doc.save("Caterin Contrato");
};

/*------- validaciones ----------*/
const regex = {
  individuo: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10}$/
}

let formulariousuario = document.getElementById('Usuario');
let entradausuario = document.querySelectorAll('#Usuario input');


entradausuario.forEach(function(entrada){
  entrada.addEventListener('change', validarformulario);
  entrada.addEventListener('blur', validarformulario);
});

function validarformulario(evento){
  switch (evento.target.name){
    case 'nombre':
      if(regex.individuo.test(evento.target.value)){
        document.getElementById('nombre').classList.remove('formulariomal');
        document.getElementById('nombre').classList.add('formulariobien');
        document.getElementById('msjerror').classList.remove('mensajeerror-activo');
      } else {
        document.getElementById('nombre').classList.remove('formulariobien');
        document.getElementById('nombre').classList.add('formulariomal');
        document.getElementById('msjerror').classList.add('mensajeerror-activo');
      }
    break;
    case 'apellido':
      if(regex.individuo.test(evento.target.value)){
        document.getElementById('apellido').classList.remove('formulariomal');
        document.getElementById('apellido').classList.add('formulariobien');
        document.getElementById('msjerrora').classList.remove('mensajeerror-activo');
      } else {
        document.getElementById('apellido').classList.remove('formulariobien');
        document.getElementById('apellido').classList.add('formulariomal');
        document.getElementById('msjerrora').classList.add('mensajeerror-activo');
      }
    break;
    case 'telefono':
      if(regex.telefono.test(evento.target.value)){
        document.getElementById('telefono').classList.remove('formulariomal');
        document.getElementById('telefono').classList.add('formulariobien');
        document.getElementById('msjerrort').classList.remove('mensajeerror-activo');
      } else {
        document.getElementById('telefono').classList.remove('formulariobien');
        document.getElementById('telefono').classList.add('formulariomal');
        document.getElementById('msjerrort').classList.add('mensajeerror-activo');
      }
    break;
    case 'correo':
      if(regex.correo.test(evento.target.value)){
        document.getElementById('correo').classList.remove('formulariomal');
        document.getElementById('correo').classList.add('formulariobien');
        document.getElementById('msjerrorc').classList.remove('mensajeerror-activo');
      } else {
        document.getElementById('correo').classList.remove('formulariobien');
        document.getElementById('correo').classList.add('formulariomal');
        document.getElementById('msjerrorc').classList.add('mensajeerror-activo');
      }
    break;
  }
}