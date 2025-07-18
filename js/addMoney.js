document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
  
    if(pinNumber === '1234'){
       const balance = getTextElementValueById('account-balance');
       const newBalance = addMoney + balance;
       document.getElementById('account-balance').innerText = newBalance;
    }
    else{
       alert('Failed to add money'); 
    }
})