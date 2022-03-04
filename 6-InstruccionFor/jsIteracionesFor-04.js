function mostrar()
{
	let repeticiones;
	let i;

	repeticiones = parseInt(prompt("Cantidad de repeticiones"));

	for(i = 1 ;i <= repeticiones; i++){

		if(i > 3)
		{
			break;
		}
		
		document.write(i + "<br>");

	}


}	

