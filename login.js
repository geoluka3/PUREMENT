
async function login(event) {
    
    event.preventDefault();

    
    const form = event.target;
    const inputs = form.querySelectorAll('input');
    
    
    const usernameValue = inputs[0].value;
    const passwordValue = inputs[1].value;

    if (usernameValue === 'luka' && passwordValue === 'luka123') {
        
        localStorage.setItem('access_token', 'login-token');
        
       
        window.location.href = 'index.html';
    } else {
        alert('არასწორი სახელი ან პაროლი!');
        
        
        inputs[0].value = '';
        inputs[1].value = '';
    }
}


// if (localStorage.getItem('access_token')) {
//     window.location.href = 'index.html';
// }

function togglemenu() {
    document.querySelector('nav')?.classList.toggle('openedmenu');
}