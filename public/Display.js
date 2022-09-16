class Display_pantalla{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual
        this.displayValorAnterior = displayValorAnterior
        this.calculador = new Calculadora()
        this.tipoOperacion = undefined
        this.valorActual = ''
        this.valorAnterior = ''
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '%',
            multiplicar: 'x'
        }
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular() 
        this.tipoOperacion = tipo
        this.valorAnterior = this.valorActual || this.valorAnterior
        this.valorActual = ''
        this.imprimirValores()
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1)
        this.imprimirValores()
    }

    borrartodo(){
        this.valorActual = ''
        this.valorAnterior = ''
        this.tipoOperacion = undefined
        this.imprimirValores()
    }

    agregarNumeros(num){
        if(num == '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + num.toString()
        this.imprimirValores()
    }

    imprimirValores(){
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`
        this.displayValorActual.textContent = this.valorActual
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior)
        const valorActual = parseFloat(this.valorActual)

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorActual, valorAnterior)
    }
}