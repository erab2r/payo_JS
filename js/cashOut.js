document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');
        if(isNaN(cashOut)){
            alert('Please enter a valid number for cash out.');
            return;
        }

        if(pinNumber === 1234){
            const balance = getTextElementValueById('account-balance');
            if(cashOut > balance){
                alert('Insufficient balance for cash out.');
                return;
            }
           
            const newBalance = balance - cashOut;
            document.getElementById('account-balance').innerText = newBalance;
            //add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-green-300');
            div.innerHTML =`
            <h4 class="text-2xl font-semibold">Cash Out</h4>
            <p class="text-xl">Cash Out Amount: ${cashOut} BDT New Balance ${newBalance}</p>`
            document.getElementById('transaction-container').appendChild(div);
        }
        else{
            alert('No money for you.')
        }
})