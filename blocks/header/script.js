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
