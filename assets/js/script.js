const ele = document.getElementById("ele1");

// Función que recibe elemento y color como parámetros
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Establecer color inicial a verde
pintar(ele);

// Agregar evento de click para cambiar a amarillo
ele.addEventListener("click", () => pintar(ele, 'yellow'));