document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('textarea').value.trim();
    const consent = document.getElementById('consent').checked;

    let errorMessage = '';

    if (!firstName) {
        errorMessage = 'Por favor, preencha o campo Nome';
    } else if (!lastName) {
        errorMessage = 'Por favor, preencha o campo Sobrenome';
    } else if (!email) {
        errorMessage = 'Por favor, preencha o campo E-mail';
    } else if (!message) {
        errorMessage = 'Por favor, preencha o campo Mensagem';
    } else if (!consent) {
        errorMessage = 'Por favor, aceite os termos de consentimento';
    }

    if (errorMessage) {
        const errorToast = document.getElementById('errorToast');
        errorToast.textContent = errorMessage;
        errorToast.className = 'toast error-toast show';

        setTimeout(function() {
            errorToast.className = errorToast.className.replace('show', '');
        }, 5000);
    } else {
        const toast = document.getElementById('toast');
        toast.className = 'toast show';

        setTimeout(function() {
            toast.className = toast.className.replace('show', '');
        }, 5000);

        document.getElementById('contactForm').reset();
    }
});