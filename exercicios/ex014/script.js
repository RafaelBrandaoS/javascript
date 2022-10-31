function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fed5a0'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#bcdbf0'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#266481'
    }
}