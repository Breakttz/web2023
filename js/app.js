
function validateForm() {
    // Obtener los valores del correo y la contraseña
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    
    // Expresión regular para validar el formato de correo electrónico
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Validar el correo electrónico y la contraseña
    if (!email.match(emailPattern)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false; // Evitar el envío del formulario
    } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return false; // Evitar el envío del formulario
    }

    // Si ambas validaciones pasan, el formulario se enviará
    return true;
}
