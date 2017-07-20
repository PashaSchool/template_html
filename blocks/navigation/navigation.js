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
