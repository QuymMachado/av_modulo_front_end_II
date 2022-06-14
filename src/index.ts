//capturar os elementos para manipulação dos dados
let codigoRecado = document.querySelector("#input-codigo") as HTMLInputElement;
let tituloRecado = document.querySelector("#input-recado") as HTMLInputElement;
let descricaoRecado = document.querySelector("#input-descricao") as HTMLInputElement;
let botaoSalvar = document.querySelector("#botao-salvar") as HTMLButtonElement;
let botaoCancelar = document.querySelector("#botao-cancelar") as HTMLButtonElement;

interface Recado{
    codigo: string,
    recado: string,
    descricao: string,
}

botaoSalvar.addEventListener('click', ()=>{
    criarRecado();
});

function pegarRecados() : Recado[] {
    return JSON.parse(localStorage.getItem('recados') || '[]');
}

function criarRecado(){
    let listaRecados: Recado[] = pegarRecados();
    if(codigoRecado.value === '' || tituloRecado.value === '' || descricaoRecado.value ===''){
        alert('nada');
    }
    let existeCodigo = listaRecados.some((recado) =>recado.codigo === codigoRecado.value);

    if(existeCodigo){
        codigoRecado.setAttribute('style', 'border: 1px solid red');
        codigoRecado.value = '';
    }

    let novoRecado: Recado = {
        codigo: codigoRecado.value,
        recado: tituloRecado.value,
        descricao: descricaoRecado.value,
    }

    listaRecados.push(novoRecado)
    localStorage.setItem('recados', JSON.stringify(listaRecados))
}