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

    expect(genericTag)
      .withContext(`A tag ${tag} não tem o id ${id}, ou a tag não existe`)
      .not.toBeNull();

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

function checkLength(
  selector,
  selectorLength = 1,
  testDescription = "Teste de tamanho(length)-",
  customWarning = null
) {
  it(`${testDescription}`, () => {
    const checkLengthSelector = selector.length >= selectorLength;
    let message = customWarning;

    if (customWarning === null) {
      message = `O elemento ${selector} não tem length`;
    }

    expect(checkLengthSelector).withContext(message).not.toBeTrue();
  });
}

function formDispatchEvent(selectors = []) {
  /*
    const all = {tags: ["email", "nome"], value: [["jose","julio"], ["jose@gmail.com", "julio@gmail.com"]]};
  */
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

// checkLength(
//   list,
//   1,
//   "A listadeusuarios deve ser vazia no html",
//   "O elemento listadeusuarios não deve ter nenhum li dentro dele, os itens devem ser inseridos pelo javascript"
// );
