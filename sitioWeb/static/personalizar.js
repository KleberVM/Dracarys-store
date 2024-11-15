document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("ventana-Estilos");
  const openModal = document.getElementById("openVentanaEstilos");
  const closeModal = modal.querySelector(".ventana-estilos-close");
  const images = modal.querySelectorAll(".selectable-image");
  const selectedImageInfo = document.getElementById("selected-image-info");

  let selectedImage = null;

  // Colores agradables para cada imagen
  const colorThemes = {
    "Imagen 1": {
      primary: "#02735E",
      secondary: "#014040",
      tertiary: "#F27405",
      text: "#333",
      background: "#f4f4f4",
    },
    "Imagen 2": {
      primary: "#8BADC0", // Azul grisáceo suave
      secondary: "#F2D1A0", // Amarillo pálido
      tertiary: "#F5A8B5", // Rosa claro cálido
      text: "#4A4A4A", // Texto gris oscuro
      background: "#F9F9F9", // Fondo gris muy claro
    },
    "Imagen 3": {
      primary: "#2F4858", // Azul grisáceo oscuro
      secondary: "#E8A598", // Salmón claro
      tertiary: "#A2D5C6", // Verde agua
      text: "#333333", // Texto gris oscuro
      background: "#F6F7F7", // Fondo gris claro
    },
    "Imagen 4": {
      primary: "#3D5A80", // Azul profundo
      secondary: "#98C7E6", // Azul claro
      tertiary: "#EE6C4D", // Coral suave
      text: "#333", // Texto oscuro
      background: "#D9EAF7", // Fondo azul muy claro
    },
    "Imagen 5": {
      primary: "#F5B3A4", // Naranja coral suave
      secondary: "#A3C9D7", // Azul suave pastel
      tertiary: "#D4B89A", // Beige suave cálido
      text: "#4D4D4D", // Texto gris oscuro suave
      background: "#F5F5F5", // Fondo gris muy claro
    },
    "Imagen 6": {
      primary: "#D5A6BD", // Rosa claro suave
      secondary: "#A2B9D6", // Azul grisáceo suave
      tertiary: "#F1D0A2", // Amarillo cálido pálido
      text: "#4A4A4A", // Texto gris oscuro suave
      background: "#F7F4F1", // Fondo crema suave
    },
    "Imagen 7": {
      primary: "#B1D8A9", // Verde menta suave
      secondary: "#D8E4D3", // Verde claro pálido
      tertiary: "#F1C4B0", // Rosa suave
      text: "#3E3E3E", // Texto gris oscuro suave
      background: "#F9F9F9", // Fondo gris muy claro
    },
    "Imagen 8": {
      primary: "#F5A97F", // Naranja suave
      secondary: "#A3D2D3", // Azul claro pastel
      tertiary: "#E1C1A6", // Beige cálido
      text: "#4B4B4B", // Texto gris oscuro suave
      background: "#F7F7F7", // Fondo gris muy claro
    },
  };

  // Abre el modal al hacer clic en el enlace
  openModal.addEventListener("click", function (event) {
    event.preventDefault();
    modal.style.display = "flex";
  });

  // Cierra el modal al hacer clic en el icono de cerrar
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cierra el modal si se hace clic fuera del contenido
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Agregar evento de selección a las imágenes
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      // Si ya hay una imagen seleccionada, quitar la selección
      if (selectedImage) {
        selectedImage.classList.remove("selected");
      }

      // Selecciona la nueva imagen
      image.classList.add("selected");
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
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme.secondary
    );
    document.documentElement.style.setProperty(
      "--tertiary-color",
      theme.tertiary
    );
    document.documentElement.style.setProperty("--text-color", theme.text);
    document.documentElement.style.setProperty(
      "--background-color",
      theme.background
    );
  }
});









// SIN FUNCIONALIDAD PORQUE NO HAY BOTON >>>>>>>>>


// PARA CAMBIAR EL LOGO

// Obtener los elementos necesarios
const modal = document.getElementById("Cambiar-Logo");
const link = document.getElementById("cambiar-logo");
const cancelarBtn = document.getElementById("cancelar-logo");
const guardarBtn = document.getElementById("guardar-logo");
const subirBtn = document.getElementById("subir-imagen");
const logoInput = document.getElementById("logo-input");
const imagePreview = document.getElementById("image-preview");
const errorMessage = document.getElementById("error-message");
let isValidImage = false; // Variable para rastrear si el archivo es una imagen válida

// Abrir la ventana flotante cuando se hace clic en el enlace
link.onclick = function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado
  resetModal(); // Restablecer la ventana modal
  modal.style.display = "block"; // Muestra la ventana flotante
};

// Cerrar la ventana si se hace clic fuera de la ventana flotante
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Acción del botón Cancelar
cancelarBtn.onclick = function () {
  modal.style.display = "none"; // Cierra la ventana flotante
};

// Acción del botón Guardar
guardarBtn.onclick = function () {
  if (logoInput.files.length > 0 && isValidImage) {
    alert("Logo guardado correctamente.");
    modal.style.display = "none"; // Cierra la ventana flotante si todo está bien
    // Aquí puedes agregar la lógica para guardar el logo
  } else {
    alert("Por favor, sube una imagen válida antes de guardar.");
  }
};

// Acción del botón Subir Imagen
subirBtn.onclick = function () {
  logoInput.click(); // Abre el selector de archivo
};

// Mostrar vista previa de la imagen seleccionada o mensaje de error
logoInput.onchange = function (event) {
  const file = event.target.files[0];
  if (file) {
    // Verificar si el archivo es una imagen
    if (!file.type.startsWith("image/")) {
      errorMessage.style.display = "block"; // Mostrar mensaje de error
      imagePreview.style.display = "none"; // Ocultar vista previa
      imagePreview.src = ""; // Limpiar src de imagen previa
      isValidImage = false; // Marcar como archivo inválido
    } else {
      errorMessage.style.display = "none"; // Ocultar mensaje de error
      const reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result; // Establecer la imagen de vista previa
        imagePreview.style.display = "block"; // Mostrar la imagen de vista previa
        isValidImage = true; // Marcar como archivo válido
      };
      reader.readAsDataURL(file); // Cargar la imagen seleccionada como una URL de datos
    }
  }
};

// Función para restablecer la ventana modal

function resetModal() {
  logoInput.value = ""; // Restablecer el campo de archivo
  imagePreview.src = ""; // Limpiar la imagen de vista previa
  imagePreview.style.display = "none"; // Ocultar la imagen de vista previa
  errorMessage.style.display = "none"; // Ocultar el mensaje de error
  isValidImage = false; // Restablecer el estado de validación
}

// <<<<<<<<<<<<<<<<<<<<<zzzzzzzzzzz< HASTA AQUI