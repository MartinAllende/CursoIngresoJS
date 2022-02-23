function mostrar()
/*{

	if (document.getElementById("txtIdEdad").value == 15) {alert("niña bonita")};

}*/

/*{

   let distancia;
   let tiempo;
   let cambioDeMinAHora;
   let velocidad;
   let mensaje;

   distancia = document.getElementById("txtIdEdad").value;
   tiempo = parseInt(prompt("Ingrese tiempo viajado en minutos"));
   cambioDeMinAHora = tiempo / 60;
   velocidad = distancia / cambioDeMinAHora;
   
   if (velocidad < 60){ mensaje = "Muy lento";}
   else if (velocidad > 60 && velocidad < 80){ mensaje = "Lento";}
   else if (velocidad > 80 && velocidad < 100){ mensaje = "buen ritmo";}
   else if (velocidad > 100 && velocidad < 120){ mensaje = "Ahi de la ley";}
   else if (velocidad > 120){ mensaje = "Eso no se hace";}
   else {mensaje = "imposible";};

   alert(mensaje);

}*/ /*entregado */

{

   let nombre;
   let peso;
   let altura;
   let imc;

   nombre = document.getElementById("txtIdEdad").value;
   peso = parseFloat(prompt("Ingrese su peso en KG"))
   altura = parseFloat(prompt("Ingrese su altura en METROS"))
   imc = peso / (altura * altura)

   if (imc <= 18.5){ mensaje = "bajo peso";}
   else if (imc > 18.5 && imc <= 24.9){ mensaje = "peso normal" ;}
   else if (imc > 24.9 && imc <= 26.9 ){ mensaje = "Pre obesidad";}
   else if (imc > 26.9 && imc <= 29.9){ mensaje = "Obesidad";}
   else if (imc > 29.9 && imc <= 34.9){ mensaje = "Obesidad II";}
   else {mensaje = "Obesidad III";};

   alert( mensaje)




} /*entregado*/

/* Martin Allende
   Instrucciones If 1 
   entregado*/