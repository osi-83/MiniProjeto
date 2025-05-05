document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formReflorestamento");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.querySelector("input[type='text']").value.trim();
        const senha = document.querySelector("input[type='password']").value.trim();
        const especie = document.getElementById("especie").value;

        if (!nome || !senha || !especie) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

        if (usuarioSalvo) {
            
            if (usuarioSalvo.nome === nome) {
                alert("Usuário já cadastrado.");
                return;
            }
        }

        const usuario = {
            nome,
            senha,
            avatar: especie
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));
        aplicarTema(especie);

        alert("Cadastro realizado com sucesso!");
        form.innerHTML = "<p>Usuário já cadastrado.</p>";
    });

    function aplicarTema(arvore) {
        const body = document.body;

        switch (arvore) {
            case "Pau Brasil":
                body.style.background = "#8b0000";
                break;
            case "Castanheira":
                body.style.background = "#5c4033";
                break;
            case "Peroba Rosa":
                body.style.background = "#d988a1";
                break;
            default:
                body.style.background = "#000000";
        }
    }
});