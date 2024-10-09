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

//function for formula storing in db

//function to evaulate the formula
