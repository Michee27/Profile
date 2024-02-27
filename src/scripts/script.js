function animateButtonClick(button) {
    button.classList.add('animated-button-click');
    setTimeout(function () {
        button.classList.remove('animated-button-click');
    }, 300);
}

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu-overlay').classList.toggle('active');
});



