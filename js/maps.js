function initMap() {
    var options = {
       zoom:7,
       center: { lat:42.565502, lng:-71.428359}, //Coordinates of New York 
       styles: [
         {
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#f5f5f5"
             }
           ]
         },
         {
           "elementType": "labels.icon",
           "stylers": [
             {
               "visibility": "off"
             }
           ]
         },
         {
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#616161"
             }
           ]
         },
         {
           "elementType": "labels.text.stroke",
           "stylers": [
             {
               "color": "#f5f5f5"
             }
           ]
         },
         {
           "featureType": "administrative.land_parcel",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#bdbdbd"
             }
           ]
         },
         {
           "featureType": "poi",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#eeeeee"
             }
           ]
         },
         {
           "featureType": "poi",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#757575"
             }
           ]
         },
         {
           "featureType": "poi.park",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#e5e5e5"
             }
           ]
         },
         {
           "featureType": "poi.park",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         },
         {
           "featureType": "road",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#ffffff"
             }
           ]
         },
         {
           "featureType": "road.arterial",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#757575"
             }
           ]
         },
         {
           "featureType": "road.highway",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#dadada"
             }
           ]
         },
         {
           "featureType": "road.highway",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#616161"
             }
           ]
         },
         {
           "featureType": "road.local",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         },
         {
           "featureType": "transit.line",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#e5e5e5"
             }
           ]
         },
         {
           "featureType": "transit.station",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#eeeeee"
             }
           ]
         },
         {
           "featureType": "water",
           "elementType": "geometry",
           "stylers": [
             {
               "color": "#c9c9c9"
             }
           ]
         },
         {
           "featureType": "water",
           "elementType": "labels.text.fill",
           "stylers": [
             {
               "color": "#9e9e9e"
             }
           ]
         }
       ]
    }

   let locations = [
      [42.4153739, -71.1564428, 'Arlington, MA', ''],
      [40.723620, -74.050610, 'Jersey City, NJ', '357 3rd Street  Jersey City  NJ 07302'],
      [42.5257, -71.0953, 'Reading, MA', '347 Main St Reading  MA, 01867'],
      [42.2830981, -71.6416492, 'Westborough, MA', '30 Lyman St Westborough MA, 01581'], 
      [42.565502, -71.428359, 'Westford, MA', '9 Cornerstone square Westford MA, 01886']
   ]; 
   var infowindow = new google.maps.InfoWindow();
   var map = new google.maps.Map(document.getElementById('map'), options);

   for(var i=0; i<locations.length; i++){
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
   }
}


// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2 - lat1);  // deg2rad below
//     var dLon = deg2rad(lon2 - lon1);
//     var a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2)
//     ;
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c; // Distance in km
//     return d;
// }

// function deg2rad(deg) {
//     return deg * (Math.PI / 180)
// }


// var locations = [['<div class="row listmultisite" style="width: 300px;padding-left: 19px;border:none;"><div class="col-md-1 col-sm-1 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/uploads/2018/04/location-icon.png" alt="pinpoint" /></div><div class="col-md-10 col-sm-10 p-0"><div class="subsite-title" style="color:#000;padding-top: 6px;padding-left: 5px;">Arlington, MA</div><div class="subsite-address" style="color:#000;padding-left: 7px;padding-top: 7px;">TBD Arlington MA, TBD.</div><div class="subsite-address" style="padding-bottom: 10px;margin-top: 13px;"><a href="https://thecodewiz.com/arlington-ma/"><span class="moreinfo" style="padding: 7px 39px;background-color: #fb7d07;color: #fff;border: 1px solid #fff;">Website</span></a></div></div></div>','42.4153739','-71.1564428', '<div class="row listmultisite"><div class="col-md-3 col-sm-4 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/themes/codewiz/img/pinpoint.png" alt="pinpoint"/></div><div class="col-md-9 col-sm-8 p-0"><div class="subsite-title">Arlington, MA</div><div class="subsite-address">TBD</div><div class="subsite-address" style="margin-top:5px;"><i class="fa fa-phone"></i>(339)-707-0628 &nbsp; <a href="https://thecodewiz.com/arlington-ma/" class="moreinfo displayMorePhone">Visit Website</a> <span class="moreinfo displayMoreDeskTop" onmouseover ="myClick(countchange)" data-info-map-count="countchange" data-info-website-link="https://thecodewiz.com/arlington-ma/">Visit Website </span></div></div></div>'],
// ['<div class="row listmultisite" style="width: 300px;padding-left: 19px;border:none;"><div class="col-md-1 col-sm-1 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/uploads/2018/04/location-icon.png" alt="pinpoint" /></div><div class="col-md-10 col-sm-10 p-0"><div class="subsite-title" style="color:#000;padding-top: 6px;padding-left: 5px;">Jersey City, NJ</div><div class="subsite-address" style="color:#000;padding-left: 7px;padding-top: 7px;">357 3rd Street  Jersey City  NJ, 07302.</div><div class="subsite-address" style="padding-bottom: 10px;margin-top: 13px;"><a href="https://www.thecodewiz.com/jerseycity-nj"><span class="moreinfo" style="padding: 7px 39px;background-color: #fb7d07;color: #fff;border: 1px solid #fff;">Website</span></a></div></div></div>','40.723620','-74.050610', '<div class="row listmultisite"><div class="col-md-3 col-sm-4 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/themes/codewiz/img/pinpoint.png" alt="pinpoint"/></div><div class="col-md-9 col-sm-8 p-0"><div class="subsite-title">Jersey City, NJ</div><div class="subsite-address">357 3rd Street </div><div class="subsite-address" style="margin-top:5px;"><i class="fa fa-phone"></i>(201)-589-0199 &nbsp; <a href="https://www.thecodewiz.com/jerseycity-nj" class="moreinfo displayMorePhone">Visit Website</a> <span class="moreinfo displayMoreDeskTop" onmouseover ="myClick(countchange)" data-info-map-count="countchange" data-info-website-link="https://www.thecodewiz.com/jerseycity-nj">Visit Website </span></div></div></div>'],
// ['<div class="row listmultisite" style="width: 300px;padding-left: 19px;border:none;"><div class="col-md-1 col-sm-1 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/uploads/2018/04/location-icon.png" alt="pinpoint" /></div><div class="col-md-10 col-sm-10 p-0"><div class="subsite-title" style="color:#000;padding-top: 6px;padding-left: 5px;">Reading, MA</div><div class="subsite-address" style="color:#000;padding-left: 7px;padding-top: 7px;">347 Main St Reading  MA, 01867.</div><div class="subsite-address" style="padding-bottom: 10px;margin-top: 13px;"><a href="https://thecodewiz.com/reading-ma/"><span class="moreinfo" style="padding: 7px 39px;background-color: #fb7d07;color: #fff;border: 1px solid #fff;">Website</span></a></div></div></div>','42.5257','-71.0953', '<div class="row listmultisite"><div class="col-md-3 col-sm-4 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/themes/codewiz/img/pinpoint.png" alt="pinpoint"/></div><div class="col-md-9 col-sm-8 p-0"><div class="subsite-title">Reading, MA</div><div class="subsite-address">347 Main St</div><div class="subsite-address" style="margin-top:5px;"><i class="fa fa-phone"></i>(781)-205-9865 &nbsp; <a href="https://thecodewiz.com/reading-ma/" class="moreinfo displayMorePhone">Visit Website</a> <span class="moreinfo displayMoreDeskTop" onmouseover ="myClick(countchange)" data-info-map-count="countchange" data-info-website-link="https://thecodewiz.com/reading-ma/">Visit Website </span></div></div></div>'],
// ['<div class="row listmultisite" style="width: 300px;padding-left: 19px;border:none;"><div class="col-md-1 col-sm-1 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/uploads/2018/04/location-icon.png" alt="pinpoint" /></div><div class="col-md-10 col-sm-10 p-0"><div class="subsite-title" style="color:#000;padding-top: 6px;padding-left: 5px;">Westborough, MA</div><div class="subsite-address" style="color:#000;padding-left: 7px;padding-top: 7px;">30 Lyman St Westborough MA, 01581.</div><div class="subsite-address" style="padding-bottom: 10px;margin-top: 13px;"><a href="https://thecodewiz.com/westborough/"><span class="moreinfo" style="padding: 7px 39px;background-color: #fb7d07;color: #fff;border: 1px solid #fff;">Website</span></a></div></div></div>','42.2830981','-71.6416492', '<div class="row listmultisite"><div class="col-md-3 col-sm-4 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/themes/codewiz/img/pinpoint.png" alt="pinpoint"/></div><div class="col-md-9 col-sm-8 p-0"><div class="subsite-title">Westborough, MA</div><div class="subsite-address">30 Lyman St</div><div class="subsite-address" style="margin-top:5px;"><i class="fa fa-phone"></i>(508)-217-4562 &nbsp; <a href="https://thecodewiz.com/westborough/" class="moreinfo displayMorePhone">Visit Website</a> <span class="moreinfo displayMoreDeskTop" onmouseover ="myClick(countchange)" data-info-map-count="countchange" data-info-website-link="https://thecodewiz.com/westborough/">Visit Website </span></div></div></div>'],
// ['<div class="row listmultisite" style="width: 300px;padding-left: 19px;border:none;"><div class="col-md-1 col-sm-1 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/uploads/2018/04/location-icon.png" alt="pinpoint" /></div><div class="col-md-10 col-sm-10 p-0"><div class="subsite-title" style="color:#000;padding-top: 6px;padding-left: 5px;">Westford, MA</div><div class="subsite-address" style="color:#000;padding-left: 7px;padding-top: 7px;">9 Cornerstone square Westford MA, 01886.</div><div class="subsite-address" style="padding-bottom: 10px;margin-top: 13px;"><a href="https://thecodewiz.com/westford-ma/"><span class="moreinfo" style="padding: 7px 39px;background-color: #fb7d07;color: #fff;border: 1px solid #fff;">Website</span></a></div></div></div>','42.565502','-71.428359', '<div class="row listmultisite"><div class="col-md-3 col-sm-4 p-0 pinpoint"><img src="https://thecodewiz.com/wp-content/themes/codewiz/img/pinpoint.png" alt="pinpoint"/></div><div class="col-md-9 col-sm-8 p-0"><div class="subsite-title">Westford, MA</div><div class="subsite-address">9 Cornerstone square</div><div class="subsite-address" style="margin-top:5px;"><i class="fa fa-phone"></i>(978) 496 - 1053 &nbsp; <a href="https://thecodewiz.com/westford-ma/" class="moreinfo displayMorePhone">Visit Website</a> <span class="moreinfo displayMoreDeskTop" onmouseover ="myClick(countchange)" data-info-map-count="countchange" data-info-website-link="https://thecodewiz.com/westford-ma/">Visit Website </span></div></div></div>']];

// var employees = [];
// var count = 0;
// for (i = 0; i < locations.length; i++) {
//     var distance = getDistanceFromLatLonInKm(42.3291, -71.1815, locations[i][1], locations[i][2]);
//     if(distance <= 50 && zipCodeComing == 1){
//         employees[count] = {distance: distance, lat: locations[i][1], lon: locations[i][2], content:locations[i][3], maincontent: locations[i][0]}
//         count ++;
//     }
//     if(zipCodeComing == 0){
//         employees[count] = {distance: distance, lat: locations[i][1], lon: locations[i][2], content:locations[i][3], maincontent: locations[i][0]}
//         count ++;
//     }
// }

// if(employees.length == 0){
// for (i = 0; i < locations.length; i++) {
//     var distance = getDistanceFromLatLonInKm(42.3291, -71.1815, locations[i][1], locations[i][2]);
//     employees[count] = {distance: distance, lat: locations[i][1], lon: locations[i][2], content:locations[i][3], maincontent: locations[i][0]}
//     count ++;
//     }
// }


    
// employees.sort(function (a, b) {
//     return a.distance - b.distance
// });



// var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 7,
//     center: new google.maps.LatLng(employees[0].lat, employees[0].lon),
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     disableDefaultUI: true
// });

// var infowindow = new google.maps.InfoWindow();

// var marker, i;

// for (i = 0; i < employees.length; i++) {

//     marker = new google.maps.Marker({
//         position: new google.maps.LatLng(employees[i].lat, employees[i].lon),
//         icon: 'https://thecodewiz.com/wp-content/uploads/2019/04/sitepin-e1546432067781.png',
//         map: map
//     });

//     google.maps.event.addListener(marker, 'click', (function (marker, i) {
//         return function () {
//             infowindow.setContent(employees[i].maincontent);
//             infowindow.open(map, marker);
//         }
//     })(marker, i));

// }

// var data = '';
// for (i = 0; i < employees.length; i++) {
// var content = employees[i].content;
//          content = content.replace("countchange", i);
//          content = content.replace("countchange", i);
// data += content;
// }
// console.log(data);