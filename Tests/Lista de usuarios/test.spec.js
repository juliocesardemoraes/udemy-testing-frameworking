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
    if (typeof customSelector === "string") {
      expect(genericTag)
        .withContext(`O elemento pai não existe`)
        .not.toBeUndefined();
    }

    let genericTag = document.getElementById(id);

    if (customSelector !== null) {
      genericTag = customSelector;
    }

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

describe("Html Form - ", () => {
  const formEl = document.getElementsByTagName("form")[0];

  let formButtonSelector = "";
  if (formEl) {
    formButtonSelector = formEl.querySelector("button");
  }

  validarTag("nome", "input", "text", "e deve ser do type text");
  validarTag("email", "input", "email", "e deve ser do type email");
  validarTag("", "form", null, "e um atributo onsubmit", ["onsubmit"], formEl);
  validarTag(
    "",
    "button",
    "submit",
    "e deve ser do type submit",
    [],
    formButtonSelector
  );
  validarTag("listadeusuarios", "ul", null, "para listar os usuários", []);
});

describe("Funcionalidade Form - ", () => {
  const list = document
    .getElementById("listadeusuarios")
    .getElementsByTagName("li");

  const listParent = document.getElementById("listadeusuarios");

  const user = document.getElementById("nome");
  const email = document.getElementById("email");
  const addUserForm = document.getElementsByTagName("form")[0];

  const event = document.createEvent("Event");
  event.initEvent("submit", true, true);

  listParent.replaceChildren();

  const automateUserCreation = (userValue, emailValue) => {
    user.value = userValue;
    email.value = emailValue;
    addUserForm.dispatchEvent(event);
  };

  const usersToCreate = [
    { user: "julio 2010", email: "jcmcf2010@gmail.com" },
    { user: "zephe", email: "jcmcf2@gmail.com" },
    { user: "ninja", email: "jcmcf3@gmail.com" },
  ];

  it("Quando o usuário for criado devemos ter este usuário no listadeusuarios", () => {
    for (let i = 0; i < usersToCreate.length; i++) {
      automateUserCreation(usersToCreate[i].user, usersToCreate[i].email);
    }

    if (list.length === 0) {
      expect(false)
        .withContext(`Erro na inserção de itens pelo formulário na lista html`)
        .toBeTrue();
    }

    for (let i = 0; i < list.length; i++) {
      const noEmail = list[i].textContent.includes(usersToCreate[i].email);
      const noUser = list[i].textContent.includes(usersToCreate[i].user);
      expect(noEmail).withContext(`O email não existe na lista`).toBeTrue();
      expect(noUser)
        .withContext(`O nome do usuário não existe na lista`)
        .toBeTrue();
    }
  });
});
