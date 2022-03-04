function mostrar()
{
    
    let numero;
    let i;
    let respuesta;
    let contDeDivisores = 0;

    numero = parseInt(prompt("Ingrese un numero"));

    for(i = 1; i <= numero; i++)
    {

        if(numero % i == 0)
        {

            contDeDivisores = contDeDivisores + 1;

        }


    }
	
    if(contDeDivisores == 2)
    {

        respuesta = "Es primo";

    }

    else
    {

        respuesta = "No es primo";

    }
	
    alert(respuesta);

}