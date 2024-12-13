document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('textarea').value.trim();
    const consent = document.getElementById('consent').checked;

    if (firstName && lastName && email && message && consent) {
  
        const toast = document.getElementById('toast');
        toast.className = 'toast show';

        setTimeout(function() {
            toast.className = toast.className.replace('show', '');
        }, 5000);

        document.getElementById('contactForm').reset();
    } 
});