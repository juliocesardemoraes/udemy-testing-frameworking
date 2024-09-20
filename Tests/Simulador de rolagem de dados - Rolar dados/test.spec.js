describe("Checagem HTML - ", () => {
  it('deve ter um campo de paragrafo com o id "dado" que vai mostrar o resultado do lançamento', () => {
    const moedaEl = document.getElementById("dado");
    expect(moedaEl).not.toBeNull();
    expect(moedaEl.tagName.toLowerCase()).toBe("p");
  });

  it('deve ter um botão com id "dadobotao" e um atributo onclick', () => {
    const dadobotaoEl = document.getElementById("dadobotao");
    expect(dadobotaoEl).not.toBeNull();
    expect(dadobotaoEl.hasAttribute("onclick")).toBeTrue();
    expect(dadobotaoEl.tagName.toLowerCase()).toBe("button");
  });
});

describe("Checagem Funcionalidades - ", () => {
  it("Quando o botão for clicado o valor da rolagem do dado deve ser randomizada e mostrada no paragrafo de id dado", () => {
    const valor = document.getElementById("dado");
    const rolarDado = document.getElementById("dadobotao");

    let isInsideRange = true;

    for (let i = 0; i < 100; i++) {
      rolarDado.onclick();
      const valorDoDado = +valor.textContent;

      if (valorDoDado > 6 || valorDoDado < 1) {
        isInsideRange = false;
        break;
      }
    }

    expect(isInsideRange).toBeTrue();
  });
});
