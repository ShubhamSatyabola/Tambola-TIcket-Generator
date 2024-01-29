class Node {
  constructor() {
    this.A = new Array(3).fill(0).map(() => new Array(9).fill(0));
  }

  getRowCount(r) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      if (this.A[r][i] !== 0) {
        count++;
      }
    }
    return count;
  }

  getColCount(c) {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (this.A[i][c] !== 0) {
        count++;
      }
    }
    return count;
  }

  getEmptyCellInCol(c) {
    for (let i = 0; i < 3; i++) {
      if (this.A[i][c] === 0) {
        return i;
      }
    }
    return -1;
  }

  sortColumnWithThreeNumbers(c) {
    const emptyCell = this.getEmptyCellInCol(c);
    if (emptyCell !== -1) {
      throw new Error(
        "invalid function"
      );
    }
    const tempArr = [this.A[0][c], this.A[1][c], this.A[2][c]];
    tempArr.sort();
    for (let r = 0; r < 3; r++) {
      this.A[r][c] = tempArr[r];
    }
  }

  sortColumnWithTwoNumbers(c) {
    const emptyCell = this.getEmptyCellInCol(c);
    if (emptyCell === -1) {
      throw new Error(
        "invalid function"
      );
    }
    let cell1, cell2;
    if (emptyCell === 0) {
      cell1 = 1;
      cell2 = 2;
    } else if (emptyCell === 1) {
      cell1 = 0;
      cell2 = 2;
    } else {
      cell1 = 0;
      cell2 = 1;
    }
    if (this.A[cell1][c] < this.A[cell2][c]) {
      return;
    } else {
      const temp = this.A[cell1][c];
      this.A[cell1][c] = this.A[cell2][c];
      this.A[cell2][c] = temp;
    }
  }

  sortColumn(c) {
    if (this.getColCount(c) === 1) {
      return;
    } else if (this.getColCount(c) === 2) {
      this.sortColumnWithTwoNumbers(c);
    } else {
      this.sortColumnWithThreeNumbers(c);
    }
  }

  sortColumns() {
    for (let c = 0; c < 9; c++) {
      this.sortColumn(c);
    }
  }

  getTicketArray() {
    const ticketArray = [];
    for (let row = 0; row < 3; row++) {
      const rowArray = [];
      for (let col = 0; col < 9; col++) {
        rowArray.push(this.A[row][col]);
      }
      ticketArray.push(rowArray);
    }
    return ticketArray;
  }
}

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumberOfElementsInSet(set) {
  let count = 0;
  for (const li of set) {
    count += li.length;
  }
  return count;
}
// used for generating tickets
function generateTickets(){
  const nodes = new Array(6).fill(null).map(() => new Node());

  const l1 = Array.from({ length: 9 }, (_, i) => i + 1);
  const l2 = Array.from({ length: 10 }, (_, i) => i + 10);
  const l3 = Array.from({ length: 10 }, (_, i) => i + 20);
  const l4 = Array.from({ length: 10 }, (_, i) => i + 30);
  const l5 = Array.from({ length: 10 }, (_, i) => i + 40);
  const l6 = Array.from({ length: 10 }, (_, i) => i + 50);
  const l7 = Array.from({ length: 10 }, (_, i) => i + 60);
  const l8 = Array.from({ length: 10 }, (_, i) => i + 70);
  const l9 = Array.from({ length: 11 }, (_, i) => i + 80);

  const columns = [l1, l2, l3, l4, l5, l6, l7, l8, l9];

  const sets = new Array(6)
    .fill(null)
    .map(() => new Array(9).fill(null).map(() => []));

  for (let i = 0; i < 9; i++) {
    const li = columns[i];
    for (let j = 0; j < 6; j++) {
      const randNumIndex = getRand(0, li.length - 1);
      const randNum = li[randNumIndex];
      const set = sets[j][i];
      set.push(randNum);
      li.splice(randNumIndex, 1);
    }
  }

  const lastCol = columns[8];
  const randNumIndex = getRand(0, lastCol.length - 1);
  const randNum = lastCol[randNumIndex];
  const randSetIndex = getRand(0, sets.length - 1);
  const randSet = sets[randSetIndex][8];
  randSet.push(randNum);
  lastCol.splice(randNumIndex, 1);

  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < 9; i++) {
      const col = columns[i];
      if (col.length === 0) {
        continue;
      }
      const randNumIndex_p = getRand(0, col.length - 1);
      const randNum_p = col[randNumIndex_p];
      let vacantSetFound = false;
      while (!vacantSetFound) {
        const randSetIndex_p = getRand(0, sets.length - 1);
        const randSet_p = sets[randSetIndex_p];
        if (
          getNumberOfElementsInSet(randSet_p) === 15 ||
          randSet_p[i].length === 2
        ) {
          continue;
        }
        vacantSetFound = true;
        randSet_p[i].push(randNum_p);
        col.splice(randNumIndex_p, 1);
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const col = columns[i];
    if (col.length === 0) {
      continue;
    }
    const randNumIndex_p = getRand(0, col.length - 1);
    const randNum_p = col[randNumIndex_p];
    let vacantSetFound = false;
    while (!vacantSetFound) {
      const randSetIndex_p = getRand(0, sets.length - 1);
      const randSet_p = sets[randSetIndex_p];
      if (
        getNumberOfElementsInSet(randSet_p) === 15 ||
        randSet_p[i].length === 3
      ) {
        continue;
      }
      vacantSetFound = true;
      randSet_p[i].push(randNum_p);
      col.splice(randNumIndex_p, 1);
    }
  }

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 9; j++) {
      sets[i][j].sort();
    }
  }

  for (let setIndex = 0; setIndex < 6; setIndex++) {
    const currSet = sets[setIndex];
    const currTicket = nodes[setIndex];

    for (let size = 3; size > 0; size--) {
      if (currTicket.getRowCount(0) === 5) {
        break;
      }
      for (let colIndex = 0; colIndex < 9; colIndex++) {
        if (currTicket.getRowCount(0) === 5) {
          break;
        }
        if (currTicket.A[0][colIndex] !== 0) {
          continue;
        }
        const currSetCol = currSet[colIndex];
        if (currSetCol.length !== size) {
          continue;
        }
        currTicket.A[0][colIndex] = currSetCol.shift();
      }
    }

    for (let size = 2; size > 0; size--) {
      if (currTicket.getRowCount(1) === 5) {
        break;
      }
      for (let colIndex = 0; colIndex < 9; colIndex++) {
        if (currTicket.getRowCount(1) === 5) {
          break;
        }
        if (currTicket.A[1][colIndex] !== 0) {
          continue;
        }
        const currSetCol = currSet[colIndex];
        if (currSetCol.length !== size) {
          continue;
        }
        currTicket.A[1][colIndex] = currSetCol.shift();
      }
    }

    for (let size = 1; size > 0; size--) {
      if (currTicket.getRowCount(2) === 5) {
        break;
      }
      for (let colIndex = 0; colIndex < 9; colIndex++) {
        if (currTicket.getRowCount(2) === 5) {
          break;
        }
        if (currTicket.A[2][colIndex] !== 0) {
          continue;
        }
        const currSetCol = currSet[colIndex];
        if (currSetCol.length !== size) {
          continue;
        }
        currTicket.A[2][colIndex] = currSetCol.shift();
      }
    }
  }

    for (let i = 0; i < 6; i++) {
      const currTicket = nodes[i];
      currTicket.sortColumns();
    }
  
const generatedTickets = nodes.map((node) => node.getTicketArray());
return generatedTickets;
}


module.exports = generateTickets;
