describe("Checagem HTML - ", () => {
  it('deve ter um campo de paragrafo com o id "moeda" que vai mostrar o resultado do lançamento', () => {
    const moedaEl = document.getElementById("moeda");
    expect(moedaEl).not.toBeNull();
    expect(moedaEl.tagName.toLowerCase()).toBe("p");
  });

  it('deve ter um botão com id "lancarmoeda" e um atributo onclick', () => {
    const lancarmoedaEl = document.getElementById("lancarmoeda");
    expect(lancarmoedaEl).not.toBeNull();
    expect(lancarmoedaEl.hasAttribute("onclick")).toBeTrue();
  });
});

describe("Checagem Funcionalidades - ", () => {
  it("Quando o botão for clicado o valor da rolagem da moeda deve ser randomizada e mostrada no paragrafo de id moeda", () => {
    const valor = document.getElementById("moeda");
    const lancarmoeda = document.getElementById("lancarmoeda");

    const rolagens = [];

    for (let i = 0; i < 100; i++) {
      lancarmoeda.onclick();
      rolagens.push(valor.textContent);
    }

    const isRandom = rolagens.includes("cara") && rolagens.includes("coroa");

    expect(isRandom).toBeTrue();
  });
});
