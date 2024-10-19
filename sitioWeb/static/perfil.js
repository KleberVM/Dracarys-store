// JavaScript para abrir la ventana de selección de archivos
document.getElementById('editar-imagen').addEventListener('click', function() {
    document.getElementById('imagenPerfil').click(); // Simula el clic en el input de archivo
    
});


// Opcional: Mostrar una vista previa de la imagen seleccionada
document.getElementById('imagenPerfil').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file) {
        const reader = new FileReader(); // Crea una única instancia de FileReader
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            const previewed = document.getElementById('previewed');

            if (preview && previewed) {
                preview.src = e.target.result; // Asigna el resultado a la primera imagen
                previewed.src = e.target.result; // Asigna el resultado a la segunda imagen
                
                // Asegúrate de que las imágenes sean visibles
                preview.style.display = 'block';
                previewed.style.display = 'block';
            }
        };
        reader.readAsDataURL(file); // Lee el archivo como una URL de datos
        alert("Imagen seleccionada. ¡No te olvides guardar los cambios!");
        const saveButton = document.querySelector('.save-imagen');
        saveButton.style.display = 'flex';  // Muestra el botón como flexbox para centrar el texto
        saveButton.style.justifyContent = 'center';  // Centra el texto horizontalmente
        saveButton.style.alignItems = 'center';  // Centra el texto verticalmentee
        
    }  
});
