document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('ventana-Estilos');
    const openModal = document.getElementById('openVentanaEstilos');
    const closeModal = modal.querySelector('.ventana-estilos-close');
    const images = modal.querySelectorAll('.selectable-image');
    const selectedImageInfo = document.getElementById('selected-image-info');

    let selectedImage = null;

    // Colores agradables para cada imagen
    const colorThemes = {
        "Imagen 1": {
            primary: "#02735E", 
            secondary: "#014040", 
            tertiary: "#F27405", 
            text: "#333", 
            background: "#f4f4f4"
        },
        "Imagen 2": {
            primary: "#3B8D99",     // Azul suave y tranquilo
            secondary: "#6B8E23",   // Verde oliva claro, natural
            tertiary: "#F4A261",     // Naranja cálido y acogedor
            text: "#2D2D2D",         // Gris oscuro para un buen contraste sin ser agresivo
            background: "#FAF3E0"    // Crema pálido, suave para el fondo
        },
        "Imagen 3": {
            primary: "#5B8C9A",      // Azul suave (un tono más apagado de su poder)
            secondary: "#3A3A3A",    // Gris oscuro (para su vestimenta y seriedad)
            tertiary: "#D2A15B",     // Amarillo mostaza suave (un toque de contraste cálido, sin ser brillante)
            text: "#E0E0E0",         // Gris claro (para que el texto resalte de forma suave)
            background: "#2C2F34",   // Gris muy oscuro (para el fondo, creando una atmósfera tranquila y profesional)
            

        },
        "Imagen 4": {
            primary: "#3D5A80",    // Azul profundo
            secondary: "#98C7E6",  // Azul claro
            tertiary: "#EE6C4D",    // Coral suave
            text: "#333",          // Texto oscuro
            background: "#D9EAF7"  // Fondo azul muy claro
        }
    };
    

    // Abre el modal al hacer clic en el enlace
    openModal.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'flex';
    });

    // Cierra el modal al hacer clic en el icono de cerrar
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cierra el modal si se hace clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Agregar evento de selección a las imágenes
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Si ya hay una imagen seleccionada, quitar la selección
            if (selectedImage) {
                selectedImage.classList.remove('selected');
            }

            // Selecciona la nueva imagen
            image.classList.add('selected');
            selectedImage = image;
            selectedImageInfo.textContent = `Imagen seleccionada: ${image.alt}`;

            // Cambiar colores según la imagen seleccionada
            const theme = colorThemes[image.alt];
            if (theme) {
                changeColors(theme);
            }
        });
    });

    // Función para cambiar los colores en :root
    function changeColors(theme) {
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--secondary-color', theme.secondary);
        document.documentElement.style.setProperty('--tertiary-color', theme.tertiary);
        document.documentElement.style.setProperty('--text-color', theme.text);
        document.documentElement.style.setProperty('--background-color', theme.background);
    }
});









// Obtener los elementos necesarios
const modal = document.getElementById('Cambiar-Logo');
const link = document.getElementById('cambiar-logo');
const closeBtn = document.getElementsByClassName('close')[0];
const cancelarBtn = document.getElementById('cancelar-logo');
const guardarBtn = document.getElementById('guardar-logo');
const subirBtn = document.getElementById('subir-imagen');
const logoInput = document.getElementById('logo-input');
const imagePreview = document.getElementById('image-preview');
const imagePreviewContainer = document.getElementById('image-preview-container');

// Abrir la ventana flotante cuando se hace clic en el enlace
link.onclick = function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado
    modal.style.display = 'block'; // Muestra la ventana flotante
}

// Cerrar la ventana flotante cuando se hace clic en el botón de cierre
closeBtn.onclick = function() {
    modal.style.display = 'none'; // Oculta la ventana flotante
}

// Cerrar la ventana si se hace clic fuera de la ventana flotante
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Acción del botón Cancelar
cancelarBtn.onclick = function() {
    modal.style.display = 'none'; // Cierra la ventana flotante
}

// Acción del botón Guardar
guardarBtn.onclick = function() {
    if (logoInput.files.length > 0) {
        alert("Logo guardado correctamente.");
        // Aquí puedes agregar la lógica para guardar el logo
    } else {
        alert("Por favor, sube una imagen antes de guardar.");
    }
}

// Acción del botón Subir Imagen
subirBtn.onclick = function() {
    logoInput.click(); // Abre el selector de archivo
}

// Mostrar vista previa de la imagen seleccionada
logoInput.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;  // Establecer la imagen de vista previa
            imagePreview.style.display = 'block'; // Mostrar la imagen de vista previa
        };

        reader.readAsDataURL(file); // Cargar la imagen seleccionada como una URL de datos
    }
}
