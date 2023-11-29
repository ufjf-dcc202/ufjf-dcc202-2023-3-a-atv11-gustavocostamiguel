
import {getLista} from "./lista.js"; 

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida');
const btnAdcionar = document.querySelector('#adicionar')
const btnLimpar = document.querySelector('#limpar')
btnLimpar.addEventListener('click',limparElementosDaLista);
btnAdicionar.addEventListener('click',criarElementosNaLista);
atualizarItensDeLista();

function limparElementosDaLista(){
    atualizarItensDeLista();
    limparLista();
}
function criarElementosNaLista(){
    const texto = pEntrada.textContext;
    adcionarNaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();



}

function atualizarItensDeLista(){
    olSaida.innerHTML = "";
    const lista = getLista();
    for(let i =0; i<lista.length;i++){
        const element = array[i];
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}