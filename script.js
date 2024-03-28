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

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        isValid = false;
    } else if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else {
        errorMessage.textContent = ''; // Clear error message
    }

    if (isValid) {
        // If validation passes, you'd typically submit the form to the server here
        console.log('Form is valid, ready to submit!');
    }
});
