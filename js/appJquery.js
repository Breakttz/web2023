$(document).ready(function(){
    $(".needs-validation").validate({
        errorClass: "is-invalid",
        validClass: "is-valid",
        rules:{
            nombre:{
                required:true,
            },
            rut:{
                required:true,
            },
            region:{
                required:true,
            },  
            comuna:{
                required:true,
            },
            email:{
                required:true,
            },
            contrasenya:{
                required:true,
                pwcheck:true,
                minlength:8
            }
        },
        messages:{
            nombre:{
                required:"el nombre es requerido"
            },
            rut:{
                required:"el rut es requerido"
            },
            region:{
                required:"la region es requerida"
            },
            comuna:{
                required:"la comuna es requerida"
            },
            email:{
                required:"el correo electronico es requerido",
                email:"el formato no es correcto"
            },
            contrasenya:{
                required:"la contraseña es requerida",
                pwcheck:"la contraseña no tiene un formato válido",
                minlength:"debe contener 8 caracteres"
            },
            terminos:{
                required:"es requerido aceptar terminos y condaciones"
            }
        }
    });
    $.validator.addMethod("pwcheck",
        function(value, element){
            return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
        });
});