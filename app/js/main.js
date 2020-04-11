$(function(){


  $(".rating").rateYo({
    rating: 5,
    starWidth: "12px",
  });
  var mixer = mixitup('.prodcuts__wrapper');

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

 

});