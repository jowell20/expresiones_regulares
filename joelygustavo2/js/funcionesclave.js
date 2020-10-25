$(function () {
    validarClave()
    alerta()
    $("#validada").hide();
    $("#tamcontra").hide();
    $("#error").hide();
});

function validarClave() {

    $("#validar").on('click', function(e){
        $("#validada").hide();
  e.preventDefault()
  $("#mayuscula").html("")
  $("#minuscula").html("")
  $("#numero").html("")
  $("#caracteres").html("")


    var contraseña = $("#clave").val().replace(/ /g, "");
    if(contraseña.length<10){
        $("#tamcontra").html("La contraseña de contener 10 caracteres, sin espacios");
        $("#tamcontra").slideDown("slow");
    }else{
        let vectorcontraseña = []
        //crear vector
        for (var i = 0; i < contraseña.length; i++) {
            vectorcontraseña.push(contraseña.charAt(i))
        }
    
        for (var i = 0; i < vectorcontraseña.length; i++) {
            var mayus = /[A-Z]/.test(vectorcontraseña[i])
            var minus = /[a-z]/.test(vectorcontraseña[i])
            var numer = /[0-9]/.test(vectorcontraseña[i])
            mayuscula(mayus,i)
            minuscula(minus,i)
            numeros(numer,i)
            caracter(mayus,minus,numer,i)
        }
        if(
            $("#mayuscula").html().length==0 &&
            $("#minuscula").html().length==0 &&
            $("#numero").html().length==0 &&
            $("#caracteres").html().length==0
        ){
           // alert("Contraseña validada con éxito")
           $("#validada").html("Validada con éxito!");
            $("#validada").slideDown("slow");
        }
    }
    
})  
}
function mayuscula(letra,i){
    if(i==0){
        if (letra == true ) {
        } else{
            $("#mayuscula").html("* La primera debe ser mayúscula")
            $("#error").html("Verifíque la contraseña");
            $("#error").slideDown("slow");
        }
    }
  
}
function numeros(numero,i){
    if(i==1 ||i==2||i==3){

        if (numero == true  || numero == true || numero == true ) {
                    } else {
                        $("#numero").html("* Despúes de las tres minúculas debe tener trés numeros")
                        $("#error").html("Verifíque la contraseña");
                        $("#error").slideDown("slow");
                    }
    }   
}
function minuscula(minus,i){
       
    if(i==4 ||i==5||i==6){
        if (minus == true || minus == true|| minus == true) {
        } else {
            $("#minuscula").html("* Despúes de la mayúscula debe tener trés minúsculas")
            $("#error").html("Verifíque la contraseña");
            $("#error").slideDown("slow");


        }

    }
   
}

function caracter(mayus,minus,numer,i){
    if(i==7 ||i==8||i==9){
               if (mayus == false && minus==false && numer == false) {
            }else {
                $("#caracteres").html("* Despúes de los trés numeros debe tener trés caracteres especiales")
                $("#error").html("Verifíque la contraseña");
                $("#error").slideDown("slow");
            }
    }
   
}
function alerta(){
    $("#clave").click(function(e){
        $("#error").slideUp("slow");
        $("#validada").slideUp("slow");
        $("#tamcontra").slideUp("slow");

       

    })


}
