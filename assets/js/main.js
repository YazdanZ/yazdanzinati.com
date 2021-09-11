/*==================== MENU SHOW Y HIDDEN ====================*/
const navigationMenu = document.getElementById('nav-menu'),
      navigationToggle = document.getElementById('nav-toggle'),
      navigationClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navigationToggle){
    navigationToggle.addEventListener('click', ()=>{
        navigationMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navigationClose){
    navigationClose.addEventListener('click', ()=>{
        navigationMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navigationLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navigationLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 