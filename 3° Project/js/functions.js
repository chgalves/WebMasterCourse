var map;

function initializeMap() {
    var mapProperties = {
        center: new google.maps.LatLng(-6.853435600947959, -35.492322949042226),
        scrollWheel: false,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapProperties);

    var content = '<p style="color:black;font-size:13px;padding:10px 0;">Find me</p>';
    addMarker(-6.853435600947959, -35.492322949042226, '', content);
}

function addMarker(lat, lng, icon, content) {
    var latLng = { 'lat': lat, 'lng': lng };
    
    var marker = new google.maps.marker.AdvancedMarkerElement({
        position: latLng,
        map: map,
        content: content,
        icon: icon
    });

    var infoWindow = new google.maps.InfoWindow({
        content: content,
        maxWidth: 200,
        pixelOffset: new google.maps.Size(0, 20)
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    setTimeout(function() {
        map.panTo({'lat': 40.71957306353723, 'lng': -74.0207794414495});
        map.setZoom(8);
    }, 3000);
}
