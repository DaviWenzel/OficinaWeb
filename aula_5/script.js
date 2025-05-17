function imprime(objeto) {
  if (Array.isArray(objeto)) {
    return objeto
      .map(
        (obj) => `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${obj.id},
        <br>
        "<span class='campo'>userId</span>": ${obj.userId},
        <br>
        "<span class='campo'>title</span>": ${obj.title},
        <br>
        "<span class='campo'>body</span>": ${obj.body}
        <br>
      }
      <br>`
      )
      .join("");
  } else {
    return `
      <br>
      {
        <br>
        "<span class='campo'>id</span>": ${objeto.id},
        <br>
        "<span class='campo'>userId</span>": ${objeto.userId},
        <br>
        "<span class='campo'>title</span>": ${objeto.title},
        <br>
        "<span class='campo'>body</span>": ${objeto.body}
        <br>
      }
      <br>`;
  }
}

async function getPostagem(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const json = await response.json();
  console.log(json);
  respjson.innerHTML = imprime(json);
}

async function getPostagens() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const json = await response.json();
  console.log(json);
  respjson.innerHTML = imprime(json);
}

async function postPostagens() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "Nova Postagem",
      body: "Essa é a minha mais nova postagem! :D",
      userId: 1,
    }),
  });
  const json = await response.json();
  console.log(json);
  respjson.innerHTML = imprime(json);
}

async function atualizarPostagens() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      id: 1,
      title: "Minha Mais Nova Postagem",
      body: "Essa é a atualização da minha mais nova postagem! :D",
      userId: 1,
    }),
  });
  const json = await response.json();
  console.log(json);
  respjson.innerHTML = imprime(json);
}

async function modificarPostagens(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "Essa é a modificação da minha mais nova postagem! :D",
    }),
  });
  const json = await response.json();
  console.log(json);
  respjson.innerHTML = imprime(json);
}

async function removerPostagem(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  const json = await response.json();
  console.log(json);
  respjson.innerHTML = imprime(json);
}
