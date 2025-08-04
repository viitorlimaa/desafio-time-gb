const time = require("./time.js");

/**
 * @param {string} time
 * @param {string} nome
 * @param {string} posicao
 * @param {number} numeroDaCamisa
 * @returns
 */

function addJogador(time, nome, posicao, numeroDaCamisa) {
  if (!nome || !posicao || typeof numeroDaCamisa !== "number") {
    console.warn("Dados inválidos para jogador.");
    return;
  }

  const jogadorExistente = time.jogadores.some(
    (j) => j.numeroDaCamisa === numeroDaCamisa
  );

  if (jogadorExistente) {
    console.warn("Já existe um jogador com essa camisa.");
    return;
  }

  const jogador = {
    nome,
    posicao,
    numeroDaCamisa,
    salarioPago: false,
  };

  time.jogadores.push(jogador);
}

// Lista atacantes
function listarAtacantes(time) {
  if (!time.jogadores.length) return [];
  return time.jogadores.filter((j) => j.posicao === "atacante");
}

// Buscar jogador por número da camisa
function buscarPorCamisa(time, numero) {
  if (typeof numero !== "number") return null;
  return time.jogadores.find((j) => j.numeroDaCamisa === numero) || null;
}

// Lista formatada
function listarJogadoresFormatado(time) {
  if (!time.jogadores.length) return [];
  return time.jogadores.map(
    ({ numeroDaCamisa, nome, posicao }) =>
      `Camisa ${numeroDaCamisa} - ${nome} (${posicao})`
  );
}

// Contagem por posição
function contarPorPosicao(time) {
  return time.jogadores.reduce((acc, j) => {
    acc[j.posicao] = (acc[j.posicao] || 0) + 1;
    return acc;
  }, {});
}

// Marca todos os salários como pagos
function marcarSalarioPago(time) {
  time.jogadores.forEach((j) => {
    if (!j.salarioPago) j.salarioPago = true;
  });
}

// Gera escalação com preenchimento de reservas
function gerarEscalacao(time) {
  const posicoes = {
    goleiro: 1,
    zagueiro: 4,
    meia: 3,
    atacante: 3,
  };

  const escalação = [];

  for (let posicao in posicoes) {
    const qtde = posicoes[posicao];
    const jogadores = time.jogadores.filter((j) => j.posicao === posicao);

    for (let i = 0; i < qtde; i++) {
      if (jogadores[i]) {
        escalação.push(jogadores[i]);
      } else {
        escalação.push({
          nome: "Jogador reserva",
          posicao,
          numeroDaCamisa: null,
          salarioPago: false,
        });
      }
    }
  }

  return escalação;
}

module.exports = {
  addJogador,
  listarAtacantes,
  buscarPorCamisa,
  listarJogadoresFormatado,
  contarPorPosicao,
  marcarSalarioPago,
  gerarEscalacao,
};
