/* =========================================================
   QUESTIONS.JS
   Banco oficial de preguntas - Misión Fiscalía Digital
   ========================================================= */

const GAME_QUESTIONS = [

    {
        id: 1,
        level: "Misión 1",
        question: "Recibes un correo que parece provenir de tu banco y te pide actualizar tu contraseña mediante un enlace. ¿Cuál es la acción más segura?",
        options: [
            "Hacer clic en el enlace y cambiar la contraseña",
            "Responder el correo con tus datos personales",
            "Entrar directamente al sitio oficial del banco escribiendo la dirección en el navegador",
            "Reenviar el correo a tus contactos"
        ],
        correct: 2
    },

    {
        id: 2,
        level: "Misión 2",
        question: "¿Qué característica es común en muchos intentos de phishing?",
        options: [
            "Solicitan información confidencial con urgencia",
            "Siempre incluyen el logo oficial del gobierno",
            "Nunca contienen enlaces",
            "Solo llegan por mensajes de texto"
        ],
        correct: 0
    },

    {
        id: 3,
        level: "Misión 3",
        question: "¿Cuál de las siguientes contraseñas es la más segura?",
        options: [
            "12345678",
            "Colombia2026",
            "P@j4r0_Azul#91!",
            "qwerty123"
        ],
        correct: 2
    },

    {
        id: 4,
        level: "Misión 4",
        question: "Una página solicita tu número de documento, dirección y código de verificación para entregarte un premio que nunca solicitaste. Esto puede ser un caso de:",
        options: [
            "Actualización de datos",
            "Robo de identidad",
            "Publicidad normal",
            "Verificación de cuenta"
        ],
        correct: 1
    },

    {
        id: 5,
        level: "Misión 5",
        question: "¿Qué significa que un sitio web utilice HTTPS?",
        options: [
            "Que siempre es un sitio oficial del gobierno",
            "Que la conexión entre tu navegador y el sitio está cifrada",
            "Que no puede contener virus",
            "Que es completamente seguro en cualquier situación"
        ],
        correct: 1
    },

    {
        id: 6,
        level: "Misión 6",
        question: "Antes de compartir una noticia en redes sociales, ¿qué deberías hacer?",
        options: [
            "Compartirla inmediatamente si tiene muchas reacciones",
            "Verificar la fuente y confirmar la información en otros medios confiables",
            "Guardar una captura de pantalla y difundirla",
            "Confiar únicamente en el título"
        ],
        correct: 1
    },

    {
        id: 7,
        level: "Misión 7",
        question: "¿Cuál es una buena práctica para proteger tus cuentas en línea?",
        options: [
            "Usar la misma contraseña en todos los servicios",
            "Compartir la contraseña con amigos cercanos",
            "Activar la autenticación en dos pasos cuando esté disponible",
            "Guardar la contraseña en un mensaje de texto sin protección"
        ],
        correct: 2
    },

    {
        id: 8,
        level: "Misión 8",
        question: "Un desconocido te escribe por una red social solicitando dinero urgente y afirma ser un familiar. ¿Qué deberías hacer primero?",
        options: [
            "Enviar el dinero inmediatamente",
            "Verificar su identidad por otro medio antes de realizar cualquier pago",
            "Compartir la conversación en redes sociales",
            "Pedirle una contraseña de acceso a tu cuenta"
        ],
        correct: 1
    },

    {
        id: 9,
        level: "Misión 9",
        question: "¿Qué es el malware?",
        options: [
            "Un programa diseñado para dañar, espiar o comprometer un dispositivo",
            "Un sistema de respaldo de archivos",
            "Un protocolo de navegación segura",
            "Una aplicación oficial de la Fiscalía"
        ],
        correct: 0
    },

    {
        id: 10,
        level: "Misión Final",
        question: "Si sospechas que fuiste víctima de una estafa digital, ¿cuál es una acción recomendada?",
        options: [
            "Ignorar el incidente y esperar",
            "Cambiar tus contraseñas, conservar evidencias y reportar el caso a las autoridades o a la entidad afectada",
            "Eliminar todas tus cuentas inmediatamente",
            "Publicar tus datos personales para advertir a otros"
        ],
        correct: 1
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
