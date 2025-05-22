let addItem = [];
let itemEnter = false;
const itemContainer = document.getElementById("itemContainer");
function addButton() {
    const inputField = document.getElementById("textField");
    const input = inputField.value.trim(); 

    if (input !== "") {
        itemEnter = false;
        addItem.push(input);
        console.log(addItem);
        inputField.value = ""; 
        displayInput()
    } else {
        console.log("Input is empty. Nothing added.");
    };
};


function displayInput(){  
    itemContainer.textContent = "";  
    addItem.forEach((item, index) => {
    let div = document.createElement("div");
    let span = document.createElement("span");
    span.textContent = item;
    let button = document.createElement("span");
    button.textContent = "🗑️";

    button.className = "Remove_btn"
    span.className = "inputspan"
     
    button.onclick = function () {
     addItem.splice(index, 1);
     displayInput(); 
    };

    div.appendChild(span);
    div.appendChild(button);
    itemContainer.appendChild(div)

    })
};

displayInput()