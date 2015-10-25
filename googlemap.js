function GoogleMap(){
 
this.initialize = function(){
var map = showMap();
addMarkersToMap(map);
}
 
 var showMap = function(){
var mapOptions = {
zoom: 17,
center: new google.maps.LatLng(13.7481597, 100.5602034),
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
 
return map;
}
}

var addMarkersToMap = function(map){
var mapBounds = new google.maps.LatLngBounds();
var latitudeAndLongitudeOne = new google.maps.LatLng('13.7481597','100.5602034');
 
var markerOne = new google.maps.Marker({
position: latitudeAndLongitudeOne,
map: map
});
 
    mapBounds.extend(latitudeAndLongitudeOne);
    map.fitBounds(mapBounds);
}