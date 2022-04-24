console.clear();
const prompt = require("prompt-sync")();

// Hello Word!.
 
const game = ["espada", "lanca", "escudo"]; //Opções de escolha.
let nome = prompt("ola, qual o seu nome? "); // Nome do 'Player'.
let novaJogo;

console.log();
let res = prompt(
  `${nome} Que tal jogarmos um Jokenpô diferente? ` //Pergunta para iniciar o programa
).toLowerCase();
console.log();

while (res != "sim" && res != "nao" && res != 'cancelar') { //Condições aceita para seguir adiante.
  console.log("Digite apenas sim ou nao");
  res = prompt(`${nome} Que tal jogarmos um Jokenpô diferente? `).toLowerCase();
  console.log();
};

if (res == "sim") {   // Regras do Game .
  console.log(`Sera como na epoca MEDIEVAL, espada, lanca e escudo, 
  sendo que espada derrota lanca, lanca derrota escudo e escudo
  derrota espada,

  Se prefirir a qualquer momento pode parar digitanto "cancelar" `); // Informe, podera cancelar o game a qualquer momento.
};

console.log();

do {

  let partidas = 0; // Variaveis para calculo de ganhador e resumo do jogo.
  let vitoria = 0;
  let derrota = 0;
  let empate = 0;
  let player = 0;
  

  if (res == "nao" || res == 'cancelar') { // Cancelar Inicio ou a partida.
    break;
  } else if (player == 'cancelar') {
    break
  } else if (novaJogo == 'cancelar') {
    break
  };

  do {
    partidas = +prompt(`${nome}, Agora quantas vezes iremos Jogar? `); // Quantidade de rodadas do game.
    console.log();
  } while (isNaN(partidas)); // Aceita apenas Number.

  for (let i = 0; i < partidas; i++) { // Inicio do laço para o número de escolha de jogadas.

    let numCPU = Math.floor(Math.random() * 3); // Escolha aletória da CPU.

    console.log();
    player = prompt(
      "Escolha entre Espada, Lanca ou Escudo e digite. " // Escolha do Player.
    ).toLowerCase();

    while (player != "espada" && player != "lanca" && // Condições para aceitar as resposta do Player.
     player != "escudo" && player !='cancelar') {
      console.log("Resposta Invalida");
      console.log();
      player = prompt(
        "Escolha entre Espada, Lanca ou Escudo e digite. "
      ).toLowerCase();
    };

    if (
      (player == "espada" && numCPU == 1) || // Condições para vitórias player
      (player == "lanca" && numCPU == 2) ||
      (player == "escudo" && numCPU == 0)
    ) {
      console.log(player, " > ", game[numCPU]); // Mostra a escolha de ambos, em caso de vitória do player.
      console.log(`VITÓRIA de ${nome}.`);
      vitoria++; // Adicinando +1 e vitória do player para o resultado final.
    } else if (
      (numCPU == 2 && player == "espada") || // Condições para vitórias CPU
      (numCPU == 0 && player == "lanca") ||
      (numCPU == 1 && player == "escudo")
    ) {
      console.log(game[numCPU], " > ", player); // Mostra a escolha de ambos, em caso de vitória da CPU.
      console.log(`A VITORIA é MINHA!`);
      derrota++; // Adicinando +1 e vitória da CPU para o resultado final.
    } else if ( 
      (player == "espada" && numCPU == 0) || // condições para empate.
      (player == "lanca" && numCPU == 1) ||
      (player == "escudo" && numCPU == 2)) {
      console.log(player, " = ", game[numCPU]); // Mostra a escolha de ambos, em caso do empate.
      console.log("Ambos iguais, EMPATE.");
      empate++; // Adicinando +1 em empate só  para o informe final.
    };
    console.log();
  };

  // Condições para a vitória
  if (vitoria > derrota) {
    console.log(`${nome}, É O GRANDE VENCEDOR!.`);
  } else if (derrota > vitoria) {
    console.log("EU FUI O VENCEDOR!");
  } else {
    console.log("Ambos ganhamos, deu EMPATE");
  };
  console.log();

  let resumo = { // Tabela de resumo do no final da rodada.
    Rodadas: partidas,
    Vitória: vitoria,
    Derrota: derrota,
    Empate: empate,
  };
  console.table(resumo);

  novaJogo = prompt(
    `${nome}, Quer jogar novamente? Digite Sim ou Não `// Pergunta para comçar uma nova rodada.
  ).toLowerCase();

  while (novaJogo != "sim" && novaJogo != "nao" && novaJogo != 'cancelar') { // condições para respostas aceita.
    console.log("Resposta Invalida");
    novaJogo = prompt(
      `${nome}, Quer jogar novamente? Digite Sim ou Não `
    ).toLowerCase();
  };
} while (novaJogo == "sim"); // fim do laço e condição para incialo novamente.

console.log();

if (novaJogo == "nao") { // Fim do game e mensagens final de agradecimento.
  console.log(`Ok ${nome}, Foi muito bom jogar com você.`);
} else if (res == 'nao' || res == 'cancelar') {
  console.log(`Ok ${nome}, Foi um prazer falar com você.`);
}
console.log();