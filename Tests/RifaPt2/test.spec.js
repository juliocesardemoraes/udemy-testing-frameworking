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

describe("Checagem HTML - ", () => {
  validarTag(
    "nomesorteado",
    "p",
    null,
    "que vai mostrar o nome do usuário sorteado"
  );
  validarTag("sortearbotao", "button", null, "e um atributo onclick", [
    "onclick",
  ]);
  validarTag(
    "",
    "form",
    null,
    "e um atributo onsubmit",
    ["onsubmit"],
    document.getElementsByTagName("form")[0]
  );
});

describe("Validacao Form - ", () => {
  validarTag("nome", "input", "text", "e deve ser do type text");
  validarTag("email", "input", "email", "e deve ser do type email");
  validarTag(
    "",
    "button",
    "submit",
    "e deve ser do type submit",
    [],
    document.getElementsByTagName("form")[0].getElementsByTagName("button")[0]
  );
});

function formDispatchEvent(selectors = []) {
  /*
    const all = {tags: ["email", "nome"], value: [["jose","julio"], ["jose@gmail.com", "julio@gmail.com"]]};
  */
  console.log("SELECTORS", selectors);
  const formElement = document.getElementsByTagName("form")[0];
  const event = document.createEvent("Event");
  event.initEvent("submit", true, true);

  for (let i = 0; i < selectors.value[0].length; i++) {
    for (let x = 0; x < selectors.tags.length; x++) {
      const elementToGet = document.getElementById(selectors.tags[x]);
      elementToGet.value = selectors.value[x][i];
    }
    formElement.dispatchEvent(event);
  }
}

describe("Checagem Funcionalidades - ", () => {
  it("Quando o botão Criar usuário for clicado o usuário do formulário deve ser adicionado no array nomes", () => {
    nomes = [];
    const namesToAdd = ["jose", "julio"];
    const emailsToAdd = ["jose@gmail.com", "julio@gmail.com"];
    const all = { tags: ["nome", "email"], value: [namesToAdd, emailsToAdd] };
    formDispatchEvent(all);

    if (nomes.length === 0) {
      expect(false)
        .withContext(
          `O nome não foi inserido corretamente quando o formulário foi clicado`
        )
        .toBeTrue();
    }

    for (let i = 0; i < nomes.length; i++) {
      if (!namesToAdd.includes(nomes[i].nome)) {
        expect(false)
          .withContext(`O nome não foi incluido corretamente no array de nomes`)
          .toBeTrue();
      }
      if (!emailsToAdd.includes(nomes[i].email)) {
        expect(false)
          .withContext(
            `O email não foi incluido corretamente no array de nomes`
          )
          .toBeTrue();
      }
    }
  });

  it("Quando o botão for clicado um usuário deve ser sorteado do array nomes e mostrado na tag nomesorteado", () => {
    const valorEl = document.getElementById("nomesorteado");
    const botaoEl = document.getElementById("sortearbotao");

    nomes = [];
    const namesToAdd = ["jose", "julio"];
    const emailsToAdd = ["jose@gmail.com", "julio@gmail.com"];
    const all = { tags: ["nome", "email"], value: [namesToAdd, emailsToAdd] };
    formDispatchEvent(all);

    botaoEl.click();

    if (valorEl.textContent.length === 0) {
      expect(false)
        .withContext(`A tag nomesorteado está com o valor vazio`)
        .toBeTrue();

      return;
    }

    const randomProbability = {};

    for (let i = 0; i < nomes.length; i++) {
      randomProbability[nomes[i].nome] = 0;
    }

    for (let i = 0; i < 100; i++) {
      botaoEl.click();
      if (!namesToAdd.includes(valorEl.textContent)) {
        expect(false)
          .withContext(`O nome não foi sorteado corretamente`)
          .toBeTrue();

        break;
      } else {
        randomProbability[valorEl.textContent]++;
      }
    }

    if (randomProbability["julio"] === 0 || randomProbability["jose"] === 0) {
      expect(false)
        .withContext(
          `O código não está randomico, caso esteja implementado a randomicidade tente novamente`
        )
        .toBeTrue();
    }
  });
});
