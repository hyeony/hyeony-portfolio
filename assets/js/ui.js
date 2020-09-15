$(document).ready(function () {
  gnbScroll();

  function gnbScroll() {
    var gnb = $('.gnb');

    if ($(window).scrollTop() > 180) {
      gnb.addClass('has-bg');
    } else if ($(window).scrollTop() < 180) {
      gnb.removeClass('has-bg');
    }
  }

  $(window).on('scroll', function () {
    gnbScroll();

    var con_scrollTop = $('.frame').offset().top;

    console.log($(window).scrollTop());
    console.log(con_scrollTop);
    console.log(con_scrollTop - 180);

    if ($(window).scrollTop() > con_scrollTop) {
      $('.con_l').addClass('fix');
    }
  });

  //new키워드를 이용해 새로운 인스턴스 생성
  var controller = new ScrollMagic.Controller();
  //Animation Object 생성
  var tween1 = TweenMax.to('.circle', 0.5, {
    autoAlpha: 1,
    scale: 1.2,
    y: 10
  });
  //Scene Object 생성, Animation Object를 Scene Object에 추가
  //Scene Object를 ScrollMagic Controller에 추가
  var scene = new ScrollMagic.Scene({
      triggerElement: '.trigger1',
    })
    .setTween(tween1)
    .addTo(controller)
    .addIndicators({
      name: '1'
    });

  var scene2 = new ScrollMagic.Scene({
      triggerElement: '.trigger2', //트리거설정
      // viewport에 대해 상대적으로 어느시점에 보여줄 것인지설정
      // 0~1사이의 숫자를 입력하거나 문자열도가능. 디폴트는 onCenter(0.5)
      triggerHook: 0.9
    })
    .setClassToggle('.square', 'visible')
    .addTo(controller)
    .addIndicators({
      name: '2'
    });

});