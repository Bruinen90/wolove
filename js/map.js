const style = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#050505"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#fef3f3"
            },
            {
                "weight": "3.01"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#0a0a0a"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#fffbfb"
            },
            {
                "weight": "3.01"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#a1a1a1"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#292929"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#202020"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#0006ff"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "13"
            },
            {
                "gamma": "0.00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#686868"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#8d8d8d"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#353535"
            },
            {
                "lightness": "6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": "3.45"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d0d0d0"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "lightness": "2"
            },
            {
                "visibility": "on"
            },
            {
                "color": "#999898"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#383838"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#faf8f8"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
]


function initMap() {
    const mapParams = {
        center: {lat: 50.095911, lng: 19.997131},
        zoom: 16,
        mapTypeControl: false,
        styles: style,
    };

    const mapParamsZielonki = {
        zoom: 16,
        mapTypeControl: false,
        styles: style,
        center: {lat: 50.117995, lng: 19.920238}
    }
    const mapMistrzejowice = new google.maps.Map(document.querySelector('.map--mistrzejowice'), mapParams);
    const mapZielonki = new google.maps.Map(document.querySelector('.map--zielonki'), mapParamsZielonki);

    const markerMistrzejowice = new google.maps.Marker({
        position: new google.maps.LatLng(50.095911, 19.997131),
        map: mapMistrzejowice,
        animation: google.maps.Animation.DROP,
        icon: {
            url: './img/map_pin.png',
            scaledSize: new google.maps.Size(75, 125),
        }
    });

    const markerZielonki = new google.maps.Marker({
        position: new google.maps.LatLng(50.117995, 19.920238),
        map: mapZielonki,
        animation: google.maps.Animation.DROP,
        icon: {
            url: './img/map_pin.png',
            scaledSize: new google.maps.Size(75, 125),
        }
    });

    google.maps.event.addListener(
        markerMistrzejowice,
        'click',
        ()=>window.open('https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=ChIJtZVgjrBaFkcRxR3ldrOsOYU', '_blank')
    );
    google.maps.event.addListener(
        markerZielonki,
        'click',
        ()=>window.open('https://www.google.com/maps/dir/?api=1&destination=QVB&destination_place_id=ChIJV2KizQ5aFkcRTKCuWl40cMg', '_blank')
    );
}

const changeMapHandler = (clickedMapClass) => {
    const clickedAddress = document.querySelector('#'+clickedMapClass);
    if(!clickedAddress.classList.contains('kontakt__choiceContainer--active')) {
        const maps = document.querySelectorAll('.map');
        for(let map of maps) {
            map.classList.toggle('map--hidden')
        }

        const addresses = document.querySelectorAll('.kontakt__choiceContainer');
        for(let address of addresses) {
            address.classList.toggle('kontakt__choiceContainer--active')
        }
    }

}
