/* Crie duas variáveis booleanas, booleano1 e booleano2, e atribua respectivamente os valores true e false
Crie um if para verificar se booleano1 é true e exiba um alert caso positivo.
Crie um else que exiba um alert caso não seja true.*/

const booleano1 = true;
const booleano2 = false;

if (booleano1 === true){
alert ('Resultado positivo.')
} else{
    alert ('Resultado falso.')
}

/* Comente as condicionais anteriores
Crie uma terceira variável chamada booleano3, com valor true
Crie um if que verifica se booleano1 e booleano2 são iguais e exiba um alert caso positivo
Crie um else if que verifica se booleano2 e booleano3 são iguais e exiba um alert caso positivo
Crie mais um else if que verifica se booleano1 e booleano3 são iguais e exiba um alert.
Crie um else que exiba um alert caso não existam valores iguais*/

const booleano3 = true;

if(booleano1 === booleano2){
    alert ("Booleano1 é igual ao booleano2")
} else if (booleano2 === booleano3){
    alert ("Booleano2 é igual ao Booleano3")
} else if (booleano1 === booleano3){
    alert ("Booleano1 é igual ao booleano3")
} else {
    alert ("Não existe valores iguais")
}
console.log ("Fim do codigo")

/*
*/
function verificaVotacao(idade, facultativo) {
    if (idade >= 18) {
      alert("Você é obrigado a votar");
    } else {
      alert("Não pode votar!");
    }
    
    if (facultativo >= 70 || (facultativo >= 16 && facultativo <= 17)) {
      alert("Você pode votar, mas é facultativo.");
    }
  }
  
  /* Crie uma variável chamada média, e atribua a ela um valor numérico entre 0 e 10
Crie um if que verifica se a média é maior ou igual a 5. Caso seja, imprima que a pessoa foi aprovada.
Adicione um else que imprime que a pessoa foi reprovada se a condição não for atendida.
2-Adicione um else if antes de reprovar, que verifica se a média é maior ou igual a 3. Caso seja, imprima “Recuperação”.
Altere o último else para que ele também seja um else if que verifica se a nota é menor que três para exibir “Estudante reprovade”.
Adicione um último else, que imprima “dado inválido” caso nenhuma das condições anteriores seja atendida.*/

let media = 6;
if (media >= 5) {
  console.log("Você foi aprovado(a)!");
} else if (media >= 3) {
  console.log("Você está em recuperação.");
} else if (media < 3) {
  console.log("Você foi reprovado(a)!");
} else {
  console.log("Dado inválido.");
}

  
/*Considerações sobre o código:A variável media recebe o valor 6. Em seguida, a função verifica se a media é maior ou igual a 5 usando a instrução if. Se a condição for verdadeira, a função imprime a mensagem "Você foi aprovado(a)!".Se a media for menor que 5, a função verifica se a media é maior ou igual a 3 usando a instrução else if. Se a condição for verdadeira, a função imprime a mensagem "Você está em recuperação.".
Se a media for menor que 3, a função verifica se a media é menor que 3 usando outra instrução else if. Se a condição for verdadeira, a função imprime a mensagem "Você foi reprovado(a)!".
Se nenhuma das condições anteriores for atendida, a função imprime a mensagem "Dado inválido."*/