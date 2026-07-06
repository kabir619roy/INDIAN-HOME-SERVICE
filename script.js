/* ==========================================
   INDIA HOME SERVICES
   script.js
========================================== */

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 15px 35px rgba(0,0,0,.12)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        header.style.background = "#ffffff";
    }

});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Fade Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".card,.service-card,.profile-card,.faq-item,.info-box,.box"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// Contact Form
const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Our team will contact you shortly.");

        form.reset();

    });

}
