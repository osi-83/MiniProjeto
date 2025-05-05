document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("perfilUsuario");
  const avatarDiv = document.querySelector(".avatar-info");
  const botaoSalvarBio = document.getElementById("salvarBio");
  const botaoEntrar = document.getElementById("entrar");

  let usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado. Redirecionando para cadastro.");
    window.location.href = "index1.html";
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome === usuarioSalvo.nome && senha === usuarioSalvo.senha) {
      avatarDiv.style.display = "grid";
                       
      document.getElementById("usuarioAvatar").textContent =
        usuarioSalvo.avatar;
      document.getElementById("qtdArvores").textContent =
        usuarioSalvo.qtdArvores || 0;
      document.getElementById("bio").value = usuarioSalvo.bio || "";

      const img = document.getElementById("imgAvatar");
      
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.position = "relative";
      img.style.left = "50%";
      img.src = obterImagem(usuarioSalvo.avatar, usuarioSalvo.qtdArvores || 0);
      img.alt = `Avatar da árvore ${usuarioSalvo.avatar}`;

      document.getElementById("nome").disabled = true;
      document.getElementById("senha").style.display = "none";
      botaoEntrar.style.display = "none";  
    } else {
      alert("Usuário ou senha incorretos!");
    }
  });

  document.getElementById("bio").addEventListener("input", () => {
    usuarioSalvo.bio = document.getElementById("bio").value;
    localStorage.setItem("usuario", JSON.stringify(usuarioSalvo));
  });

  botaoSalvarBio.addEventListener("click", () => {
    usuarioSalvo.bio = document.getElementById("bio").value;
    localStorage.setItem("usuario", JSON.stringify(usuarioSalvo));
    alert("Bio atualizada com sucesso!");
  });

  function obterImagem(arvore, qtd) {
    let estagio = "plantada";
    if (qtd >= 1500) estagio = "madura";
    else if (qtd >= 700) estagio = "jovem";
    else if (qtd >= 300) estagio = "broto";

    const nomes = {
      "Pau Brasil": "pau-brasil",
      "Castanheira": "castanheira",
      "Peroba Rosa": "peroba-rosa",
    };

    return `imagens/${nomes[arvore]}-${estagio}.png`;
  }

});