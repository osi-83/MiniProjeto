const usuarios = [
    {
        nome: "Ana Castanheira",
        avatar: "/imagens/castanheira-madura.png",
        arvoresPlantadas: 1540
    },
    {
        nome: "Carlos Verde",
        avatar: "/imagens/pau-brasil-jovem.png",
        arvoresPlantadas: 1330
    },
    {
        nome: "Fernanda Pau-Brasil",
        avatar: "/imagens/peroba-rosa-jovem.png",
        arvoresPlantadas: 890
    },
    {
        nome: "Lucas Silva",
        avatar: "/imagens/peroba-rosa-broto.png",
        arvoresPlantadas: 350
    }
];

const topUsuarios = usuarios
    .sort((a, b) => b.arvoresPlantadas - a.arvoresPlantadas)
    .slice(0, 3);

const container = document.getElementById("destaques");

topUsuarios.forEach(usuario => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${usuario.avatar}" alt="Avatar de ${usuario.nome}" class="avatar">
        <h3>${usuario.nome}</h3>
    `;

    container.appendChild(card);
});