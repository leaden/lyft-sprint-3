
	/*var telefono = document.getElementById("numero").value;
    var expresionRegular1=/^([0-9]+){9}$/;//<--- validar el numero
    var expresionRegular2=/\s/;//<--- validar que no tenga espacios en blanco

document.getElementById("numero").addEventListener("click",


  if(Telefono.value=='')
     alert('campo es obligatorio');
  }

  else if(expresionRegular2.test(Telefono.value))
    alert('error existen espacios en blanco');
  else if(!expresionRegular1.test(Telefono.value))
    alert('Numero de telefono incorrecto');

}*/

var num = ["0","1","2","3","4","5","6","7","8","9"];
document.getElementById("numero").value;

document.getElementById("botonrosa").addEventListener("click", 
    function boton(){
    if(numero == "" || numero.length !== num){
        return alert("Debe ingresar número telefónico")
    }else if(numero !== num){
        alert("Gacias")    
    }else{
        alert("Gracias")
    }
    });

//Defino el tablero
/*var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}

document.getElementById("play").addEventListener("click", 
