const seleciona = (id) => document.querySelector(`${id}`);
let lista = [];
const inputQuantidade = seleciona('#quantidade');
const inputDe = seleciona('#de');
const inputAte = seleciona('#ate');

inputQuantidade.focus(); 

function numeroAleatorio(q, d, a){
    let aleatorio = (parseInt(Math.random() * a + 1));

    if (lista.length == a){
        return lista = [];
    } else if (lista.includes(aleatorio)){
        return numeroAleatorio(q, d, a);
    } else{
        lista.push(aleatorio);
        return console.log(aleatorio); 
    }
}

function sortear() {
    let quantidadeNumeros = inputQuantidade.value;
    let deRange = inputDe.value;
    let ateRange = inputAte.value; 

    numeroAleatorio(quantidadeNumeros, deRange, ateRange);
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        sortear();
    }
})