/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
/*{
  let productos;
  let cantidadBolsas;
  let precioBolsa;
  let decicion = "si";
  let precioBruto;
  let descuento = 0;
  let acumPrecioBruto = 0;
  let acumBolsas = 0;
  let BolsasCantMax;
  let nombreMasBolsas;
  let precioMax;
  let nombreMasPrecio;
  let flag = 1;
  let precioConDescuento;
    

    while(decicion == "si")
    {
      
      productos = prompt("Ingrese el producto ( arena , cal o cemento )");

      while(productos != "arena" && productos != "cal" && productos != "cemento")
      {

        productos = prompt("Producto no valido, ingrese arena, cal o cemento");

      }

      cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
      
      while(isNaN(cantidadBolsas) == true || cantidadBolsas < 0)
      {

        cantidadBolsas = parseInt(prompt("Ingrese una cantidad de bolsas valida"));

      }

      precioBolsa = parseFloat(prompt("Ingrese el precio de una bolsa"));

      while( isNaN(precioBolsa) == true && precioBolsa < 0 )
      {

        precioBolsa = parseFloat(prompt("Ingrese un precio valido"));

      }

       

      if( cantidadBolsas > BolsasCantMax || flag == 1)
      {

        BolsasCantMax = cantidadBolsas;
        nombreMasBolsas = productos;

      }

      if( precioBolsa > precioMax || flag == 1)
      {

        precioMax = precioBolsa;
        nombreMasPrecio = productos;
        flag = 0;

      }

      acumBolsas = acumBolsas + cantidadBolsas;
      
      precioBruto = cantidadBolsas * precioBolsa;

      acumPrecioBruto = acumPrecioBruto + precioBruto;
      
      decicion = prompt("Quiere ingresar otro producto?");

    }

    if(acumBolsas >= 10 && acumBolsas <= 30 )
    {
      
      descuento = 0.85;

    }
    else if( acumBolsas > 30)
    {

      descuento = 0.75;

    }
    else
    {

      descuento = 1;

    }

    precioConDescuento = acumPrecioBruto * descuento

    console.log("A) el importe total a pagar sin descuento es de: " + acumPrecioBruto);
    console.log("C) el producto con mayor cantidad de bolsas es: " + nombreMasBolsas + " con, " + BolsasCantMax + " de bolsas");
    console.log("D) el producto mas caro es: " + nombreMasPrecio + " que vale " + precioMax + " la bolsa");

    if(descuento != 1 && descuento != 0)
    {

      console.log("B) el importe con descuento es de: " + precioConDescuento);

    }


}*/

/*Simil Parcial 2:
El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?*/
/*{

  let nombreAlumno;
  let carrera;
  let estadoDeLaCarrera;
  let sexo;
  let edad;
  let nota;
  let decicion = "s";
  let contAlumnosDeProgramacion = 0;
  let contAlumnosDePsicologia = 0;
  let contAlumnosDeDiseñoGrafico = 0;
  let contMujeresDeProgramacion = 0;
  let contAlumnosNoBinarios = 0;
  let acumNotasFinalizantes=0;
  let contAlumnosFinalizantes=0;
  let nombreMasViejoDePsicologia;
  let sexoMasViejoDePsicologia;
  let edadMasViejoDePsicologia;
  let flag = 1;
  let notaMejorNoBinarioDePsicologia;
  let nombreMejorNoBinarioDePsicologia;
  let estadoDeLaCarreraMejorNoBinarioDePsicologia;
  let flag2 = 1;
  let carreraMasAlumnos;
  let promedioNotaFinalizantes;
    
  while(decicion == "s")
  {
    
    nombreAlumno = prompt("Ingrese su nombre");

    carrera = prompt("ingrese su carrera (Programación, Psicología, Diseño grafico)");

    while(carrera != "Programacion" && carrera != "Psicologia" && carrera !="Diseño grafico")
    {

      carrera = prompt("Carrea incorrecta ingrese (Programación, Psicología, Diseño grafico)");

    }

    estadoDeLaCarrera = prompt("Ingrese el estado de la carrera (en curso, abandono, finalizado)");

    while(estadoDeLaCarrera != "en curso" && estadoDeLaCarrera != "abandono" && estadoDeLaCarrera != "finalizado")
    {

      estadoDeLaCarrera = prompt("Estado incorrecto ingrese (en curso, abandono, finalizado)");

    }

    sexo = prompt("Ingrese su sexo con f: femenino o m: masculino o no binario");

    while(sexo != "f" && sexo != "m" && sexo != "no binario")
    {

      sexo = prompt("Sexo incorrecto ingrese su sexo con f: femenino o m: masculino o no binario");

    }

    edad = parseInt(prompt("Ingrese su edad"));

    while(isNaN(edad) == true || edad <= 18 || edad > 60)
    {

      edad = parseInt(prompt("Edad incorrecta, por favor ingrese de nuevo"));

    }

    nota = parseInt(prompt("Ingrese su nota entre 1 o 10"));

    while(isNaN(nota) == true || nota < 1 || nota > 10)
    {

      nota = prompt("Nota incorrecta, por favor ingrese de nuevo");

    }

    if(sexo == "no binario")
    {

      contAlumnosNoBinarios = contAlumnosNoBinarios + 1;

    }

    if(estadoDeLaCarrera == "finalizado")
    {

      acumNotasFinalizantes = acumNotasFinalizantes + nota;
      contAlumnosFinalizantes = contAlumnosFinalizantes + 1;

    }

    switch(carrera)
    {
      
      case "Programacion":

        contAlumnosDeProgramacion = contAlumnosDeProgramacion + 1;
        if(sexo == "f")
        {

          contMujeresDeProgramacion = contMujeresDeProgramacion + 1;

        }
        break;

      case "Psicologia":

        contAlumnosDePsicologia = contAlumnosDePsicologia + 1;
        if(edad > edadMasViejoDePsicologia || flag == 1)
        {

          edadMasViejoDePsicologia = edad;
          nombreMasViejoDePsicologia = nombreAlumno;
          sexoMasViejoDePsicologia = sexo;
          flag = 0
        
        }
        if(sexo == "no binario" && (nota > notaMejorNoBinarioDePsicologia || flag2 == 1))
        {

          notaMejorNoBinarioDePsicologia = nota;
          nombreMejorNoBinarioDePsicologia = nombreAlumno;
          estadoDeLaCarreraMejorNoBinarioDePsicologia = estadoDeLaCarrera;
          flag2 = 0;

        }
        break;

      case "Diseño grafico":

        contAlumnosDeDiseñoGrafico = contAlumnosDeDiseñoGrafico + 1;
        break;

    }

    decicion = prompt("Ingrese su decicion con s(si) o n(no)");

    while(decicion != "s" && decicion !="n")
    {

      decicion = prompt("Decicion incorrecta, ingrese su decicion de nuevo usando s o n");

    }
    
  }

  if(contAlumnosDeDiseñoGrafico > contAlumnosDeProgramacion && contAlumnosDeDiseñoGrafico > contAlumnosDePsicologia)
  {

    carreraMasAlumnos = "Diseño grafico con: " + contAlumnosDeDiseñoGrafico;

  }
  else if(contAlumnosDeProgramacion > contAlumnosDePsicologia)
  {

    carreraMasAlumnos = "Programacion con: " + contAlumnosDeProgramacion;

  }
  else 
  {

    carreraMasAlumnos = "Psicologia con: " + contAlumnosDePsicologia;

  }

  promedioNotaFinalizantes = acumNotasFinalizantes / contAlumnosFinalizantes;

  console.log("A) Cantidad de alumnos de Diseño Grafico: " + contAlumnosDeDiseñoGrafico); 
  console.log("   Cantidad de alumnos de Programacion: " + contAlumnosDeProgramacion);  
  console.log("   Cantidad de alumnos de Psicologia: " + contAlumnosDePsicologia);

  console.log("B) La cantidad de mujeres que cursan programacion es de: " + contMujeresDeProgramacion);

  console.log("C) La cantidad de alumnos no binarios es de: " + contAlumnosNoBinarios);

  console.log("D) El promedio de los alumnos finalizantes es de: " + promedioNotaFinalizantes);

  console.log("E) " + nombreMasViejoDePsicologia + " "+ edadMasViejoDePsicologia + " "+ sexoMasViejoDePsicologia + " Nombre sexo y edad del mas viejo de psicologia");

  console.log("F) " + nombreMejorNoBinarioDePsicologia +" "+ notaMejorNoBinarioDePsicologia +" "+ estadoDeLaCarreraMejorNoBinarioDePsicologia + " Nombre nota y estado de la carrera del mejor no binario de psicologia");

  console.log("G) " + carreraMasAlumnos);



}*/


/*
Simil Parcial 7:
Ingrese nombre , sexo , edad (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), altura (validar), temperatura corporal(validar)
Necesitamos saber:
  a)el nombre y el sexo de la persona con mas temperatura,
  b)de las mujeres el nombre de la mas joven ,
  c)de los hombre el nombre del mas bajito,
  ... solo si los hay
  d)el promedio de edad entre los hombres,
  e)el promedio de edad entre las mujeres,
  f)la cantidad de personas que miden mas de 1,60 metros,  
  g)el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.
*/

{

  let nombre;
  let sexo;
  let edad;
  let altura;
  let temperatura;
  let nombreMasTemp;
  let sexoMasTemp;
  let masTempPersona;
  let flag = 1;
  let edadMujerMasJoven = 91;
  let nombreMujerMasJoven;
  let alturaMasBajito = 251;
  let nombreMasBajito;
  let contHombres = 0;
  let acumEdadHombre = 0;
  let contMujeres = 0;
  let acumEdadMujeres = 0;
  let contMasDeUnoSeseta = 0;
  let contMujerMasDeUnoSesenta = 0;
  let decicion = "si";
  let promedioEdadHombres;
  let promediEdadMujeres;


      while( decicion == "si")
      {
  
        nombre = prompt("Ingrese su nombre");

        while(isNaN(nombre) == false )
        {

          nombre = prompt("Error, ingrese un nombre valido");

        }
            
        sexo = prompt("Ingrese su sexo hombre, mujer");

        while(sexo != "hombre" && sexo != "mujer")
        {

          sexo = prompt("El sexo ingresado no es valido ingrese hombre o mujer");

        }


        edad = parseInt(prompt("Ingrese su edad"));

        while(isNaN(edad) == true || edad < 0 || edad > 90)
        {

          edad = parseInt(prompt("Edad incorrecta, por favor ingrese de nuevo"));

        }


        altura = parseInt(prompt("Ingrese su altura en cm"));

        while(isNaN(altura) == true || altura < 100 || altura > 250)
        {

          altura = prompt("Error, Ingrese su altura en cm");

        }

        temperatura = parseInt(prompt("Ingrese su temperatura"));

        while(isNaN(temperatura) == true || temperatura < 35 || temperatura > 45)
        {

          temperatura = prompt("Error, Ingrese su temperatura ");

        }

        if( temperatura > masTempPersona || flag == 1)
        {

          masTempPersona = temperatura;
          nombreMasTemp = nombre;
          sexoMasTemp = sexo;
          flag = 0

        }

        if( edad < edadMujerMasJoven && sexo == "mujer")
        {

          edadMujerMasJoven = edad;
          nombreMujerMasJoven = nombre;

        }

        if( altura < alturaMasBajito && sexo == "hombre")
        {

          alturaMasBajito = altura;
          nombreMasBajito = nombre;

        }

        switch(sexo)
        {

          case "hombre":  
            acumEdadHombre = acumEdadHombre + edad;
            contHombres = contHombres + 1;
            break;
          
          case "mujer":
            acumEdadMujeres = acumEdadMujeres + edad;
            contMujeres = contMujeres + 1;
            break;

        }

        if( altura > 160)
        {

          contMasDeUnoSeseta = contMasDeUnoSeseta + 1;

        } 

        if( altura > 160 && sexo == "mujer")
        {

          contMujerMasDeUnoSesenta = contMujerMasDeUnoSesenta + 1;

        }

        decicion = prompt("Quiere ingresar otra persona");

				while( decicion != "si" && decicion != "no")
				{

					decicion = prompt("Error; Quiere ingresar otra persona reponda con si o no");

				}

      }

  promedioEdadHombres = acumEdadHombre / contHombres;

  promediEdadMujeres = acumEdadMujeres / contMujeres;

  if(flag == 0)
  {

    console.log("A) la persona con mas temp se llama " + nombreMasTemp + " y es " + sexoMasTemp);

  }
  else
  {

    console.log("A) No existe");

  }

  if(edadMujerMasJoven != 91)
  {

    console.log("B) El nombre de la mujer mas joven es " + nombreMujerMasJoven );

  }
  else
  {

    console.log("B) No existe");

  }

  if(alturaMasBajito != 251)
  {

    console.log("C) El nombre del hombre mas bajito es " + nombreMasBajito);

  }
  else
  {

    console.log("C) No existe");

  }

  console.log("D) El promedio de edad entre los hombres es de " + promedioEdadHombres);
  console.log("E) El promedio de edad entre las mujeres es de " + promediEdadMujeres);
  console.log("F) La cantidad de persona que miden mas de 1,60 es de " + contMasDeUnoSeseta);
  console.log("G) Hay " + contMujerMasDeUnoSesenta + " mujeres de 1,60 sobre un total de " + contMasDeUnoSeseta + " de personas de mas de 1,60 en total");

  }