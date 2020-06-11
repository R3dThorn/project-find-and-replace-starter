const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")
const replaceSingle = document.getElementById("replace-toggle")

function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

replaceAllButton.addEventListener("click", function() {
    let finderInput = findInput.value
    let replacerInput = replaceInput.value
    let replacerSingle = replaceSingle.checked

    for (let rowIndex = 0; rowIndex < rowElements.length; rowIndex++){
        const currentCellElement = getCellElements(rowElements[rowIndex])
        for (let cellIndex = 0; cellIndex < currentCellElement.length; cellIndex++){
            let stringElement = currentCellElement[cellIndex]
            if (finderInput === "" || replacerInput === ""){return alert("Make an input!")}
            
            if (replacerSingle === true){
                if (stringElement.innerHTML.includes(finderInput)){
                    return stringElement.innerHTML = stringElement.innerHTML.replace(finderInput, replacerInput)
                }
            } else {
                while (stringElement.innerHTML.includes(finderInput)){
                    stringElement.innerHTML = stringElement.innerHTML.replace(finderInput, replacerInput)                
                }
            }
        }
    }
})