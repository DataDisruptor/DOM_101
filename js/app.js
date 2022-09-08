/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const section_01 = document.getElementById('section1');
const section_02 = document.getElementById('section2');
const section_03 = document.getElementById('section3');
const section_04 = document.getElementById('section4');



const navbarList = document.getElementById('navbar__list');
const nav_sec1 = document.createElement('li');
const link_sec1 = document.createElement('a');
const nav_sec2 = document.createElement('li');
const link_sec2 = document.createElement('a');
const nav_sec3 = document.createElement('li');
const link_sec3 = document.createElement('a');
const nav_sec4 = document.createElement('li');
const link_sec4 = document.createElement('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



nav_sec1.classList.add('.navbar__menu');
nav_sec2.classList.add('.navbar__menu');
nav_sec3.classList.add('.navbar__menu');
nav_sec4.classList.add('.navbar__menu');
link_sec1.textContent = 'Section 1';
link_sec2.textContent = 'Section 2';
link_sec3.textContent = 'Section 3';
link_sec4.textContent = 'Section 4';
link_sec1.setAttribute('href', '#section1');
link_sec2.setAttribute('href', '#section2');
link_sec3.setAttribute('href', '#section3');
link_sec4.setAttribute('href', '#section4');


nav_sec1.appendChild(link_sec1);
navbarList.appendChild(nav_sec1);

nav_sec2.appendChild(link_sec2);
navbarList.appendChild(nav_sec2);

nav_sec3.appendChild(link_sec3);
navbarList.appendChild(nav_sec3);

nav_sec4.appendChild(link_sec4);
navbarList.appendChild(nav_sec4);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function trackScroll(event)
{
    let Sec1 = section_01.getBoundingClientRect();
    let Sec2 = section_02.getBoundingClientRect();
    let Sec3 = section_03.getBoundingClientRect();
    let Sec4 = section_04.getBoundingClientRect();

    let screenRatio = window.innerHeight / window.innerWidth;

    let sec1_Query = Sec1.y + Sec1.bottom;
    section_01.style.opacity = sec1_Query / window.innerHeight * screenRatio;
    let sec2_Query = Sec2.y + Sec2.bottom;
    section_02.style.opacity = sec2_Query / window.innerHeight * screenRatio;
    let sec3_Query = Sec3.y + Sec3.bottom;
    section_03.style.opacity = sec3_Query / window.innerHeight * screenRatio;
    let sec4_Query = Sec4.y + Sec4.bottom;
    section_04.style.opacity = sec4_Query / window.innerHeight * screenRatio;
    console.log(section_01.style.opacity);
    // LAST EDITED  // LAST EDITED  // LAST EDITED  // LAST EDITED  // LAST EDITED
}


// build the nav


window.addEventListener('scroll', trackScroll);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


