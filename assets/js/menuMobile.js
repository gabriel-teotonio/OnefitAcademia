
const nav = document.querySelector('header>nav')
const btnMenu = document.querySelector('#menu-btn')

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('show-menu')
    if(nav.classList == 'show-menu'){
        btnMenu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        return
    }
    btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
})

// scroll para link interno

const menuLinks = document.querySelectorAll('header ul a[href^="#"]')

const getDistanceFromTop = (element) =>{
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop;
}

const scrollToSection = event => {
    event.preventDefault()
    const distanceFromTop = getDistanceFromTop(event.target);
    smoothScrollTo(0, distanceFromTop, 600)
}
menuLinks.forEach(link => link.addEventListener('click', scrollToSection))

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };



  (function () {
    var menu = document.querySelector('header'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
        else menu.classList.remove('menuFixo');
    });
})();