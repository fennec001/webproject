//Insira três caixas de texto na tela e um botão. Quando o usuário clicar nesse botão, 
//calcule a soma dos números digitados nas caixas de texto e a média aritmética. Crie uma 
//função para a soma e outra para a média. Mostre o resultado na tela para o usuário 
//conferir.
function guardarValores(){
    //esta função irá apenas armazenar e retornar os valores, um array com cada elemento das "caixinhas"... utilizando a funcao nativa Number para nao recebermos como string (sdds typescript)

    let valores = [Number(document.getElementById("c1").value), Number(document.getElementById("c2").value), Number(document.getElementById("c3").value)]
    return valores
}    

function somaValores(valores){
// devido a pequena quantidade de valores dentro do array, e a maneira que o problema pede que a questão seja construida, acredito que é mais legivel não utilizar um laço de repetição
// eu acredito que esta é uma das situações que um código mais "burro" e facil de entender é mais limpo do que o mais eficiente possivel
    return (valores[0] + valores[1] + valores[2])
}


function mediaAritmetica(valores){
return (somaValores(valores) / valores.length)
}


function mostrarNaTela(texto,valor,local){
    document.getElementById(local).innerHTML = texto + valor 
}

function executarCodigo(){
// funçaõ que será utilizada para organizar o código chamado pelo botãozinho
let valores = guardarValores()

mostrarNaTela("A soma é de: ",somaValores(valores),"resultadoSoma")
mostrarNaTela("A Média aritmética é de: ",mediaAritmetica(valores),"resultadoMedia")
}







function escreverSalario(){
    if(!isNaN(salarioMensal())){
    document.getElementById("sobreescrever").innerHTML ="O salário do funcionário é de: "+salarioMensal();
} else alert("Numero Inválido!")
}

//Insira três caixas de texto na tela e um botão. Quando o usuário clicar nesse botão, 
//calcule a soma dos números digitados nas caixas de texto e a média aritmética. Crie uma 
//função para a soma e outra para a média. Mostre o resultado na tela para o usuário 
//conferir.