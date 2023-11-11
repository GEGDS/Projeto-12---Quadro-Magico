


//main
function fillGrid(size) {
  const gridContainer = document.getElementById("grid-container");
  //obtém o tamanho do container
  const containerSize = gridContainer.clientWidth; 
  //calcula o tamanho das celulas
  const cellSize = containerSize/size;


  gridContainer.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, ${cellSize}px)`;

  //Limpar 
  gridContainer.innerHTML = '';

  for (let i=0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    //Define altura e largura absoluta de cada célula
    gridItem.style.height = `${cellSize}px`;
    gridItem.style.width = `${cellSize}px`;
  

    gridContainer.appendChild(gridItem);
  }
  
}

fillGrid(2)



//Footer
const dataAtual = new Date();
const ano = dataAtual.getFullYear();

document.getElementById("data").textContent = ano;


