$(document).on( "ready", index );

function index (){
	var dinero = 0;
	var contenedorDinero = document.getElementById( 'dinero' );
	var images = contenedorDinero.getElementsByTagName( 'img' );

	for(img in images){
		if(images[img] instanceof HTMLImageElement ){
			images[img].addEventListener( "touchend", irModo, false );
			images[img].addEventListener( "mouseup", irModo, false );
		}
	}

	function irModo( event ){
		switch( event.target.id ){
			case "cero":
				dinero = 0;
				break;

			case "roto":
				dinero = 150;
				break;

			case "cool":
				dinero = 350;
				break;

			case "milloneta":
				dinero = 10000;
				break;
		}
		window.location = "mood.html?dinero=" + dinero;
	}
}