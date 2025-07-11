//show the cash out from
document.getElementById('btn-show-cash-out')
 .addEventListener('click',function(event){
       event.preventDefault();
       document.getElementById('cash-out-form').classList.remove('hidden');
       
       //hide the add money form
       document.getElementById('add-money-form').classList.add('hidden');
 })