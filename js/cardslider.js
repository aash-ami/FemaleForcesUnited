let swiperCards = new Swiper('.card-container',{
    loop:true,
    spaceBewteen:32,
    grabCursor:true,
},
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        600:{
            slidesPerview:2,
        }
        968:{
            slidesPerview:3,
        }
    }

});
