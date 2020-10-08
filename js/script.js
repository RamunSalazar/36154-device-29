function promo_click_button(elem) {
  var arr_btn = document.querySelectorAll('.promo__button');
  var arr_slide = document.querySelectorAll('.promo__slide');
  var arr_btn_wrap = document.querySelectorAll('.promo__button-wrap');
  var index = 0;
  var slide_index = 0;
  for (var i=0; i<arr_btn.length; i++) {
    if (arr_btn[i].classList.contains('promo-visibility')) {
      arr_btn[i].classList.remove('promo-visibility');
    }
  }
  for (var i=0; i<arr_btn_wrap.length; i++) {
    for (var j=0; j<arr_btn_wrap[i].children.length; j++) {
      if (arr_btn_wrap[i].children[j] == elem) {
        arr_btn_wrap[j].children[j].classList.add('promo-visibility');
        index = i;
        break;
      }
    }
  }
  arr_slide[index].style.display = 'none';
  for (var i=0; i<arr_btn_wrap.length; i++) {
    for (var j=0; j<arr_btn_wrap[i].children.length; j++) {
      if (arr_btn_wrap[i].children[j] == elem) {
        slide_index = j;
        break;
      }
    }
  }
  arr_slide[slide_index].style.display = 'grid';
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

function modal_feedback_display_on() {
  document.querySelector('.modal__feedback-wrap').style.display="flex";
  document.querySelector('.page__body').style.overflow="hidden";
}

function modal_feedback_close() {
  document.querySelector('.modal__feedback-wrap').style.display="none";
  document.querySelector('.page__body').style.overflow="visible";
}

function modal_map_display_on() {
  document.querySelector('.modal__map-wrap').style.display="flex";
  document.querySelector('.page__body').style.overflow="hidden";
}

function modal_map_close() {
  document.querySelector('.modal__map-wrap').style.display="none";
  document.querySelector('.page__body').style.overflow="visible";
}
