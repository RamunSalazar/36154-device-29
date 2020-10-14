const promoSlides = document.querySelectorAll('.promo__slide');
const promoButtonsWraps = document.querySelectorAll('.promo__button-wrap');
const promoButtons = document.querySelectorAll('.promo__button');
const serviceButton = document.querySelectorAll('.service__button');
const serviceDescription = document.querySelectorAll('.service__description');
const writeUsButton = document.querySelector('.write-us__button');
const modalFeedback = document.querySelector('.modal__feedback-wrap');
const closeFeedbackButton = modalFeedback.querySelector('.modal-close');
const inputName = modalFeedback.querySelector('input[type=text]');
const inputEmail = modalFeedback.querySelector('input[type=email]');
const feedbackForm = modalFeedback.querySelector('.feedback');
const textarea = modalFeedback.querySelector('.form__text');
const mapLink = document.querySelector('.contacts__img-link');
const modalMap = document.querySelector('.modal__map-wrap');
const closeMapButton = modalMap.querySelector('.modal-close');
const body = document.querySelector('.page__body');
let isStorageNameSupport = true;
let isStorageEmailSupport = true;
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

try {
  storageName = localStorage.getItem("name");
} catch (err) {
  isStorageNameSupport = false;
}

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageEmailSupport = false;
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

writeUsButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  body.style.overflow = 'hidden';
  modalFeedback.classList.add('modal-show');
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
  modalFeedback.classList.remove('modal-show');
});

feedbackForm.addEventListener('submit', function(evt) {
  if (!inputName.value || !inputEmail.value) {
    evt.preventDefault();
  } else {
    if (isStorageNameSupport && !isStorageEmailSupport) {
      localStorage.setItem("name", inputName.value);
    } else if (isStorageNameSupport && isStorageEmailSupport) {
      localStorage.setItem("name", inputName.value);
      localStorage.setItem("email", inputEmail.value);
    }
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
    if (modalFeedback.classList.contains('modal-show')) {
      evt.preventDefault();
      body.style.overflow = 'visible';
      modalFeedback.classList.remove('modal-show');
    } else if (modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      body.style.overflow = 'visible';
      modalMap.classList.remove('modal-show');
    }
  }
});
