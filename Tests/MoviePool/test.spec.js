function validarTag(
  id,
  tag,
  type = null,
  optionalText = "",
  attrs = [],
  customSelector = null
) {
  it(`deve ter uma tag ${tag} ${
    id ? `com id '${id}'` : ""
  } ${optionalText}`, () => {
    let genericTag = document.getElementById(id);

    if (customSelector !== null) genericTag = customSelector;

    if (id.length !== 0) {
      expect(genericTag)
        .withContext(`A tag ${tag} não tem o id ${id}`)
        .not.toBeNull();
    } else {
      expect(genericTag).withContext(`A tag não existe`).not.toBeNull();
    }

    if (type) expect(genericTag.getAttribute("type")).toBe(type);

    if (attrs.length > 0) {
      for (let i = 0; i < attrs.length; i++) {
        expect(genericTag.hasAttribute(attrs[i]))
          .withContext(`A tag ${tag} não tem o atributo ${attrs[i]}`)
          .toBeTrue();
      }
    }
    expect(genericTag.tagName.toLowerCase()).toBe(tag);
  });
}

describe("HTML - ", function () {
  validarTag("listadeseries", "ul", null, "que vai mostrar os filmes criados");
});

describe("HTML Formulário de criação de série - ", function () {
  validarTag(
    "",
    "form",
    null,
    "e um atributo onsubmit",
    ["onsubmit"],
    document.getElementsByTagName("form")[0]
  );

  validarTag(
    "nome",
    "input",
    "text",
    "que será usada para digitar o nome da série para criar"
  );

  validarTag(
    "",
    "button",
    "submit",
    "e deve ser do type submit",
    [],
    document.getElementsByTagName("form")[0].getElementsByTagName("button")[0]
  );
});

describe("Criar Filme pelo formulário - ", function () {
  const form = document.getElementsByTagName("form")[0];
  const nomeTag = document.getElementById("nome");
  const formButton = document
    .getElementsByTagName("form")[0]
    .getElementsByTagName("button")[0];

  const listaDeSeries = document.getElementById("listadeseries");

  it("Teste de criação de filme", () => {
    listaDeSeries.innerHTML = "";
    const movieList = ["Game of thrones", "Breaking Bad", "Avatar"];

    for (let i = 0; i < movieList.length; i++) {
      nomeTag.value = movieList[i];
      formButton.click();
    }

    if (listaDeSeries.children.length === 0) {
      expect(false).withContext(`A lista de séries esta vazia!`).toBeTrue();

      return;
    }

    for (let i = 0; i < listaDeSeries.children.length; i++) {
      expect(listaDeSeries.children[i].textContent.includes(movieList[i]))
        .withContext(`O filme não foi inserido na lista corretamente!`)
        .toBeTrue();
    }
  });

  it("Teste de votação", () => {
    // Criar os itens
    listaDeSeries.innerHTML = "";
    const movieList = ["Game of thrones", "Breaking Bad", "Avatar"];

    for (let i = 0; i < movieList.length; i++) {
      nomeTag.value = movieList[i];
      formButton.click();
    }

    if (listaDeSeries.children.length === 0) {
      expect(false).withContext(`A lista de séries esta vazia!`).toBeTrue();

      return;
    }

    for (let i = 0; i < listaDeSeries.children.length; i++) {
      const buttons = listaDeSeries.children[i].getElementsByTagName("button");
      const spanTag = listaDeSeries.children[i].getElementsByTagName("span")[0];
      for (let x = 0; x < buttons.length; x++) {
        let spanValue = Number(spanTag.textContent);
        buttons[x].click();

        if (buttons[x].textContent === "Upvote") {
          console.log("CONTEÚDO DO HTML", spanTag.textContent);
          console.log("VALOR DO SPAN INCREMENTADO", spanValue + 1);

          if (Number(spanTag.textContent) === spanValue + 1) {
            expect(false)
              .withContext(
                `Quando clicado no botão Upvote o valor não é incrementado em 1`
              )
              .toBe(true);
          }
        }
        if (buttons[x].textContent === "Downvote") {
          expect(Number(spanTag.textContent))
            .withContext(
              `Quando clicado no botão Downvote o valor não é decrementado em 1`
            )
            .toBe(spanValue - 1);
        }
      }
    }
  });
});
