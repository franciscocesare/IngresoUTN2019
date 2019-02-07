/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
    var num2;
    var resultado;

    num1 = parseInt (document.getElementById("numeroUno").value);
    num2 = parseInt (document.getElementById("numeroDos").value);
    
    resultado = (num1 + num2);

    alert ("el resultado es " + resultado);

}


function restar()
{ 
var a;
var b;
var resultado;

a = document.getElementById("numeroUno").value;
b = document.getElementById("numeroDos").value;

resultado = (a - b);

alert ("el resultado es " + resultado);
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

