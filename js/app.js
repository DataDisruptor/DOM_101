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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const section_01 = document.getElementById('section1');
const section_02 = document.getElementById('section2');
const section_03 = document.getElementById('section3');

const navbarList = document.getElementById('navbar__list');
const nav_sec1 = document.createElement('li');
const nav_sec1_btn = document.createElement('button');
const link_sec1 = document.createElement('a');
const nav_sec2 = document.createElement('li');
const nav_sec2_btn = document.createElement('button');
const link_sec2 = document.createElement('a');
const nav_sec3 = document.createElement('li');
const nav_sec3_btn = document.createElement('button');
const link_sec3 = document.createElement('a');

nav_sec1.classList.add('.navbar__menu');
nav_sec2.classList.add('.navbar__menu');
nav_sec3.classList.add('.navbar__menu');
nav_sec1_btn.textContent = 'Section 1';
nav_sec2_btn.textContent = 'Section 2';
nav_sec3_btn.textContent = 'Section 3';
link_sec1.setAttribute('href', '#section1');
link_sec2.setAttribute('href', '#section2');
link_sec3.setAttribute('href', '#section3');

link_sec1.appendChild(nav_sec1_btn);
nav_sec1.appendChild(link_sec1);
navbarList.appendChild(nav_sec1);
link_sec2.appendChild(nav_sec2_btn);
nav_sec2.appendChild(link_sec2);
navbarList.appendChild(nav_sec2);
link_sec3.appendChild(nav_sec3_btn);
nav_sec3.appendChild(link_sec3);
navbarList.appendChild(nav_sec3);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


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


