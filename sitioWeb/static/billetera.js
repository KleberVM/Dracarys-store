document.getElementById('monto_deposito').addEventListener('input', function (e) {
    let value = e.target.value;
    if (value.includes('.')) {
        let [integer, decimal] = value.split('.');
        if (decimal.length > 2) {
            e.target.value = integer + '.' + decimal.slice(0, 2); // Limita a 2 decimales
        }
    }
});