const maiorValor = 1000
const menorValor = 1

const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor

const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("número: ", gerarNumeroSecreto())
