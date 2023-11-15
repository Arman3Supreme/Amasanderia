// Importar los módulos necesarios de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "tu_api_key",
    authDomain: "tu_auth_domain",
    projectId: "tu_project_id",
    storageBucket: "tu_storage_bucket",
    messagingSenderId: "tu_messaging_sender_id",
    appId: "tu_app_id"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios de Firebase
const db = getFirestore(app);
const auth = getAuth(app);

// Exportar las instancias de Firebase
export { db, auth };

// (Opcional) Funciones comunes de autenticación, como iniciar sesión, cerrar sesión, etc.
// Puedes añadir aquí tus funciones de autenticación si las necesitas.
