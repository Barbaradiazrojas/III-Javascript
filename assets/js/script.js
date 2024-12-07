const ele = document.getElementById("ele1");

// Función para alternar colores entre verde y amarillo
function pintar(elemento) {
    const currentColor = elemento.style.backgroundColor;
    
    if (currentColor === 'yellow') {
        elemento.style.backgroundColor = 'green';
    } else {
        elemento.style.backgroundColor = 'yellow';
    }
}

// Establecer color inicial a verde
ele.style.backgroundColor = 'green';

// Agregar evento de click para cambiar colores
ele.addEventListener("click", () => pintar(ele));