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
