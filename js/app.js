


//Initialize global references to important elements: the form, the sections list elements, and create nav list items according to the looping over the sections
const myForm = document.querySelector('#mon-form');


const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
navbarList.classList.add('navbar__menu');


for (let i = 1; i <= sections.length; i++)
{
    let nav_sec = document.createElement('li');
    nav_sec.classList.add('navbar__menu');

    let nav_link = document.createElement('a');
    nav_link.classList.add('menu__link')
    nav_link.setAttribute('href', '#section' + i);
    nav_link.dataset.nav = 'Section ' + i;
    nav_sec.appendChild(nav_link);
    navbarList.appendChild(nav_sec);

    if ( i == 1)
    {
        nav_link.textContent = 'Lore';
    }
    else if ( i == 2)
    {
        nav_link.textContent = 'Conflict';
    }
    else if (i == 3)
    {
        nav_link.textContent = 'Climax';
    }
    else if (i == 4)
    {
        nav_link.textContent = 'Mechanics';
    }
}

const navContainer = document.querySelectorAll('.navbar__menu');




//Track scrolling behaviour - add '+ 2' to index to mitigate the offset of 2 child elements which are NOT the actual sections
function trackScroll(event)
{
   
    for (let i = 0; i < sections.length; i++)
    {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
         if (rect.top < 200 && rect.height > rect.height - rect.bottom - rect.top )//&& rect.bottom < window.innerHeight + (rect.height - rect.top) ) //(rect.top  > 0 && rect.bottom < window.innerHeight)
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

        
    }

    
}

//Auto smooth scroll into the desired section according to which local link was pressed
function jumpToSection (e)
{
    if (e.target.nodeName == 'A')
    {
        e.preventDefault();
        console.log(e.target);
        for (let section of sections)
        {
            if (section.dataset.nav == e.target.dataset.nav)
            {
                section.scrollIntoView({behavior: "smooth", block: "start"});
            }
        }
    }
}

//Check the user input results from the from, and validate that they are true, to alert the user if registration was successful or not
function onFormSubmit(e)
{
    if (e.target.nodeName == 'BUTTON')
    {
        e.preventDefault();
        //window.alert("WTF are you doing with your life?");
        if (document.forms["monForm"]["full-name"].value == "" || !(document.forms["monForm"]["email"].value.includes("@") && document.forms["monForm"]["email"].value.includes(".")))
        {
            window.alert("Please fill in your real name and a valid email address");
        }
        else{
            window.alert("Sign up is now VALID! Check your inbox and proceed to the Activation of your account through the provided link");
        }
    }
    
}


//Adding the event listeners needed for the functions
navbarList.addEventListener('click', jumpToSection);

window.addEventListener('scroll', trackScroll);

myForm.addEventListener('click', onFormSubmit);


