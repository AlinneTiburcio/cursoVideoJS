let num = [5, 8, 2, 9, 3]
num.push(1) //acrescenta uma posição no vetor
num.sort() //coloca os elementos em ordem crescente
//num.length mostra quantos elementos temos
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
  console.log('O valor não foi encontrado')
} else {
console.log(`O valor 8 esta na posição ${pos}`)
}