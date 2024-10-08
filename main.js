function criaCartao(pergunta, resposta){
let conteudo = document.getElementById ('conteudo')
 let cartao = document.createElement('article')
 cartao.className = 'cartao'
 
cartao.innerHTML = `
<div class= "cartao--conteudo">
    <div class="cartao--pergunta"><p>Que cidade serve de cenário para o seriado?</p> </div>
    <div class="cartao--resposta"><p>Miami</p></div>
</div>
`
console.log(cartao)
}

