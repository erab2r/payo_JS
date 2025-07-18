document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');

        if(pinNumber === 1234){
            const balance = getTextElementValueById('account-balance');


            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('No money for you.')
        }
})