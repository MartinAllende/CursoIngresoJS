/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  
    let numero1;
    let numero2;
    let numero3;
    let resultado;

    numero1 = document.getElementById("txtIdPrecioUno").value;
	numero2 = document.getElementById("txtIdPrecioDos").value;
    numero3 = document.getElementById("txtIdPrecioTres").value;
    resultado = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
    alert(resultado.toFixed(2));

}
function Promedio () 
{
    let numero1;
    let numero2;
    let numero3;
    let precioBruto;
    let resultado;

    numero1 = document.getElementById("txtIdPrecioUno").value;
	numero2 = document.getElementById("txtIdPrecioDos").value;
    numero3 = document.getElementById("txtIdPrecioTres").value;
    precioBruto = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
    resultado = parseInt(precioBruto) / 3;
    alert(resultado.toFixed(2));
   
}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
    let precioBruto;
    let resultado;

    numero1 = document.getElementById("txtIdPrecioUsno").value;
	numero2 = document.getElementById("txtIdPrecioDos").value;
    numero3 = document.getElementById("txtIdPrecioTres").value;
    precioBruto = parseInt(numero1) + parseInt(numero2) + parseInt(numero3);
    resultado = parseInt(precioBruto) * 1.21;
    alert(resultado.toFixed(2));

}

/* "txtIdPrecioUno"
   "txtIdPrecioDos"
   "txtIdPrecioTres" 
    Martin Allende 
    tp 1       
    Entregado      */