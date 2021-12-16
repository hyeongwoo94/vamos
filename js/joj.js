$(document).ready(function(){


  $('.banner').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  $('.video_big').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 3
});
  $('.boss').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
  });
  $('.home_me').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $('.home_life').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2
      });
    $('#sc_3 .tab_box_img').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });

    $('.rank_bg').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
  $('.big_bg').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });


});
