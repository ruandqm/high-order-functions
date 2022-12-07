let pessoas = []

function pontosDeOnibus(paradas) {
    paradas.forEach(calcularPessoas)
}

function calcularPessoas(x) {
    let value = x[0] - x[1]
    pessoas.push(value)
}

pontosDeOnibus([[10, 0], [3, 5], [5, 8]])


let resultado = pessoas.reduce(function (resultado, i) {
    return resultado + i;
});

console.log(resultado);
