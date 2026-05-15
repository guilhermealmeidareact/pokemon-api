// Elementos do DOM
const input = document.querySelector("#inputPokemon");
const botao = document.querySelector("#botaoBuscar");
const cartao = document.querySelector("#cartaoPokemon");
const erroMsg = document.querySelector("#mensagemErro");

// Elementos dentro do cartão
const foto = document.querySelector("#fotoPokemon");
const nome = document.querySelector("#nomePokemon");
const tipo = document.querySelector("#tipoPokemon");
const peso = document.querySelector("#pesoPokemon");

async function buscarPokemon() {

    const nomeBusca = input.value.toLowerCase().trim();

    // Resetar a tela (esconder erro e cartão)
    erroMsg.classList.add("hidden");
    cartao.classList.add("hidden");

    if (nomeBusca === "") return;

    try {

        const url = `https://pokeapi.co/api/v2/pokemon/${nomeBusca}`;
        const resposta = await fetch(url);

        if (!resposta.ok) throw new Error();

        const dados = await resposta.json();

        // 3. Injetar os dados no HTML
        nome.innerText = dados.name.toUpperCase();
        peso.innerText = dados.weight / 10;
        tipo.innerText = dados.types[0].type.name;
        foto.src = dados.sprites.front_default;

        cartao.classList.remove("hidden");

    } catch (erro) {

        erroMsg.classList.remove("hidden");
    }
}

botao.addEventListener("click", buscarPokemon);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") buscarPokemon();
});