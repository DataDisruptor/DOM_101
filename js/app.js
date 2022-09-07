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

const navbarList = document.getElementById('navbar__list');
const nav_sec1 = document.createElement('li');
const link_sec1 = document.createElement('a');
const nav_sec2 = document.createElement('li');
const link_sec2 = document.createElement('a');
const nav_sec3 = document.createElement('li');
const link_sec3 = document.createElement('a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



nav_sec1.classList.add('.navbar__menu');
nav_sec2.classList.add('.navbar__menu');
nav_sec3.classList.add('.navbar__menu');
link_sec1.textContent = 'Section 1';
link_sec2.textContent = 'Section 2';
link_sec3.textContent = 'Section 3';
link_sec1.setAttribute('href', '#section1');
link_sec2.setAttribute('href', '#section2');
link_sec3.setAttribute('href', '#section3');


nav_sec1.appendChild(link_sec1);
navbarList.appendChild(nav_sec1);

nav_sec2.appendChild(link_sec2);
navbarList.appendChild(nav_sec2);

nav_sec3.appendChild(link_sec3);
navbarList.appendChild(nav_sec3);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


function trackScroll(event)
{
    if (event.target.nodeName === 'A')
    {
        const sectionName = event.target.textContent;
        console.log(sectionName);
        event.preventDefault();
        switch (sectionName) {
            case 'Section 1':
                console.log(window.scrollY + ' : ScrollY');
                console.log(event.screenY + ' : ScreenY');
                window.scrollTo(0, 471);
                break;
            case 'Section 2':
                console.log('We are now in' + sectionName);
                break;
            case 'Section 3':
                    console.log('We are now in' + sectionName);
        }
    }
}


// build the nav


navbarList.addEventListener('click', trackScroll);

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


