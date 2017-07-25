function initMap() {
  var option = {
    center: {lat: 49.85, lng: 24.0166666667},
    scrollwheel: false,
    zoom: 18,
    styles:[
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b3b3b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ebebeb"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#C26B6A"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#36424E"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    }
]
  };

  var map = new google.maps.Map(document.getElementById('map'), option);
map.setTilt(45);
var marker = new google.maps.Marker({
  position: option.center,
  map: map
})

}


//re-call initMap
setTimeout(function(){
  initMap();
}, 3000)
// function initMap() {
//   var option = {
//     center: {lat: 49.85, lng: 24.0166666667},
//     scrollwheel: false,
//     zoom: 18,
//     styles:[
//     {
//         "featureType": "water",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#d3d3d3"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "stylers": [
//             {
//                 "color": "#808080"
//             },
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#b3b3b3"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#ffffff"
//             },
//             {
//                 "weight": 1.8
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#d7d7d7"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#ebebeb"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#a7a7a7"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#ffffff"
//             }
//         ]
//     },
//     {
//         "featureType": "landscape",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#C26B6A"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#36424E"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "color": "#000000"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#d6d6d6"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.icon",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {},
//     {
//         "featureType": "poi",
//         "elementType": "geometry.fill",
//         "stylers": [
//             {
//                 "color": "#dadada"
//             }
//         ]
//     }
// ]
//   };
//
//   var map = new google.maps.Map(document.getElementById('map'), option)
//   var marker = new google.maps.Marker({
//     position: option.center,
//     map: map
//   })
// }
//
//
// //re-call initMap
// setTimeout(function(){
//   initMap();
// }, 3000)
