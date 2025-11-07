var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.classList.add("ocultar")
    Bruna.classList.remove("ocultar")
    setaDireita.classList.add("ocultar")
    setaEsquerda.classList.remove("ocultar")
}

function RolarParaEsquerda() {
    Bruna.classList.add("ocultar")
    Leonardo.classList.remove("ocultar")
    setaDireita.classList.remove("ocultar")
    setaEsquerda.classList.add("ocultar")
}