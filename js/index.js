const container = document.querySelector('.container')

const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'footer', texto: 'frase 3' },
    { tag: 'section', texto: 'frase 4' }
]

function criaElementoEAdicionaTexo(tipoElemento, texto) {
    const elemento = document.createElement(tipoElemento)
    const text = document.createTextNode(texto)
    elemento.appendChild(text)

    return elemento
}

function adicionaElemento(elemento) {
    container.appendChild(elemento)
}
for (var i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i]
    const elementoNovo = criaElementoEAdicionaTexo(tag, texto)

    adicionaElemento(elementoNovo)


}