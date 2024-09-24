describe("SETUP", function () {
  beforeEach(function () {
    jasmine.getFixtures().load("gorjeta.html"); // load a template
  });

  it('deve ter um input com id "valor" e deve ser de type number', () => {
    const valorEl = document.getElementById("valor");
    expect(valorEl).not.toBeNull();
    expect(valorEl.getAttribute("type")).toBe("number");
    expect(valorEl.tagName.toLowerCase()).toBe("input");
  });

  it('deve ter um input com id "porcentagem" e deve ser de type number', () => {
    const porcentagemEl = document.getElementById("porcentagem");
    expect(porcentagemEl).not.toBeNull();
    expect(porcentagemEl.getAttribute("type")).toBe("number");
    expect(porcentagemEl.tagName.toLowerCase()).toBe("input");
  });

  it('deve ter um botão com id "calculateTip" e um atributo onclick', () => {
    const calculateTipEl = document.getElementById("calculateTip");
    expect(calculateTipEl).not.toBeNull();
    expect(calculateTipEl.hasAttribute("onclick")).toBeTrue();
    expect(calculateTipEl.tagName.toLowerCase()).toBe("button");
  });

  it('deve ter um paragrafo com id "gorjeta"', () => {
    const gorjetaEl = document.getElementById("gorjeta");
    expect(gorjetaEl).not.toBeNull();
    expect(gorjetaEl.tagName.toLowerCase()).toBe("p");
  });

  it("Quando o botão for clicado o valor da gorjeta deve ser calculada e mostrado no paragrafo de id gorjeta", () => {
    const valor = document.getElementById("valor");
    const porcentagem = document.getElementById("porcentagem");
    const gorjetaTag = document.getElementById("gorjeta");
    const calculateTipButton = document.getElementById("calculateTip");

    valor.value = 100;
    porcentagem.value = 10;

    calculateTipButton.onclick();

    const gorjetaReturn = Number(valor.value / 100) * Number(porcentagem.value);
    console.log("O seu código retornou: " + gorjetaTag.textContent);
    console.log("O retorno correto seria: " + gorjetaReturn);

    calculateTipButton.onclick();
    expect(Number(gorjetaTag.textContent)).toBe(gorjetaReturn);
  });
});
