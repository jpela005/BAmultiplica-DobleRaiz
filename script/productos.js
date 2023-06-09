  //carrito

const contadorCarrito = document.getElementById('contador-carrito');
const botonesAgregar = document.getElementsByClassName('btn-add-carrito');
let contador = localStorage.getItem('contadorCarrito');

if (!contador) {
  contador = 0;
}

function actualizarContadorCarrito() {
  contadorCarrito.textContent = contador;
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