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
    this.$c2 = $(this.$service).find('.circle-container__generate-circle-2');
    this.$c1 = $(this.$service).find('.circle-container__generate-circle-1');

    this.$btn = $(this.$service).find('.btn-wrapper');

    // offset top
    this.offsetTop = $(this.$service).offset().top;
    //timeline
    this.timelineHeader = new TimelineLite({
      paused: true
    });
    this.animation();
  },
  bindEvents: function() {
    $(window).on('scroll', this.checkPosition.bind(this))
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
