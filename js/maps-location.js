/*function initMap() {
    var options = {
       zoom:7,
       center: { lat:42.565502, lng:-71.428359}, //Coordinates of New York 
       styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    }

   let locations = [
      [42.4153739, -71.1564428, 'Arlington, MA', ''],
      [40.723620, -74.050610, 'Jersey City, NJ', '357 3rd Street  Jersey City  NJ 07302'],
      [42.5257, -71.0953, 'Reading, MA', '347 Main St Reading  MA, 01867'],
      [42.2830981, -71.6416492, 'Westborough, MA', '30 Lyman St Westborough MA, 01581'], 
      [42.565502, -71.428359, 'Westford, MA', '9 Cornerstone square Westford MA, 01886']
   ]; 
   var infowindow = new google.maps.InfoWindow();
   var map = new google.maps.Map(document.getElementById('location-map'), options);
   var i = 4;
   //for(var i=0; i<locations.length; i++){
      var marker = new google.maps.Marker({
         position:{lat: locations[i][0], lng: locations[i][1]}, // Brooklyn Coordinates
         map:map, //Map that we need to add
         icon:'./images/map-pointer-logo.png',
         // adding custom icons (Here I used a Flash logo marker)
         draggarble: false// If set to true you can drag the marker
      });
      
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
         return function () {
            infowindow.setContent(locations[i][2]);
            infowindow.open(map, marker);
         }
      })(marker, i));
  // }
}*/

let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById("location-map"), {
    center: { lat: 42.565502, lng: -71.428359 },
    zoom: 7,
    styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
  });

  new google.maps.Marker({
    position:{ lat: 42.565502, lng: -71.428359 },
    map: map,
    icon:'./images/map-pointer-logo.png',
    draggable: false
  });
}

