function somaNumero(n1, n2) {
    return console.log('resultado', n1 + n2)
}
somaNumero(2, 3)
somaNumero(50, 13)

function calculaMedia(nomeAluno, nota1, nota2, nota3) {
    let resultado = (nota1 + nota2 + nota3) / 3
    return console.log('A nota do aluno', nomeAluno, 'é: ', resultado.topFixed(2))
}

calculaMedia('Orlando', 2.5, 10.0, 6.0)
