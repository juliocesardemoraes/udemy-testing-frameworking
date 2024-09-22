describe("Checagem HTML - ", () => {
  it('deve ter um campo de paragrafo com o id "nomesorteado" que vai mostrar o nome do usuário sorteado', () => {
    const pEl = document.getElementById("nomesorteado");
    expect(pEl).not.toBeNull();
    expect(pEl.tagName.toLowerCase()).toBe("p");
  });

  it('deve ter um botão com id "sortearbotao" e um atributo onclick', () => {
    const dadobotaoEl = document.getElementById("sortearbotao");
    expect(dadobotaoEl).not.toBeNull();
    expect(dadobotaoEl.hasAttribute("onclick")).toBeTrue();
    expect(dadobotaoEl.tagName.toLowerCase()).toBe("button");
  });
});

describe("Checagem Funcionalidades - ", () => {
  it("Quando o botão for clicado um usuário deve ser sorteado do array nomes", () => {
    const valorEl = document.getElementById("nomesorteado");
    const botaoEl = document.getElementById("sortearbotao");
    const nomes = [
      "julio",
      "maria",
      "carlos",
      "ana",
      "paulo",
      "lucia",
      "roberto",
      "julia",
      "fernando",
      "leticia",
      "rafael",
      "patricia",
      "joão",
      "bianca",
      "andre",
      "gabriela",
      "rodrigo",
      "mariana",
      "bruno",
      "flavia",
    ];

    let isInsideRange = true;

    for (let i = 0; i < 100; i++) {
      botaoEl.onclick();
      if (nomes.includes(valorEl.textContent) === false) {
        isInsideRange = false;
        break;
      }
    }

    expect(isInsideRange).toBeTrue();
  });

  function rolarResultado(valor, semiEscolha) {
    const ganhos = {
      pedra: "tesoura",
      papel: "pedra",
      tesoura: "papel",
    };
    let escolhaPC = null;

    if (semiEscolha.includes("tesoura")) {
      escolhaPC = "tesoura";
    } else if (semiEscolha.includes("pedra")) {
      escolhaPC = "pedra";
    } else if (semiEscolha.includes("papel")) {
      escolhaPC = "papel";
    }

    if (valor == escolhaPC) {
      return "empatou";
    } else if (ganhos[valor] == escolhaPC) {
      return "ganhou";
    } else {
      return "perdeu";
    }
  }

  for (let i = 0; i < buttons.length; i++) {
    it(
      `a função ${buttons[i]} no clique deve calcular o resultado e alterar no paragrafo 'resultado' ganhou, perdeu ou empatou`
    ),
      () => {
        const pEl = document.getElementById(buttons[i]);
        const pResultado = document.getElementById("resultado");
        const pcResultado = document.getElementById("pc");
        let isFunctioning = false;

        for (let x = 0; x < 100; x++) {
          pEl.onclick();
          const result = rolarResultado(buttons[i], pcResultado.textContent);

          const studentResult = pResultado.textContent.toLowerCase();

          isFunctioning = studentResult.includes(result);
          if (isFunctioning === false) break;
        }

        expect(isFunctioning).toBeTrue();
      };
  }
});
