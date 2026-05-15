// 1. O "async" antes da função avisa que usaremos tarefas demoradas (assíncronas)
// 2. O "nomeDoPokemon" dentro dos parênteses é a nossa caixa vazia (parâmetro)
async function buscarPokemon(nomeDoPokemon) {
    
    console.log(`Iniciando a busca pelo ${nomeDoPokemon}...`);

    try {

            // 3. Usamos as crases (`) e o ${ } para colar a variável no final do link
    let urlDaApi = `https://pokeapi.co/api/v2/pokemon/${nomeDoPokemon}`;
    
    // 4. O "await" manda o código pausar e ESPERAR o "fetch" ir na internet buscar os dados
    let resposta = await fetch(urlDaApi); 

    // 2. A verificação manual: A resposta da API foi OK?
        if (resposta.ok === false) {
            // O "throw" lança um erro de propósito, jogando o código direto pro "catch"
            throw new Error(`Pokémon "${nomeDoPokemon}" não encontrado ou não existe!`); 
        }
    
    // 5. O "await" novamente faz o código ESPERAR a conversão do pacote para um Objeto Javascript
    let dados = await resposta.json();
    
    // 6. Imprimimos as informações acessando as propriedades do Objeto (Tópico 2)
    console.log(`O nome dele é: ${dados.name}`);
    console.log(`O peso dele é: ${dados.weight}`);
    console.log(`O tipo dele é: ${dados.types[0].type.name}`);
    console.log("---------------------------------");

    } catch (erro) {
        // Imprimimos a mensagem do erro na tela de forma amigável
        console.log(`Puxa, deu um problema: ${erro.message}`);
        console.log("---------------------------------");
    }
}

buscarPokemon("Scizor");
buscarPokemon("Frederico");
