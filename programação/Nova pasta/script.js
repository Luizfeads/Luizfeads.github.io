let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

var testarcolisao = setInterval( funcion()

    var topoPersongem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue("top")
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

      if(quadrado< 20 && Quadrado> e && topoPersongem >= 130
        quadrado.style.animation = 'none'
          quadrado.stale.display = 'none'
          alert('você perdeu')
    


 10