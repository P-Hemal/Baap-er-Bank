document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'abdulhakim.hemal.99@gmail.com' && password === 'alhamdulillah'){
        window.location.href = 'bank.html';
    }
    else{
        alert('You can not get enter into the next page')
    }
    
})

