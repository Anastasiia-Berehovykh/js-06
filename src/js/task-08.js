
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSend);

function onFormSend(evt){
    evt.preventDefault();
    console.log(evt)

    const {email, password} = evt.currentTarget.elements;

    if(!email.value || !password.value){
        alert('Не заповнені всі дані')
    }
    const data = {
        password: password.value,
        email: email.value,
        
    };
    console.log(data);
    formEl.reset()
    
};

