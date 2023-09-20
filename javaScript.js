const container =  document.querySelector("#container");

const resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = "Reset";
container.appendChild(resetButton);

function randomColor(){
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    let rColor = "rgb(" + color1 + "," + color2 + "," + color3  + ")";
    return rColor;
}

function getSquares(){
    let squareNumber = Number(prompt("How many squares do you want on each side?"));
    if(squareNumber > 99){
        alert("Too many squares! Please try again.");
    }
    else{
        const rows = document.querySelectorAll('.row');

        rows.forEach(row => {
            row.remove();
        });
    
         for(let rowNum = 0; rowNum < squareNumber; rowNum++){
            const row = document.createElement("div");
            row.classList.add('row');
            container.appendChild(row);
            for(let colNum = 0; colNum < squareNumber; colNum++){
                const column = document.createElement("div");
                column.classList.add('column');
                column.textContent = `${colNum + 1}`;
                row.appendChild(column);
                column.onmouseover = function(){
                    let rCol = randomColor();
                    column.style.backgroundColor = rCol;
                };
            }
        }
    }
}

for(let rowNum = 0; rowNum < 16; rowNum++){
    const row = document.createElement("div");
    row.classList.add('row');
    container.appendChild(row);
    for(let colNum = 0; colNum < 16; colNum++){
        const column = document.createElement("div");
        column.classList.add('column');
        column.textContent = `${colNum + 1}`;
        row.appendChild(column);
        column.onmouseover = function(){
            let rCol = randomColor();
            column.style.backgroundColor = rCol;
        };
    }
}

resetButton.addEventListener('click', getSquares);
