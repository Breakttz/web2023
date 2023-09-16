$(document).ready(function () {
    $("#form-login").validate({
        // Reglas que se aplican a la validación
        rules: {
            email: {
                required: true,
                email: true // Esta regla valida el formato de correo electrónico
            },
            password: "required"
        },
        // Mensajes que se muestran al no cumplir las reglas
        messages: {
            email: {
                required: "El email es requerido",
                email: "Debe ingresar un email válido" // Mensaje personalizado para formato de correo electrónico inválido
            },
            password: "La contraseña es requerida"
        },
        // Función que se ejecuta al validar el formulario
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            console.log('Validado');
            console.log(data);
        }
    });
});
