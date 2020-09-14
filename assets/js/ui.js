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
  });

});