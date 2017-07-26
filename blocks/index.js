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
