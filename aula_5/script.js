function imprime(objeto) {
    var mensagem = `
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

    return mensagem;
  }

async function getPostagem(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }

  function imprimeMensagem(objeto) {
    var mensagem;

    objeto.forEach(function (obj) {
      mensagem += `
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
    },
    <br>`;
    });

    return mensagem;
  }

  async function getPostagensSemID() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }


  function imprime(objeto) {
    var mensagem = `
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

    return mensagem;
  }

  async function postPostagens() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Nova Postagem",
        body: "Essa é a minha mais nova postagem! :D",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }

  
  function imprime(objeto) {
    var mensagem = `
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

    return mensagem;
  }

  async function atualizarPostagens() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
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
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }

  
  function imprime(objeto) {
    var mensagem = `
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

    return mensagem;
  }

  async function modificarPostagens(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "Essa é a modificação da minha mais nova postagem! :D",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }

  
  function imprime(objeto) {
    var mensagem = `
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

    return mensagem;
  }

  async function removerPostagem(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }

  function imprime(objeto) {
    var mensagem;

    objeto.forEach(function (obj) {
      mensagem += `
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
    },
    <br>`;
    });

    return mensagem;
  }

  async function filtrarPostagens(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        respjson.innerHTML = imprime(json);
      });
  }