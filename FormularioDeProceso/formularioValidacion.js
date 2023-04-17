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