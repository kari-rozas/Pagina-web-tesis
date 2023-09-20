document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar u ocultar el contenido del cuadro desplegable
    function toggleContent(event) {
        const content = event.target.nextElementSibling;
        content.classList.toggle("show-content");
    }

    // Agregar el evento de clic a los encabezados de cuadro desplegable
    const toggles = document.querySelectorAll(".toggle-header");
    toggles.forEach(function(toggle) {
        toggle.addEventListener("click", toggleContent);
    });

    const headerContainer = document.getElementById("header-container");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerContainer.innerHTML = xhr.responseText;

            // Agregar el efecto al hacer clic en el logo
            const logo = document.getElementById("logo");
            function applyLogoEffect() {
                // Agregar una clase CSS al logo cuando se hace clic
                logo.classList.add("logo-clicked");

                // Después de un tiempo, quitar la clase para volver al estado normal
                setTimeout(() => {
                    logo.classList.remove("logo-clicked");
                }, 1000); // Ajusta el tiempo en milisegundos según tus preferencias
            }
            logo.addEventListener("click", applyLogoEffect);
        }
    };
    xhr.send();
});

