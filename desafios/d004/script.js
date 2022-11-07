function tabuada() {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert('Impossivel calcular')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}