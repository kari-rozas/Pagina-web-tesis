// Función para realizar la búsqueda
document.getElementById("searchButton").addEventListener("click", function() {
    var input, filter, container, buttons, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    container = document.getElementById("appContainer");
    buttons = container.getElementsByClassName("app-button");

    for (i = 0; i < buttons.length; i++) {
        var button = buttons[i];
        txtValue = button.textContent || button.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            button.style.display = "";
        } else {
            button.style.display = "none";
        }
    }
});
