var agora = new Date()
var hora = agora.getHours()
console.log(`agora são examente ${hora} horas`)
if (hora < 12) {
    console.log('bom dia')
} else if (hora <=18 ) {
    console.log('Boa tarde')
} else {
    console.log('boa noite')
}