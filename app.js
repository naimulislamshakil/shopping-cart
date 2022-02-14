function updateSubtotal() {
    const inputPhoneField = document.getElementById('phone-input').value;
    const inputPhoneFieldNumber = parseInt(inputPhoneField);

    const inputCaseField = document.getElementById('case-input').value;
    const inputCaseFieldNumber = parseInt(inputCaseField);
    
    const phonePrice = inputPhoneFieldNumber * 1219;
    const casePrice = inputCaseFieldNumber * 59;
    const totalPrice = phonePrice + casePrice;
    document.getElementById('subtotal').innerText = totalPrice;

    const taxAmount = (1 / 100) * totalPrice;
    document.getElementById('tax').innerText = taxAmount;

    const total = taxAmount + totalPrice;
    document.getElementById('total').innerText = total;
}

function inputInAndDis(Product, price, isAdd) {
    const inputField = document.getElementById(Product + '-input').value;
    const inputFieldNumber = parseInt(inputField);


    let setPrice = 0;
    if (isAdd == true) {
        const inputFieldCount = inputFieldNumber + 1;
        document.getElementById(Product + '-input').value = inputFieldCount;

        setPrice = inputFieldCount * price;
        document.getElementById(Product + '-price').innerText = setPrice;



        updateSubtotal();
    } else if (inputFieldNumber > 0) {
        const inputFieldCount = inputFieldNumber - 1;
        document.getElementById(Product + '-input').value = inputFieldCount;

        setPrice = inputFieldCount * price;
        document.getElementById('phone-price').innerText = setPrice;

        updateSubtotal();
    }
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    inputInAndDis('phone', 1219, true);
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    inputInAndDis('phone', 1219, false);
});

document.getElementById('btn-case-plus').addEventListener('click', function(){
    inputInAndDis('case', 59, true);
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    inputInAndDis('case', 59, false);
});