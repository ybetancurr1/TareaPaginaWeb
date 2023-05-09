# TareaPaginaWeb

Esta tarea comprende el desarrollo de un portal Web personal utilizando las tecnología html, css, javascript y framework bootstrap.

## Consideraciones

### Bootstrap

1. Se utilizó Bootstrap para crear el Menú, tanto el *nav-bar*, como el lateral.
2. También para la realización de la tabla y el formulario.

### HTML
1. Se creó una configuración básica de HTML, se le dió nombre a los diferentes identificados de clase, id y etiquetas en general, en inglés, por un tema de buenas prácticas.

### CSS

1. Se hicieron algunos pequeños ajustes, tratando de respetar el estilo de **Bootstrap**.

### JS

1. La alerta generada para la validación se hizo a través de un método alert y manipulación básica del DOM como se muestra a continuación:

```javascript
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

```
