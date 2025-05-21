
function enviarWhats(event) {
event.preventDefault()
    
const nome = document.getElementById('Nome').value
const mensagem = document.getElementById('mensagem').value
const telefone = '5511946679304'

const texto = `Olá! Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)

const url = `https://wa.me/${telefone}?text=${msgFormatada}`


console.log(url)

window.open(url, '_blank')


    
}
