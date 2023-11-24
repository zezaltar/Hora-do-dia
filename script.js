function carregar(){
    msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`
    if (hora >= 6 && hora < 12) {
        //Bom dia
        img.src='manha.png'
        document.body.style.background = '#b9c3c4'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src='tarde.png'
        document.body.style.background = '#eb7b59'
    }else{
        //boa noite
        img.src='noite.png'
        document.body.style.background = '#210518'
    }
}