document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('Please enter a valid number')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('there has no sufficient balance to withdraw');
        return;
    }

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    balanceTotalElement.innerText = currentBalanceTotal
    withdrawTotalElement.innerText = currentWithdrawTotal
    

    
})