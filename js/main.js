

$(document).ready(function () {
  var counterOffset = $('.counter').offset().top;
  var windowHeight = $(window).height();
  var animated = false;

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    if (scrollPos > counterOffset - windowHeight && !animated) {
      $('.counter').each(function () {
        animateCounter($(this));
      });
      animated = true;
    }
  });







  function animateCounter(counter) {
    var targetValue = counter.data('target');
    var duration = counter.data('duration');

    var numericValue = parseFloat(targetValue);

   
    if (targetValue.includes('+')) {
      
      numericValue = parseFloat(targetValue.replace('+', ''));
    }

    $({
      counterValue: 0
    }).animate({
      counterValue: numericValue
    }, {
      duration: duration,
      easing: 'swing',
      step: function (now) {
        if (targetValue.includes('+')) {
         
          var formattedValue = Math.ceil(now) + '+';
          counter.text(formattedValue);
        } else {
          counter.text(Math.ceil(now));
        }
      },
      complete: function () {
        if (targetValue.includes('+','Years')) {
          counter.text(targetValue);
        }
      }

    });
  }
});










$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $('.backtotop').addClass('active');
  } else {
    $('.backtotop').removeClass('active');
  }
});









const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');


allEventListeners();


function allEventListeners() {

  navToggler.addEventListener('click', togglerClick);

  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}


function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');

  toggleBodyScroll();
}

function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();

    toggleBodyScroll();
  }
}


function toggleBodyScroll() {
  const body = document.body;
  if (navMenu.classList.contains('open')) {
    body.style.overflow = 'hidden'; 
  } else {
    body.style.overflow = 'visible';
  }
}











