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
    let precioFinal;

    precioFinal = (document.getElementById("txtIdprecioDescuento").value);
    precioLamparas = parseFloat(35);
    cantidadDeLamparas = parseFloat(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precioSinDescuento = precioLamparas * cantidadDeLamparas;
                
    
    /* A */

    if(cantidadDeLamparas >= 6){switch(precioSinDescuento * 0.5 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.5)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.5)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.5
        break;}
                                }
 
    /* B */

    if(cantidadDeLamparas == 5 && marca =="ArgentinaLuz"){{switch(precioSinDescuento * 0.6 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.6)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.6)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.6
        break;}
                                                          }}

    else if(cantidadDeLamparas == 5 && marca !="ArgentinaLuz"){{switch(precioSinDescuento * 0.7 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.7)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.7)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.7
        break;}
                                                               }};
        
    /* C */ 

    if(cantidadDeLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")){{switch(precioSinDescuento * 0.75 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.75)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.75)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.75
        break;}
                                                          }}
    
    else if(cantidadDeLamparas == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas"){{switch(precioSinDescuento * 0.8 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.8)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.8)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.8
        break;}
                                                          }};

    /* D */

    if(cantidadDeLamparas == 3 && marca == "ArgentinaLuz"){{switch(precioSinDescuento * 0.85 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.85)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.85)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.85
        break;}
                                                          }}

    else if(cantidadDeLamparas == 3 && marca == "FelipeLamparas"){{switch(precioSinDescuento * 0.9 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.9)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.9)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.9
        break;}
                                                          }}

    else if(cantidadDeLamparas == 3 && marca != "FelipeLamparas" && marca != "ArgentinaLuz"){{switch(precioSinDescuento * 0.95 >= 120){
        case true:(document.getElementById("txtIdprecioDescuento").value) = (precioSinDescuento * 0.95)* 1.1
        alert("usted pago " + (precioSinDescuento * 0.95)* 0.1 + " de IIBB");
        break;
        case false:(document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento * 0.95
        break;}
                                                          }};
    /* Menos de 3 */                                                      

    if(cantidadDeLamparas <= 2){
        (document.getElementById("txtIdprecioDescuento").value) = precioSinDescuento};

   


}
