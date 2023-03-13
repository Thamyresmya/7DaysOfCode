/*
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando? 

No final, o sistema vai exibir a mensagem:
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
*/

const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando? ");

alert('Olá ' + nome + ', você tem '+ idade + ' anos e já está aprendendo ' + linguagem + '!');


const resposta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.");

if (resposta == 1) {
    alert('Parabéns!');
} 
else {
    alert('Que pena! Não desista existem outras linguagens que você pode gostar!');
}



