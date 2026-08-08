/* =========================================================
   API.JS
   Comunicación con Google Apps Script
   ========================================================= */

const API_URL = "https://script.google.com/macros/s/AKfycbxQo2zNiOlcJith16lnwiSyxabmfqCY0MdzkfTEjPsjp6t41wr-Z3JsvmoJzDWliqDM/exec";

async function saveParticipant(participant) {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            body: JSON.stringify({
                fullName: participant.fullName,
                email: participant.email,
                age: participant.age,
                score: 0
            })

        });

        const result = await response.json();

        return result.success === true;

    } catch (error) {

        console.error("Error enviando datos a Google Sheets:", error);

        return false;
    }
}
