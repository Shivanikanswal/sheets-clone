let row = 100;
let col = 26;

let addressColRows = document.querySelector(".address-col-cont");
let addressRowCols = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar");

for (let i = 0; i < row; i++) {
  let addressColCells = document.createElement("div");
  addressColCells.setAttribute("class", "address-col");
  addressColCells.innerText = i + 1;
  addressColRows.appendChild(addressColCells);
}

for (let i = 0; i < col; i++) {
  let addressRowCells = document.createElement("div");
  addressRowCells.setAttribute("class", "address-row");
  addressRowCells.innerText = String.fromCharCode(65 + i);
  addressRowCols.appendChild(addressRowCells);
}

for (let i = 0; i < row; i++) {
  let cellRow = document.createElement("div");
  cellRow.setAttribute("class", "cell-row");
  for (let j = 0; j < col; j++) {
    let cellBox = document.createElement("div");
    cellBox.setAttribute("class", "cell-box");
    cellBox.setAttribute("contenteditable", "true");
    cellBox.setAttribute("spellcheck", "false");
    cellBox.setAttribute("rid", i);
    cellBox.setAttribute("cid", j);
    cellRow.appendChild(cellBox);
    addEventAddressBar(cellBox, i, j);
  }
  cellsCont.appendChild(cellRow);
}

function addEventAddressBar(cellBox, i, j) {
  cellBox.addEventListener("click", (e) => {
    let rowID = i + 1;
    let colID = String.fromCharCode(65 + j);
    addressBar.value = `${colID}${rowID}`;
  });
}
