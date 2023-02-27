let swiperWrapper = document.querySelector('.swiper-wrapper');



var swiper = new Swiper('.cards-slider', {
 slidesPerView: 1,
 spaceBetween: 30,
 speed: 15000,
 loop: true,
 autoplay: {
  delay: 0
 },
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
 },
});


$(document).ready(function () {
 $(".play-button").click(function () {
  id = $(this).attr('data-id');
  $.ajax({
   url: 'https://code.projectroom.digital/request/',
   method: 'post',
   dataType: 'json',
   data: { id: id },
   success: function (data) {
    console.log(data);
   }
  });
 });
});
