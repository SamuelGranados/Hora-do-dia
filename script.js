function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()

    var hora = data.getHours()
    
    msg.innerHTML = `Olá, seja Bem Vindo`
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = 'fotodia.jpg'
        document.body.style.background = '#6ea4ef'
        msg.innerHTML += `<p>agora sao às <strong>${hora}</strong> da manhã</p>`
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#838991'
        msg.innerHTML += `<p>agora sao às <strong>${hora}</strong> da tarde</p>`
    } else {
        //boa noite 
        img.src = 'fotonoite.png'
        document.body.style.background = '#9260b0'
        msg.innerHTML += `<p>agora sao às<strong> ${hora}</strong> da noite</p>`
    }
}