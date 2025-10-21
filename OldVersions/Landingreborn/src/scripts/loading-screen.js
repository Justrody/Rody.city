setTimeout(
    function() {
        window.location.href= "papers.html";
    },
    3500
);

const terminal = document.querySelector("#terminal");
//pega o elemento terminal da pagina para a construcao dos textos

function writeLine(text, delay = 500) {
    //funcao responsavel pela construcao dos textos no terminal
    return new Promise((resolve) => {
        //retorna uma nova promessa
        setTimeout(() => {
            //define um intervalo de tempo para realizar a acao de escrever o texto
            terminal.innerHTML += text + "<br>";
            //define que para o texto ser escrito vai ser a somatoria de texto + /n newline
            window.scrollTo(0, document.body.scrollHeight);
            //define o crescimento do body para scrolar ate a altura nessesaria
            resolve();

        }, delay);
    });
}

function writeConfigLine(text, delay = 500) {
    //funcao que define as configuracoes da criacao das linhas de texto na func anterior
    return new Promise((resolve) => {
        //retorna outra promessa com os atributus do texto
        setTimeout(() => {

            //define um intervalo de tempo para os atributos de texto serem escritos
            const configLine = document.createElement("div");
            configLine.classList.add("config-line");
            //cria um elemento de div em que vao se encontrar as primeiras mensagens do carregamento na loadscreen estilo terminal

            const tick = document.createElement("p");
            tick.textContent = "[✓]";
            //cria o elemento do tick de confere dentro do terminal

            const configText = document.createElement("span");
            configText.textContent = text;
            //ria um elemento de span e define que o conteudo desse texto e = a constante texto

            configLine.appendChild(tick);
            configLine.appendChild(configText);
            //adiciona esses eelementos dentro de configLine

            terminal.appendChild(configLine);
            //adiciona a linha de config dentro do #terminal
            window.scrollTo(0, document.body.scrollHeight);
            resolve();
            //mais um que define a altura do terminal para ela scrollar e crescer quando os elementos forem adicionados/criados
        }, delay);
    });
}
async function showFetch() {
    const container = document.createElement("section");
    container.classList.add("flex");
    container.classList.add("flex-wrap");

    const ascii = document.createElement("div");
    ascii.textContent = `
                                                           
   ********************************+++****                 
    +++++++++++++++++++++++++++++++++++++++***                    
       *++++++++++++++++++++++++++++++++++++++++*      
         *++++++++++++++++++++++++++++**+*+++++++**        
          *++++++++++++*               *++++++++++*        
            *++++++++++++*              +++++*+++++*       
              +++++++++++++++           *++++++++++*       
              ++++++++++++++++++       *+++*++++++*        
              ++++++++++++++++++++++++++++++++++**         
              +++++++++ *+++++++++++++++++++++**           
              +++++++++  *++++++++++++++++++**                    
              ++++++++++++++++++++***++++++++*             
              ++++++++++++++++**  **++*++++++++*           
              ++++++++++++++*       **+*+++++++++          
              ++++++++++**           **++*+++++*+**        
              +++++++**                **++*++*++++**      
              ++++**                     **+++++++++**     
              +**                         **++++++++++*    
                                                           
    `;
    ascii.classList.add("mobile-ascii");
    //cria a imagem em asciiart que e define seu conteudo

    const info = document.createElement("div");
    info.className = "fetch-info";
    info.innerHTML = `
    <b>@Always.Terminal</b>
    OS: MacWindows 21 Home Pirata Edition with kali
    Host: Rody's Potato PC
    Kernel: NT 13.0.19045 (gambi edition)
    Uptime: 23 hoCore Ultra 5 (sofrendo)
    GPU: NVIDIA RTX 5070 (...)
    Memory: 32768MiB / 32768MiB (tudo ocupado pelos meus 10 navegadores abertos)
    `;

container.appendChild(ascii);
container.appendChild(info);
terminal.appendChild(container);
}

async function initTerminal() {
      await writeLine("AlwaysOS [version 13.0.26100.4652]", 0);
      await writeLine("(c) AlwaysRody. Todos os direitos reservados.", 0);
      await writeLine("", 500);
      await writeLine("[BOOT] Inicializando módulo de kernel e serviços dependentes...", 600);
      await writeConfigLine("drivers.sys", 600);
      await writeConfigLine("initboot.dll", 500);
      await writeConfigLine("Always.dll", 500);
      await writeLine("", 500);
      await showFetch();
}

document.addEventListener("DOMContentLoaded", initTerminal);