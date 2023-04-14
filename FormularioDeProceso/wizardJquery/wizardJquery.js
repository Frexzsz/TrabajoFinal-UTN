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
      $(".progreso").css({ background: "#08FF00", width: "30%" });
      $(".paso2").css({ "border-color": "lightgray", color: "lightgray" });
      $(".activo").text("✓");
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