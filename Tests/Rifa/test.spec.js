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
});
