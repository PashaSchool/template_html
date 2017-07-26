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
    if(scrolled > $(this.$formContainer).position().top * 0.9) {
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
