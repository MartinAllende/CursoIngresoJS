/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en 
informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let precioLamparas;
    let cantidadDeLamparas;
    let marca;
    let precioSinDescuento;
    
    precioLamparas = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioSinDescuento = precioLamparas * cantidadDeLamparas;
                
    
    switch(cantidadDeLamparas){
        case 5: if(marca =="ArgentinaLuz" && precioSinDescuento * 0.6 >= 120){
                    document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.6) * 1.1;
                    alert("usted pago " + (precioSinDescuento * 0.6)* 0.1 + " de IIBB");}

                else if(marca != "ArgentinaLuz" && precioSinDescuento * 0.7 >= 120){
                    (document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.7)* 1.1;
                    alert("usted pago " + (precioSinDescuento * 0.7)* 0.1 + " de IIBB");}

                else if(marca =="ArgentinaLuz" && precioSinDescuento * 0.6 < 120){
                    (document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.6;}

                else if(marca != "ArgentinaLuz" && precioSinDescuento * 0.7 < 120){
                    (document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.7);}

                break;

        case 4: if((marca =="ArgentinaLuz" || marca =="FelipeLamparas") && precioSinDescuento * 0.75 >= 120){
                    document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.75) * 1.1 ;
                    alert("usted pago " + (precioSinDescuento * 0.75)* 0.1 + " de IIBB");}

                else if(marca != "ArgentinaLuz" && marca !="FelipeLamparas" && precioSinDescuento * 0.8 >= 120){
                    document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.8)* 1.1;
                    alert("usted pago " + (precioSinDescuento * 0.8)* 0.1 + " de IIBB");}

                else if((marca =="ArgentinaLuz" || marca =="FelipeLamparas") && precioSinDescuento * 0.75 <= 120){
                    document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.75;}

                else if(marca != "ArgentinaLuz" && marca !="FelipeLamparas" && precioSinDescuento * 0.8 <= 120){
                    document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.8);}

                break;

        case 3: if(marca =="ArgentinaLuz"){
                    document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.85;}

                else if(marca =="FelipeLamparas"){
                    document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.9);}

                else{document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.95);}

                break;

        case 2:
        case 1: document.getElementById("txtIdprecioDescuento").value = precioSinDescuento;

                break;

        default:if(precioSinDescuento * 0.5 >= 120){
                    document.getElementById("txtIdprecioDescuento").value = (precioSinDescuento * 0.5) * 1.1; ;
                    alert("usted pago " + (precioSinDescuento * 0.5)* 0.1 + " de IIBB");}

                else if (precioSinDescuento * 0.5 <= 120){
                    document.getElementById("txtIdprecioDescuento").value = precioSinDescuento * 0.5;}

        }
    }

    /* Martin Allende
      Tp 4 Correccion 
      Allende, sigue estando mal lo que mandaste las cuentas son al final de la logica del switch y del if */
    
                                
 
    


