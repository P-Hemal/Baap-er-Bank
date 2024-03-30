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

document.getElementById('user-password').addEventListener('keyup', function(event){
    const text = event.target.value;
    const submitButton = document.getElementById('btn-submit');
    if(text === 'alhamdulillah'){
        submitButton.removeAttribute('disabled')
    }
    else{
        submitButton.setAttribute('disabled', true)
    }
})

