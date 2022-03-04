/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/


function mostrar()
/*{

	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let personaMasTemp;
	let nombrePersonaMasTemp;
	let promedioEdadHombresSolteros;
	let contMayoresDeEdadViudos = 0;
	let contDeViudosYSolteros = 0;
	let contDeAncianosConTemperaturaAlta = 0;
	let acumEdadHombresSolteros = 0;
	let contEdadHombresSolteros = 0;
	let flag = 1;
	let decicion = "s";


	while(decicion == "s")
	{
	
		nombre = prompt("Ingrese su nombre");

		edad = parseInt(prompt("Ingrese su edad"));

		while(isNaN(edad) == true || edad < 1 || edad > 100)
		{

			edad = parseInt(prompt("Edad incorrecta, por favor ingrese de nuevo"));

		}

		sexo = prompt("Ingrese su sexo ( m: masculino, o f: femenino)");

		while(sexo != "m" && sexo != "f")
		{

			sexo = prompt("El sexo ingresado no es valido ingrese m o f");

		}

		estadoCivil = prompt("Ingrese su estado civil (soltero, casado o viudo)");

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil !="viudo")
		{

			estadoCivil = prompt("Estado civil incorrecto ingrese (soltero, casado o viudo)");

		}

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura"));

		while(isNaN(temperaturaCorporal) == true || temperaturaCorporal < 35 || temperaturaCorporal > 45)
		{

			temperaturaCorporal = parseFloat(prompt("Error en la temperatura, ingrese de nuevo"));

		}

		if( temperaturaCorporal > personaMasTemp || flag == 1)
		{

			personaMasTemp = temperaturaCorporal;
			nombrePersonaMasTemp = nombre;
			flag = 0;

		}

		if(	edad > 18 && estadoCivil == "viudo")
		{

			contMayoresDeEdadViudos = contMayoresDeEdadViudos + 1;

		}

		if( sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo"))

		{

			contDeViudosYSolteros = contDeViudosYSolteros + 1; 

		}

		if( edad >= 60 && temperaturaCorporal >= 38)
		{

			contDeAncianosConTemperaturaAlta = contDeAncianosConTemperaturaAlta + 1;

		}

		if( sexo == "m" && estadoCivil == "soltero")
		{

			acumEdadHombresSolteros = acumEdadHombresSolteros + edad;
			contEdadHombresSolteros = contEdadHombresSolteros + 1;

		}

		decicion = prompt("¿Quiere ingresar otra persona? ( responda con s: si o n: no)");

		while(decicion != "s" && decicion != "n")
		{

			decicion = prompt("Decicion incorrecto ingrese s o n");

		}


	}

		promedioEdadHombresSolteros = acumEdadHombresSolteros / contEdadHombresSolteros;

		console.log("A) El nombre de la persona con mas temperatura es: " + nombrePersonaMasTemp + " con " + personaMasTemp + "° de temperatura");
		console.log("B) Hay " + contMayoresDeEdadViudos + " de mayores de edad viudos");
		console.log("C) la cantidad de hombres que hay solteros o viudos es: " + contDeViudosYSolteros);
		console.log("D) la cantidad de persona de tercera edad que tienen mas de 38 de temperatura es de: " + contDeAncianosConTemperaturaAlta);
		console.log("E) el promedio de la edad de los hombres solteros es de: " + promedioEdadHombresSolteros);

	
}
*/



/*
Simil Parcial 8:
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perro u "otra cosa"(solo hay esos tres tipos)
el tipo de pelaje (corto, largo, sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo, internado o adopción)
la temperaruta corporal y nos piden informar solo si existe
a)El perro más pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la última mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Qué tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Qué estado clínico tiene la menor cantidad de mascotas   
H)Cuál es el promedio de kilos de peso, tomando todas las mascotas
i)El nombre y raza del gato sin pelos más liviano
*/ 

{

	let mascota;
	let pelaje;
	let edad;
	let nombre;
	let raza;
	let peso;
	let estadoClinico;
	let tempCorporal;
	let nombrePerroMasPesado;
	let pesoPerroMasPesado = 1;
	let contMascotas = 0;
	let contMascotasEnfermas = 0;
	let nombreUltimaOtraCosa = 0;
	let TempAnimalSinPeloMenosTempCorporal = 46;
	let nombreAnimalSinPeloMenosTempCorporal;
	let contPerros = 0;
	let acumTempPerros = 0;
	let contGatos = 0;
	let acumTempGatos = 0;
	let contOtraCosa = 0;
	let acumTempOtraCosa = 0;
	let contEnfermo = 0;
	let contInternado = 0;
	let contAdopcion = 0;
	let acumKilosDePesoTotal = 0;
	let pesoGatoSinPelosMasLiviano = 26;
	let nombreGatoSinPelosMasLiviano;
	let razaGatosSinPelosMasLiviano;
	let decicion = "si"
	let promedioPesoTodasMascotas;
	let promedioTempCorporalGato;
	let promedioTempCorporalPerro;
	let promedioTempCorporalOtraCosa;
	let mayorPromedioTempCorporal;
	let estadoClinicoMenosMascotas;

			
	while(decicion == "si")
	{
			
			mascota = prompt(" Ingrese su mascota ( gato, perro u otra cosa )");

				while(mascota != "gato" && mascota != "perro" && mascota != "otra cosa")
				{

					mascota =prompt("Error, Ingrese su mascota ( gato, perro u otra cosa )");

				}

			pelaje = prompt( "Ingrese el pelaje de su mascota (corto, largo, sin pelo)");

				while(pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo")
				{

					pelaje = prompt( "Error, Ingrese el pelaje de su mascota (corto, largo, sin pelo)");

				}

			edad = parseInt(prompt("Ingrese su edad"));

				while(isNaN(edad) == true || edad < 0 || edad > 20)
				{

					edad = parseInt(prompt("Edad incorrecta, por favor ingrese de nuevo"));

				}

			nombre = prompt("Ingrese su nombre");

				while(isNaN(nombre) == false )
				{

					nombre = prompt("Error, ingrese un nombre valido");

				}
			
			raza = prompt("Ingrese la raza");

				while(isNaN(raza) == false )
				{

					raza = prompt("Error, ingrese la raza");

				}

			peso = parseFloat(prompt("Ingrese su peso en kg"));

			
				while(isNaN(peso) == true || peso < 2 || peso > 25)
				{	

					peso = parseFloat("Error, Ingrese su peso en kg");

				}	

			estadoClinico = prompt(" Ingrese el estado clinico (enfermo, internado o adopcion)");

				while(estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion")
				{

					estadoClinico = prompt("Error, Ingrese el estado clinico (enfermo, internado o adopcion)");

				}

			tempCorporal = parseInt(prompt("Ingrese su temperatura Corporal"));

			while(isNaN(tempCorporal) == true || tempCorporal < 35 || tempCorporal > 45)
			{

				tempCorporal = prompt("Error, Ingrese su temperatura Corporal ");

			}

			if(  peso > pesoPerroMasPesado && mascota == "perro" )
			{

				pesoPerroMasPesado = peso;
				nombrePerroMasPesado = nombre;

			}

			contMascotas = contMascotas + 1;

			if(estadoClinico == "enfermo")
			{

				contMascotasEnfermas = contMascotasEnfermas + 1;

			}

			if(mascota == "otra cosa")
			{

				nombreUltimaOtraCosa = nombre;

			}

			if(tempCorporal < TempAnimalSinPeloMenosTempCorporal && pelaje == "sin pelo")
			{

				TempAnimalSinPeloMenosTempCorporal = tempCorporal;
				nombreAnimalSinPeloMenosTempCorporal = nombre;

			}

			switch(mascota)
			{

				case "perro":
					contPerros = contPerros + 1;
					acumTempPerros = acumTempPerros + tempCorporal;
					break;
				
				case "gato":
					contGatos = contGatos + 1;
					acumTempGatos = acumTempGatos + tempCorporal;
					break;
				
				case "otra cosa":
					contOtraCosa = contOtraCosa + 1;
					acumTempOtraCosa = acumTempGatos + tempCorporal; 
					break;

			}

			if(estadoClinico == "adopcion")
			{

				contAdopcion = contAdopcion + 1;

			}

			else if( estadoClinico == "enfermo")
			{
				contEnfermo = contEnfermo + 1;

			}

			else
			{

				contInternado = contInternado + 1;

			}

			acumKilosDePesoTotal = acumKilosDePesoTotal + peso;

			if( peso < pesoGatoSinPelosMasLiviano && pelaje == "sin pelos" && mascota == "gato")
			{

				pesoGatoSinPelosMasLiviano = peso;
				razaGatosSinPelosMasLiviano = raza;
				nombreGatoSinPelosMasLiviano = nombre;

			}

			decicion = prompt("Quiere ingresar otra mascota");

			while( decicion != "si" && decicion != "no")
			{

				decicion = prompt("Error; Quiere ingresar otra mascota reponda con si o no");

			}



	}

	promedioPesoTodasMascotas = acumKilosDePesoTotal / contMascotas ;

	promedioTempCorporalGato = acumTempGatos / contGatos;

	promedioTempCorporalOtraCosa = acumTempOtraCosa / contOtraCosa;

	promedioTempCorporalPerro = acumTempPerros / contPerros;

	if(promedioTempCorporalGato > promedioTempCorporalOtraCosa && promedioTempCorporalGato > promedioTempCorporalPerro)
	{

		mayorPromedioTempCorporal = " Los gatos";

	}
	else if(promedioTempCorporalOtraCosa > promedioTempCorporalPerro)
	{

		mayorPromedioTempCorporal = " Los otra cosa";

	}
	else
	{

		mayorPromedioTempCorporal = " Los perros";

	}

	if(contAdopcion < contEnfermo && contAdopcion < contInternado)
	{

		estadoClinicoMenosMascotas = " Adopcion";
	
	}
	else if(contInternado < contEnfermo)
	{

		estadoClinicoMenosMascotas = "Internado";

	}
	else
	{

		estadoClinicoMenosMascotas = "Enfermo";

	}

	if(pesoPerroMasPesado != 1)
	{

		console.log(nombrePerroMasPesado + " con " + pesoPerroMasPesado + " kilos");

	}

	if(contEnfermo != 0)
	{

		console.log("Hay "+ contEnfermo + " enfermos entre " + contMascotas + " de total de mascotas");

	}

	if(nombreUltimaOtraCosa != 0)
	{

		console.log("el nombre de la ultima cosa es: " + nombreUltimaOtraCosa);

	}

	if(TempAnimalSinPeloMenosTempCorporal != 46)
	{

		console.log("El animal sin pelo con menos temperatura se llama " + nombreAnimalSinPeloMenosTempCorporal + " con una temp de " + TempAnimalSinPeloMenosTempCorporal);

	}

	if(contPerros != 0 || contGatos != 0)
	{

		console.log("hay " + (contPerros + contGatos) + " gatos y perros sobre un total de " + contMascotas + " Mascotas");

	}

	console.log ( promedioPesoTodasMascotas + " es el promedio de peso de todas las mascotas");

	if( pesoGatoSinPelosMasLiviano != 26)
	{

		console.log( nombreGatoSinPelosMasLiviano + " es el nombre del gato sin pelos mas liviano y " + razaGatosSinPelosMasLiviano + " es la raza");

	}

	console.log( "el tipo de animal con mayor promedio de temp corporal es: " + mayorPromedioTempCorporal);

	console.log( "El estado clinico q tiene menor cantidad de mascostas es " + estadoClinicoMenosMascotas);



}