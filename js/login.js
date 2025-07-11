
document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        // get phone number and pin 
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);

        // bad way to validate
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = 'home.html';
        }
        else{
            alert('Wrong phone number or pin.')
        }
});
