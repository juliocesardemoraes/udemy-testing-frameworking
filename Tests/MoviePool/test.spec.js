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
  validarTag(
    "nomesorteado",
    "p",
    null,
    "que vai mostrar o nome do usuário sorteado"
  );
});
