let sheetDB = [];

for (let i = 0; i < row; i++) {
  let sheetRow = [];
  for (let j = 0; j < col; j++) {
    let cellProp = {
      bold: false,
      italic: false,
      underline: false,
      alignment: "left",
      fontFamily: "monospace",
      fontSize: "14",
      fontColor: "#000000",
      bgColor: "#000000",
    };
    sheetRow.push(cellProp);
  }
  sheetDB.push(sheetRow);
}

let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let alignment = document.querySelectorAll(".alignment");
let leftAlign = alignment[0];
let centreAlign = alignment[1];
let rightAlign = alignment[2];
let fontColor = document.querySelector(".fontColor");
let bgColor = document.querySelector(".bgColor");
let fontFamily = document.querySelector(".font-family-cell");
let fontSize = document.querySelector(".font-size-cell");
let activeColor = "#d1d8e0";
let nonActiveColor = "#ecf0f1";

bold.addEventListener("click", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.bold = !cellProp.bold; //toggle bold
  cell.style.fontWeight = cellProp.bold ? "bold" : "normal"; //UI change
  bold.style.backgroundColor = cellProp.bold ? activeColor : nonActiveColor;
});

italic.addEventListener("click", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.italic = !cellProp.italic; //toggle bold
  cell.style.fontStyle = cellProp.italic ? "italic" : "normal"; //UI change
  italic.style.backgroundColor = cellProp.italic ? activeColor : nonActiveColor;
});

underline.addEventListener("click", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.underline = !cellProp.underline; //toggle bold
  cell.style.textDecoration = cellProp.underline ? "underline" : "none"; //UI change
  underline.style.backgroundColor = cellProp.underline
    ? activeColor
    : nonActiveColor;
});

fontSize.addEventListener("change", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.fontSize = fontSize.value; //set value in db
  cell.style.fontSize = cellProp.fontSize + "px"; //UI change 1 in cells
  fontSize.value = cellProp.fontSize; //UI change 2 in props
});

fontFamily.addEventListener("change", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.fontFamily = fontFamily.value; //set value in db
  cell.style.fontFamily = cellProp.fontFamily; //UI change 1 in cells
  fontFamily.value = cellProp.fontFamily; //UI change 2 in props
});

fontColor.addEventListener("change", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.fontColor = fontColor.value; //set value in db
  cell.style.color = cellProp.fontColor; //UI change 1 in cells
  fontColor.value = cellProp.fontColor; //UI change 2 in props
});

bgColor.addEventListener("change", () => {
  let [cell, cellProp] = getActiveCell(addressBar);
  cellProp.bgColor = bgColor.value; //set value in db
  cell.style.backgroundColor = cellProp.bgColor; //UI change 1 in cells
  bgColor.value = cellProp.bgColor; //UI change 2 in props
});

alignment.forEach((alignElem) => {
  alignElem.addEventListener("click", (e) => {
    let [cell, cellProp] = getActiveCell(addressBar);
    let alignValue = e.target.classList[0];

    cellProp.alignment = alignValue; //db
    cell.style.textAlign = cellProp.alignment; //ui

    switch (alignValue) {
      case "left":
        leftAlign.style.backgroundColor = activeColor;
        centreAlign.style.backgroundColor = nonActiveColor;
        rightAlign.style.backgroundColor = nonActiveColor;
        break;
      case "center":
        leftAlign.style.backgroundColor = nonActiveColor;
        centreAlign.style.backgroundColor = activeColor;
        rightAlign.style.backgroundColor = nonActiveColor;
        break;
      case "right":
        leftAlign.style.backgroundColor = nonActiveColor;
        centreAlign.style.backgroundColor = nonActiveColor;
        rightAlign.style.backgroundColor = activeColor;
        break;
    }
  });
});

const getActiveCell = (addressBar) => {
  let [rId, cId] = decodeIdsfromAddress(addressBar);
  //acess particular cell
  let cell = document.querySelector(`.cell-box[rid="${rId}"][cid="${cId}"]`);
  let cellProp = sheetDB[rId][cId];
  return [cell, cellProp];
};

const decodeIdsfromAddress = () => {
  let cellValue = addressBar.value; //K4
  let rId = Number(cellValue.slice(1)) - 1; //3
  let cId = cellValue.charCodeAt(0) - 65; // 10
  return [rId, cId];
};
