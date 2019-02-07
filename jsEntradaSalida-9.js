/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

    var sueldo;
    var aumento;
    var nuevoSueldo;

    sueldo = parseInt (document.getDocumentById ("Sueldo")).value;

    aumento = parseInt (document.getDocumentById ("resultado")).value;

     nuevoSueldo = sueldo + aumento


	
}
