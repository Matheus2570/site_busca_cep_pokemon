async function fetchTop10Pokemon() {
    const pokemonListElement = document.getElementById("pokemonList");
    document.getElementById("loadingMessage").style.display = "block";

    for (let i = 1; i <= 5; i++) {
      try {
        // Requisição para API local ou PokéAPI diretamente
        const response = await fetch(`http://localhost:3000/pokemon/${i}`);

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do Pokemon");
        }

        const data = await response.json();

        // Criação do card do Pokemon
        const pokemonCard = document.createElement("div");
        pokemonCard.className = "pokemon-card";

        const pokemonImage = document.createElement("img");
        pokemonImage.src = data.image;
        pokemonImage.alt = `Imagem de ${data.name}`;
        pokemonImage.className = `pokemon-image`;

        const pokemonName = document.createElement("h3");
        pokemonName.textContent = data.name;

        const pokemonTypes = document.createElement("p");
        pokemonTypes.textContent = `Tipos: ${data.types}`;

        // Adicionando os elementos ao card
        pokemonCard.appendChild(pokemonImage);
        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonTypes);

        console.log(data);

        // Adicionando o card a lista
        pokemonListElement.appendChild(pokemonCard);
      } catch (error) {
        console.error(`Erro ao carregar informações do Pokemon`);
        

        // Exibição de erro na interface
        const errorCard = document.createElement("div");
        errorCard.className = "pokemon-card";
        errorCard.textContent = `Não foi possível carregar o Pokémon ID ${i}.`;
        pokemonListElement.appendChild(errorCard);
      }
    }
    document.getElementById("loadingMessage").style.display = "none";

  }

  fetchTop10Pokemon();