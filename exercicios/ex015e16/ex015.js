let num = [5, 8, 4, 7]
num.push(9)
num.sort()

console.log(num)
console.log(`nosso vetor tem ${num.length} elementos`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}
