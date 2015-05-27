$(document).ready(ready);
var map;
function ready(){
    google.maps.event.addDomListener(window, 'load', initialize);
}

//insert in the html a 
//<div id="map-canvas"></div> 
//and load 
//<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
//<script src="js/mapscript.js"></script>
//<link href="css/map.css" rel="stylesheet">
//coordinates 52.193471, 0.132920
function initialize() {
    var lat = 52.193471;
    var lon = 0.132920;
    
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lon)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(lat,lon),
      map: map,
      title: 'Byg Gym \n 84 Hills Rd \n 84 Hills Rd, Cambridge CB2 1PG, Regno Unito'
  });
}