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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const items = document.querySelectorAll("li");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function createNav() {
    const navBar = document.querySelector(".navbar__menu");
    const navList = document.createElement("ul");
    
    for (section of sections) {
        const navTitle = document.createElement("li");
        const linkToSection = document.createElement("a");
        const text = section.getAttribute("data-nav");
        const sectionId = section.getAttribute("id");

        navTitle.textContent = text;
        navTitle.classList = "menu__link " + sectionId;
        linkToSection.setAttribute("href", "#" + sectionId);

        linkToSection.appendChild(navTitle); //Put the navTitles to <a>---</a>
        navList.appendChild(linkToSection); //Put <a> </a> to <ul>---</ul>
    }
    navBar.appendChild(navList);
}


// Add class 'active' to section when near top of viewport

function scrolling(){
    let scrollPos = document.documentElement.scrollTop;

    for (section of sections) {
        if ((scrollPos >= section.offsetTop) && (scrollPos < section.offsetTop + section.offsetHeight)) {
            sectionID = section.getAttribute("id");
            setActiveSection(sectionID);
        };
    };
};

function setActiveSection(sectionID) {    
    for (section of sections) {
        if (section.getAttribute("id") == sectionID) {
            section.setAttribute("class", "your-active-class");
        } else {
            section.setAttribute("class", "");
        };
    };
};

// Scroll to anchor ID using scrollTO event

window.addEventListener('scroll', function(event) {
    scrolling();
  });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

createNav();

// Scroll to section on link click

// Set sections as active