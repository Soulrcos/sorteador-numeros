const seleciona = (id) => document.querySelector(`${id}`);
let lista = [];
const inputQuantidade = seleciona('#quantidade');
const inputDe = seleciona('#de');
const inputAte = seleciona('#ate');
const numerosSorteados = seleciona('.numeros_sorteados');
const btn_reset = seleciona("#btn-reiniciar"); 

function numeroAleatorio(q, d, a){
    let sufixo;
    for (let i = 0; i < parseInt(q); i++){
        sufixo = (i == q-1) ? ' ' : ' / ';
        let aleatorio = (parseInt(Math.random() * a));

        if (lista.length > a){
            lista = [];
            i--;
        }
        else if (!lista.includes(aleatorio) && aleatorio >= d){
            numerosSorteados.innerHTML += `${aleatorio}${sufixo}`;
            lista.push(aleatorio);
        } else{
            i--;
        }

    }
    lista = [];
}

function limpaTela(){
    inputAte.value = '';
    inputDe.value = '';
    inputQuantidade.value = '';
    lista = [];
    numerosSorteados.innerHTML = "nenhum até agora";
}

function reiniciar(){
    if (btn_reset.classList.contains('container__botao')){
        btn_reset.setAttribute('class', 'container__botao-desabilitado');
        limpaTela();
    }
}

function sortear() {
    let quantidadeNumeros = inputQuantidade.value;
    let deRange = inputDe.value;
    let ateRange = inputAte.value;
    
    if ([quantidadeNumeros, deRange, ateRange].every((e) => e != '')){
        numerosSorteados.innerHTML = '';
        numeroAleatorio(quantidadeNumeros, deRange, ateRange);
        btn_reset.setAttribute('class', 'container__botao');
    } else{
        window.alert("[ERRO] OS CAMPOS NÃO PODEM ESTAR VAZIOS");
    }

    
}



document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        sortear();
    }
})