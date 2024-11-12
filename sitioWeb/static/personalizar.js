document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('ventana-Estilos');
    const openModal = document.getElementById('openVentanaEstilos');
    const closeModal = modal.querySelector('.ventana-estilos-close');
    const images = modal.querySelectorAll('.selectable-image');
    const selectedImageInfo = document.getElementById('selected-image-info');

    let selectedImage = null;

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
        });
    });
});
