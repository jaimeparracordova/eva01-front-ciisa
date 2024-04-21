document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('formulario');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('name-form02-6').value;
        const email = document.getElementById('email-form02-6').value;
        const message = document.getElementById('textarea-form02-6').value;
        console.log('Nombre:', fullName);
        console.log('Email:', email);
        console.log('Mensaje:', message);
    });
});