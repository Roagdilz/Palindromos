
submit = document.getElementById('submit');
palindromo = document.getElementById('palindromo');
contenido = document.getElementById('contenido');



function enviar(){
	valor = palindromo.value;

	clear();
	if 	(valor.length==0){
		contenido.innerHTML="No ah ingresado ningun texto.";
		contenido.style.background="red";
	}else{
		if (respuesta(valor)){
			contenido.innerHTML="Es un palindromo";
		}else{
			contenido.innerHTML="No es un palindromo lo que ingreso como texto";
		}
	}
}
function clear() {
	palindromo.value="";
}
function respuesta(valor){
	valorEspejo ="";

	for (let i = valor.length - 1; i >= 0; i--) {
		
		valorEspejo+= valor[i];
		
	}
	return valorEspejo == valor ;

}