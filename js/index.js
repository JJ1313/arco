document.getElementById('year').innerText = new Date().getFullYear();

// ========= NAVBAR CONTROL =========
const burger = document.getElementById('burger');
burger.addEventListener('click', (event) => {
    const menu = document.getElementById(event.target.getAttribute('data-target'));
    event.target.toggleAttribute('data-active');
    menu.toggleAttribute('data-visible');
});


// ========= ANIMATION SLIDE IN =========
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("#section-services ul li");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            }
        });
    }, { threshold: 0.5 }); 
    listItems.forEach((item) => {
        observer.observe(item); 
    });
});
