describe("HTML structure and textarea functionality", function () {
  let textArea, charCount, sendButton, errorMessage;

  beforeEach(function () {
    textArea = document.getElementById("text");
    charCount = document.getElementById("charCount");
    sendButton = document.getElementById("sendButton");
    errorMessage = document.getElementById("errorMessage");
  });

  it("should have all HTML elements with correct IDs", function () {
    expect(textArea).toBeDefined();
    expect(charCount).toBeDefined();
    expect(sendButton).toBeDefined();
    expect(errorMessage).toBeDefined();
  });

  // it("should update charCount when typing in textarea", function () {
  //   // Simula a digitação no textarea
  //   textArea.value = "Hello";
  //   const inputEvent = new Event("input");
  //   textArea.dispatchEvent(inputEvent);

  //   // Verifica se o contador de caracteres está correto
  //   expect(charCount.textContent).toBe("5");
  // });

  // it("should show error message if text length is less than 10 on send", function () {
  //   // Define o valor do textarea com menos de 10 caracteres
  //   textArea.value = "short";

  //   // Simula o clique no botão de envio
  //   sendButton.click();

  //   // Verifica se a mensagem de erro foi exibida
  //   expect(errorMessage.textContent).toBe(
  //     "Erro: número de caracteres inferior a 10"
  //   );
  // });
});
