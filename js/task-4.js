const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const refs = {
        email: formEl.elements.email.value.trim(),
        password: formEl.elements.password.value.trim(),
    };

    if (refs.email === '' || refs.password === '') {
        return alert('All form fields must be filled in');
    }

    console.log(refs);

    formEl.reset();
}
