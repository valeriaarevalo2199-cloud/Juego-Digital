/* =========================================================
   API.JS
   Comunicación con Google Apps Script y Google Sheets
   ========================================================= */

/*
   Reemplaza la URL por la que genere tu Apps Script cuando
   publiques la aplicación web.

   Ejemplo:
   https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxxxxxxxxx/exec
*/

const API_URL = "https://script.google.com/macros/s/AKfycby3VvaRaGon6B0rZjTIfytgx2e4l0fbMp6BlhIZU80gcnAZEUU7WCk5Vy4SK5Xk52VL/exec";

/* =========================================================
   REGISTRAR PARTICIPANTE
   ========================================================= */

async function saveParticipant(participant) {

    if (API_URL === "AQUI_VA_LA_URL_DE_TU_APPS_SCRIPT") {

        console.warn(
            "API_URL no configurada. El juego continuará sin guardar datos."
        );

        return true;

    }

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                action: "register",

                fullName: participant.fullName,

                email: participant.email,

                age: participant.age,

                score: 0

            })

        });

        const result = await response.json();

        return result.success === true;

    } catch (error) {

        console.error("Error guardando participante:", error);

        return false;

    }

}

/* =========================================================
   ACTUALIZAR PUNTAJE
   ========================================================= */

async function updateScore(email, score) {

    if (API_URL === "AQUI_VA_LA_URL_DE_TU_APPS_SCRIPT") {

        console.warn(
            "API_URL no configurada. El puntaje no se enviará a Google Sheets."
        );

        return true;

    }

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                action: "score",

                email: email,

                score: score

            })

        });

        const result = await response.json();

        return result.success === true;

    } catch (error) {

        console.error("Error actualizando puntaje:", error);

        return false;

    }

}
