function handleMenuClick() {
    var dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
}

function handleOutsideClick(event) {
    var dropdown = document.getElementById('dropdown');
    if (!event.target.closest('.menu-container') && !event.target.closest('.dropdown')) {
        dropdown.classList.remove('show');
    }
}

function initialize() {
    var menuContainer = document.querySelector('.menu-container');

    menuContainer.addEventListener('click', handleMenuClick);

    document.addEventListener('click', handleOutsideClick);
}

document.addEventListener('DOMContentLoaded', initialize);
