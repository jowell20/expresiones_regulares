$(function () {

    unionAlfabetos();
    unionLenguajes();
    // //-------------- 
     concatenarLenguaje()
     InsterseccionDeLenguajes()
     InsterseccionDeAlfabeto()
     diferenciaDeLenguajesAB()
     diferenciaDeLenguajesBA()
     inversaDeUnLenguaje();
     cardinalidad()
     cardinalidaddeunaPalabra()
     inversadeunaPalabra()
 Npotencia() 

    // cardinalidaddeunaPalabra()
    // inversadeunaPalabra()
 
})
// ------------------------------------------------------------------------------------------------------------
function unionAlfabetos() {
 
$("#alfabeto").click(function(e){
    e.preventDefault();
  
    let vector1 = $("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");
let vector =$("#vector1").val();
let vecto =$("#vector2").val();
    if( vecto!="" && vector!="" ){ 
   
    let alfabeto = vector1.concat(vector2)

    var unionAlfabeto = alfabeto.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    })
   $("#union").html(JSON.stringify(unionAlfabeto))
   
  Insterseccion();
     diferenciaAlfabeto();
     diferenciaAlfabetoBA()
}else{
alert("Llene todos los campos")
}
})
}
// ------------------------------------------------------------------------------------------------------------
function unionLenguajes() {
    
     $("#lenguaje").click(function(e){
        e.preventDefault();
   
        let vector1 = $("#vector1").val().split(",");
        let vector2 = $("#vector2").val().split(",");
    
        let vector =$("#vector1").val();
        let vecto =$("#vector2").val();
            if( vecto!="" && vector!="" ){ 
        let alfabeto = vector1.concat(vector2)
    
        var unionAlfabeto = alfabeto.filter(function (item, index, array) {
            return array.indexOf(item) === index;
        })
      
       $("#union").html(JSON.stringify(unionAlfabeto))
       
            }else{
                alert("Llene todos los campos")
            }
    })
    }
// ------------------------------------------------------------------------------------------------------------
function diferenciaAlfabeto() {
    let vector1 = $("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");

    let a = vector1.filter(elemento => vector2.indexOf(elemento) == -1)

    $("#diferencia").html(JSON.stringify(a))

}
function diferenciaAlfabetoBA() {
    let vector1 = $("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");

    let a = vector2.filter(elemento => vector1.indexOf(elemento) == -1)

    $("#diferenciaBA").html(JSON.stringify(a))

}
// ------------------------------------------------------------------------------------------------------------

function Insterseccion() {
    $("#alfabeto").click(function(e){
    let vector1 = $("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");

    var vector3= new Set(vector1),
        vector4 = new Set(vector2);
    const intersection = Array.from(vector3).filter(x => vector4.has(x));//Set {3, 4}

    $("#interseccionalfabeto").html(JSON.stringify(intersection))
    })
}

// ------------------------------------------------------------------------------------------------------------
function InsterseccionDeLenguajes() {
$("#lenguaje").click(function(e){
    var vector1 = new Set($("#vector1").val().split(",")),
    vector2 = new Set($("#vector2").val().split(","));

//  var vector1 = new Set(['a', 'b', 'c']),
//     vector2 = new Set(['b', 'c', 'd']);

const intersection = Array.from(vector1).filter(x => vector2.has(x));//Set {3, 4}

//document.write("<br>" + " Intersección de lenguajes           " + intersection)
$("#interseccionlenguaje").html(JSON.stringify(intersection))
$("#interseccionalfabeto").html(JSON.stringify(intersection))
})
    
  
}
function InsterseccionDeAlfabeto() {
    $("#alfabeto").click(function(e){
        var vector1 = new Set($("#vector1").val().split(",")),
        vector2 = new Set($("#vector2").val().split(","));
      
    const intersection = Array.from(vector1).filter(x => vector2.has(x));
    
   
    $("#interseccionalfabeto").html(JSON.stringify(intersection))
    })
        
      
    }
// ------------------------------------------------------------------------------------------------------------

function diferenciaDeLenguajesAB() {
    $("#lenguaje").click(function(e){
    let vector1 = $("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");
    let a = vector1.filter(elemento => vector2.indexOf(elemento) == -1)

   // document.write("<br>" + " Diferencia de lenguajes " + a)
    $("#diferencia").html(a)
    })
}
function diferenciaDeLenguajesBA() {
    $("#lenguaje").click(function(e){
    let vector1 = $("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");
    let a = vector2.filter(elemento => vector1.indexOf(elemento) == -1)

   // document.write("<br>" + " Diferencia de lenguajes " + a)
    $("#diferenciaba").html(a)
    })
}
//-----------
function concatenarLenguaje() {
    $("#lenguaje").click(function(e){
        e.preventDefault()
  
    let vector1 =$("#vector1").val().split(",");
    let vector2 = $("#vector2").val().split(",");
    let tam1 = vector1.length
    let tam2 = vector2.length;
    let salida = "";
    for (var i = 0; i < tam1; i++) {
        for (var j = 0; j < tam2; j++) {
            salida = salida + (vector1[i] + vector2[j]) + ", "
           
        }
      
    }
    let tamstring = salida.length

   
    $("#concatenacion").html(salida.substr(0, tamstring - 2))
})
}
//-------------



function inversaDeUnLenguaje() {     
$("#potencia").click(function(e){
    let vector1 =  $("#vector1").val().split(",");
    let datos="";
  
    for (var j = 0; j < vector1.length; j++) {
        let dato = vector1[j]
          
        for (var i = dato.length -1; i >=0; i--) {
                  datos += dato[i];
        
        }

      datos=datos+",";
    }
    let inversa=JSON.stringify(datos)

    $("#inversa").html(inversa.substr(1,inversa.length-3));
})
}
function cardinalidad(){    
    $("#potencia").click(function(e){
    let vector1 = $("#vector1").val().split(",");
    let cardinalidad=vector1.length;
    $("#cardinalidad").html(cardinalidad)
    })
}
function cardinalidaddeunaPalabra(){
$("#palabras").click(function(e){
   
    e.preventDefault();
    let vecto =$("#vectorpalabra").val();
    if( vecto!=""  ){
    
    let vector1 =$("#vectorpalabra").val();
     $("#cardinalidad").html(vector1.length);
    }else{
        alert("Llene todos los campos")
        }
        

    })
}
function inversadeunaPalabra(){
    $("#palabras").click(function(e){
        e.preventDefault();
    let palabra =$("#vectorpalabra").val();

let tam=palabra.length;
let vectorpalabra=[];
for (var i = tam-1; i >=0 ; i--) {
    vectorpalabra.push(palabra.charAt(i))
 
}

$("#inversa").html(vectorpalabra)
   
})
}



function Npotencia() {
    $("#potencia").click(function(e){
        e.preventDefault()
        let vector1 =$("#vector1").val().split(",");
   let nuevovector=[];
   let vector=$("#vector1").val();

   let potencia = $("#grado").val();

let tam=vector1.length;

if(potencia!="" &&  vector!="" ){ 
if(potencia==1){
    $("#potenciacion").html(vector)

}else{
  

}if(potencia==0){
    $("#potenciacion").html("1")

}else{
    for (var x = 1; x < potencia; x++) {
        if(nuevovector.length !=0){
          
            let tam2=nuevovector.length
            for (var i = 0; i < tam; i++) {
                for (var j = 0; j < tam2; j++) {
                    nuevovector.push(vector1[i]+ nuevovector[j])
                   
                }
            
               
            }
           
            $("#potenciacion").html(JSON.stringify(nuevovector))
          
          
        }else{
           
            
            for (var i = 0; i < tam; i++) {
                for (var j = 0; j < tam; j++) {
                    nuevovector.push(vector1[i]+ vector1[j])
                }
            }
         
            $("#potenciacion").html(JSON.stringify(nuevovector))
        }
        }
}

  


}else{
alert("Llene todos los campos")
}


})
}
