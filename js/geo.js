var mapa;
var dinero = 100;
var marcadores = [];

var indexCafe = [];
var indexComida = [];
var indexRestaurant = [];
var indexCine = [];
var indexTeatro = [];
var indexParque = [];
var indexMuseo = [];

var arrayDinero = [0, 100, 300, 1000];

function localizame(){
  buscarLugar();
  //navigator.geolocation.getCurrentPosition(coordenadas);
}

function noVaro(){
  dinero = 0;
}

function corto(){
  dinero = 100;
}

function conVaro(){
  dinero = 300;
}

function loQueSea() {
  dinero = 1000;
}

function buscarLugar(){

  //navigator.geolocation.getCurrentPosition(coordenadas);

  indexdinero = Math.floor(Math.random() * 4);
  dinero = arrayDinero[indexdinero];
  dinero = 100;

  var i;
  var k;

  //Cafe
  for(i=0, k=0; i<costocafe.length; i++){
    if(dinero >= costocafe[i]){
      indexCafe[k] = i;
      k++;
    }
  }

  //Comida
  for(i=0, k=0; i<costocomida.length; i++){
    if(dinero >= costocomida[i]){
      indexComida[k] = i;
      k++;
    }
  }

  //Restaurants
  for(i=0, k=0; i<costores.length; i++){
    if(dinero >= costores[i]){
      indexRestaurant[k] = i;
      k++;
    }
  }

  //Cine
  for(i=0, k=0; i<costocine.length; i++){
    if(dinero >= costocine[i]){
      indexCine[k] = i;
      k++;
    }
  }

  //Teatro
  for(i=0, k=0; i<costoteatro.length; i++){
    if(dinero >= costoteatro[i]){
      indexTeatro[k] = i;
      k++;
    }
  }

  //Parque
  for(i=0, k=0; i<costoparque.length; i++){
    if(dinero >= costoparque[i]){
      indexParque[k] = i;
      k++;
    }
  }

  //Museo
  for(i=0, k=0; i<costomuseo.length; i++){
    if(dinero >= costomuseo[i]){
      indexMuseo[k] = i;
      k++;
    }
  }

  navigator.geolocation.getCurrentPosition(coordenadas);
}

function coordenadas(position){

  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;

  var icon1 = "images/marcadores/PIN_LUGAR.png";
  var icon2 = "images/marcadores/PIN_UBICACION.png";

  var latlng = new google.maps.LatLng(latitud, longitud);

  var myOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  mapa = new google.maps.Map(document.getElementById("mapa"), myOptions);

  addMarker2(latitud, longitud, "Estas aqui", icon1);

  //Cafe
  for(i=0; i<indexCafe.length; i++){
    addMarker2(laticafes[i], longicafes[i], cafes[i], icon2);
  }

  //Comida
  for(i=0; i<indexComida.length; i++){
    addMarker2(laticomida[i], longicomida[i], comida[i], icon2);
  }

  //Restaurant
  for(i=0; i<indexRestaurant.length; i++){
    addMarker2(latires[i], longires[i], restaurant[i], icon2);
  }

  //Cine
  for(i=0; i<indexCine.length; i++){
    addMarker2(laticine[i], longicine[i], cine[i], icon2);
  }

  //Teatro
  for(i=0; i<indexTeatro.length; i++){
    addMarker2(latiteatro[i], longiteatro[i], teatro[i], icon2);
  }

  //Parque
  for(i=0; i<indexParque.length; i++){
    addMarker2(latiparque[i], longiparque[i], parque[i], icon2);
  }

  //Museo
  for(i=0; i<indexMuseo.length; i++){
    addMarker2(latimuseo[i], longimuseo[i], museo[i], icon2);
  }
}

function addMarker(posicion, titulo, mapa){
  var marker = new google.maps.Marker({
      position: posicion,
      title:titulo
  });

  marker.setMap(mapa);
}

function addMarker2(lat, lon, titulo, icono) {
  //var latlng = new google.maps.LatLng(lat, lon);
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat, lon),
      icon: icono,
      map: mapa,
      animation: 'BOUNCE',
      title: titulo
  });

  //marker.setMap(mapa);
  google.maps.event.addListener(marker, 'click', verInfo);
  marcadores[marcadores.length+1] = marker;

  function verInfo(){
    if(marker.getAnimation() !== null){
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }

    alert(marker.title);
  }
}

function calculaDistancia(a1, b1, a2, b2){
  var af = a2 - a1;
  var bf = b2 - b1;

  var dis = Math.sqrt((af * af) + (bf * bf));

  return dis;
}