function animateButtonClick(button) {
    button.classList.add('animated-button-click');
    setTimeout(function () {
        button.classList.remove('animated-button-click');
    }, 300);
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.cabecalho-menu-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu-overlay').classList.toggle('active');
});



