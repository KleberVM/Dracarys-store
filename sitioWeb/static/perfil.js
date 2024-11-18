// JavaScript para abrir la ventana de selección de archivos
document.getElementById('editar-imagen').addEventListener('click', function() {
    document.getElementById('imagenPerfil').click(); // Simula el clic en el input de archivo
    
});


// Opcional: Mostrar una vista previa de la imagen seleccionada
document.getElementById('imagenPerfil').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtiene el archivo seleccionado
    if (file&& (file.type === 'image/png' || file.type === 'image/jpeg')) {
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
        
    }else {
        alert("Por favor selecciona una imagen en formato PNG o JPG.");
        event.target.value = ""; // Limpia el input si el archivo no es válido
    }  
});
//------------modal nombre-------------

let valorOriginalNombre;
let valorOriginalCorreo;
let valorOriginalCelular;

// Función para validar el nombre
function esNombreValido(nombre) {
    // Expresión regular que permite letras mayúsculas, minúsculas y espacios
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(nombre);
}

// Abrir el modal y guardar el valor original del nombre
document.getElementById('editar-nombre').addEventListener('click', function() {
    valorOriginalNombre = document.getElementById('name').value;
    document.getElementById('input-editar-nombre').value = valorOriginalNombre;
    document.getElementById('modal-editar-nombre').style.display = 'flex';
});

// Cerrar el modal para nombre
document.getElementById('cancelar-nombre').addEventListener('click', function() {
    document.getElementById('modal-editar-nombre').style.display = 'none';
});

// Validar en tiempo real que solo se permitan letras y espacios en el input del nombre
document.getElementById('input-editar-nombre').addEventListener('input', function(event) {
    const input = event.target;
    const soloLetrasYEspacios = input.value.replace(/[^A-Za-z\s]/g, ''); // Eliminar cualquier carácter que no sea letra o espacio
    input.value = soloLetrasYEspacios;
});

// Guardar nombre
document.getElementById('guardar-nombre').addEventListener('click', function() {
    const nuevoNombre = document.getElementById('input-editar-nombre').value;
    if (esNombreValido(nuevoNombre)) {
        document.getElementById('name').value = nuevoNombre;
        document.getElementById('modal-editar-nombre').style.display = 'none';
        document.getElementById('modal-final').style.display = 'flex';
    } else {
        alert("El nombre solo puede contener letras y espacios.");
    }
});

// Repite lo mismo para el correo------------
// Función para validar el correo electrónico
function esCorreoValido(correo) {
    // Expresión regular para validar que el correo termine en @gmail.com
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(correo);
}
document.getElementById('editar-correo').addEventListener('click', function() {
    valorOriginalCorreo = document.getElementById('email').value;
    document.getElementById('input-editar-correo').value = valorOriginalCorreo;
    document.getElementById('modal-editar-correo').style.display = 'flex';
});

// Cerrar el modal para correo
document.getElementById('cancelar-correo').addEventListener('click', function() {
    document.getElementById('modal-editar-correo').style.display = 'none';
});

// Guardar correo
document.getElementById('guardar-correo').addEventListener('click', function() {
    const nuevoCorreo = document.getElementById('input-editar-correo').value;
    if (esCorreoValido(nuevoCorreo)) {
        document.getElementById('email').value = nuevoCorreo;
        document.getElementById('modal-editar-correo').style.display = 'none';
        document.getElementById('modal-final').style.display = 'flex';
    } else {
        alert("El correo electrónico debe ser de Gmail y seguir el formato xxxx@gmail.com.");
    }
});

// Lo mismo para el celular--------------
function esCelularValido(celular) {
    // Comprobar si el celular es un número y tiene exactamente 8 dígitos
    const regex = /^[0-9]{8}$/;
    return regex.test(celular);
}
document.getElementById('editar-celular').addEventListener('click', function() {
    valorOriginalCelular = document.getElementById('celular').value;
    document.getElementById('input-editar-celular').value = valorOriginalCelular;
    document.getElementById('modal-editar-celular').style.display = 'flex';
});

// Validar en tiempo real que solo se permitan números y no más de 8 caracteres
document.getElementById('input-editar-celular').addEventListener('input', function(event) {
    const input = event.target;
    let soloNumeros = input.value.replace(/[^0-9]/g, ''); // Eliminar cualquier carácter que no sea un número

    if (soloNumeros.length > 8) {
        soloNumeros = soloNumeros.slice(0, 8); // Limitar a 8 caracteres
    }

    input.value = soloNumeros;
});

// Cerrar el modal para celular
document.getElementById('cancelar-celular').addEventListener('click', function() {
    document.getElementById('modal-editar-celular').style.display = 'none';
});

// Guardar celular
document.getElementById('guardar-celular').addEventListener('click', function() {
    const nuevoCelular = document.getElementById('input-editar-celular').value;
    if (esCelularValido(nuevoCelular)) {
        document.getElementById('celular').value = nuevoCelular;
        document.getElementById('modal-editar-celular').style.display = 'none';
        document.getElementById('modal-final').style.display = 'flex';
    } else {
        alert("El número de celular debe contener exactamente 8 dígitos numéricos y no puede ser negativo.");
    }
});
//-----------fin modal



//------------------------------------------------------------------------BILLETERA----------------------------------------------------------------------
// Función para mostrar y ocultar el saldo
// Función para mostrar y ocultar el saldo con cambio de imagen y texto
function toggleSaldo() {
    const saldo = document.getElementById('saldo');
    const toggleButton = document.getElementById('toggle-saldo');

    // Cambiar la visibilidad del saldo
    saldo.classList.toggle('oculto');

    // Cambiar el texto y el icono dependiendo del estado
    if (saldo.classList.contains('oculto')) {
        // Si está oculto, mostrar "Mostrar" y el icono de ojo cerrado
        toggleButton.innerHTML = '👁️‍🗨️ Mostrar';  // Icono de ojo cerrado con texto "Mostrar"
    } else {
        // Si está visible, mostrar "Ocultar" y el icono de ojo abierto
        toggleButton.innerHTML = '👁️ Ocultar';  // Icono de ojo abierto con texto "Ocultar"
    }
}


// Función para activar el campo de entrada correspondiente
function activarInput(inputId) {
    const depositoInput = document.getElementById('deposito-input');
    const retiroInput = document.getElementById('retiro-input');

    // Ocultar ambos formularios y luego mostrar el seleccionado
    depositoInput.style.display = 'none';
    retiroInput.style.display = 'none';

    document.getElementById(inputId).style.display = 'flex';
}

// Función para actualizar el saldo según la acción (deposito o retiro)
function actualizarSaldo(event, tipo) {
    event.preventDefault();
    const saldoElement = document.getElementById('saldo');
    let saldoActual = parseFloat(saldoElement.innerText);

    // Obtener el monto ingresado dependiendo del tipo de operación
    const monto = tipo === 'deposito'
        ? parseFloat(document.getElementById('monto_deposito').value)
        : parseFloat(document.getElementById('monto_retiro').value);

    // Validar si el monto es un número válido y mayor a 0
    if (isNaN(monto) || monto <= 0) {
        Swal.fire({
            icon: 'error',
            title: tipo === 'deposito' ? 'Error al depositar' : 'Error al retirar',
            text: 'Por favor ingresa un monto positivo mayor a 0.',
        });
        return;
    }

    // Operación de depósito
    if (tipo === 'deposito') {
        saldoActual += monto;
    } 
    // Operación de retiro
    else if (tipo === 'retiro') {
        if (saldoActual >= monto) {
            saldoActual -= monto;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Saldo insuficiente',
                text: 'No puedes retirar un monto mayor al saldo disponible.',
            });
            return;
        }
    }

    // Actualizar el saldo en la página
    saldoElement.innerText = saldoActual.toFixed(2);

    // Ocultar el formulario correspondiente y limpiar el campo de entrada
    const formId = tipo === 'deposito' ? 'deposito-input' : 'retiro-input';
    document.getElementById(formId).style.display = 'none';
    if (tipo === 'deposito') {
        document.getElementById('monto_deposito').value = '';
    } else {
        document.getElementById('monto_retiro').value = '';
    }

    // Confirmación de éxito
    Swal.fire({
        icon: 'success',
        title: tipo === 'deposito' ? 'Depósito exitoso' : 'Retiro exitoso',
        text: `El saldo ha sido ${tipo === 'deposito' ? 'incrementado' : 'reducido'} correctamente.`,
    });
}

