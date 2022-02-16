document.addEventListener('DOMContentLoaded', () => {  
  
  //Certifications slider
  const swiperCertificates = new Swiper(".certifications__slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  //Portfolio slider
  const swiperPortfolio = new Swiper(".portfolio__slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

  // Modal Windows
  let modal = document.querySelector('.modal'); // Фон модального окна
  let modalForm = document.querySelector('.modal__form'); // Само окно
  let openModalButtons = document.querySelectorAll('.modal-open'); // Кнопки для показа окна
  // const closeModalButton = document.querySelector(''); // Кнопка для скрытия окна
  
  openModalButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        modal.classList.add('modal_active'); // Добавляем класс 'active' для фона
        modalForm.classList.add('modal__form_active'); // И для самого окна
    })
  });

  document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === modal) { // Если цель клика - фот, то:
        modal.classList.remove('modal_active'); // Убираем активный класс с фона
        modalForm.classList.remove('modal__form_active'); // И с окна
    }
  }); 

  document.addEventListener('keydown', (e) => {
    if (e.which === 27) {
        modal.classList.remove('modal_active'); // Убираем активный класс с фона
        modalForm.classList.remove('modal__form_active'); // И с окна
    }
  });

  //Cursor
  const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('a, button')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active'); // элементу добавляем активный класс
      } else { // иначе
        el.classList.remove('follow-cursor_active'); // удаляем активный класс
      };

      el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    });
  };

  followCursor() // вызываем функцию followCursor

  //pageUp при скроле
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2300) {
       $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    };
  });

  //Плавность скрола
  $("a[href=#up]").click(function() {
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});