document.addEventListener("DOMContentLoaded", () => {
    let registrosReflorestamento = [
      { id: 1, especie: "Ipê", data_plantio: "2023-03-10", quantidade: 50, usuario_responsavel: "Osiel", qualidade_solo: "Boa", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Crescimento dentro do esperado." },
      { id: 2, especie: "Ângico", data_plantio: "2023-05-15", quantidade: 30, usuario_responsavel: "Maria Santos", qualidade_solo: "Regular", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Necessita mais água." },
      { id: 3, especie: "Aroeira", data_plantio: "2023-07-20", quantidade: 40, usuario_responsavel: "Carlos Oliveira", qualidade_solo: "Boa", frequencia_anotacao: "Diária", anotacoes_crescimento: "Árvores apresentando bom desenvolvimento." },
      { id: 4, especie: "Jequitibá", data_plantio: "2023-09-05", quantidade: 20, usuario_responsavel: "Ana Souza", qualidade_solo: "Ruim", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Solo compacto, dificultando crescimento." },
      { id: 5, especie: "Peroba do campo", data_plantio: "2023-11-12", quantidade: 35, usuario_responsavel: "Paulo Mendes", qualidade_solo: "Regular", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Crescimento irregular." },
      { id: 6, especie: "Ipê", data_plantio: "2024-01-18", quantidade: 45, usuario_responsavel: "Fernanda Lima", qualidade_solo: "Boa", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Plantas com bom enraizamento." },
      { id: 7, especie: "Ângico", data_plantio: "2024-02-25", quantidade: 27, usuario_responsavel: "Rafael Costa", qualidade_solo: "Ruim", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Necessita mais fertilização." },
      { id: 8, especie: "Aroeira", data_plantio: "2024-03-10", quantidade: 38, usuario_responsavel: "Beatriz Souza", qualidade_solo: "Regular", frequencia_anotacao: "Diária", anotacoes_crescimento: "Desenvolvimento estável." },
      { id: 9, especie: "Jequitibá", data_plantio: "2024-04-21", quantidade: 52, usuario_responsavel: "Lucas Almeida", qualidade_solo: "Boa", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Folhagem saudável." },
      { id: 10, especie: "Peroba do campo", data_plantio: "2024-05-30", quantidade: 33, usuario_responsavel: "Gabriela Ferreira", qualidade_solo: "Ruim", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Solo árido, precisa irrigação constante." },
      { id: 11, especie: "Ipê", data_plantio: "2024-06-14", quantidade: 60, usuario_responsavel: "Rodrigo Mendes", qualidade_solo: "Boa", frequencia_anotacao: "Diária", anotacoes_crescimento: "Crescendo conforme o esperado." },
      { id: 12, especie: "Ângico", data_plantio: "2024-07-19", quantidade: 25, usuario_responsavel: "Carolina Rocha", qualidade_solo: "Regular", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Vegetação estável." },
      { id: 13, especie: "Aroeira", data_plantio: "2024-08-05", quantidade: 40, usuario_responsavel: "Leonardo Pereira", qualidade_solo: "Boa", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Raízes bem desenvolvidas." },
      { id: 14, especie: "Jequitibá", data_plantio: "2024-09-10", quantidade: 18, usuario_responsavel: "Vivian Machado", qualidade_solo: "Ruim", frequencia_anotacao: "Diária", anotacoes_crescimento: "Necessita correção do solo." },
      { id: 15, especie: "Peroba do campo", data_plantio: "2024-10-15", quantidade: 43, usuario_responsavel: "Felipe Oliveira", qualidade_solo: "Boa", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Ótima adaptação ao clima." },
      { id: 16, especie: "Ipê", data_plantio: "2024-11-22", quantidade: 36, usuario_responsavel: "Mariana Santos", qualidade_solo: "Regular", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Plantas crescendo de forma uniforme." },
      { id: 17, especie: "Ângico", data_plantio: "2025-01-10", quantidade: 48, usuario_responsavel: "Diego Fernandes", qualidade_solo: "Boa", frequencia_anotacao: "Diária", anotacoes_crescimento: "Folhagem robusta e saudável." },
      { id: 18, especie: "Aroeira", data_plantio: "2025-02-05", quantidade: 29, usuario_responsavel: "Amanda Moreira", qualidade_solo: "Ruim", frequencia_anotacao: "Mensal", anotacoes_crescimento: "Necessita maior controle de pragas." },
      { id: 19, especie: "Jequitibá", data_plantio: "2025-03-12", quantidade: 56, usuario_responsavel: "Renato Cunha", qualidade_solo: "Regular", frequencia_anotacao: "Semanal", anotacoes_crescimento: "Bom crescimento inicial." },
      { id: 20, especie: "Peroba do campo", data_plantio: "2025-04-20", quantidade: 31, usuario_responsavel: "Juliana Castro", qualidade_solo: "Boa", frequencia_anotacao: "Diária", anotacoes_crescimento: "Desenvolvimento uniforme e vigoroso." }
      ];
      
      function normalize(str) {
        return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim() : "";
    }

    document.getElementById("formReflorestamento").addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = normalize(document.getElementById("nome").value);
        const especie = normalize(document.getElementById("especie").value);
        const resultadoDiv = document.getElementById("resultadoTabela");

        if (!resultadoDiv) {
            console.error("Erro: elemento 'resultadoTabela' não encontrado.");
            return;
        }

        console.log("Nome buscado:", nome);
        console.log("Espécie buscada:", especie);

        const resultados = registrosReflorestamento.filter(reg => 
            (nome === "" || normalize(reg.usuario_responsavel).includes(nome)) && 
            (especie === "" || normalize(reg.especie).includes(especie))
        );

        console.log("Registros filtrados:", resultados);

        if (resultados.length === 0) {
            resultadoDiv.innerHTML = "<p style='color:red;'>Nenhum registro encontrado.</p>";
            return;
        }

        let tabela = `<table border="1" cellpadding="6" cellspacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Espécie</th>
                    <th>Data de Plantio</th>
                    <th>Quantidade</th>
                    <th>Usuário</th>
                    <th>Qualidade do Solo</th>
                    <th>Frequência</th>
                    <th>Anotações</th>
                </tr>
            </thead>
            <tbody>`;

        resultados.forEach(reg => {
            tabela += `<tr>
                <td>${reg.id}</td>
                <td>${reg.especie}</td>
                <td>${reg.data_plantio}</td>
                <td>${reg.quantidade}</td>
                <td>${reg.usuario_responsavel}</td>
                <td>${reg.qualidade_solo}</td>
                <td>${reg.frequencia_anotacao}</td>
                <td>${reg.anotacoes_crescimento}</td>
            </tr>`;
        });

        tabela += `</tbody></table>`;
        resultadoDiv.innerHTML = tabela;
    });
});