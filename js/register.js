/* =========================================================
   REGISTER.JS
   Registro del participante
   ========================================================= */

const Registration = {

    initialize() {

        const form = document.getElementById("registrationForm");

        if (!form) return;

        form.addEventListener("submit", (event) => {
            this.handleSubmit(event);
        });

    },

    handleSubmit(event) {

        event.preventDefault();

        this.clearErrors();

        const participant = {

            fullName: document.getElementById("fullName").value.trim(),

            email: document.getElementById("email").value.trim(),

            age: document.getElementById("age").value.trim()

        };

        const validation = this.validate(participant);

        if (!validation.valid) {

            this.showError(validation.message);

            return;

        }

        this.startGame(participant);

    },

    validate(participant) {

        if (participant.fullName.length < 3) {

            return {
                valid: false,
                message: "Debes ingresar tu nombre completo."
            };

        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(participant.email)) {

            return {
                valid: false,
                message: "Debes ingresar un correo electrónico válido."
            };

        }

        const age = Number(participant.age);

        if (Number.isNaN(age) || age < 10 || age > 100) {

            return {
                valid: false,
                message: "La edad debe estar entre 10 y 100 años."
            };

        }

        return {
            valid: true,
            message: ""
        };

    },

    showError(message) {

        const form = document.getElementById("registrationForm");

        let error = document.getElementById("formError");

        if (!error) {

            error = document.createElement("p");

            error.id = "formError";

            error.className = "error-text";

            form.appendChild(error);

        }

        error.textContent = message;

    },

    clearErrors() {

        const error = document.getElementById("formError");

        if (error) {
            error.remove();
        }

    },

    async startGame(participant) {

    const button = document.getElementById("startButton");

    button.classList.add("loading");

    button.textContent = "INICIANDO...";

    const saved = await saveParticipant(participant);

    if (!saved) {

        button.classList.remove("loading");

        button.textContent = "INICIAR MISIÓN";

        this.showError(
            "No fue posible registrar al participante. Intenta nuevamente."
        );

        return;

    }

    button.classList.remove("loading");

    button.textContent = "INICIAR MISIÓN";

    GameEngine.start(participant);

}

};

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    Registration.initialize();

});
