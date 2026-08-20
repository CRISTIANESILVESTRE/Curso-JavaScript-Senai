
// Para ir a uma festa, precisa ser maior de idade e comprar um ingresso

let idade = 15
let maiorDeIdade = idade >= 18
let temIngresso = true
let temCarro = true
let temMoto = false

// let podeIrAfesta = idade >=18 && temIngresso ==true

let podeIrAfesta = maiorDeIdade && temIngresso && temCarro || temMoto

// console.log ( "É maior de idade?:" ,maiorDeIdade) || ( shift e barrinhas do lado do control)

console.log ("Pode ir a festa?", podeIrAfesta) 
