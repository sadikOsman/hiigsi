document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handler
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Add your authentication logic here
            console.log('Login attempt:', { email, password });
            
            // For demo purposes, redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
    
    // Register Form Handler
    const registerForm = document.getElementById('registerForm');
    if(registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value
            };
            
            // Add your registration logic here
            console.log('Registration attempt:', formData);
            
            // Validate passwords match
            if(formData.password !== formData.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // For demo purposes, redirect to login
            window.location.href = 'login.html';
        });
    }
}); 