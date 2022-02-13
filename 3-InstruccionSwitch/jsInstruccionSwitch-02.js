function mostrar()
{

			let mes;
			mes = document.getElementById("txtIdMes").value;
		
			switch(mes){
				case "Julio":
				case "Agosto":
					alert("Abrigate que hace frio");
					break;
				case "Junio":
				case "Mayo":
				case "Abril":
				case "Marzo":
				case "Febrero":
					alert("Falta para el invierno");
					break;
				default:
					alert("Ya pasamos el frio, ahora calor");
				
			}
	}

		/* Martin Allende
		Switch 2 
		entregado */
	







/* O despues del segundo case se puede poner default */