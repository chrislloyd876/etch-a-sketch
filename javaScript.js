const container =  document.querySelector("#container");


function randomColor(){
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    let rColor = "rgb(" + color1 + "," + color2 + "," + color3  + ")";
    return rColor;
}


for(let rowNum = 0; rowNum < 16; rowNum++){
    const row = document.createElement("div");
    row.classList.add('row');
    row.textContent = `${rowNum + 1}`;
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

