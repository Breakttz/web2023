function validateForm(){
    var rut = document.getElementById("rut").value;
    var email = document.getElementById("email").value;
    var contrasenya = document.getElementById("contrasenya").value;
    var recontrasenya = document.getElementById("recontrasenya").value;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(rut.length != 10){
        alert("el rut debe ser sin puntos y con DV.");
        return false;
    }
    else if(!validar(rut)){
        alert("ingrese un rut valido.");
        return false;
    }
    else if(!email.match(emailPattern)){
        alert("ingrese un correo valido.");
        return false;
    }
    else if(contrasenya.length < 6){
        alert("la contraseña debe ser de 6 caracteres minimo.");
        return false;
    }
    else if(recontrasenya != contrasenya){
        alert("las contraseñas deben ser iguales.");
        return false;
    }

    return true;
}

function validar(rut){
    var suma=0;
    var arrRut = rut.split("-");
    var rutSolo = arrRut[0];
    var verif = arrRut[1];
    var continuar = true;
    for(i=2;continuar;i++){
    suma += (rutSolo%10)*i;
    rutSolo = parseInt((rutSolo /10));
    i=(i==7)?1:i;
    continuar = (rutSolo == 0)?false:true;
}
resto = suma%11; dv = 11-resto;
if(dv==10){
if(verif.toUpperCase() == 'K') return true;
}else if (dv == 11 && verif == 0)
return true;
else if (dv == verif) return true;
else return false;
return false;
}