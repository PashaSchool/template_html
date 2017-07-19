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
