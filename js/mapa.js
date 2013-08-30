$(document).on("ready", mapa);

function mapa( event ){
	var args = leerGET();

	var dinero = args["dinero"];
	var modo = args["modo"];
	var markers = [];
	var contmakers = 1;

	var mymapa;

	//---------- GEO

	var latlng = new google.maps.LatLng(19.44203, -99.203928);

		var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		mymapa = new google.maps.Map(document.getElementById("mapa"), myOptions);

		var marker = new google.maps.Marker({
			position: latlng,
			title:"Aqui estas"
		});

		marker.setMap(mymapa);

	$.ajax({
			dataType: 'jsonp',
			url: 'http://sorprendeme.herokuapp.com/lugares/buscar?[lat]=19.441726&[long]=-99.204013&callback=lugares',
			success: function(datos) {
				//addNewMarkers(datos, mymapa);
				for (var clave in datos) {
                  if (datos.hasOwnProperty(clave)) {
                  	for (var a in datos[clave]){
                  		for (var b in datos[clave][a]){
                  			var json = datos[clave][a];
                  			addSingleMarker(json["latitud"], json["longitud"], json["nombre"]);
                  		}
                  	}
                      //alert(clave + " -> " + datos[clave]);
                      //addSingleMarker(datos["latitud"], datos["longitud"], datos["nombre"]);
                  }
                }
			},
			error: function(xhr, status, error){
				alert("error");
			}
		});

	//navigator.geolocation.getCurrentPosition(coordenadas, error);

	function coordenadas(posicion){

		var latitud = posicion.coords.latitude;
		var longitud = posicion.coords.longitude;

		//var latlng = new google.maps.LatLng(latitud, longitud);
		var latlng = new google.maps.LatLng(19.44203, -99.203928);

		var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		mymapa = new google.maps.Map(document.getElementById("mapa"), myOptions);

		var marker = new google.maps.Marker({
			position: latlng,
			title:"Hello World!"
		});

		marker.setMap(mymapa);

		// $.ajax({
		// 	dataType: 'jsonp',
		// 	url: 'http://sorprendeme.herokuapp.com/lugares/buscar?[lat]=19.441726&[long]=-99.204013&callback=lugares',
		// 	success: function(datos) {
		// 		//addNewMarkers(datos, mymapa);
		// 		for (var clave in datos) {
  //                 if (datos.hasOwnProperty(clave)) {
  //                 	for (var a in datos[clave]){
  //                 		for (var b in datos[clave][a]){
  //                 			var json = datos[clave][a];
  //                 			addSingleMarker(json["latitud"], json["longitud"], json["nombre"]);
  //                 		}
  //                 	}
  //                     //alert(clave + " -> " + datos[clave]);
  //                     //addSingleMarker(datos["latitud"], datos["longitud"], datos["nombre"]);
  //                 }
  //               }
		// 	},
		// 	error: function(xhr, status, error){
		// 		alert("error");
		// 	}
		// });
	}

	function error( event ){
		alert("error");
	}

    //--------------

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

	function addNewMarkers( datos, mymapa ){
		var marker2;
		$.each(datos, function(k,v){
			if (datos.hasOwnProperty(k)) {
				//alert(k + ":" + v);
				marker2 = new google.maps.Marker({
					position: new google.maps.LatLng(datos.latitud, datos.longitud),
					title: datos.nombre
				});

				google.maps.event.addListener(marker2, "mousedown", function() {
					alert(marker2.title);
				});
				marker2.setMap(mymapa);
				markers.push(marker2);
			}
		});
		//markers[contmakers] = marker2;
		//contmakers += 1;
	}

	function addSingleMarker(lat, longi, titulo){
		//alert(lat + ":" + longi + ":" + titulo);
		var mk = new google.maps.Marker({
			position: new google.maps.LatLng(lat, longi),
			title: titulo
		});

		google.maps.event.addListener(mk, "mousedown", function() {
			alert(mk.title);
		});
		mk.setMap(mymapa);
		markers.push(mk);
	}
}