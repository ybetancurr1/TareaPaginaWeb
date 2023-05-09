const nombre = document.querySelector("#nombre");
const direccion = document.querySelector("#direccion");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo");
const ciudad = document.querySelector("#ciudad");
const edad = document.querySelector("#edad");

const btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener("click", ValidarFormularioDiligenciado);

function ValidarFormularioDiligenciado () 
{
    var mensajeError = "";
    var contador = 0;
    if (nombre.value === null || nombre.value === '')
    { 
           mensajeError = "Por favor ingrese su nombre";
           contador ++;     
    }

    if (nombre.value === null || nombre.value === '')
    { 
           mensajeError = "Por favor ingrese su nombre";
           contador ++;     
    }

    if (direccion.value === null || direccion.value === '')
    { 
           mensajeError = "Por favor ingrese su dirección";
           contador ++;     
    }

    if (telefono.value === null || telefono.value === '')
    { 
           mensajeError = "Por favor ingrese su teléfono";
           contador ++;     
    }

    if (correo.value === null || correo.value === '')
    { 
           mensajeError = "Por favor ingrese su correo";
           contador ++;     
    }

    if (edad.value === null || edad.value === '')
    { 
           mensajeError = "Por favor ingrese su edad";
           contador ++;     
    }

    if (contador > 1)
    { 
        mensajeError = "Por favor verifique los campos antes de enviar, dos o más no fueron diligenciados!"
    }
    

    return alert(mensajeError);
}
