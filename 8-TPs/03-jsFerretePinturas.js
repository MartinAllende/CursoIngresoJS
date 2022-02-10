/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let cambio;
    let resultado;
    let mensaje;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    cambio = temperatura - 32;
    resultado = cambio / 1.8;
    mensaje = temperatura + " Fahrenheit son " + resultado.toFixed(2) + " centigrados";

    alert(mensaje);

}

function CentigradosFahrenheit () 
{
    let temperatura;
    let cambio;
    let resultado;
    let mensaje;

    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    cambio = temperatura * 1.8
    resultado = cambio + 32 
    mensaje = temperatura + " centigrados son " + resultado.toFixed(2) + " fahrenheit";

    alert(mensaje);
}

 /* Martin Allende
    Tp 3 */
