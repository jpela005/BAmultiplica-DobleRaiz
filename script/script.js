//  menu desplegable
 
 function toggleDropdown() {
   var dropdownMenu = document.querySelector('.dropdown-menu');
   dropdownMenu.classList.toggle('show');
 }
 
//contador de caractares de textarea contacto

 const contadorTextArea = document.getElementById("textarea-contacto");
 const caractUtilizados = document.getElementById("caracteres-utilizados");
 const limite = 500;

 contadorTextArea.onkeyup = function() {
   let caractEscritos = contadorTextArea.value.length;
   caractUtilizados.innerHTML = (caractEscritos) + "/500";
 };

 //comprobante de contacto

 function enviado() {
  let nombreInput = document.getElementById('nombre');
  let apellidoInput = document.getElementById('apellido');
  let emailInput = document.getElementById('email');
  let emailReal = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}$/;
  let textarea = document.getElementById("textarea-contacto");
  let mensajeError = document.getElementById('mensaje-error');

  if (nombreInput.value === '') {
    mensajeError.textContent = 'Por favor, ingrese un nombre.';
    return false;
  }

  if (apellidoInput.value === '') {
    mensajeError.textContent = 'Por favor, ingrese un apellido.';
    return false;
  }

  if (emailInput.value === '') {
    mensajeError.textContent = 'Por favor, ingrese un correo electrónico.';
    return false;
  }

  if (!emailReal.test(emailInput.value)) {
    mensajeError.textContent = 'Por favor, ingrese un correo electrónico válido.';
    return false;
  }

  if (textarea.value === '') {
    mensajeError.textContent = 'Por favor, deje su mensaje.';
    return false;
  }

  alert('enviado');
  return true;
}
