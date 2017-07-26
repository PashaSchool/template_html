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

  //header animation
  headerAnimation.init();

  //service animation
  serviceAnimation.init();

  // animateabout section
  aboutStudioAnimation.init();

  //contact us form animation
  contactUsForm.init();

  //google map location
  googleMapLocation.init();

  //footer animation
  footerAnimation.init();
});


//spiner preloader
$(window).on('load',function() {
  $('#loader-preloader').remove();
});


var aboutStudioAnimation = {
	init: function() {
		this.cacheDOM();
		this.bindEvent();
	},
	cacheDOM: function() {
		this.$studio = $('#about-studio');
		this.$desc = $('.about-studio-descr');
		this.$title = $(this.$studio).find('.top-header');

		this.$circleItem = $('.circle-container-about__item');
		this.$circleContainer = $('.circle-container-about');

		this.$c4 = $(this.$circleContainer).find('.circle-container-about__generate-circle-4');
		this.$c3 = $(this.$circleContainer).find('.circle-container-about__generate-circle-3');
		this.$c2 = $(this.$circleContainer).find('.circle-container-about__generate-circle-2');

		this.$item_1 = $(this.$circleContainer).find('.circle-container-about__item:nth-child(1)');
		this.$item_2 = $(this.$circleContainer).find('.circle-container-about__item:nth-child(2)');
		this.$item_3 = $(this.$circleContainer).find('.circle-container-about__item:nth-child(3)');
		this.$item_4 = $(this.$circleContainer).find('.circle-container-about__item:nth-child(4)');
		this.$item_5 = $(this.$circleContainer).find('.circle-container-about__item:nth-child(5)');

		this.timeLine = new TimelineLite({
		    paused: true,
		    onComplete: this._deleteALlAttrStyle.bind(this)
		  });

	},
	bindEvent: function() {
	    if($(window).width() > 1200) { 
			this.animation();
			$(window).on('scroll', this.animateAboutSection.bind(this))
		}
	},
	animateAboutSection: function() {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > ($(this.$studio).position().top * .9)) {
			
			this.timeLine.play()
		}
	},
	_deleteALlAttrStyle: function() {
		$(this.$circleContainer)
			.children().each(function(i, el) {
				if(el.hasAttribute('style')) {
					$(el).removeAttr('style')
				}
			})
	},
	animation: function() {
		this.timeLine
			.from(this.$desc, 2, {autoAlpha: 0, y: -110}, 'atTheOneTime')
			.from(this.$title, 2, {autoAlpha: 0, y: 110}, '-=1','atTheOneTime')
			.from(this.$c2, 2, {rotationZ: 360, ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$c3, 2, {rotationZ: 360, ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$c4, 2, {rotationZ: 360, ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$item_1, 5, {x: 270, ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$item_2, 5, {x: 178, y: 188,ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$item_3, 5, {y: 270, ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$item_4, 5, {x: -270, ease: Power2.easeOut}, 'atTheOneTime')
			.from(this.$item_5, 5, {x: -370, ease: Power2.easeOut}, 'atTheOneTime')
	}
}
var serviceAnimation = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function() {
    this.$service = $('#service-section');
    this.$title = $(this.$service).find('.top-header');
    this.$circleCont = $(this.$service).find('.circle-container');

    this.$item_1 = $(this.$circleCont).find('.circle-container__item:nth-child(1)');
    this.$item_2 = $(this.$circleCont).find('.circle-container__item:nth-child(2)');
    this.$item_3 = $(this.$circleCont).find('.circle-container__item:nth-child(3)');
    this.$item_4 = $(this.$circleCont).find('.circle-container__item:nth-child(4)');
    this.$item_5 = $(this.$circleCont).find('.circle-container__item:nth-child(5)');
    this.$item_6 = $(this.$circleCont).find('.circle-container__item:nth-child(6)');

    this.$c5 = $(this.$service).find('.circle-container__generate-circle-5');
    this.$c4 = $(this.$service).find('.circle-container__generate-circle-4');
    this.$c3 = $(this.$service).find('.circle-container__generate-circle-3');

    this.$btn = $(this.$service).find('.btn-wrapper');

    // offset top
    this.offsetTop = $(this.$service).offset().top;
    //timeline
    this.timelineHeader = new TimelineLite({
      paused: true,
      onComplete: this._deleteALlAttrStyle.bind(this)
    });

  },
  _deleteALlAttrStyle: function() {
    $(this.$circleCont)
    .children().each(function(i, el) {
      if(el.hasAttribute('style')) {
        $(el).removeAttr('style')
      }
    })
  },
  bindEvents: function() {
    if($(window).width() > 1200) {
      this.animation();
      $(window).on('scroll', this.checkPosition.bind(this))
    }
  },
  checkPosition: function(){
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled >= (this.offsetTop * 0.9) ) {
      this.timelineHeader.play();
    }
  },
  animation: function() {
    this.timelineHeader
    .from(this.$title, 1, {autoAlpha: 0, y: -50, ease: Power2.easeOut})
    .from(this.$c4, 5, {rotationZ: 360, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$c3, 4, {rotationZ: 360, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$c5, 4, {rotationZ: 360, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$item_1, 5, {autoAlpha: 0, x: 250, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$item_2, 5, {autoAlpha: 0, x: 250, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$item_6, 5, {autoAlpha: 0, x: 250, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$item_3, 5, {autoAlpha: 0, x: -500, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$item_4, 5, {autoAlpha: 0, x: -450, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$item_5, 5, {autoAlpha: 0, x: -500, ease: Power2.easeOut}, 'atOneTime')
    .from(this.$btn, 4, {autoAlpha: 0, y: 100, ease: Power2.easeOut}, 'atOneTime')

  }
}

var contactUsForm = {
  init: function() {
    this.chacheDom();
    this.bindEvents();
  },
  chacheDom: function() {
    this.$formContainer = $('#contact-us-form');
    this.$inputs = $(this.$formContainer).find('[data-anim-input]');
    this.$icons = $(this.$formContainer).find('[data-anim-icon]');
    this.timeLine = new TimelineLite({paused: true});
    
  },
  bindEvents: function() {
    if($(window).width() > 1200) { 
      this.setAnimation();
      $(window).on('scroll', this.makeAnimationForContactform.bind(this));
    }
  },
  makeAnimationForContactform: function(e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > $(this.$formContainer).position().top) {
      this.animation();
    }
  },
  animation: function() {
    this.timeLine.play();
  },

  setAnimation: function() {
    this.timeLine
        .staggerFrom(this.$inputs, .8, {autoAlpha: 0,y: -100}, .1)
        .staggerFrom(this.$icons, .5, {autoAlpha: 0, x: 40}, .1)
  }
  
};

var footerAnimation = {
  init: function() {
    this.chacheDom();
    this.bindEvents();
  },
  chacheDom: function() {
    this.$footer = $('footer.footer');
    this.$client = $(this.$footer).find('.our-client');
    this.$logoDescr = $(this.$footer).find('.logo-descr');
    this.timeLine = new TimelineLite({paused: true});
    this.setAnimation();
  },
  bindEvents: function() {
    $(window).on('scroll', this.footerAnimation.bind(this));
  },
  footerAnimation: function(e) {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > $(this.$footer).position().top - $(this.$footer).height()) {
      this.animation();
    }
  },
  animation: function() {
    this.timeLine.play();
  },
  setAnimation: function() {
    this.timeLine
        .from(this.$client, .8, {autoAlpha: 0,y: -100}, 'atOneTime')
        .from(this.$logoDescr, .8, {autoAlpha: 0,y: -100}, 'atOneTime')
  }
  
};

var headerAnimation = {
  init: function() {
    this.cacheDom();
    this.bindEvents();
  },
  cacheDom: function() {
    this.$title = $('.intro-box__title');
    this.$desc = $('.intro-box__short-descr');
    this.$btn = $('.intro-box__btn-wrapper');
    this.$arrow = $('.scroll-pointer-box');

    //timeline
    this.timelineHeader = new TimelineLite({
      paused: true,
      onComplete:this.unbindEvent.bind(this)
    });
  },
  unbindEvent: function(e) {
    $(window).off('load', this.windowIsLoaded.bind(this))
  },
  bindEvents: function() {
    $(window).on('load', this.windowIsLoaded.bind(this))
  },
  windowIsLoaded: function(e) {
    this.animation()
    this.timelineHeader.play();
  },
  animation: function() {
    this.timelineHeader
    .from(this.$title, 1, {autoAlpha: 0, y: -100, ease: Power2.easeOut})
    .from(this.$desc, 1, {autoAlpha: 0, y: -100, ease: Power2.easeOut}, '-=0.4' )
    .from(this.$btn, 1.3, {autoAlpha: 0, y: -100, ease: Power2.easeOut}, '-=0.4' )
    .from(this.$arrow, 0.8, {autoAlpha: 0, y: -100, ease: Power2.easeOut})
    .to(this.$arrow, 0.6, {y: -20, ease: Power2.easeOut})
    .to(this.$arrow, 0.6, {y: 0, ease: Power2.easeOut})
  }
}

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
    var curentPos = $(window).height() * 1.5;
    if(scrolled  >= curentPos) {
      $('nav.navigation').addClass('menu-fixed')
    }
    if(scrolled <= curentPos && $('nav.navigation').hasClass('menu-fixed')) {
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


    var map = new google.maps.Map(document.getElementById('map'), option);

    var marker = new google.maps.Marker({
      map: map,
      icon: {url: './../img/markerSvg.svg'},
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


var el = document.getElementsByClassName('portfolio-list__works');
// TweenLite.to(el, 1, {scale: .9});

for(var i = 0; i < el.length; i++) {

  el[i].addEventListener('mousemove', function(e){
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
};


  var tl = new TimelineLite({
    paused: true
  });

  tl
    .staggerFrom($('.portfolio-list__works:nth-child(odd)'), 1.5, {scale: 0, autoAplha: 0, y: -150}, .25, 'theSameTime')
    .staggerFrom($('.portfolio-list__works:nth-child(even)'), 1.5, {scale: 0, autoAplha: 0, y: 150}, .25, 'theSameTime');


$(window).on('scroll', function() {
   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if(scrolled > $('#portfolio-wrapper').position().top * 0.8) {
      tl.play();
   }
  // console.log(document.querySelector('#portfolio-wrapper').offsetTop, window.pageYOffset)
})