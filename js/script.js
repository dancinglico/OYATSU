// script.js


const formGroupsContainer = document.getElementById('form-groups-container');
const addButton = document.querySelector('.add-button');


//add-buttonで列を増やす
addButton.addEventListener('click', ()=> {

    //name
    const nameFormGroup = document.createElement('div');
    nameFormGroup.classList.add('form-group');
    const nameInput = document.createElement('input');
    nameInput.classList.add('form');
    nameInput.type="text";
    nameInput.name="name";
    nameFormGroup.appendChild(nameInput);

    //cost
    const costFormGroup = document.createElement('div');
    costFormGroup.classList.add('form-group');
    const costInput = document.createElement('input');
    costInput.classList.add('form');
    costInput.type="text";
    costInput.name="cost";
    costInput.pattern="\d*";
    costFormGroup.appendChild(costInput);
   


    //append new form group
    formGroupsContainer.appendChild(nameFormGroup);
    formGroupsContainer.appendChild(costFormGroup);
    
});


function displayCosts() {
    const costInputs = document.querySelectorAll('input[name="cost"]');
    costInputs.forEach(input => {
        console.log(input.value);  
    });
}

//合計金額を計算する

const totalAmountElement = document.getElementById('totalamount');


function updateTotal(){
    let total = 0;
    const costInputs = document.querySelectorAll('input[name="cost"]');
    
    costInputs.forEach(input => {

        input.value = input.value.replace(/[^0-9.]/g, '');

        const value = parseFloat(input.value);
        if(!isNaN(value)){
            total += value;
        }
    });

    totalAmountElement.textContent = formatNumberWithCommas(total);

}

formGroupsContainer.addEventListener('input', (event) => {
    if (event.target.name === 'cost') {
       
        updateTotal();
    }
});


function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
