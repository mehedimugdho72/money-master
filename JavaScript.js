//click
document.getElementById("caclulate-btn").addEventListener('click', function() {
    addInputAndBalanceTotal("income-input")
})

//function
function addInputAndBalanceTotal(Input) {
    let incomeInput = document.getElementById(Input);
    let inputValue = incomeInput.value;
    if (inputValue < 0) {
        alert("Please Enter a valid Number")
    }




    let foodInput = document.getElementById("food-input").value
    if (foodInput < 0) {
        alert("Please Enter a valid Number")
    }
    document.getElementById("food-input").value = " ";
    let rantInput = document.getElementById("rent-input").value
    document.getElementById("rent-input").value = " ";
    let clothesInput = document.getElementById("clothes-input").value
    document.getElementById("clothes-input").value = " ";


    let total = parseFloat(foodInput) + parseFloat(rantInput) + parseFloat(clothesInput);

    let totalExpenses = document.getElementById("total-expenses");

    totalExpenses.innerText = total;


    let blanceTotal = document.getElementById("blance-total")
    blanceTotal.innerText = inputvalue - total;
    incomeInput.value = "";
}

//save-button-click

document.getElementById("save-btn").addEventListener('click', function() {
        addSaveAndremaining("save-input")
    })
    // save
function addSaveAndRemaining(Input) {
    let saveInput = document.getElementById(Input)
    let saveInputvalue = parseFloat(saveInput.value)

    if (saveInputvalue < 0) {
        alert("Please Enter a valid Number")
    }

    let inconeInput = document.getElementById("blance-total")
    let blanceTotal = inconeInput.innerText
    let saving = (blanceTotal * saveInputvalue) / 100;

    let saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = saving;

    document.getElementById("save-input").value = " ";


    let remainingBlance = document.getElementById('remaining-amount');
    remainingBlance.innerText = blanceTotal - saving;
}