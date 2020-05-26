let value = 0;

const addButton = document.getElementById('add')
const addContainer = document.getElementById('counter')
addButton.addEventListener('click',addValue)

const subButton = document.getElementById('subtract')
const subContainer = document.getElementById('counter')
subButton.addEventListener('click',subtractValue)

const inputValue = document.getElementById('number')
const result = document.getElementById('counter')
inputValue.addEventListener('input', output)


function addValue() {
    output();
    value =+ number.value + value;
    addContainer.innerHTML = value;
}

function subtractValue() {
    output();
    value-= number.value;
    subContainer.innerHTML = value;
}
    
function output() {
    let x,y;
    x = document.getElementById('form1');
    y = x.elements['number'].value;
    result.innerHTML = value; 
}
