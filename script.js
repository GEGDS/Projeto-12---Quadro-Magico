//main
let activeColor = true;

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

  function handleMouseOver(gridItem) {
    if(activeColor) {
      let color = document.querySelector(".change-color").value;
      gridItem.style.backgroundColor = color;
    } 
  }

  for (let i=0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    //Define altura e largura absoluta de cada célula
    gridItem.style.height = `${cellSize}px`;
    gridItem.style.width = `${cellSize}px`;

    gridItem.addEventListener('mouseover', function() {
      handleMouseOver(gridItem)
    });
    gridContainer.appendChild(gridItem);
  }
}


function changeSize() {
  let setSize = document.getElementsByClassName("set-size")[0].value;
  return fillGrid(setSize)
};

function clickColor() {
  activeColor = !activeColor;
};

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(function(gridItem) {
      gridItem.style.backgroundColor = '';
  });
}



document.addEventListener('DOMContentLoaded', function () {
  changeSize();

  const gridContainer = document.getElementById("grid-container");

  gridContainer.addEventListener('click', clickColor)
});


//Footer
const dataAtual = new Date();
const ano = dataAtual.getFullYear();

document.getElementById("data").textContent = ano;


