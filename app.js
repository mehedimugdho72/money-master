//calculate-btn-click
document.getElementById("caclulate-btn").addEventListener('click', function() {
    addInput("income-input")
})

//Total-update-field
function addInput(Input) {
    let incomeInput = document.getElementById(Input);
    let inputvalue = incomeInput.value;




    let foodInput = document.getElementById("food-input").value
    document.getElementById("food-input").value = " ";
    let rantInput = document.getElementById("rent-input").value
    document.getElementById("rent-input").value = " ";
    let clothesInput = document.getElementById("clothes-input").value
    document.getElementById("clothes-input").value = " ";


    let total = parseFloat(foodInput) + parseFloat(rantInput) + parseFloat(clothesInput);

    let totalExpenses = document.getElementById("total-expenses");
    totalExpenses.innerText = total;

    let blanceTotal = document.getElementById("balance-total")
    blanceTotal.innerText = inputvalue - total;
    incomeInput.value = "";
}

//save-btn-click

document.getElementById("save-btn").addEventListener('click', function() {
    let saveInput = document.getElementById("save-input")
    let saveInputvalue = parseFloat(saveInput.value)

    let blanceText = document.getElementById("balance-total")
    let blanceTotal = blanceText.innerText
    let saving = (blanceTotal * saveInputvalue) / 100;

    let saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = saving;

    document.getElementById("save-input").value = " ";


    let remainingBlance = document.getElementById('remaining-amount');
    remainingBlance.innerText = blanceTotal - saving;






})