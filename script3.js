document.getElementById("formReflorestamento").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("nome").value.trim();
    const quantidade = parseInt(document.getElementById("quantidade").value, 10);
    const especie = document.getElementById("especie").value;

    if (!quantidade || especie === "") {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const novoRegistro = criarReflorestamentoJSON(quantidade, especie, usuario);

    console.log("Novo registro criado:", novoRegistro);

    const resultadoDiv = document.getElementById("saidaJson");

    let tabela = `
      <table border="1" cellpadding="6" cellspacing="0">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Quantidade</th>
            <th>Espécie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${novoRegistro.usuario || "N/A"}</td>
            <td>${novoRegistro.quantidade}</td>
            <td>${novoRegistro.especie}</td>
          </tr>
        </tbody>
      </table>
      <p><strong>Modelo JSON para envio ao back-end:</strong></p>
      <pre>${JSON.stringify(novoRegistro, null, 2)}</pre>
    `;

    resultadoDiv.innerHTML = tabela;
});

function criarReflorestamentoJSON(quantidade, especie, usuario = "") {
    return {
        usuario: usuario,
        quantidade: quantidade,
        especie: especie
    };
}