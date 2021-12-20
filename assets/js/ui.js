$(document).ready(function () {
 

  //gnb scroll
  function gnbScroll() {

  }

  $(window).on('scroll', function () {

  });


  //scrollMagic Animation
  var controller = new ScrollMagic.Controller();
  //kv
  // if ($('.landing_kv').length > 0) {
  //   $('.landing_kv').each(function () {
  //     var ourScene = new ScrollMagic.Scene({
  //         triggerElement: this.children[0],
  //         triggerHook: 0.9,
  //       })
  //       .setClassToggle(this, 'is-active')
  //       .addTo(controller);
  //   });
  // }

  // //kv letter
  // if ($('.landing_kv').length > 0) {
  //   new ScrollMagic.Scene({
  //       triggerHook: 0.7,
  //       triggerElement: ".landing_kv",
  //       duration: $(window).outerHeight()
  //     })
  //     .setTween(".landing_kv_letter", {
  //       x: "-20%",
  //       ease: Linear.easeNone
  //     })
  //     .addTo(controller);
  // }

  // if ($('.work_intro').length > 0) {
  //   new ScrollMagic.Scene({
  //       triggerHook: 0.7,
  //       triggerElement: ".work_intro",
  //       duration: $(window).outerHeight()
  //     })
  //     .setTween(".work_intro", {
  //       y: "-30%",
  //       ease: Linear.easeNone
  //     })
  //     .addTo(controller);
  // }

  // if ($('.footer').length > 0) {
  //   $('.footer_title').each(function () {
  //     var ourScene = new ScrollMagic.Scene({
  //         triggerElement: this.children[0],
  //         triggerHook: 0.9,
  //       })
  //       .setClassToggle(this, 'is-active')
  //       .addTo(controller);
  //   });
  // }
});