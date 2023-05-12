var Leonardo = window.document.getElementById('card_leonardo')
var Samantha = window.document.getElementById('card_samantha')
var bruna = window.document.getElementById('card_bruna')
var setaDireira = window.document.getElementById('seta_direita')
var setaEsquerda = window.document.getElementById('seta_esquerda')

function Rolar_direita(){
    Leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireira.style = 'display:none'
    setaEsquerda.style = 'display:flex'
}

function Rolar_esquerda(){
    Leonardo.style = 'display:flex'
    bruna.style = 'display:none'
    setaDireira.style = 'display:flex'
    setaEsquerda.style = 'display:none'
}