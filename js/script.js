const promoSlides = document.querySelectorAll('.promo__slide');
const promoButtonsWraps = document.querySelectorAll('.promo__button-wrap');
const promoButtons = document.querySelectorAll('.promo__button');
const serviceButton = document.querySelectorAll('.service__button');
const serviceDescription = document.querySelectorAll('.service__description');
const writeUsLink = document.querySelector('.write-us__link');
const modalFeedbackWrap = document.querySelector('.modal__feedback-wrap');
const modalFeedback = modalFeedbackWrap.querySelector('.modal-feedback');
const closeFeedbackButton = modalFeedbackWrap.querySelector('.modal-close');
const inputName = modalFeedbackWrap.querySelector('input[type="text"]');
const inputEmail = modalFeedbackWrap.querySelector('input[type="email"]');
const feedbackForm = modalFeedbackWrap.querySelector('.feedback');
const textarea = modalFeedbackWrap.querySelector('.form__text');
const mapLink = document.querySelector('.contacts__img-link');
const modalMap = document.querySelector('.modal__map-wrap');
const closeMapButton = modalMap.querySelector('.modal-close');
const body = document.querySelector('.page__body');
let storageName = "";
let storageEmail = "";

function promoRemoveClass() {
  for (let i=0; i<promoButtons.length; i++) {
    if (promoButtons[i].classList.contains('promo-visibility')) {
      promoButtons[i].classList.remove('promo-visibility');
    }
  }
}

function promoAddClass(evt) {
  for (let i=0; i<promoButtonsWraps.length; i++) {
    for (let j=0; j<promoButtonsWraps[i].children.length; j++) {
      if (promoButtonsWraps[i].children[j] == evt) {
        promoButtonsWraps[j].children[j].classList.add('promo-visibility');
      }
    }
  }
}

function promoFindIndex(evt) {
  let promoFindIndex=0;
  for (let i=0; i<promoButtonsWraps.length; i++) {
    for (let j=0; j<promoButtonsWraps[i].children.length; j++) {
      if (promoButtonsWraps[i].children[j] == evt) {
        promoFindIndex = i;
        break;
      }
    }
  }
  return promoFindIndex;
}

function promoFindIndexSlide(evt) {
  let fSlideIndex = 0;
  for (let i=0; i<promoButtonsWraps.length; i++) {
    for (let j=0; j<promoButtonsWraps[i].children.length; j++) {
      if (promoButtonsWraps[i].children[j] == evt) {
        fSlideIndex = j;
        break;
      }
    }
  }
  return fSlideIndex;
}

function serviceRemoveAddClass() {
  for (let i=0; i<serviceDescription.length; i++) {
    if (serviceDescription[i].classList.contains('service-visibility')) {
      serviceDescription[i].classList.remove('service-visibility');
      serviceDescription[i].classList.add('service-hidden');
    }
  }
}

function serviceFindIndex(evt) {
  let descIndex = 0;
  for (let i=0; i<serviceButton.length; i++) {
    if (serviceButton[i] == evt) {
      descIndex = i;
    }
  }
  return descIndex;
}

function validName(name) {
  let pattern = (/[А-Я]{1}[а-я]+\s[А-Я]{1}[а-я]+/);
  return pattern.test(name);
}

function validEmail(email) {
  let pattern = (/[^\@]+\@[^\.]+\..+/);
  return pattern.test(email);
}

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  console.log(err);
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  console.log(err);
}

for (let i=0; i<promoButtons.length; i++) {
  let index = 0;
  let slideIndex = 0;
  promoButtons[i].addEventListener('click', function(evt) {
    promoRemoveClass();
    promoAddClass(evt.path[0]);
    index = promoFindIndex(evt.path[0]);
    promoSlides[index].style.display = 'none';
    slideIndex = promoFindIndexSlide(evt.path[0]);
    promoSlides[slideIndex].style.display = 'grid';
  });
}

for (let i=0; i<serviceButton.length; i++) {
  let index = 0;
  serviceButton[i].addEventListener('click', function(evt){
    serviceRemoveAddClass();
    index = serviceFindIndex(evt.path[0]);
    serviceDescription[index].classList.remove('service-hidden');
    serviceDescription[index].classList.add('service-visibility');
  });
}

writeUsLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.overflow = 'hidden';
  modalFeedbackWrap.classList.add('modal-show');
  if(storageName && !storageEmail) {
    inputName.value = storageName;
    inputEmail.focus();
  } else if(storageName && storageEmail){
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    textarea.focus();
  } else {
    inputName.focus();
  }
});

closeFeedbackButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.overflow = 'visible';
  modalFeedbackWrap.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function(evt) {
  let name = validName(inputName.value);
  let email = validEmail(inputEmail.value);
  if (!name && !email) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-error');
    inputName.style.backgroundColor = '#F6DADA';
    inputEmail.style.backgroundColor = '#F6DADA';
  } else if (name && !email) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-error');
    localStorage.setItem("name", inputName.value);
    inputEmail.style.backgroundColor = '#F6DADA';
  } else if (!name && email) {
    evt.preventDefault();
    modalFeedback.classList.add('modal-error');
    localStorage.setItem("email", inputEmail.value);
    inputName.style.backgroundColor = '#F6DADA';
  } else if (name && email) {
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("email", inputEmail.value);
  }
});

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.overflow = 'hidden';
  modalMap.classList.add('modal-show');
});

closeMapButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.overflow = 'visible';
  modalMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode == 27) {
    if (modalFeedbackWrap.classList.contains('modal-show')) {
      evt.preventDefault();
      body.style.overflow = 'visible';
      modalFeedbackWrap.classList.remove('modal-show');
      modalFeedback.classList.remove('modal-error');
    } else if (modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      body.style.overflow = 'visible';
      modalMap.classList.remove('modal-show');
    }
  }
});
