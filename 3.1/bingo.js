const bingoNumbers = [2, 9, 14, 7, 15]
let verificar
let expectedNumber

function bingo(numeros) {
    verificar = bingoNumbers.every(x => numeros.includes(x))
    if (verificar === true) {
        console.log('GANHOU!')
    }
    else {
        console.log('PERDEU!')
    }
}

bingo([2, 4, 5, 6, 14, 7, 9, 15])
