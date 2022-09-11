

// const section_01 = document.getElementById('section1');
// const section_02 = document.getElementById('section2');
// const section_03 = document.getElementById('section3');
// const section_04 = document.getElementById('section4');



// const navbarList = document.getElementById('navbar__list');
// const nav_sec1 = document.createElement('li');
// const link_sec1 = document.createElement('a');
// const nav_sec2 = document.createElement('li');
// const link_sec2 = document.createElement('a');
// const nav_sec3 = document.createElement('li');
// const link_sec3 = document.createElement('a');
// const nav_sec4 = document.createElement('li');
// const link_sec4 = document.createElement('a');


const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
navbarList.classList.add('navbar__menu');

for (let i = 1; i <= sections.length; i++)
{
    let nav_sec = document.createElement('li');
    nav_sec.classList.add('navbar__menu');
    //nav_sec.id = 'section' + i;

    let nav_link = document.createElement('a');
    nav_link.classList.add('menu__link')
    nav_link.textContent = 'Section' + ' ' + i;
    nav_link.setAttribute('href', '#section' + i);
    nav_sec.appendChild(nav_link);
    navbarList.appendChild(nav_sec);
}



// nav_sec1.classList.add('navbar__menu');
// nav_sec2.classList.add('navbar__menu');
// nav_sec3.classList.add('navbar__menu');
// nav_sec4.classList.add('navbar__menu');
// link_sec1.classList.add('menu__link');
// link_sec2.classList.add('menu__link');
// link_sec3.classList.add('menu__link');
// link_sec4.classList.add('menu__link');
// link_sec1.textContent = 'Section 1';
// link_sec2.textContent = 'Section 2';
// link_sec3.textContent = 'Section 3';
// link_sec4.textContent = 'Section 4';
// link_sec1.setAttribute('href', '#section1');
// link_sec2.setAttribute('href', '#section2');
// link_sec3.setAttribute('href', '#section3');
// link_sec4.setAttribute('href', '#section4');


// nav_sec1.appendChild(link_sec1);
// navbarList.appendChild(nav_sec1);

// nav_sec2.appendChild(link_sec2);
// navbarList.appendChild(nav_sec2);

// nav_sec3.appendChild(link_sec3);
// navbarList.appendChild(nav_sec3);

// nav_sec4.appendChild(link_sec4);
// navbarList.appendChild(nav_sec4);


function isInViewport(element) {
    
    return (
        element.top >= 0 &&
        element.left >= 0 &&
        element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const navContainer = document.querySelectorAll('.navbar__menu');

function trackScroll(event)
{
    // let Sec1 = section_01.getBoundingClientRect();
    // let Sec2 = section_02.getBoundingClientRect();
    // let Sec3 = section_03.getBoundingClientRect();
    // let Sec4 = section_04.getBoundingClientRect();

    // if (Sec1.y <= 500 && Sec1.bottom >= 500)
    // {
    //     console.log('Section 1 is zero!');
    //     console.log(Sec1);
    //     if(!section_01.classList.contains('your-active-class'))
    //     {
    //         section_01.classList.add('your-active-class');
    //         section_02.classList.remove('your-active-class');
    //         section_03.classList.remove('your-active-class');
    //         section_04.classList.remove('your-active-class');

    //         nav_sec1.id = 'active-sec';
    //         nav_sec2.id='';
    //         nav_sec3.id='';
    //         nav_sec4.id='';
    //     }
    // }
    // else if (Sec2.y <= 500 && Sec2.bottom >= 500)
    // {
    //     console.log('Section 2 is zero!');
    //     console.log(Sec2);
    //     if(!section_02.classList.contains('your-active-class'))
    //     {
    //         section_02.classList.add('your-active-class');
    //         section_01.classList.remove('your-active-class');
    //         section_03.classList.remove('your-active-class');
    //         section_04.classList.remove('your-active-class');

    //         nav_sec2.id = 'active-sec';
    //         nav_sec1.id='';
    //         nav_sec3.id='';
    //         nav_sec4.id='';
    //     }
    // }
    // else if (Sec3.y <= 500 && Sec3.bottom >= 500)
    // {
    //     console.log('Section 3 is zero!');
    //     console.log(Sec3);
    //     if(!section_03.classList.contains('your-active-class'))
    //     {
    //         section_03.classList.add('your-active-class');
    //         section_02.classList.remove('your-active-class');
    //         section_01.classList.remove('your-active-class');
    //         section_04.classList.remove('your-active-class');

    //         nav_sec3.id = 'active-sec';
    //         nav_sec2.id='';
    //         nav_sec1.id='';
    //         nav_sec4.id='';
    //     }
    // }
    // else if (Sec4.y <= 500 && Sec4.bottom >= 500)
    // {
    //     console.log('Section 4 is zero!');
    //     console.log(Sec4);
    //     if(!section_04.classList.contains('your-active-class'))
    //     {
    //         section_04.classList.add('your-active-class');
    //         section_02.classList.remove('your-active-class');
    //         section_03.classList.remove('your-active-class');
    //         section_01.classList.remove('your-active-class');

    //         nav_sec4.id = 'active-sec';
    //         nav_sec2.id='';
    //         nav_sec3.id='';
    //         nav_sec1.id='';
    //     }
    // }
    
    
    // console.log('section 1 Y:' + Sec1.y + ', Section 1 Bottom:' + Sec1.bottom);
    //console.log(window.innerHeight + ',' + window.outerHeight);
    


    //const sectionList = sections.children;
    //const sectionList = navbarList.children;
    for (let i = 0; i < sections.length; i++)
    {
        const section = sections[i];
        //console.log(navbarList.childNodes);
        const rect = section.getBoundingClientRect();
        const inViewport = isInViewport(section);
        // const thisOne = sectionList[i];
        // if (rect.top  > 0 && rect.bottom <= window.innerHeight) //(rect.top  > 0 && rect.bottom < window.innerHeight)
        // {
        //     navContainer[i + 2].id = 'active-sec';
        //     section.classList.add('your-active-class');
        // }
         if (rect.top < 100 && rect.height > rect.height - rect.bottom - rect.top )//&& rect.bottom < window.innerHeight + (rect.height - rect.top) ) //(rect.top  > 0 && rect.bottom < window.innerHeight)
        {
            navContainer[i + 2].id = 'active-sec';
            section.classList.add('your-active-class');
            console.log('rect top is: ' + rect.top + 'rect height is :' + rect.height);
        }
        else
        {
            navContainer[i + 2].id = '';
            section.classList.remove('your-active-class');
        }

        //console.log('list member is:' + ' ' + thisOne);
        //console.log('Section is:' + ' ' + sectionList);
    }

    //console.log('Scrolling');
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


