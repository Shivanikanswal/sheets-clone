for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    let cell = document.querySelector(`.cell-box[rid="${i}"][cid="${j}"]`);
    cell.addEventListener("blur", (e) => {
      //get the value of innertext of active cell/cell on which blur event happened.
      let address = addressBar.value;
      let [activeCell, cellProp] = getActiveCell(address);
      let enteredValue = activeCell.innerText;
      cellProp.value = enteredValue; //addng value in db
    });
  }
}

//on enter on formulabar evaluate the result
let formulabar = document.querySelector(".formula-bar");

formulabar.addEventListener("keydown", (e) => {
  let formulaVal = formulabar.value;
  // console.log(formulaVal);
  if (e.key === "Enter" && formulaVal) {
    let evalVal = evaluateValue(formulaVal);
    // console.log(evalVal);
    setCellandCellProp(evalVal, formulaVal);
  }
});

//function for formula storing in db

//function to evaulate the formula
function evaluateValue(formulaVal) {
  return eval(formulaVal);
}

function setCellandCellProp(evalVal, formulaVal) {
  let address = addressBar.value;
  let [cell, cellProp] = getActiveCell(address);
  cell.innerText = evalVal;
  cellProp.value = evalVal;
  cellProp.formula = formulaVal;
}
