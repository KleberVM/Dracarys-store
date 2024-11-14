

document.addEventListener('DOMContentLoaded', function() {
    // Crear el botón de "Cancelar"
    var button = document.createElement("button");
    button.textContent = "Cancelar";
    button.className = "btn btn-cancel form-control"; // Se añade la clase form-control para asegurar que tenga el mismo tamaño

    // Añadir el botón al contenedor deseado
    var actionContainer = document.querySelector("#jazzy-actions");
    if (actionContainer) {
        var div = document.createElement("div");
        div.className = "form-group";
        div.appendChild(button);
        actionContainer.appendChild(div);
    }

  
});

