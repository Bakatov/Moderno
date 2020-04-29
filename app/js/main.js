$(function(){


  $(".rating").rateYo({
    rating: 5,
    starWidth: "12px",
  });
  

  $('.icon-th-list').on('click', function(){
    $('.prodcuts__box').addClass('list');
    $('.icon-th-list').addClass('active');
    $(".icon-th-large").removeClass('active');
  });
  
  $(".icon-th-large").on('click' , function(){
    $('.prodcuts__box').removeClass('list');
    $(".icon-th-large").addClass('active');
    $('.icon-th-list').removeClass('active');
  });
  
  
  
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
});


$(".slider").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1820,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
      
    },
    {
      breakpoint: 1470,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
      
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
      
    },
  ]
});

$('.header__btn-menu').on('click', function(){
  $('.menu').slideToggle();
});
$('.user__btn').on('click', function(){
  $('.entry').slideToggle();
});


$('input[type="file"], select').styler();




$('.settings__wrapper .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.settings__wrapper').find('.tab-item').removeClass('active-tab').hide();
    $('.settings__wrapper .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });

  $('.tab__wrapper .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.tab__wrapper').find('.tab-item').removeClass('active-tab').hide();
      $('.tab__wrapper .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });


  var mixer = mixitup('.prodcuts__wrapper');

  


 

});