$(window).scroll(function () {
    $('.bg-transprent').toggleClass('scrolled',$(this).scrollTop()>100)
  })
