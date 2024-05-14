
function calcularSoma (){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resultado = ''
    !isNaN(num1) && !isNaN(num2)? resultado = num1+num2:alert('Insira um número válido')
    let resposta = document.getElementById('resposta')
    resposta.textContent = resultado
}
function calcularMultiplicacao(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resultado = ''
    !isNaN(num1) && !isNaN(num2)?resultado = num1*num2:alert('Insira um número válido')
    let resposta = document.getElementById('resposta')
    resposta.textContent = resultado
    
}
function calcularSubtracao(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let resultado = ''
    !isNaN(num1) && !isNaN(num2)?resultado = num1-num2:alert('Insira um número válido')
    let resposta = document.getElementById('resposta')
    resposta.textContent = resultado
}
function calcularDivisao(){
    let num1 = Number(document.getElementById('num1').value) 
    let num2 = Number(document.getElementById('num2').value)
    let resultado = ''
    !isNaN(num1) && !isNaN(num2)?resultado = num1/num2:alert('Insira um número válido')
    let resposta = document.getElementById('resposta')
    resposta.textContent = resultado;
}
let bSubi = document.getElementById('subtrairButao')
bSubi.addEventListener('click', calcularSubtracao)

let bSoma = document.getElementById('addButao')
bSoma.addEventListener('click', calcularSoma)

let bDivi = document.getElementById('dividirButao')
bDivi.addEventListener('click', calcularDivisao)

let bMulti = document.getElementById('multipicarButao')
bMulti.addEventListener('click', calcularMultiplicacao)
