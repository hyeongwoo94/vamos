$(document).ready(function(){
    $(".bars").click(function(){
      $("#fullWrap").removeClass("disN");
      $("#fullWrap").addClass("disB");
    });
    $(".bars").click(function(){
      $(this).removeClass("disN");
      $(this).addClass("disB");
    });
    $(".close").click(function(){
      $("#fullWrap").removeClass("disB");
      $("#fullWrap").addClass("disN");
    });
    $('.se02_home').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    $('.family_list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.se04_po').slick({
infinite: true,
slidesToShow: 1,
slidesToScroll: 1
});



});
