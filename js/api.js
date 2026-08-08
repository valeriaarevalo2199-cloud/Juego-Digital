/* =========================================================
API.JS
Comunicación con Google Apps Script y Google Sheets
========================================================= */

const API_URL = "https://script.google.com/macros/s/AKfycby3VvaRaGon6B0rZjTIfytgx2e4l0fbMp6BlhIZU80gcnAZEUU7WCk5Vy4SK5Xk52VL/exec";

/* =========================================================
REGISTRAR PARTICIPANTE
========================================================= */

async function saveParticipant(participant) {

```
try {

    const formData = new FormData();

    formData.append("action", "register");
    formData.append("fullName", participant.fullName);
    formData.append("email", participant.email);
    formData.append("age", participant.age);
    formData.append("score", 0);

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    return result.success === true;

} catch (error) {

    console.error("Error guardando participante:", error);

    return false;

}
```

}

/* =========================================================
ACTUALIZAR PUNTAJE
========================================================= */

async function updateScore(email, score) {

```
try {

    const formData = new FormData();

    formData.append("action", "score");
    formData.append("email", email);
    formData.append("score", score);

    const response = await fetch(API_URL, {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    return result.success === true;

} catch (error) {

    console.error("Error actualizando puntaje:", error);

    return false;

}
```

}
