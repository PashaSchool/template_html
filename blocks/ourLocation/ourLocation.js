function initMap() {
  var option = {
    center: {lat: 49.85, lng: 24.0166666667},
    scrollwheel: false,
    zoom: 18,
    scaleControl: true,
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

    var icn = '<svg id="marker" fill="#F4E7DF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">' +
    + '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>' +
    + '<path d="M0 0h24v24H0z" fill="none"/> </svg>';

    var map = new google.maps.Map(document.getElementById('map'), option);
    // map.setTilt(45);
    var marker = new google.maps.Marker({
      map: map,
      icon: {url: '../img/markerSvg.svg'},
      position: option.center
    });


}
// 


//re-call initMap
setTimeout(function(){
  initMap();
}, 3000)


var googleMapLocation = {
  init: function() {
    this.chacheDom();
    this.bindEvents();
  },
  chacheDom: function() {
    this.$googleMapLocation = $('.google-map-section');
    this.$elem = $(this.$googleMapLocation).find('.item');
    this.timeLine = new TimelineLite({paused: true});
    this.setAnimation();
  },
  bindEvents: function() {
    $(window).on('scroll', this.makeAnimationForContactform.bind(this));
  },
  makeAnimationForContactform: function(e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > $(this.$googleMapLocation).position().top) {
      this.animation();
    }
  },
  animation: function() {
    this.timeLine.play();
  },
  setAnimation: function() {
    this.timeLine
        .from(this.$elem, .8, {autoAlpha: 0,y: -100}, .1)
  }
  
};
