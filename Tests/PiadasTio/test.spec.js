describe("HTML - ", () => {
  it('deve ter um campo de paragrafo com o id "piadaGerada" que vai mostrar o nome da piada gerada', () => {
    const pEl = document.getElementById("piadaGerada");
    expect(pEl).not.toBeNull();
    expect(pEl.tagName.toLowerCase()).toBe("p");
  });

  it('deve ter um botão com id "gerarPiada" e um atributo onclick', () => {
    const dadobotaoEl = document.getElementById("gerarPiada");
    expect(dadobotaoEl).not.toBeNull();
    expect(dadobotaoEl.hasAttribute("onclick")).toBeTrue();
    expect(dadobotaoEl.tagName.toLowerCase()).toBe("button");
  });
});

const piadasTio = [
  {
    id: 1,
    piada:
      "Um caipira chega a casa de um amigo que está vendo TV e pergunta: - E aí, firme? - Não, futebor",
    tema: "regional",
  },
  {
    id: 2,
    piada:
      "Por que o livro de matemática se matou? Porque tinha muitos problemas.",
    tema: "educação",
  },
  {
    id: 3,
    piada: "Sabe o que o pato disse para a pata? 'Vem quá!'",
    tema: "animais",
  },
  {
    id: 4,
    piada: "Qual o animal mais antigo? A zebra, porque ainda é preta e branca.",
    tema: "animais",
  },
  {
    id: 5,
    piada: "O que o tomate foi fazer no banco? Tirar o extrato",
    tema: "comida",
  },
  {
    id: 6,
    piada:
      "Sabe por que o livro de história estava triste? Porque ele tinha um passado sombrio.",
    tema: "educação",
  },
  {
    id: 7,
    piada:
      "A plantinha foi ao hospital, mas não foi atendida. Por que? - Porque lá só tinha médico de plantão",
    tema: "plantas",
  },
  {
    id: 8,
    piada:
      "Quando os americanos comeram carne pela primeira vez? - Quando chegou Cristóvão 'Com Lombo'",
    tema: "história",
  },
  {
    id: 9,
    piada:
      "Fui comprar um remédio e o farmacêutico perguntou se eu tinha receita. Respondi que se eu tivesse a receita, faria o remédio em casa.",
    tema: "cotidiano",
  },
  {
    id: 10,
    piada: "Qual o melhor chá para calvíce? Chá-peu",
    tema: "saúde",
  },
  {
    id: 11,
    piada: "Sabe qual país não aceita táxi? - Não, qual? - Uberlândia",
    tema: "geografia",
  },
  {
    id: 12,
    piada:
      "Sabia que tomar suco devagar é mais gostoso? porque é mais sucolento",
    tema: "comida",
  },
  {
    id: 13,
    piada:
      "Por que o jardineiro nunca briga com a planta? Porque ele sempre a rega.",
    tema: "plantas",
  },
  {
    id: 14,
    piada:
      "Se um dia você ficar trancado do lado de fora, converse com a fechadura. Pois, comunicação é a chave.",
    tema: "cotidiano",
  },
  {
    id: 15,
    piada:
      "Qual é a peça mais velha do carro? Se você respondeu vôlante, está errado. São os faraóis.",
    tema: "história",
  },
  {
    id: 16,
    piada:
      "Por que Minas Gerais não tem praia? Porque quando o primeiro mineiro foi abençoar as terras, ele disse: livrai-nos do mar, amém.",
    tema: "regional",
  },
  {
    id: 17,
    piada:
      "Por que o Brasil era mais cheiroso em 1500? Porque era uma colônia.",
    tema: "história",
  },
  {
    id: 18,
    piada: "O que acontece se um chinês se cortar? Xai Xang.",
    tema: "regional",
  },
  {
    id: 19,
    piada: "Qual o nome da casa da ovelha? É a lan house.",
    tema: "animais",
  },
  {
    id: 20,
    piada:
      "Porquê a bola de basquete estava descansando? porque ela foi enterrada",
    tema: "esporte",
  },
];

describe("Funcionalidade - ", () => {
  it("deve mostrar no paragrafo piadaGerada uma piada gerada pelo array de piadas", () => {
    const pEl = document.getElementById("piadaGerada");
    const botaoEl = document.getElementById("gerarPiada");
    botaoEl.click();
    expect(pEl).not.toBeNull();
    let match = false;

    for (let i = 0; i < piadasTio.length; i++) {
      if (pEl.textContent === piadasTio[i].piada) match = true;
    }

    expect(match).toBeTrue();
  });

  it("deve gerar uma piada randomica", () => {
    const pEl = document.getElementById("piadaGerada");
    const botaoEl = document.getElementById("gerarPiada");
    botaoEl.click();
    expect(pEl).not.toBeNull();
    let match = false;
    let piadas = [];

    for (let x = 0; x < 20; x++) {
      botaoEl.click();
      for (let i = 0; i < piadasTio.length; i++) {
        if (pEl.textContent === piadasTio[i].piada) {
          if (!piadas.includes(piadasTio[i].piada))
            piadas.push(piadasTio[i].piada);

          match = true;
          break;
        }
      }
    }
    let isRandom = piadas.length > 1 ? true : false;

    if (!isRandom)
      console.log(
        "O seu código não é randomico, para 20 testes feitos ele não utilizou valores diferentes"
      );

    expect(match).toBeTrue();
    expect(isRandom).toBeTrue();
  });
});
