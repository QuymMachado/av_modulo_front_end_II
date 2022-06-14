"use strict";
//capturar os elementos para manipulação dos dados
let codigoRecado = document.querySelector("#input-codigo");
let tituloRecado = document.querySelector("#input-recado");
let descricaoRecado = document.querySelector("#input-descricao");
let botaoSalvar = document.querySelector("#botao-salvar");
let botaoCancelar = document.querySelector("#botao-cancelar");
botaoSalvar.addEventListener('click', () => {
    criarRecado();
});
function pegarRecados() {
    return JSON.parse(localStorage.getItem('recados') || '[]');
}
function criarRecado() {
    let listaRecados = pegarRecados();
    if (codigoRecado.value === '' || tituloRecado.value === '' || descricaoRecado.value === '') {
        alert('nada');
    }
    let existeCodigo = listaRecados.some((recado) => recado.codigo === codigoRecado.value);
    if (existeCodigo) {
        codigoRecado.setAttribute('style', 'border: 1px solid red');
        codigoRecado.value = '';
    }
    let novoRecado = {
        codigo: codigoRecado.value,
        recado: tituloRecado.value,
        descricao: descricaoRecado.value,
    };
    listaRecados.push(novoRecado);
    localStorage.setItem('recados', JSON.stringify(listaRecados));
}
