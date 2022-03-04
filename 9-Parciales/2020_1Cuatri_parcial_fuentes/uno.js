/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
/*{
	
	let productos;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let i;
	let alcoholMasBaratoPrecio;
	let alcoholMasBaratoUnidades;
	let alcoholMasBaratoMarca;
	let flag = 1;
	let flag2 = 1
	let masUnidades;
	let productoMasUnidades;
	let cantidadDeJabones = 0;
	let precioMasUnidades;
	let precioPorCompra;
	

	for(i=0; i < 5; i++)
	{

		productos = prompt("ingrese el producto (barbijo, jabon o alcohol)");

		while(productos != "barbijo" && productos!= "jabon" && productos != "alcohol")
		{
			productos = prompt("Producto no valido ingrese barbijo, jabon o alcohol");
		}

		precio = parseFloat(prompt("Ingrese el precio"));

		while(isNaN(precio) == true || precio < 100 || precio > 300)
		{

			precio = parseFloat(prompt("Precio no valido, ingrese uno valido ( entre 100 y 300 )"));

		}

		unidades = parseInt(prompt("Ingrese la cantidad de unidades"));

		while(isNaN(unidades) == true || unidades <= 0 || unidades > 1000)
		{

			unidades =  parseInt(prompt("Cantidad no valida ingrese entre 1 o 1000"));

		}

		marca = prompt("Ingrese la Marca");

		fabricante = prompt("Ingrese el fabricante");

		if(productos == "alcohol" && flag == 1)
		{
			
			alcoholMasBaratoUnidades = unidades;
			alcoholMasBaratoMarca = marca;
			alcoholMasBaratoPrecio = precio;
			flag = 0

		}

		if(productos == "alcohol" && precio < alcoholMasBaratoPrecio)
		{

			alcoholMasBaratoUnidades = unidades;

			alcoholMasBaratoMarca = marca;

		}

		if(unidades > masUnidades || flag2 == 1 )
		{

			productoMasUnidades = productos;
			masUnidades = unidades;
			precioMasUnidades = precio;

			flag2 = 0;

		}

		if(productos == "jabon")
		{

			cantidadDeJabones = cantidadDeJabones + unidades;

		}
	}

	precioPorCompra = precioMasUnidades * masUnidades;
	
	console.log("A) alcohol mas barato: Unidades: " + alcoholMasBaratoUnidades +" , y la marca es "+ alcoholMasBaratoMarca);
	console.log("B) el producto con mas unidades: " + productoMasUnidades + " , con " + masUnidades + " y un precio por unidad de "+ precioPorCompra);
	console.log("C) Hay " + cantidadDeJabones + " jabones en total");

}*/

/*
Simil Parcial 6:
Realizar el algoritmo que permita ingresar los datos de los alumnos de una división de la UTN FRA, los datos solicitados son:
Nombre(validar no sea numero)
Situación laboral ("buscando", "trabajando" o "solo estudiante")
Cantidad de materias(más de cero y menos de 8)
Sexo (femenino, masculino, no binario)
Nota promedio (entre 0 y 10)
Edad (validar entre 18 y 85 inclusive)
Se debe informar de existir, o informar que no existe, en el caso que corresponda.
a) El nombre del mejor promedio que no de los que trabajan o están buscando}
b) El nombre del más viejo de los alumnos que solo sea estudiantes
c) El promedio de nota por situación laboral
d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo
*/

{

	let nombre;
	let situacionLaboral;
	let cantidadDeMaterias;
	let sexo;
	let notaPromedio;
	let edad;
	let nombreMejorPromedioQueTrabajaOEstaBuscando = 0;
	let mejorPromedioQueNoTrabajaOEstaBuscando = 0;
	let nombreMasViejoSoloEstudiante = 0;
	let edadMasViejoSoloEstudiante = 0;
	let acumNotaSoloestudiante = 0;
	let contNotaSoloestudiante = 0;
	let acumNotaTrabaja = 0;
	let contNotaTrabaja = 0;
	let acumNotaBuscando = 0;
	let contNotaBuscando = 0;
	let edadMenosMateriasYBuscando;
	let nombreMenosMateriasYBuscando = 0;
	let materiasMenosMateriasYBuscando = 9;
	let decicion = "si";
	let promedioNotaSoloEstudiante = 0;
	let promedioNotaTrabaja = 0;
	let promedioNotaBuscando = 0;

	while(decicion == "si")
	{

			nombre = prompt("Ingrese su nombre");

				while(isNaN(nombre) == false )
				{

					nombre = prompt("Error, ingrese un nombre valido");

				}

			situacionLaboral = prompt("Ingrese su sitacion laboral (buscando, trabajando o solo estudiante)");

				while (situacionLaboral != "buscando" && situacionLaboral != "trabajando" && situacionLaboral != "solo estudiante")
				{

					situacionLaboral = prompt("Ingrese una situacion laboral valida (buscando, trabajando o solo estudiante)");

				}

			cantidadDeMaterias = parseInt(prompt("Ingrese la cantidad de materias que este cursando (Maximo 8)"));

				while(isNaN(cantidadDeMaterias) == true || cantidadDeMaterias < 1 || cantidadDeMaterias > 8)
				{

					cantidadDeMaterias = parseInt(prompt("Error, Ingrese la cantidad de materias que este cursando (Maximo 8)"));

				}
			
				sexo = prompt("Ingrese su sexo masculino, femenino o no binario");

				while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
				{

					sexo = prompt("El sexo ingresado no es valido ingrese masculino, femenino o no binario");

				}

				notaPromedio = prompt("Ingrese su nota promedio");

				while(isNaN(notaPromedio) == true || notaPromedio < 0 || notaPromedio > 10)
				{

					notaPromedio = prompt("Error, Ingrese su nota promedio");

				}

				edad = parseInt(prompt("Ingrese su edad"));

				while(isNaN(edad) == true || edad < 18 || edad > 85)
				{

					edad = parseInt(prompt("Edad incorrecta, por favor ingrese de nuevo"));

				}

				if( notaPromedio > mejorPromedioQueNoTrabajaOEstaBuscando && situacionLaboral != "solo estudiante")
				{

					mejorPromedioQueNoTrabajaOEstaBuscando = notaPromedio;

					nombreMejorPromedioQueTrabajaOEstaBuscando = nombre;

				}

				if ( edad > edadMasViejoSoloEstudiante && situacionLaboral == "solo estudiante")
				{

					edadMasViejoSoloEstudiante = edad;
					nombreMasViejoSoloEstudiante = nombre;

				}

				if( situacionLaboral == "buscando")
				{

					contNotaBuscando = contNotaBuscando + 1;
					acumNotaBuscando = acumNotaBuscando + notaPromedio;

				}

				else if( situacionLaboral == "solo estudiante")
				{

					contNotaSoloestudiante = contNotaSoloestudiante + 1;
					acumNotaSoloestudiante = acumNotaSoloestudiante + notaPromedio;

				}

				else
				{

					contNotaTrabaja = contNotaTrabaja + 1;
					acumNotaTrabaja = acumNotaTrabaja + notaPromedio;

				}
				
				if( situacionLaboral == "buscando" &&  cantidadDeMaterias < materiasMenosMateriasYBuscando)
				{

					materiasMenosMateriasYBuscando = cantidadDeMaterias;
					nombreMenosMateriasYBuscando = nombre;
					edadMenosMateriasYBuscando = edad;

				}

				decicion = prompt("Quiere ingresar otro alumno");

				while( decicion != "si" && decicion != "no")
				{

					decicion = prompt("Error; Quiere ingresar otro alumno reponda con si o no");

				}

	}

	promedioNotaSoloEstudiante = acumNotaSoloestudiante / contNotaSoloestudiante;

	promedioNotaBuscando = acumNotaBuscando / contNotaBuscando;

	promedioNotaTrabaja = acumNotaTrabaja / contNotaTrabaja;

	if(nombreMejorPromedioQueTrabajaOEstaBuscando != 0)
	{

		console.log("A) " + nombreMejorPromedioQueTrabajaOEstaBuscando + " Es el nombre del mejor promedio de los que trabajan o están buscando")

	}

	else if(nombreMejorPromedioQueTrabajaOEstaBuscando == 0)
	{

		console.log("A) No existe");

	}

	if(nombreMasViejoSoloEstudiante != 0)
	{

		console.log("B) " + nombreMasViejoSoloEstudiante + " Es el mas viejo de los alumnos que solo son estudiantes");

	}

	else if(nombreMasViejoSoloEstudiante == 0)
	{

		console.log("B) No existe");

	}

	if( promedioNotaBuscando != 0 || promedioNotaSoloEstudiante != 0 || promedioNotaTrabaja != 0 )
	{

		console.log("C) " + promedioNotaBuscando + " Promedio de los que estan buscando trabaja, " + 
						promedioNotaSoloEstudiante + " Promedio de nota de los que solo estudian, " + 
						promedioNotaTrabaja + " promedio nota de los que trabajan");

	}

	if(nombreMenosMateriasYBuscando != 0)
	{

		console.log("D) " + nombreMenosMateriasYBuscando + " con " + edadMenosMateriasYBuscando + " es el que cursa menos cantidad de materias y que esté buscando trabajo");
	
	}

	else if(nombreMenosMateriasYBuscando == 0)
	{

		console.log("D) No existe");

	}



}
