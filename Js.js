function calcular(number1,number2){
    number1 = parseFloat(document.getElementById("number1").value)
    number2 = parseFloat(document.getElementById("number2").value)

    operações = document.getElementById("operações").value

    switch(operações){
        case '+':
            calculo = (number1 + number2)
            document.getElementById("Resposta").innerHTML = `A operação realizada tem como resultado = ${calculo} `
            break
        
        case '-':
            calculo = (number1 - number2)
            document.getElementById("Resposta").innerHTML = `A operação realizada tem como resultado = ${calculo} `
            break

        case '/':
            calculo = (number1 / number2)
            document.getElementById("Resposta").innerHTML = `A operação realizada tem como resultado = ${calculo} `
            break

        case '*':
            calculo = (number1 * number2)
            document.getElementById("Resposta").innerHTML = `A operação realizada tem como resultado = ${calculo} `
            break
    }

}
