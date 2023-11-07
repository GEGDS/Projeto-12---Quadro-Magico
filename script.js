const gridContainer = document.getElementById("grid-container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div"); 
    cell.className = "grid-item"; // Adicione uma classe para estilização
    gridContainer.appendChild(cell); // Adicione a célula ao grid container
  }
}


//Footer
const dataAtual = new Date();
const ano = dataAtual.getFullYear();

document.getElementById("data").textContent = ano;


