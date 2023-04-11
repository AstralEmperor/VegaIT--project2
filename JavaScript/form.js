
const form1 = document.querySelector('#contact__container');
const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputEmail = document.getElementById('emailAdress');
const inputSubject = document.getElementById('subject');
const inputComment = document.getElementById('message');

// inputName.addEventListener('keydown', e =>{
//     if(e.key === 32){
//         return false;
//     }
// })
form1.addEventListener('submit', e =>{
    e.preventDefault();     //stop default form submiting

    const message = {
        name: inputName.value,
        surname: inputSurname.value,
        email: inputEmail.value,
        subject: inputSubject.value,
        comment: inputComment.value,
        date: Date.now()
    }
    const data = message;

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

    form1.reset();
});


    