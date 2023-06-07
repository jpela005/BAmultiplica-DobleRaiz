  const cantidadInput = document.querySelector(".cant-producto");
  const precio = document.getElementById("precio");
  const subtotalInput = document.getElementById("subtotal");
  const totalInput = document.getElementById("precio-total");
  const descuentoInput = document.getElementById("input-descuento");

  function calcularTotal() {
    const cantidad = parseInt(cantidadInput.value);
    const precioUnitario = parseFloat(precio.textContent);
    const subtotal = precioUnitario * cantidad;

    subtotalInput.value = subtotal.toFixed(2);

    let totalPagar = subtotal;
    const descuento = descuentoInput.value;

    if (descuento === "15EnMiDobleRaiz") {
      const codDescuento = 15;
      totalPagar = aplicarDescuento(totalPagar, codDescuento);
    } else if (descuento === "PlavacMali") {
      const codDescuento = 20;
      totalPagar = aplicarDescuento(totalPagar, codDescuento);
    } else if (descuento === "35BodegaDobleRaiz") {
      const codDescuento = 35;
      totalPagar = aplicarDescuento(totalPagar, codDescuento);
    } else if (descuento === "") {
      const codDescuento = 0;
      totalPagar = aplicarDescuento(totalPagar, codDescuento);
    
    }

    totalInput.value = totalPagar.toFixed(2);
  }

  function aplicarDescuento(total, codDescuento) {
    return total - (total * codDescuento) / 100;
  }


  cantidadInput.addEventListener("change", calcularTotal);
  descuentoInput.addEventListener("input", calcularTotal);





