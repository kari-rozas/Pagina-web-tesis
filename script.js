// Obtener el elemento del logo por su ID
const logo = document.getElementById("logo");

// Función para aplicar el efecto al hacer clic en el logo
function applyLogoEffect() {
    // Agregar una clase CSS al logo cuando se hace clic
    logo.classList.add("logo-clicked");

    // Después de un tiempo, quitar la clase para volver al estado normal
    setTimeout(() => {
        logo.classList.remove("logo-clicked");
    }, 1000); // Ajusta el tiempo en milisegundos según tus preferencias
}

// Agregar un evento de clic al logo para llamar a la función
logo.addEventListener("click", applyLogoEffect);
