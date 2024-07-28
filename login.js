// Selecting necessary elements for login
const loginForm = document.querySelector('.form-box.login form');
const emailInput = loginForm.querySelector('input[type="email"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const rememberMeCheckbox = loginForm.querySelector('input[type="checkbox"]');
const signUpLink = document.querySelector('.sign-up-link');
const loginLink = document.querySelector('.login-link');
const wrapper = document.querySelector('.wrapper');

// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Retrieve input values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberMeCheckbox.checked;
    
    // authentication
    
    const storedEmail = localStorage.getItem('registeredEmail');
    const storedPassword = localStorage.getItem('registeredPassword');
    
    // Check if the entered credentials match the stored registration information
    if (email === storedEmail && password === storedPassword) {
        // If "Remember me" is checked, store the credentials in local storage
        if (rememberMe) {
            localStorage.setItem('loggedInEmail', email);
            localStorage.setItem('isLoggedIn', true);
        }
        
        // Redirect to the home page or perform any other action upon successful login
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Event listener for sign-up link
signUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    wrapper.classList.add('active');
});

// Event listener for login link
loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    wrapper.classList.remove('active');
});



// Selecting necessary elements for registration
const registerForm = document.querySelector('.form-box.sign-up form');
const registerUsernameInput = registerForm.querySelector('input[type="text"]');
const registerEmailInput = registerForm.querySelector('input[type="email"]');
const registerPasswordInput = registerForm.querySelector('input[type="password"]');

// Event listener for registration form submission
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Retrieve input values
    const username = registerUsernameInput.value.trim();
    const email = registerEmailInput.value.trim();
    const password = registerPasswordInput.value.trim();
    
    // Store registration information in local storage
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    
    // Log the stored values for debugging
    console.log('Stored username:', localStorage.getItem('registeredUsername'));
    console.log('Stored email:', localStorage.getItem('registeredEmail'));
    console.log('Stored password:', localStorage.getItem('registeredPassword'));
    
    alert('Registration successful! You can now log in.');
    
    // Redirect back to login.html
    window.location.href = 'login.html';
});

