const displayValorAnterior = document.getElementById("valor_anterior")

const displayValorActual = document.getElementById("valor_actual")

const operaciones = document.querySelectorAll(".operaciones")

const numeros = document.querySelectorAll(".numero")

const display = new Display_pantalla(displayValorActual, displayValorAnterior)

numeros.forEach( boton => boton.addEventListener('click', () => display.agregarNumeros(boton.innerHTML)))

operaciones.forEach(boton => boton.addEventListener('click', () => display.computar(boton.value)))
