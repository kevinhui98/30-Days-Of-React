import React from 'react'

const NumberGen = () => {
    let grid = document.getElementById('grid');
    let cell = document.createElement('td');
    let numRows = 0;
    let numCols = 0;
    const PrimeFinder = (num) => {
        let isPrime = true;
        if (num > 2) {

            // looping through 2 to number-1
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                return true;
            } else {
                return false;
            }
        }
    }
    let newRow = grid.insertRow();
    newRow.setAttribute("id", "row" + numRows);
    for (let i = 0; i < 32; i++) {
        let row = document.getElementById("row" + (numRows));
        let newCol = row.insertCell();
        newCol.setAttribute("id", "col" + numCols);
        newCol.innerHTML = i;
        //change the color of the cell
        if (i / 8 > numRows) {
            numRows++;
            let newRow = grid.insertRow();
            newRow.setAttribute("id", "row" + numRows);
        }
        if (i % 2 === 0) {
            newCol.style.backgroundColor = "green";
        } else if (PrimeFinder(i)) {
            newCol.style.backgroundColor = "red";
        } else {
            newCol.style.backgroundColor = "yellow";
        }
    }

    return (
        <>
            <h1>Number Generator</h1>
            <table id='grid'>
            </table>
        </>
    )
}

export default NumberGen
