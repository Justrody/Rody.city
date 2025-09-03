document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById("searchbar");
    const sections = document.getElementsByClassName("categoryes");
    const cardItems = document.getElementsByClassName("card-2");

 function performSearch() {
        // Pega o valor do input e converte para minúsculas.
        const filter = searchInput.value.toLowerCase();

        // Converte a coleção de seções em um array para usar o forEach.
        Array.from(sections).forEach(section => {
            // Pega o elemento h4 (titulo de cada card) dentro da seção.
            const itemName = section.querySelector("h4");

            // Verifica se o título existe e se o texto dele inclui o filtro da busca.
            if (itemName && itemName.textContent.toLowerCase().includes(filter)) {
                // se encontrar, rola a página suavemente até a seção.
                section.scrollIntoView({ behavior: "smooth", block: "start" });
                cardItems.classList.add("selected");
            }
        });
    }

    // Adiciona um evento que é acionado toda vez que o usuário digita algo.
    searchInput.addEventListener('keyup', performSearch);

    // Adiciona um evento para a tecla "Enter".
    searchInput.addEventListener('keypress', function(event) {
        // Se a tecla pressionada for "Enter", executa a busca.
        if (event.key === "Enter") {
            // Previne o comportamento padrão do "Enter" (como enviar um formulário).
            event.preventDefault(); 
            performSearch();
        }
    });
});