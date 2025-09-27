//* Clase principal para manejar y mostrar datos del formulario
var SimpleFormDisplay = /** @class */ (function () {
    function SimpleFormDisplay() {
        var _this = this;
        var form = document.getElementById('userForm');
        // Obtener referencias al modal
        var modalOverlay = document.getElementById('modalOverlay');
        var closeModal = document.getElementById('closeModal');
        var modalBody = document.getElementById('modalBody');
        // Configurar event listeners para cerrar el modal
        closeModal.addEventListener('click', function () {
            _this.closeModal(modalOverlay);
        });
        // Cerrar modal al hacer clic fuera del contenido
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                _this.closeModal(modalOverlay);
            }
        });
        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                _this.closeModal(modalOverlay);
            }
        });
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
            //* Mostrar los datos en la ventana emergente en lugar del contenedor
            _this.showDataInModal(data, modalBody, modalOverlay);
        });
    }
    // Método para mostrar datos en el modal
    SimpleFormDisplay.prototype.showDataInModal = function (data, modalBody, modalOverlay) {
        modalBody.innerHTML = "\n        <div class=\"data-row\">\n            <span class=\"data-label\">C\u00E9dula:</span>\n            <span class=\"data-value\">".concat(data.cedula, "</span>\n        </div>\n        <div class=\"data-row\">\n            <span class=\"data-label\">Nombres:</span>\n            <span class=\"data-value\">").concat(data.nombres, "</span>\n        </div>\n        <div class=\"data-row\">\n            <span class=\"data-label\">Apellidos:</span>\n            <span class=\"data-value\">").concat(data.apellidos, "</span>\n        </div>\n        <div class=\"data-row\">\n            <span class=\"data-label\">Email:</span>\n            <span class=\"data-value\">").concat(data.email, "</span>\n        </div>\n        <div class=\"data-row\">\n            <span class=\"data-label\">Nacionalidad:</span>\n            <span class=\"data-value\">").concat(data.nacionalidad, "</span>\n        </div>\n    ");
        // Mostrar el modal con animación
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    };
    // Método para cerrar el modal
    SimpleFormDisplay.prototype.closeModal = function (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    };
    return SimpleFormDisplay;
}());
//* Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    new SimpleFormDisplay();
});
