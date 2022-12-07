function tabuada(number) {
    let tabuada = []
    let tabuadaAfter = []
    for (let i = 1; i <= 10; i++) {
        let value = number * i
        tabuada.push(value)
    }
    for (let i = 1; i <= 10; i++) {
        let value1 = (number + 1) * i
        tabuadaAfter.push(value1)
        let value2 = (number + 2) * i
        tabuadaAfter.push(value2)
    }
    console.log(tabuada)
    console.log(tabuadaAfter)
}
tabuada(5)