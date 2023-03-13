/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. 
Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na
área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. 
Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok
para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela
o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem 
comentando algo sobre a linguagem inserida.

*/

const resp = prompt('Em qual area você quer seguir? Digite 1 - Front-End ou 2 - Back-End?');

if(resp == 1){
    const respFront = prompt('Então o que você aprender? Digite 1 - React ou 2 - Vue?');
}
else {
    const respBack = prompt('Então o que você aprender? Digite 1 - C# ou 2 - Java?');
}

const respEspec = prompt('Então você pretende: Digite 1 - Especializar na área ou 2 - Se tornar Fullstack?');

if(respEspec == 1){
    alert('Parabéns! Siga em frente com os seus estudos e Boa Sorte!');
}
else {
    alert('Fullstack! É realmente incrível. Boa Sorte com seus estudos!');
}

const tecnologia = prompt('Quais são as tecnologias que você gostaria de se especializar ou de conhecer');
const respTec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 - para continuar ou 2 - para sair');

while (respTec == 1) {
    const respTec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 - para continuar ou 2 - para sair'); 
    if(respTec == 2){
        break;        
    }
}
alert('Até mais!');







