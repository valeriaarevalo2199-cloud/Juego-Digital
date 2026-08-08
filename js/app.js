/* =========================================================
   APP.JS
   Punto de entrada de la aplicación
   ========================================================= */

document.addEventListener("DOMContentLoaded", initializeApplication);

function initializeApplication() {

    const registrationForm = document.getElementById("registrationForm");

    if (!registrationForm) {
        console.error("No se encontró el formulario de registro.");
        return;
    }

    registrationForm.addEventListener("submit", handleRegistration);
}

/* =========================================================
   REGISTRO DEL PARTICIPANTE
   ========================================================= */

function handleRegistration(event) {

    event.preventDefault();

    const participant = {
        fullName: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        age: document.getElementById("age").value.trim()
    };

    const validation = validateParticipant(participant);

    if (!validation.isValid) {
        showValidationError(validation.message);
        return;
    }

    clearValidationError();

    console.log("Participante registrado:", participant);

    // En el siguiente paso enviaremos estos datos a Google Sheets
    // y luego iniciaremos el juego.

    alert("Registro exitoso. Preparando la misión...");
}

/* =========================================================
   VALIDACIONES
   ========================================================= */

function validateParticipant(participant) {

    if (participant.fullName.length < 3) {
        return {
            isValid: false,
            message: "Ingresa tu nombre completo."
        };
    }

    if (!isValidEmail(participant.email)) {
        return {
            isValid: false,
            message: "Ingresa un correo electrónico válido."
        };
    }

    const age = Number(participant.age);

    if (Number.isNaN(age) || age < 10 || age > 100) {
        return {
            isValid: false,
            message: "La edad debe estar entre 10 y 100 años."
        };
    }

    return {
        isValid: true,
        message: ""
    };
}

function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

/* =========================================================
   MENSAJES DE VALIDACIÓN
   ========================================================= */

function showValidationError(message) {

    let errorContainer = document.getElementById("formError");

    if (!errorContainer) {

        errorContainer = document.createElement("p");

        errorContainer.id = "formError";
        errorContainer.className = "error-text";

        const form = document.getElementById("registrationForm");

        form.appendChild(errorContainer);
    }

    errorContainer.textContent = message;
}

function clearValidationError() {

    const errorContainer = document.getElementById("formError");

    if (errorContainer) {
        errorContainer.remove();
    }
}
