/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   

    let largo;
    let ancho;
    let perimetro;
    let perimetro2;
    let alambre;
  
     
    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    perimetro = largo+ancho;
    perimetro2 = perimetro * 2;
    alambre = perimetro2 * 3;
    
    alert(alambre);

}
function Circulo () 
{

    let π;
    let radio;
    let perimetro;
    let alambre;

    π = parseFloat(3.141592653589793238462643383279502884197169399375105);
    radio = parseFloat(document.getElementById("txtIdRadio").value);
    perimetro = 2 * π * radio;
    alambre = perimetro * 3;

    alert(alambre.toFixed(3));

}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    let respuesta;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    area = largo * ancho;
    cemento =  area * 2;
    cal = area * 3;
    respuesta = "se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal";

    alert(respuesta);

}
    /* Martin Allende
       Tp 2 
       Entregado */