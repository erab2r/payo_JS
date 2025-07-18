document.getElementById('btn-cash-out')
.addEventListener('click',function(event){
   event.preventDefault();
   
   const cashOut =  getInputFieldValueById('input-cash-out');
   const pinOut = getInputFieldValueById('input-cash-out-pin');
    console.log(cashOut,pinOut);
    
    if(pinOut === '1234'){
        console.log('money reduce');
        const balance = document.getElementById('account-balance').innerText;
         const balanceNumber = parseFloat(balance);
         const cashOutNumber = parseFloat(cashOut);
         // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to cash out. Please try again later.')
    }
})