//* Clase principal para manejar y mostrar datos del formulario
var SimpleFormDisplay = /** @class */ (function () {
    function SimpleFormDisplay() {
        var _a;
        var form = document.getElementById('userForm');
        var container = document.createElement('div');
        //* Insertar contenedor antes del formulario
        (_a = form.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(container, form);
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var data = {
                cedula: parseInt(document.getElementById('cedula').value || '0', 10),
                nombres: document.getElementById('nombres').value,
                apellidos: document.getElementById('apellidos')
                    .value,
                email: document.getElementById('email').value,
                nacionalidad: document.getElementById('nacionalidad').value,
            };
            //* Mostrar los datos en el contenedor (sin formato)
            container.innerHTML = "\n                <h3>Datos del Formulario:</h3>\n                <p>C\u00E9dula: ".concat(data.cedula, "</p>\n                <p>Nombres: ").concat(data.nombres, "</p>\n                <p>Apellidos: ").concat(data.apellidos, "</p>\n                <p>Email: ").concat(data.email, "</p>\n                <p>Nacionalidad: ").concat(data.nacionalidad, "</p>\n            ");
        });
    }
    return SimpleFormDisplay;
}());
//* Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    new SimpleFormDisplay();
});
