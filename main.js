// ========================================
// THEME BUTTON
// ========================================

let themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

});



// ========================================
// CONTACT FORM
// ========================================

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});



// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});



// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        let sectionTop = section.offsetTop;

        let sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});