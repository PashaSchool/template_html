
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