$(document).ready(function() {
  var setHeight = {
    init: function() {
      this.chacheDom();
      this.setCssStyle();
      this.bindEvents();
    },
    chacheDom: function() {
      this.el = $('.w-height');
    },
    setCssStyle: function() {
      this.windowHeight = window.innerHeight;
      $(this.el).css('height', this.windowHeight + 'px')
    },
    bindEvents: function() {
      $(window).on('resize', this.setCssStyle.bind(this))
    }
  };


  // initialization
  setHeight.init();

  //navigation action
  navigationAction.init();
console.log('doc is ready')
});


//spiner preloader
$(window).on('load',function() {
  console.log('window is ready')
  $('#loader-preloader').remove();
});


var navigationAction = {
  init: function() {
    this.chacheDom();
    this.bindEvents();
  },
  chacheDom: function() {
    this.btn = $('.burger-menu');
    this.menu = $('.header-line__list');
    this.windowWidth = $(window).innerWidth();
    this.newClass = 'toggle-nav-on-mobile';
  },
  bindEvents: function() {
    $(this.btn).on('click', this.addClass.bind(this));
    $(window).on('resize', this.checkForMobileDevice.bind(this));
    $(window).on('load', this.checkForMobileDevice.bind(this));
    $(document).on('scroll', this.navigationFixed.bind(this));
  },
  navigationFixed: function(e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled >= $(window).height()) {
      $('nav.navigation').addClass('menu-fixed')
    }
    if(scrolled <= $(window).height() && $('nav.navigation').hasClass('menu-fixed')) {
      $('nav.navigation').removeClass('menu-fixed')
    }
  },
  checkForMobileDevice: function() {
    this.windowWidth = $(window).innerWidth();
    if( $(this.menu).hasClass(this.newClass) && (this.windowWidth >= 979)) {
      $(this.menu).removeClass(this.newClass);
    }
  },
  addClass: function() {
    $(this.menu).toggleClass(this.toggleClassCb.bind(this))
  },
  toggleClassCb: function() {
    if(this.windowWidth <= 979) {
      return this.newClass
    } else {
      return
    }
  }
};

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

  var map = new google.maps.Map(document.getElementById('map'), option)
  var marker = new google.maps.Marker({
    position: option.center,
    map: map
  })
}

console.log('portfolio')
// .portfolio-container__works
// var el = document.getElementById('test');
// console.log(document.getElementsByClassName('work-container'))
var el = document.getElementsByClassName('portfolio-list__works');
// TweenLite.to(el, 1, {scale: .9});

for(var i = 0; i < el.length; i++) {

  el[i].addEventListener('mousemove', function(e){
      //w - 560
      //h - 390
      var target = this;
      var dx = e.offsetX - ($(target).width() / 2);
      var dy = e.offsetY - ($(target).height() / 2);

      var _x = dx * 0.1;
      var _y = dy * 0.1;

      TweenLite.to(target, .2, {x: _x, y: _y});
      TweenLite.to(target, .2, {rotationY: dx/10, rotationX: -dy/10});

    });

  el[i].addEventListener('mouseout', function(e){
    var target = this;
    TweenLite.to(target, .2, {scale: 1});
    TweenLite.to(target, .2, {x: 0, y: 0});
    TweenLite.to(target, .2, {rotationY: 0, rotationX: 0});

      TweenLite.to($(target).find('.work-container__icon'), .2, {y: 0});
      TweenLite.to($(target).find('.work-container__underline'), .2, {width: 0});
      TweenLite.to($(target).find('.work-container__icon'), .2, {autoAlpha: 0});
      TweenLite.to($(target).find('.work-container__description'), .2, {autoAlpha: 0});
      TweenLite.from($(target).find('.work-container__description'), .2, {y: 0});
  });

  el[i].addEventListener('mouseover',  function(e){
    var target = this;
      TweenLite.to(target, .2, {scale: 1.1});
      TweenLite.from($(target).find('.work-container__icon'), .4, {y: 20});
      TweenLite.to($(target).find('.work-container__icon'), .2, {autoAlpha: 1});
      TweenLite.to($(target).find('.work-container__underline'), .5, {width: '100%'});
      TweenLite.to($(target).find('.work-container__description'), .2, {autoAlpha: 1});
      TweenLite.from($(target).find('.work-container__description'), .2, {y: 40});

    });
}
