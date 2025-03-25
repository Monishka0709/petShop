
new Swiper('.trending-card-wrapper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    425:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    
  }


})


function headerOptionClick(e){
  e.preventDefault();
    const buttons = document.getElementsByClassName('header-menu-option');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-menu-option');
      }


    e.currentTarget.classList.add('active-menu-option');
}

function trendingButtonClick(e) {
    e.preventDefault();
    const buttons = document.getElementsByClassName('trending-link-button');

    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
      }


    e.currentTarget.classList.add('active');
    
    

}



const observer = new IntersectionObserver(entries => {  
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})


const observer2 = new IntersectionObserver(entries => {  
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show-right');
      } else {
          entry.target.classList.remove('show-right');
      }
  })
})

const observer3 = new IntersectionObserver(entries => {  
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show-up');
      } else {
          entry.target.classList.remove('show-up');
      }
  })
})

const observer4 = new IntersectionObserver(entries => {  
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show-down');
      } else {
          entry.target.classList.remove('show-down');
      }
  })
})

const hiddenElement = document.querySelectorAll('.hidden');
const hiddenElement2 = document.querySelectorAll('.hidden-right');
const hiddenElement3 = document.querySelectorAll('.hidden-up');
const hiddenElement4 = document.querySelectorAll('.hidden-down');
hiddenElement.forEach(el => observer.observe(el));
hiddenElement2.forEach(el => observer2.observe(el));
hiddenElement3.forEach(el => observer3.observe(el));
hiddenElement4.forEach(el => observer4.observe(el));