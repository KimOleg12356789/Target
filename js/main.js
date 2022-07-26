$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});




// // MODAL

// const modal = document.querySelector(".modal");
// const modalButton = document.querySelector(".modalButton");
// const modalCloseButton = document.querySelector(".modalCloseButton");
// const backdrop = document.querySelector('.backdrop');

// const toggleModal = (id) => {
//   if (id) {
//     const modal = document.querySelector(id);
//   }
//   modal.classList.toggle("modalActive");
//   backdrop.classList.toggle('backdropActive');
// };

// modalCloseButton.onclick = () => toggleModal();
// backdrop.onclick = () => toggleModal();



$('.programs-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 951,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });



    $('.timetable').slick({
        infinite: true,
        speed: 300,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 951,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    });



    

});



// MODAL

const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const backdrop = document.querySelector('.backdrop');

const toggleModal = (id) => {
  if (id) {
    const modal = document.querySelector(id);
  }
  modal.classList.toggle("modalActive");
  backdrop.classList.toggle('backdropActive');
};

modalCloseButton.onclick = () => toggleModal();
backdrop.onclick = () => toggleModal();


// MODAL2

const modal2 = document.querySelector(".modal2");
const modalButton2 = document.querySelector(".modalButton2");
const modalCloseButton2 = document.querySelector(".modalCloseButton2");
const backdrop2 = document.querySelector('.backdrop2');

const toggleModal2 = (id) => {
  if (id) {
    const modal2 = document.querySelector(id);
  }
  modal2.classList.toggle("modalActive2");
  backdrop2.classList.toggle('backdropActive2');
};

modalCloseButton2.onclick = () => toggleModal2();
backdrop2.onclick = () => toggleModal2();


// MODAL3

const modal3 = document.querySelector(".modal3");
const modalButton3 = document.querySelector(".modalButton3");
const modalCloseButton3 = document.querySelector(".modalCloseButton3");
const backdrop3 = document.querySelector('.backdrop3');

const toggleModal3 = (id) => {
  if (id) {
    const modal3 = document.querySelector(id);
  }
  modal3.classList.toggle("modalActive3");
  backdrop3.classList.toggle('backdropActive3');
};

modalCloseButton3.onclick = () => toggleModal3();
backdrop3.onclick = () => toggleModal3();


// MODAL4

const modal4 = document.querySelector(".modal4");
const modalButton4 = document.querySelector(".modalButton4");
const modalCloseButton4 = document.querySelector(".modalCloseButton4");
const backdrop4 = document.querySelector('.backdrop4');

const toggleModal4 = (id) => {
  if (id) {
    const modal4 = document.querySelector(id);
  }
  modal4.classList.toggle("modalActive4");
  backdrop4.classList.toggle('backdropActive4');
};

modalCloseButton4.onclick = () => toggleModal4();
backdrop4.onclick = () => toggleModal4();


// MODAL5

const modal5 = document.querySelector(".modal5");
const modalButton5 = document.querySelector(".modalButton5");
const modalCloseButton5 = document.querySelector(".modalCloseButton5");
const backdrop5 = document.querySelector('.backdrop5');

const toggleModal5 = (id) => {
  if (id) {
    const modal5 = document.querySelector(id);
  }
  modal5.classList.toggle("modalActive5");
  backdrop5.classList.toggle('backdropActive5');
};

modalCloseButton5.onclick = () => toggleModal5();
backdrop5.onclick = () => toggleModal5();


$(document).ready(function() {
  var metaValue = $("meta[name=theme-color]").attr('content');
  console.log(metaValue);
  
  $("meta[name=theme-color]").attr('content', '#d5982e');
});
