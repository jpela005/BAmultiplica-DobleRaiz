const contadorCarrito = document.getElementById('contador-carrito');
const botonesAgregar = document.getElementsByClassName('btn-add-carrito');
const btnResetCarrito = document.getElementById('btn-reset-carrito');
let contador = localStorage.getItem('contadorCarrito');

if (!contador) {
  contador = 0;
}

function actualizarContadorCarrito() {
  contadorCarrito.textContent = contador;

  //para boton restablecer
  if (contador === 0) {
    btnResetCarrito.style.display = 'none';
  } else {
    btnResetCarrito.style.display = 'inline-block';
  }
}

// Llamar función para actualizar el contador carrito
actualizarContadorCarrito();

for (let i = 0; i < botonesAgregar.length; i++) {
  botonesAgregar[i].addEventListener('click', () => {
    contador++;

    actualizarContadorCarrito();

    localStorage.setItem('contadorCarrito', contador);
  });
}

//restablecer el contador del carrito
btnResetCarrito.addEventListener('click', () => {
  contador = 0;
  actualizarContadorCarrito();
  localStorage.clear();
});
