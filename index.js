// Carousel functionality
const container = document.querySelector('.carousel-container');
const images = container.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateCarousel();
});

let autoScroll = setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
}, 3000);

container.addEventListener('mouseenter', () => clearInterval(autoScroll));
container.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
        index = (index + 1) % images.length;
        updateCarousel();
    }, 3000);
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Name validation
    if (name.value.trim() === '') {
        nameError.textContent = 'Veuillez saisir ce champ.';
        isValid = false;
    }

    // Email validation
    if (email.value.trim() === '') {
        emailError.textContent = 'Veuillez saisir ce champ.';
        isValid = false;
    } else if (!email.value.includes('@')) {
        emailError.textContent = 'Adresse e-mail non valide.';
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === '') {
        messageError.textContent = 'Veuillez saisir ce champ.';
        isValid = false;
    }

    // Success message
    if (isValid) {
        alert('Formulaire soumis avec succès !');
        name.value = '';
        email.value = '';
        message.value = '';
    }
});


// Fonction pour animer les barres de progression
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const targetValue = bar.getAttribute('data-value');
        bar.style.width = `${targetValue}%`;
    });
}

// Exécuter l'animation une fois la page chargée
window.addEventListener('load', animateProgressBars);window.addEventListener('resize', animateProgressBars);

