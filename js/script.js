function display__over() {
  document.querySelector('.header__catalog-wrap').style.visibility='visible';
}

function display__out() {
  document.querySelector('.header__catalog-wrap').style.visibility='hidden';
}

function promo_click_button(elem) {
  var arr_btn = document.querySelectorAll('.promo__button');
  var arr_slide = document.querySelectorAll('.promo__slide');
  var index = 0;
  var slide_index = 0;
  for (var i=0; i<arr_btn.length; i++) {
    if (arr_btn[i].classList.contains('promo-visibility')) {
      index = i;
      arr_btn[i].classList.remove('promo-visibility');
    }
  }
  elem.classList.add('promo-visibility');
  arr_slide[index].style.visibility = 'hidden';
  for (var i=0; i<arr_btn.length; i++) {
    if (arr_btn[i] == elem) {
      slide_index = i;
    }
  }
  arr_slide[slide_index].style.visibility = 'visible';
}

function service_click_button(elem) {
  var arr_btn = document.querySelectorAll('.service__button');
  var arr_desc = document.querySelectorAll('.service__description');
  var index = 0;
  var desc_index = 0;
  for (var i=0; i<arr_desc.length; i++) {
    if (arr_desc[i].classList.contains('service-visibility')) {
      arr_desc[i].classList.remove('service-visibility');
      arr_desc[i].classList.add('service-hidden');
    }
  }
  for (var i=0; i<arr_btn.length; i++) {
    if (arr_btn[i] == elem) {
      desc_index = i;
    }
  }
  arr_desc[desc_index].classList.remove('service-hidden');
  arr_desc[desc_index].classList.add('service-visibility');
}

function display_cart__over() {
  document.querySelector('.cart__img').style.opacity='0.7';
  document.querySelector('.button-bascet').style.visibility='visible';
  document.querySelector('.button-compare').style.visibility='visible';
}

function display_cart__out() {
  document.querySelector('.cart__img').style.opacity='1';
  document.querySelector('.button-bascet').style.visibility='hidden';
  document.querySelector('.button-compare').style.visibility='hidden';
}
