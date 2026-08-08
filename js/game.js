/* =========================================================
   GAME.JS
   Motor principal del juego - Misión Fiscalía Digital
   ========================================================= */

const GameEngine = {

    currentQuestion: 0,

    score: 0,

    selectedAnswer: null,

    player: null,

    initialize() {

        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;

        this.updateScore();
        this.updateProgress();

    },

    start(playerData) {

        this.player = playerData;

        this.initialize();

        this.showScreen("screen-game");

        this.renderQuestion();

    },

    showScreen(screenId) {

        const screens = document.querySelectorAll(".screen");

        screens.forEach(screen => {
            screen.classList.remove("active");
        });

        const target = document.getElementById(screenId);

        if (target) {
            target.classList.add("active");
        }

    },

    renderQuestion() {

        const question = GAME_QUESTIONS[this.currentQuestion];

        if (!question) {
            this.finishGame();
            return;
        }

        this.selectedAnswer = null;

        document.getElementById("questionNumber").textContent =
            `${question.level} • Pregunta ${this.currentQuestion + 1} de ${GAME_CONFIG.totalQuestions}`;

        document.getElementById("questionText").textContent =
            question.question;

        const container = document.getElementById("optionsContainer");

        container.innerHTML = "";

        question.options.forEach((option, index) => {

            const element = document.createElement("div");

            element.className = "option";

            element.innerHTML = `
                <div class="option-index">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            `;

            element.addEventListener("click", () => {
                this.selectOption(index, element);
            });

            container.appendChild(element);

        });

        const nextButton = document.getElementById("nextButton");

        nextButton.disabled = true;

        nextButton.textContent =
            this.currentQuestion === GAME_CONFIG.totalQuestions - 1
                ? "FINALIZAR MISIÓN"
                : "SIGUIENTE PREGUNTA";

        this.updateProgress();

    },

    selectOption(index, element) {

        const options = document.querySelectorAll(".option");

        options.forEach(option => {
            option.classList.remove("selected");
        });

        element.classList.add("selected";

        this.selectedAnswer = index;

        document.getElementById("nextButton").disabled = false;

    },

    nextQuestion() {

        if (this.selectedAnswer === null) return;

        const question = GAME_QUESTIONS[this.currentQuestion];

        const options = document.querySelectorAll(".option");

        options.forEach(option => {
            option.style.pointerEvents = "none";
        });

        if (this.selectedAnswer === question.correct) {

            this.score += GAME_CONFIG.pointsPerCorrectAnswer;

            options[this.selectedAnswer].classList.add("correct");

        } else {

            options[this.selectedAnswer].classList.add("incorrect");

            options[question.correct].classList.add("correct");

        }

        this.updateScore();

        setTimeout(() => {

            this.currentQuestion++;

            if (this.currentQuestion >= GAME_CONFIG.totalQuestions) {
                this.finishGame();
            } else {
                this.renderQuestion();
            }

        }, 900);

    },

    updateScore() {

        const scoreElement = document.getElementById("scoreValue");

        if (scoreElement) {
            scoreElement.textContent = this.score;
        }

    },

    updateProgress() {

        const progress = document.getElementById("progressBar");

        if (!progress) return;

        const percentage =
            (this.currentQuestion / GAME_CONFIG.totalQuestions) * 100;

        progress.style.width = `${percentage}%`;

    },

    finishGame() {

        this.showScreen("screen-results");

        const total =
            GAME_CONFIG.totalQuestions *
            GAME_CONFIG.pointsPerCorrectAnswer;

        document.getElementById("finalScore").textContent =
            `${this.score} / ${total}`;

        const message = document.getElementById("resultMessage");

        const percentage = (this.score / total) * 100;

        if (percentage >= 90) {

            message.textContent =
                "Rango: Experto en Ciberseguridad. Has demostrado un excelente conocimiento sobre seguridad digital y prevención del fraude.";

        } else if (percentage >= 70) {

            message.textContent =
                "Rango: Agente Digital. Tienes una buena comprensión de los riesgos digitales y sabes cómo proteger tu información.";

        } else if (percentage >= 50) {

            message.textContent =
                "Rango: Analista en Entrenamiento. Vas por buen camino, pero aún puedes fortalecer tus habilidades de seguridad digital.";

        } else {

            message.textContent =
                "Rango: Recluta. Necesitas reforzar tus conocimientos sobre phishing, robo de identidad y navegación segura.";

        }

        const progress = document.getElementById("progressBar");

        if (progress) {
            progress.style.width = "100%";
        }

    },

    restart() {

        this.showScreen("screen-register");

        this.initialize();

        const form = document.getElementById("registrationForm");

        if (form) {
            form.reset();
        }

    }

};

/* =========================================================
   EVENTOS DEL JUEGO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const nextButton = document.getElementById("nextButton");

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            GameEngine.nextQuestion();
        });
    }

    const restartButton = document.getElementById("restartButton");

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            GameEngine.restart();
        });
    }

});
