/* =========================================================
   QUESTIONS.JS
   Banco oficial de preguntas - Misión Fiscalía Digital
   Versión definitiva (15 preguntas)
   ========================================================= */

const GAME_QUESTIONS = [

    /* =====================================================
       NIVEL 1 - PENSAMIENTO CRÍTICO
       ===================================================== */

    {
        id: 1,
        level: "Nivel 1 - Pensamiento Crítico",
        question: "Una publicación dice: 'Esta información es 100 % verdadera porque fue publicada por una página oficial'. ¿Qué conclusión es más adecuada desde el pensamiento crítico?",
        options: [
            "Es verdadera porque la página es oficial.",
            "Es falsa porque ninguna página es confiable.",
            "La fuente puede aportar credibilidad, pero el contenido también debe analizarse y contrastarse.",
            "Si tiene muchos seguidores, no necesita verificación."
        ],
        correct: 2
    },

    {
        id: 2,
        level: "Nivel 1 - Pensamiento Crítico",
        question: "Una persona afirma: 'No necesito verificar la información porque tengo buen sentido común'. ¿Cuál es la respuesta más coherente con lo aprendido?",
        options: [
            "Tiene razón porque el sentido común siempre funciona.",
            "Debe confiar solamente en su experiencia.",
            "El pensamiento crítico permite complementar la intuición con análisis y evidencia.",
            "Debe desconfiar absolutamente de todo."
        ],
        correct: 2
    },

    {
        id: 3,
        level: "Nivel 1 - Pensamiento Crítico",
        question: "Una persona encuentra una noticia que coincide exactamente con lo que piensa y la comparte inmediatamente. ¿Cuál es el principal problema?",
        options: [
            "La noticia necesariamente es falsa.",
            "Podría estar aceptándola porque confirma una creencia previa, sin evaluar suficientemente la evidencia.",
            "Las opiniones personales nunca deben utilizarse.",
            "Las noticias que generan acuerdo son más confiables."
        ],
        correct: 1
    },

    /* =====================================================
       NIVEL 2 - VERIFICACIÓN DIGITAL
       ===================================================== */

    {
        id: 4,
        level: "Nivel 2 - Verificación Digital",
        question: "Encuentras una publicación viral, un sitio desconocido y una institución reconocida que presenta datos y documentos sobre el mismo tema. ¿Cuál es la mejor decisión?",
        options: [
            "Elegir la publicación viral porque tiene más difusión.",
            "Elegir el sitio desconocido porque coincide con la publicación viral.",
            "Dar prioridad a la institución reconocida, pero revisar qué evidencia presenta y si realmente respalda la afirmación.",
            "Concluir que todas tienen razón porque coinciden."
        ],
        correct: 2
    },

    {
        id: 5,
        level: "Nivel 2 - Verificación Digital",
        question: "Encuentras una fotografía impactante que afirma haber ocurrido ayer en Bogotá. Una búsqueda inversa muestra que la imagen fue publicada hace ocho años en otro país. ¿Qué conclusión es más razonable?",
        options: [
            "La fotografía es falsa porque aparece en Internet desde hace años.",
            "La fotografía puede ser real, pero la afirmación que la acompaña es probablemente engañosa o falsa.",
            "La fotografía debe ser verdadera porque existe en varias páginas.",
            "La búsqueda inversa no sirve para verificar información."
        ],
        correct: 1
    },

    {
        id: 6,
        level: "Nivel 2 - Verificación Digital",
        question: "Una persona dice: 'El sitio tiene HTTPS, entonces todo lo que aparece allí es verdadero'. ¿Cuál es la mejor respuesta?",
        options: [
            "Correcto. HTTPS garantiza que la información publicada sea verdadera.",
            "Incorrecto. HTTPS está relacionado principalmente con la seguridad de la conexión, no con la veracidad del contenido.",
            "HTTPS significa que el sitio pertenece al gobierno.",
            "HTTPS significa que ningún sitio puede ser fraudulento."
        ],
        correct: 1
    },

    /* =====================================================
       NIVEL 3 - SESGOS Y DECISIONES
       ===================================================== */

    {
        id: 7,
        level: "Nivel 3 - Sesgos y Decisiones",
        question: "Una afirmación aparece en videos, publicaciones y comentarios, pero no encuentras ninguna fuente original ni evidencia que la respalde. ¿Qué debería concluir un pensador crítico?",
        options: [
            "Probablemente es verdadera porque muchas personas la repiten.",
            "Es falsa porque no existe una fuente original visible.",
            "La repetición aumenta la familiaridad, pero no demuestra por sí sola que la afirmación sea verdadera.",
            "Si aparece en diferentes redes sociales, se convierte en evidencia."
        ],
        correct: 2
    },

    {
        id: 8,
        level: "Nivel 3 - Sesgos y Decisiones",
        question: "Lees: '¡URGENTE! Si no compartes esto en los próximos 10 minutos, miles de personas podrían perder su dinero'. ¿Qué debería hacer primero un pensador crítico?",
        options: [
            "Compartirlo para evitar el riesgo.",
            "Ignorarlo automáticamente.",
            "Reconocer que la urgencia puede influir en la decisión y hacer una pausa antes de verificar.",
            "Creerlo porque parece una advertencia importante."
        ],
        correct: 2
    },

    {
        id: 9,
        level: "Nivel 3 - Sesgos y Decisiones",
        question: "Una persona recibe dos investigaciones: una confirma completamente su opinión y la otra presenta evidencia que contradice parte de lo que pensaba. ¿Qué comportamiento demuestra mayor pensamiento crítico?",
        options: [
            "Elegir inmediatamente la primera porque coincide con sus ideas.",
            "Rechazar la segunda porque contradice su experiencia.",
            "Examinar ambas fuentes y evaluar la calidad de sus argumentos y evidencias.",
            "Concluir que ambas son falsas porque se contradicen."
        ],
        correct: 2
    },

    {
        id: 10,
        level: "Nivel 3 - Sesgos y Decisiones",
        question: "Una persona dice: 'Yo nunca caería en una noticia falsa porque soy muy inteligente'. ¿Cuál es la mejor respuesta desde lo aprendido?",
        options: [
            "Tiene razón porque la inteligencia evita los errores de pensamiento.",
            "Precisamente creer que somos inmunes puede dificultar que reconozcamos nuestros propios sesgos y errores.",
            "Las personas inteligentes siempre verifican todo.",
            "Las personas que creen noticias falsas no utilizan pensamiento crítico."
        ],
        correct: 1
    },

    /* =====================================================
       NIVEL 4 - DATOS Y SEGURIDAD
       ===================================================== */

    {
        id: 11,
        level: "Nivel 4 - Datos y Seguridad",
        question: "Una persona toma una fotografía, la sube a una plataforma y luego puede verla desde otro dispositivo. ¿Cuál explicación es la más adecuada?",
        options: [
            "La fotografía permanece únicamente en el teléfono original.",
            "La información puede ser enviada a sistemas remotos que procesan y/o almacenan datos, permitiendo posteriormente acceder a ellos.",
            "La fotografía desaparece del teléfono y se convierte en una página web.",
            "Internet copia automáticamente todos los archivos en todos los dispositivos."
        ],
        correct: 1
    },

    {
        id: 12,
        level: "Nivel 4 - Datos y Seguridad",
        question: "¿Cuál afirmación explica mejor qué hace un servidor?",
        options: [
            "Es simplemente otro nombre para Internet.",
            "Es una nube donde se guardan automáticamente todos nuestros archivos.",
            "Es un sistema informático que puede proporcionar servicios, recursos o procesar solicitudes de otros dispositivos.",
            "Es exclusivamente un dispositivo que almacena fotografías."
        ],
        correct: 2
    },

    {
        id: 13,
        level: "Nivel 4 - Datos y Seguridad",
        question: "Una aplicación gratuita solicita acceso a contactos, ubicación, cámara y micrófono aunque solo parece editar documentos. ¿Cuál sería la reacción más crítica?",
        options: [
            "Aceptar todo porque la aplicación es gratuita.",
            "Rechazar automáticamente todos los permisos.",
            "Preguntarse si cada permiso es necesario para la función ofrecida y revisar las condiciones antes de concederlo.",
            "Aceptar porque las aplicaciones no pueden utilizar nuestros datos."
        ],
        correct: 2
    },

    /* =====================================================
       MISIÓN FINAL
       ===================================================== */

    {
        id: 14,
        level: "Misión Final",
        question: "Una publicación afirma que una nueva aplicación con inteligencia artificial ayuda a ganar dinero, tiene miles de compartidos, comentarios positivos y lenguaje urgente, pero no encuentras información clara sobre quién está detrás del servicio. ¿Qué debería hacer un Investigador Digital?",
        options: [
            "Registrarse porque muchas personas ya lo hicieron.",
            "No confiar únicamente en los comentarios, investigar quién está detrás del servicio, verificar la información y analizar qué datos solicita antes de tomar una decisión.",
            "Compartirlo para preguntar a los demás si es real.",
            "Concluir inmediatamente que es falso porque utiliza inteligencia artificial."
        ],
        correct: 1
    },

    {
        id: 15,
        level: "Desenlace",
        question: "Una persona de tu familia recibe información falsa y te pregunta si es verdadera. ¿Qué representa mejor todo lo aprendido en Fiscalía Digital?",
        options: [
            "Decirle que está equivocada porque tú sabes más.",
            "Pedirle que nunca vuelva a utilizar Internet.",
            "Ayudarla a detenerse, formular preguntas, buscar evidencia y verificar la información sin ridiculizarla.",
            "Verificarla tú y simplemente decirle cuál es la respuesta correcta."
        ],
        correct: 2
    }

];

/* =========================================================
   CONFIGURACIÓN DEL JUEGO
   ========================================================= */

const GAME_CONFIG = {
    totalQuestions: GAME_QUESTIONS.length,
    pointsPerCorrectAnswer: 10,
    passingScore: 70
};
