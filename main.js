// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('body'); // чтобы не скроллилась страница
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true; //чтобы не было двойных нажатий

// const timeout = 800; // как и в css

// if (popupLinks.length > 0) { //вешаем событие на ссылки, мы проверяем есть ли такие ссылки и включаем цыкл
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLinks = popupLinks[index];
//         popupLinks.addEventListener("click", function (e) { // получаю ссылку и вешаю на неё событие клик
//             const popupName = popupLinks.getAttribute('href').replace('#', ''); //убираю # и оставляю чистое имя
//             const curentPopup = document.getElementById(popupName); // получаю сам элемент popup 
//             popupOpen(curentPopup); // отправляю элемент в функцию popupOpen
//             e.preventDefault(); // так как ссылка, запрещаем обновлять страницу
//         });
//     }
// }

// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index]; //находим обьект
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup')); // отправляю в функцю обьект который является ближайшим родителем нажатой ссылкой с классом popup
//             e.preventDefault();
//         });
//     }
// }

// // если popup  popup
// function popupOpen(curentPopup) { //передаем по имени по id обьект
//     if (currentPopup && unlock) { // проверяем есть ли такой обьект и открыта ли переменная unlock 
//         const popupActive = document.querySelector('.popup.open'); //получть popup с классом open 
//         if (popupActive) { // если он есть то закрыть
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open'); //тот который открылся 
//         curentPopup.addEventListener('click', function (e) { // вешаем ему клик
//             if (!e.target.closest('.popup__content')) { // если у нажатого обьекта нет в родителе обьекта с классом popapcontrnt 
//                 popupClose(e.target.closest('.popup')); // тогда popup закрываем
//             }
//         });
//     }
// }

// function popupClose(popupActive, doUnlock = true) {
//     if (unlock) {
//         popupActive.classList.remove('open');
//         if (doUnlock) {
//             bodyUnLock();
//         }
//     }
// }


// function bodyLock() {
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'; // выщитываю разницу между шириной всего окна и обьекта который внутри него, чтобы получить ширину скролла
//     if (lockPadding.length > 0) {
//         for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.lockPaddingRight = lockPaddingValue;
//         }
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }

// function bodyUnLock() {
//     setTimeout(function () {
//         if (lockPadding.length > 0) {

//             for (let index = 0; index < lockPadding.length; index++) {
//                 const el = lockPadding[index];
//                 el.style.paddingRight = '0px';
//             }
//         }
//         body.style.paddingRight = '0px'; // убираем паддинг у боди
//         body.classList.remove('lock'); // убираем lock 
//     }, timeout);

//     unlock = false; //чтобы не было глюка сначала закрываем потом отпираем
//     setTimeout(function () {
//         unlock = true;
//     }, timeout);
// }


// //чтобы закрывать с помощью Esc
// document.addEventListener('keydown', function (e) {
//     if (e.which === 27) {
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// });





// let popup = document.getElementById('popup'),
//     popupToggle = document.getElementById('myBtn'),
//     popupClose = document.querySelector('.popup__close');

//     popupToggle.onclick = function() {
//         popup.style.display = "block";
//     }


// //Кнопка меню
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Закроется раскрывающееся меню если пользователь щелкнет за его пределами
// window.onclick = function(event) {
//   if (!event.target.matches('.header__maps')) {

//     var dropdowns = document.getElementsByClassName("global__btn");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

var nav = document.getElementById('test');
nav.addEventListener('click', function(e) {
  var target = e.target;

  var targetParent = target.closest('.global__btn');

  if (targetParent) {
    var subm = targetParent.getElementsByClassName('header__maps-global')[0];
    close();
    if (subm) {
      subm.style.display = 'block';
    }
  }
});

function close() {
  var s = document.getElementsByClassName('header__maps-global');
  for (var i = 0; i < s.length; i++) {
    s[i].style.display = 'none';
  }
}


// $(function () {
// $('.gallery__box_item3').slick({
//     nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow-left.png" alt="next"></button>',
//     prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow_right.png" alt="prev"></button>',
//     fade: true,
//     autoplay: true
//   });
// }

// $('.professional__gallery_box').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
// });


$(document).ready(function () {
    $('.professional__gallery_box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"></button>'
    });
});