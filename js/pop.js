$(document).ready(function(){


//------------------------------------------------------------------------
  $(".pic_1 li a").click(function(){
    $(this).siblings(".pop_pic").removeClass("disN");
    $(this).siblings(".pop_pic").addClass("disB");
  })

  $(".pop_btn").click(function(){
    $(".pop_pic").removeClass("disB");
    $(".pop_pic").addClass("disN");
  })
//------------------------------------------------------------------------

  $("#sc_4 .video_list li a").click(function(){
    $(this).siblings(".list_big").removeClass("disN");
    $(this).siblings(".list_big").addClass("disB");

  });
  $(".list_big #close").click(function(){
    $(this).closest(".list_big").removeClass("disB");
    $(this).closest(".list_big").addClass("disN");
      });
//-------------------------------------------------------------------------

$(".workflow_btn").click(function(){
  $("#workflow_bg").addClass("disN");
});

$(".event_finish dl dt").click(function(){
  $("+dd",this).slideToggle(600);
});


});
