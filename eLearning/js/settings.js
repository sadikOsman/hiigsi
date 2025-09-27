document.addEventListener('DOMContentLoaded', function() {
    initializeAccordion();
    initializePasswordToggles();
    initializePasswordValidation();
});

function initializeAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.dataset.section;
            const content = document.getElementById(section);
            
            // Toggle active class on header
            this.classList.toggle('active');
            
            // Toggle content visibility
            content.classList.toggle('active');
            
            // Close other sections
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    const otherSection = document.getElementById(otherHeader.dataset.section);
                    otherSection.classList.remove('active');
                }
            });
        });
    });
}

function initializePasswordToggles() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

function initializePasswordValidation() {
    const newPasswordInput = document.querySelector('input[placeholder="Enter new password"]');
    const requirements = document.querySelectorAll('.requirement');
    
    if (newPasswordInput) {
        newPasswordInput.addEventListener('input', function() {
            const password = this.value;
            
            // Check requirements
            const checks = {
                length: password.length >= 8,
                uppercase: /[A-Z]/.test(password),
                number: /[0-9]/.test(password),
                special: /[!@#$%^&*]/.test(password)
            };
            
            requirements.forEach((req, index) => {
                const isValid = Object.values(checks)[index];
                req.classList.toggle('active', isValid);
            });
        });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
} 