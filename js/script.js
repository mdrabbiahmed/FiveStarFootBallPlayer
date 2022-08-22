let count = 0;
const nameArray = [];
function selectBtn(element) {
    count++;
    if (count <= 5) {
        element.setAttribute("disabled", true)
    }
    const name = element.parentNode.children[0].innerText;
    const nameObj = {
        playername: name
    };
    nameArray.push(nameObj);
    if (nameArray.length >=6) {
        nameArray.length = 5;
        alert('Maximum five player Added')

    }
    const tableBody = document.getElementById('table-container');
    const listlenght = document.getElementById('count').innerText = nameArray.length;
    tableBody.innerText = '';

    for (let i = 0; i < nameArray.length; i++) {
        let name = nameArray[i].playername;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i+1}</td>
        <td>${name}</td>
        `
        tableBody.appendChild(tr);

    }
}

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputValue = parseInt(inputString);
    return inputValue;

}
function getInputText(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.innerText;
    const inputValue = parseInt(inputString);
    return inputValue;

}

document.getElementById('calculate').addEventListener('click', function () {
    const inputValue = getInputValue('per-player-budget');
    const listlenght = getInputText('count');
    const totalExpensive = inputValue * listlenght;
    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = totalExpensive;
    // console.log(inputValue);
})
document.getElementById('total-calculate').addEventListener('click', function () {
    const mangerInput = getInputValue('manger-input');
    const coachInput = getInputValue('coach-input');
    const inputValue = getInputText('total-expense');
    const totalValue = mangerInput + coachInput + inputValue;
    const totalExpense = document.getElementById('total-amount');
    totalExpense.innerText = totalValue;
})