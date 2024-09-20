describe("Checagem HTML - ", () => {
  it('deve ter um textarea com id "text" e um atributo oninput', () => {
    const textarea = document.getElementById("text");
    expect(textarea).not.toBeNull();
    expect(textarea.hasAttribute("oninput")).toBeTrue();
  });

  it('deve ter um parágrafo com id "charCount"', () => {
    const charCount = document.getElementById("charCount");
    expect(charCount).not.toBeNull();
  });

  it('deve ter um botão com id "sendButton" e um atributo onclick', () => {
    const sendButton = document.getElementById("sendButton");
    expect(sendButton).not.toBeNull();
    expect(sendButton.hasAttribute("onclick")).toBeTrue();
  });

  it('deve ter um parágrafo com id "errorMessage"', () => {
    const errorMessage = document.getElementById("errorMessage");
    expect(errorMessage).not.toBeNull();
  });
});

describe("Checagem JS - ", () => {
  it("O botão deve chamar a função sendText quando clicado(onclick)", () => {
    // Spy on the sendText function
    spyOn(window, "sendText");

    const sendButton = document.getElementById("sendButton");
    sendButton.onclick();

    // Check if sendText was called
    expect(sendText).toHaveBeenCalled();
  });

  it("O textarea deve chamar a função checkTextarea quando tiver algum texto modificado(oninput)", () => {
    // Spy on the sendText function
    spyOn(window, "checkTextarea");

    const textarea = document.getElementById("text");
    textarea.oninput("Teste");

    // Check if sendText was called
    expect(checkTextarea).toHaveBeenCalled();
  });
});

describe("Checagem Funcionalidades - ", () => {
  it("Quando o checkTextarea for chamado modifique o charCount para ter o valor do número de caracteres do texto do textarea", () => {
    const textarea = document.getElementById("text");
    const charCount = document.getElementById("charCount");

    // Simulate setting the value of the textarea
    textarea.value = "Teste";

    // Create and dispatch the input event
    const event = new Event("input", { bubbles: true });
    textarea.dispatchEvent(event);

    expect(charCount.textContent).toBe("5");
  });

  it("Se o textarea tiver menos do que 5 caracteres escreva no paragrafo errorMessage Erro: O Número mínimo de caracteres é 5", () => {
    const textarea = document.getElementById("text");
    const errorMessage = document.getElementById("errorMessage");
    // Simulate setting the value of the textarea
    textarea.value = "Test";

    // Create and dispatch the input event
    const event = new Event("input", { bubbles: true });
    textarea.dispatchEvent(event);

    const checkText = errorMessage.textContent.includes("Erro") ? true : false;

    expect(checkText).toBeTrue();
  });

  it("Se o textarea tiver mais do que 100 caracteres escreva no paragrafo errorMessage Erro: O Número máximo de caracteres é 100", () => {
    const textarea = document.getElementById("text");
    const errorMessage = document.getElementById("errorMessage");
    // Simulate setting the value of the textarea

    let textToInsert = "";

    for (let i = 0; i < 20; i++) {
      textToInsert += "Teste De js";
    }
    textarea.value = textToInsert;

    // Create and dispatch the input event
    const event = new Event("input", { bubbles: true });
    textarea.dispatchEvent(event);

    const checkText = errorMessage.textContent.includes("Erro") ? true : false;

    expect(checkText).toBeTrue();
  });

  it("Se o textarea estiver entre 5 e 100 caracteres não deve mostrar erro no errorMessage", () => {
    const textarea = document.getElementById("text");
    const errorMessage = document.getElementById("errorMessage");
    // Simulate setting the value of the textarea

    let textToInsert = "Teste De js";
    textarea.value = textToInsert;

    // Create and dispatch the input event
    const event = new Event("input", { bubbles: true });
    textarea.dispatchEvent(event);

    const checkText = errorMessage.textContent.length === 0 ? true : false;
    expect(checkText).toBeTrue();
  });
});
