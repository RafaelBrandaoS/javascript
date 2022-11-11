let valores = [7, 9, 1, 0, 4, 6, 2, 3]
valores.sort()
/*
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for (let pos in valores) {
    console.log(`a posiçaão ${pos} tem o valor ${valores[pos]}`)
}