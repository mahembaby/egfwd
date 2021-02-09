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
const navBar = document.querySelector(".navbar__menu");
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
    const navList = document.createElement("ul");
    
    for (section of sections) {
        const navTitle = document.createElement("li");
        const text = section.getAttribute("data-nav");
        const sectionId = section.getAttribute("id");

        navTitle.textContent = text;
        navTitle.classList = "menu__link " + sectionId;

        // Listen to clicks to scroll to correct section.
        navTitle.addEventListener("click", function(event){
        event.preventDefault();
        goToSection(sectionId)});

        navList.appendChild(navTitle); //Put <a> </a> to <ul>---</ul>
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

window.addEventListener('scroll', function() {
    scrolling();
  });

// Scroll to anchor ID using scrollTO event

function goToSection(sectionTo){
    for (section of sections){
        if (sectionTo == section.getAttribute("id")){
            window.scrollTo(0, section.offsetTop);
        };
    };
    
};

let buttonUp = document.querySelector(".goTop");
buttonUp.addEventListener("click", function(){
    scrollTo(0, 0);
})

// if ((scrollPos >= section.offsetTop) && (scrollPos < section.offsetTop + section.offsetHeight)) {

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

createNav();

// Scroll to section on link click

// Set sections as active