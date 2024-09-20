describe("Checagem HTML - ", function () {
  const buttons = ["papel", "pedra", "tesoura"];
  it('deve ter um paragrafo com o id "jogador" para mostrar o que o jogador escolheu(pedra,papel ou tesoura)', () => {
    const pEl = document.getElementById("jogador");
    expect(pEl).not.toBeNull();
    expect(pEl.tagName.toLowerCase()).toBe("p");
  });

  it('deve ter um paragrafo com o id "pc" para mostrar o que o pc escolheu(pedra,papel ou tesoura)', () => {
    const pEl = document.getElementById("pc");
    expect(pEl).not.toBeNull();
    expect(pEl.tagName.toLowerCase()).toBe("p");
  });

  it('deve ter um paragrafo com o id "resultado" para mostrar o resultado computador venceu ou você venceu! ou empate', () => {
    const pEl = document.getElementById("resultado");
    expect(pEl).not.toBeNull();
    expect(pEl.tagName.toLowerCase()).toBe("p");
  });

  for (let i = 0; i < buttons.length; i++) {
    it(`deve ter um botão para ${buttons[i]}, com o id="${buttons[i]}"`, () => {
      const pEl = document.getElementById(buttons[i]);
      console.log(pEl.onclick);
      expect(pEl).not.toBeNull();
      expect(pEl.tagName.toLowerCase()).toBe("button");
    });
  }

  for (let i = 0; i < buttons.length; i++) {
    it(`o botão ${buttons[i]} deve ter um atributo onclick e deve passar uma função com um parametro (pedra, papel ou tesoura)`, () => {
      const pEl = document.getElementById(buttons[i]);
      const onclickAttr = pEl.getAttribute("onclick");

      const checkParams = onclickAttr && /\(.+\)/.test(onclickAttr);
      expect(checkParams).toBeTrue();
    });
  }

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
    it(`a função ${buttons[i]} no clique deve calcular o resultado e alterar no paragrafo 'resultado' ganhou, perdeu ou empatou`, () => {
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
    });
  }
});
