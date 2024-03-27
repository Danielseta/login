const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (You'll want more robust validation in a real app)
    if (username === 'admin' && password === 'password') { 
        // Simulate successful login (replace with actual login logic)
        alert('Login successful!'); 
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
