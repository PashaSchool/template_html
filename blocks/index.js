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
