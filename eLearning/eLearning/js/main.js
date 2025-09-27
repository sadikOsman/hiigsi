// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Grid/List View Toggle
document.addEventListener('DOMContentLoaded', function() {
    const gridButton = document.querySelector('.view-options button:first-child');
    const listButton = document.querySelector('.view-options button:last-child');
    const coursesGrid = document.querySelector('.courses-grid');

    if(gridButton && listButton) {
        gridButton.addEventListener('click', () => {
            gridButton.classList.add('active');
            listButton.classList.remove('active');
            coursesGrid.classList.remove('list-view');
        });

        listButton.addEventListener('click', () => {
            listButton.classList.add('active');
            gridButton.classList.remove('active');
            coursesGrid.classList.add('list-view');
        });
    }

    // Initialize counter animation when stats section is in view
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(statsSection);
    }
});

// Add smooth hover effect for course cards
const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add this function to your existing main.js
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;

        const updateCount = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };

        updateCount();
    });
} 

// --- Course Search & Filter Logic ---
document.addEventListener('DOMContentLoaded', function() {
    // Only run on courses.html
    if (document.querySelector('.courses-grid')) {
        const searchInput = document.querySelector('.search-box input');
        const categorySelect = document.querySelector('.filter-group select:nth-child(1)');
        const levelSelect = document.querySelector('.filter-group select:nth-child(2)');
        const priceSelect = document.querySelector('.filter-group select:nth-child(3)');
        const courseCards = document.querySelectorAll('.course-card');

        function filterCourses() {
            const searchValue = searchInput.value.toLowerCase();
            const categoryValue = categorySelect.value.toLowerCase();
            const levelValue = levelSelect.value.toLowerCase();
            const priceValue = priceSelect.value.toLowerCase();

            courseCards.forEach(card => {
                // Get course info
                const title = card.querySelector('h3').textContent.toLowerCase();
                const category = card.querySelector('.category').textContent.toLowerCase();
                const details = card.querySelectorAll('.course-details .detail');
                let level = '';
                let price = '';
                // Find level (by icon or text)
                details.forEach(detail => {
                    if (detail.innerHTML.toLowerCase().includes('beginner') ||
                        detail.innerHTML.toLowerCase().includes('intermediate') ||
                        detail.innerHTML.toLowerCase().includes('advanced') ||
                        detail.innerHTML.toLowerCase().includes('all levels')) {
                        level = detail.textContent.toLowerCase();
                    }
                });
                // Find price (by .discounted or .original)
                const discounted = card.querySelector('.price .discounted');
                const original = card.querySelector('.price .original');
                if (discounted && discounted.textContent) {
                    price = 'paid';
                } else if (original && original.textContent && original.textContent.trim() === '$0') {
                    price = 'free';
                }

                // Filtering logic
                let matches = true;
                if (searchValue && !title.includes(searchValue)) matches = false;
                if (categoryValue && category !== categoryValue) matches = false;
                if (levelValue && !level.includes(levelValue)) matches = false;
                if (priceValue && price !== priceValue) matches = false;

                card.style.display = matches ? '' : 'none';
            });
        }

        // Event listeners
        searchInput.addEventListener('input', filterCourses);
        categorySelect.addEventListener('change', filterCourses);
        levelSelect.addEventListener('change', filterCourses);
        priceSelect.addEventListener('change', filterCourses);
    }
}); 