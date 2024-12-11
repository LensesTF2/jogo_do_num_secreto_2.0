let ListadeNumerosSorteados = [];

let numeroSecreto= GerarNumeroAleatorio();

let tentativas= 1;

function exibirTextonaTela(tag,texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}
function ExibirMensagemInicial(){
exibirTextonaTela('h1','Jogo do número secreto');
exibirTextonaTela('p','Escolha um número entre 1 e 10');
}
ExibirMensagemInicial()
function verificarChute(){
    let chute=document.querySelector('input').value;
    let palavraTentativa=tentativas>1? 'tentativas':"tentativa";
    let mensagemTentativas= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
    if (chute==numeroSecreto){
        exibirTextonaTela('h1', 'Acertou!');
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if (chute>numeroSecreto) {
            exibirTextonaTela('p', 'O número secreto é menor');
        } else {
            exibirTextonaTela('p', "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
}
}
function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*10+1);
    let quantidadedeElementosnaLista = ListadeNumerosSorteados.length;
    if (quantidadedeElementosnaLista==10){
        ListadeNumerosSorteados=[];
    };
    if (ListadeNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
    }  else {
        ListadeNumerosSorteados.push(numeroEscolhido);
        console.log(ListadeNumerosSorteados);
        return numeroEscolhido;
    };
    
}
function limparCampo(){
    chute= document.querySelector('input');
    chute.value='';
}
function reiniciarJogo(){
    numeroSecreto=GerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    ExibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');
}