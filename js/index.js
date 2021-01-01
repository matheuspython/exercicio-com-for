const container = document.querySelector('.container')

const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }
]

function criaElemento(tipoElemento) {
    const elemento = document.createElement(tipoElemento)
    return elemento
}

function adicionaElemento(elemento) {
    container.appendChild(elemento)
}
for (var i = 0; i < elementos.length; i++) {

}