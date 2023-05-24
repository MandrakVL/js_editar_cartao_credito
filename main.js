const btnConfirm = document.getElementById('btnSlv');
let numeroInput = document.getElementById('inputNumeroCartao');
let inputValidade = document.getElementById('inputValidade');
let inputCvv = document.getElementById('inputCVV');
let validUsuario = document.getElementById('valid-cartao-usuario');
let numeroCartao = document.getElementById('nmrCartao');
let inputNomeImpresso = document.getElementById('inputNomeImpresso');
let nomeCartaoImpresso = document.getElementById('nomeCartaoImpresso');

btnConfirm.addEventListener('click', function() {
    let mudarNumeroCartao = numeroCartao;
    mudarNumeroCartao.innerHTML = `${inputParte1()} ${inputParte2()} ${inputParte3()} ${inputParte4()}`;
    validUsuario.innerHTML = vldMascara();
    
    inputValidacaoNumeroCartao()
    vldMascara()
    inputParte1()
    pegarNomeImpresso()
    imprimirNomeImpresso()
})

numeroInput.addEventListener('input', function() {
    inputValidacaoNumeroCartao()
})

function inputValidacaoNumeroCartao() {
    let numeroTexto = numeroInput.value;
    let apenasNumeros = numeroTexto.replace(/\D/g, '');

    if(apenasNumeros > 16) {
        apenasNumeros = apenasNumeros.substr(0, 16);
    }
    numeroInput.value = apenasNumeros;

    return numeroInput.value;

}

// PEGA OS VALORES E DÁ UM ESPAÇO ENTRE ELES

function inputParte1() {
    inputValidacaoNumeroCartao()

    let primeiroValor = numeroInput.value;
    primeiroValor = primeiroValor.slice(0, 4);
    let PrimeiroValorFT = primeiroValor;

    return PrimeiroValorFT;
}

function inputParte2() {
    inputValidacaoNumeroCartao()

    let segundoValor = numeroInput.value;
    segundoValor = segundoValor.slice(4, 8);
    let SegundoValorFT = segundoValor;

    return SegundoValorFT;
}

function inputParte3() {
    inputValidacaoNumeroCartao()

    let terceiroValor = numeroInput.value;
    terceiroValor = terceiroValor.slice(8, 12);
    let TerceiroValorFT = terceiroValor;

    return TerceiroValorFT;
}

function inputParte4() {
    inputValidacaoNumeroCartao()

    let quartoValor = numeroInput.value;
    quartoValor = quartoValor.slice(12, 16);
    let quartoValorFT = quartoValor;

    return quartoValorFT;
}

// FIM

// INPUT VALIDADE

inputValidade.addEventListener('keypress', () => {
    vldMascara()
})

function vldMascara() {
    let inputLength = inputValidade.value.length;
    
    if (inputLength === 2) {
        inputValidade.value += '/'
    }

    return inputValidade.value;
}

// FIM

// MÁSCARA CVV

inputCvv.addEventListener('keypress', () => {
    mascaraCvv()
})

function mascaraCvv() {
    let numeroInput = inputCvv.value;
    let apenasNumerosCvv =  numeroInput.replace(/\D/g, '');
    
    if(apenasNumerosCvv > 2) {
        apenasNumerosCvv = apenasNumerosCvv.substr(0, 2);
    }
    
    inputCvv.value = apenasNumerosCvv;
    
    return inputCvv.value;
}


// FIM

// PEGAR VALOR INPUT NOME E IMPRIMIR NO CARTÃO

function pegarNomeImpresso() {
    let pegarValorNome = inputNomeImpresso.value;
    return pegarValorNome;
}

function imprimirNomeImpresso() {
    let mostrarNomeImpresso = nomeCartaoImpresso;
    mostrarNomeImpresso.innerHTML = pegarNomeImpresso()

    pegarNomeImpresso()
}