$(document).on( "ready", mood );

function mood(){
  var args = leerGET();

  var dinero = args['dinero'];
  var modo = 'ninguno';

  var contenedorModo = document.getElementById( 'modo' );
  var images = contenedorModo.getElementsByTagName( 'img' );

  for(img in images){
    if(images[img] instanceof HTMLImageElement){
      images[img].addEventListener( "touchend", irMapa, false );
      images[img].addEventListener( "mouseup", irMapa, false );
    }
  }

  function irMapa( event ){
    switch( event.target.id ){
      case "romantico":
        modo = "romantico";
        break;

      case "divertido":
        modo = "divertido";
        break;

      case "exentrico":
        modo = "exentrico";
        break;

      case "intimo":
        modo = "intimo";
        break;
    }
    window.location = "mapa.html?dinero=" + dinero + "&modo=" + modo;
  }

  function leerGET(){
    var cadGET = location.search.substr(1,location.search.length);
    var arrGET = cadGET.split("&");
    var asocGET = [];
    var variable = "";
    var valor = "";

    for(i=0;i<arrGET.length;i++){
      var aux = arrGET[i].split("=");
      variable = aux[0];
      valor = aux[1];
      asocGET[variable] = valor;
    }

    return asocGET;
  }
}


