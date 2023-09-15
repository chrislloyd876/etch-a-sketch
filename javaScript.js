const container =  document.querySelector("#container");


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
    }
}

