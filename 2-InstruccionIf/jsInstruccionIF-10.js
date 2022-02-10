function mostrar()
{
	const mayor = 10;
	const menor = 1;
	let numero;

	numero = Math.round(Math.random() * (mayor - menor) + menor );

	if(numero > 3 && numero < 9 ){alert("APROBÓ")}
	else if(numero < 4){alert("Vamos, la proxima se puede")}
	else{alert("EXCELENTE")};
	

}	
	/* Martin Allende
	   If 10 
	   entregado */ 