setTimeout (
    function() {
        window.location.href= "../papers.html";
    }, 3900
)

const terminal = document.querySelector("#terminal");

function terminalWrite(text, delay = 500) {
    return new Promise((resolve) => {

        setTimeout(() => {
            terminal.innerHTML += text + "<br>";
            window.scrollTo(0, document.body.scrollHeight);
            resolve();
        }, delay);
    });
}
function configWrite(text, delay = 400) {
    return new Promise((resolve) => {
        setTimeout(() => {


            const settingsLine = document.createElement("div");
            settingsLine.classList.add("config-line");

            const check = document.createElement("span")
            check.textContent = "[✅]";

            const settingsText = document.createElement("p");
            settingsText.textContent = text;

            settingsLine.appendChild(check);
            settingsLine.appendChild(settingsText);
            terminal.appendChild(settingsLine);
            window.scrollTo(0, document.body.scrollHeight);
            resolve();
        }, delay);
    });
}
async function fetch() {
    const container = document.createElement("section");
    container.classList.add("flex");
    container.classList.add("flex-wrap");

    const ascii = document.createElement("pre");
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

    const info = document.createElement("div");
    info.className = "fetch-info";
    info.innerHTML = `
    <b>@Always.Terminal</b>
    <b>OS: MacWindows 21 Home Pirata Edition with kali</b>
    <b>Host: Rody's Potato PC</b>
    <b>Kernel: NT 13.0.19045 (gambi edition)</b>
    <b>Uptime: 23 hoCore Ultra 5 (sofrendo)</b>
    <b>GPU: NVIDIA RTX 5070 (...)</b>
    <b>Memory: 32768MiB / 32768MiB</b>
    `;
    container.appendChild(ascii);
    container.appendChild(info);
    terminal.appendChild(container);
}

async function initTerminal() {
      await terminalWrite("AlwaysOS [version 13.0.26100.4652]", 0);
      await terminalWrite("(c) AlwaysRody. Todos os direitos reservados.", 0);
      await terminalWrite("", 500);
      await terminalWrite("[BOOT] Inicializando módulo de kernel e serviços dependentes...", 600);
      await configWrite("drivers.sys", 600);
      await configWrite("initboot.dll", 500);
      await configWrite("Always.dll", 500);
      await terminalWrite("", 500);
      await fetch();
}

document.addEventListener("DOMContentLoaded", initTerminal);