$(document).ready(fready);
var lat;
var lon;
var info;
var map;

function fready() {
    console.log("i'ma ready");
    google.maps.event.addDomListener(window, 'load', initialize);
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    $(".navbar-inverse").css('background', 'url(./img/contact-us-header.jpg)');
    $(".navbar-inverse").css('-webkit-background-size', 'cover');
    $(".navbar-inverse").css('-moz-background-size', 'cover');
    $(".navbar-inverse").css('-o-background-size', 'cover');
    $(".navbar-inverse").css('background-size', 'cover');


}

function initialize() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bigym.altervista.org/php/getLocation.php", //Relative or absolute path to file.php file
        //data: {order: ordering},
        success: function (response) {
            console.log(response);
            info = JSON.parse(response);

            $("#addr").html(info[0].address);
            $("#phone").html(info[0].phone);
            $("#fax").html(info[0].fax);
            $("#mobile").html(info[0].mobile);
            $("#mail").html(info[0].mail);
            $("#mail").attr("href", "mailto:"+info[0].mail);
            $("#by_car").html(info[0].by_car);

            lat = info[0].lat;
            lon = info[0].lon;

            console.log('ciao');
            console.log(lat);
            console.log(lon)
            var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(lat, lon)
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lon),
                map: map,
                title: 'Byg Gym \n 84 Hills Rd \nCambridge CB2 1PG, UK'
            });


        },
        error: function (request, error) {
            console.log("Error");
        }
    });

}
