//seleciona o botao na nav
const modalNavButton = document.querySelector(".list-items-modal button");
//pega o modal (lista de itens)
const modalTools = document.querySelector(".modal-tools");


//cria um eent listner que detecta se esta clicando no botao e utiliza o tailwind para deixar em show o modal
modalNavButton.addEventListener("click", (e) => {
  e.stopPropagation();
  modalTools.classList.toggle("hidden");
});

//detecta se ha algum click fora do modal e o fecha caso haja
document.addEventListener("click", (e) => {
  if (!modalTools.contains(e.target) && !modalNavButton.contains(e.target)) {
    modalTools.classList.add("hidden");
  }
});



//script de sorteio 

document.addEventListener("DOMContentLoaded", () => {
  const minNumber = document.querySelector("#number-drawn-min");
  const maxNumber = document.querySelector("#number-drawn-max");
  const numberTotals = document.querySelector("#number-drawn-total");

  const drawButton = document.querySelector(".first-drawn-button");
  const drawButtonAgain = document.querySelector(".drawn-again-button");
  const numberDrawResults = document.querySelector("#draw-result");
  const drawNumbersContainer = document.querySelector("#draw-numbers-container");
  const firstDrawnInputs = document.querySelector("#draw-inputs")

  function removeNonNumeric(inputElement) {
    inputElement.oninput = () => {
      inputElement.value = inputElement.value.replace(/\D/g, '');
    };
  }

  [minNumber, maxNumber, numberTotals].forEach(removeNonNumeric);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function buildNumberResult(min, max) {
    const numberContainer = document.createElement("div");
    const resultNumber = document.createElement("span");
    resultNumber.classList.add("result-style");

    const randomNumber = getRandomIntInclusive(min, max);
    resultNumber.innerText = String(randomNumber);
    numberContainer.appendChild(resultNumber);
    drawNumbersContainer.appendChild(numberContainer);
  }

  function drawnNumber() {
    drawNumbersContainer.innerHTML = "";

    const min = Number(minNumber.value);
    const max = Number(maxNumber.value);
    let numbersQuantity = Number(numberTotals.value);

    const range = max - min + 1;
    if (numbersQuantity > range) numbersQuantity = range;

    for (let i = 0; i < numbersQuantity; i++) {
      setTimeout(() => buildNumberResult(min, max), 500 * i);
    }

    setTimeout(() => {
      drawButtonAgain.style.display = "block";
    }, 500 * numbersQuantity + 500);
  }

  drawButton.onclick = (event) => {
    event.preventDefault();
    drawnNumber();
    drawButton.style.display = "none";
    firstDrawnInputs.classList.add("hide");
    numberDrawResults.classList.remove("hide");
    numberDrawResults.classList.add("show-totals");
  };

  drawButtonAgain.onclick = (event) => {
    event.preventDefault();
    drawNumbersContainer.innerHTML = "";
    drawnNumber();
  };
});