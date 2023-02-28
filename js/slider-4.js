
async function createElem() {
 // 
 let swiperWrapper = document.querySelector('.swiper-wrapper');
 let url = `./files/cards.json`
 let response = await fetch(url)
 let json = await response.json();
 let slideSize = 16; //количество карточек в слайде
 let newArr = [];
 for(i = 0; i < json.length; i += slideSize){
  let slice = json.slice(i, i + slideSize)
  newArr.push(slice)
 }
 console.log(newArr)

 for (j = 0; j < newArr.length; j ++) {
  let slide = document.createElement('div');
  slide.className = 'swiper-slide';
  swiperWrapper.appendChild(slide)
  for(k = 0; k < newArr[j].length; k++){
   let card = document.createElement('div');
   card.className = 'slide-card';
   let img = document.createElement('img');
   img.className = 'slide-picture';
   img.src = newArr[j][k].Picture
   card.appendChild(img)
   slide.appendChild(card)
  }
 }
 //




 

 var swiper = new Swiper('.cards-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 10000,
  loop: true,
  freeMode: true,
  autoplay: {
   delay: 0
  },
  navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },
 });



 $(document).ready(function () {
  $(".slide-picture").click(function () {
   id = $(this).attr('data-id');
   console.log(id)
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

}
createElem()