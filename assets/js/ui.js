$(document).ready(function () {
  gnbScroll();

  //gnb scroll
  function gnbScroll() {
    var gnb = $('.gnb');

    if ($(window).scrollTop() > 180) {
      gnb.addClass('has-bg');
    } else if ($(window).scrollTop() < 180) {
      gnb.removeClass('has-bg');
    }
  }

  $(window).on('scroll', function () {
    if ($('.gnb').length > 0) {
      gnbScroll();
    }
  });

  //follow img action
  $('.work').bind('mousemove', function (e) {
    $('.work_hover_img').css({
      left: e.offsetX - 80,
      top: e.offsetY - 120
    });
  });

  //scrollMagic Animation
  var controller = new ScrollMagic.Controller();

  //my
  if ($('.my_wrap_con').length > 0) {
    $('.my_wrap_con').each(function () {
      var ourScene = new ScrollMagic.Scene({
          triggerElement: this.children[0],
          triggerHook: 0.9,
        })
        .setClassToggle(this, 'is-active')
        .addTo(controller);
    });
  }

  //about
  if ($('.about_wrap').length > 0) {
    new ScrollMagic.Scene({
        triggerHook: 0.7,
        triggerElement: ".about_wrap",
        duration: $(window).outerHeight()
      })
      .setTween(".about_wrap_inner", {
        y: "-20%",
        ease: Linear.easeNone
      })
      .addTo(controller);
  }

});