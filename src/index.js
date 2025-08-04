const time = require("./time.js");
const {
  addJogador,
  listarAtacantes,
  buscarPorCamisa,
  listarJogadoresFormatado,
  contarPorPosicao,
  marcarSalarioPago,
  gerarEscalacao,
} = require("./functions.js");

console.log("\n Adicionando jogadores");
addJogador(time, "João", "goleiro", 1);
addJogador(time, "Carlos", "zagueiro", 2);
addJogador(time, "Bruno", "zagueiro", 3);
addJogador(time, "Lucas", "zagueiro", 4);
addJogador(time, "André", "zagueiro", 5);
addJogador(time, "Fábio", "meia", 6);
addJogador(time, "Rafael", "meia", 7);
addJogador(time, "Thiago", "meia", 8);
addJogador(time, "Pedro", "atacante", 9);
addJogador(time, "José", "atacante", 10);
addJogador(time, "Felipe", "atacante", 11);
console.log(time.jogadores)

console.log("\n Lista de atacantes");
console.log(listarAtacantes(time));

console.log("\n Lista formatada de jogadores");
console.log(listarJogadoresFormatado(time));

console.log("\n Contagem por posição");
console.log(contarPorPosicao(time));

console.log("\n Marcando salários como pagos");
marcarSalarioPago(time);

console.log("\n Escalação automática");
console.log(gerarEscalacao(time));

console.log("\n Buscando jogador com camisa 7");
console.log(buscarPorCamisa(time, 7));
