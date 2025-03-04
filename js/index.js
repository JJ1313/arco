document.getElementById('year').innerText = new Date().getFullYear();

// ========= NAVBAR CONTROL =========
const burger = document.getElementById('burger');
burger.addEventListener('click', (event) => {
    const menu = document.getElementById(event.target.getAttribute('data-target'));
    event.target.toggleAttribute('data-active');
    menu.toggleAttribute('data-visible');
});


