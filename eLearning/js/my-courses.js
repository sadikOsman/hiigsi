document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    initializeFilters();
    initializeViewToggle();
});

function loadCourses() {
    const courses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            image: "images/webdev.jpg",
            progress: 75,
            status: "in-progress",
            instructor: "John Doe",
            completedLessons: 15,
            totalLessons: 20
        },
        {
            id: 2,
            title: "UI/UX Design Masterclass",
            image: "images/ui.jpg",
            progress: 100,
            status: "completed",
            instructor: "Sarah Wilson",
            completedLessons: 30,
            totalLessons: 30
        },
        {
            id: 3,
            title: "Mobile App Development",
            image: "images/appdev.jpg",
            progress: 0,
            status: "not-started",
            instructor: "Mike Anderson",
            completedLessons: 0,
            totalLessons: 25
        }
        // Add more courses as needed
    ];

    const coursesGrid = document.querySelector('.courses-grid');
    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card" data-status="${course.status}">
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <span class="course-status status-${course.status}">
                    ${course.status.replace('-', ' ').toUpperCase()}
                </span>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <div class="course-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${course.progress}%"></div>
                    </div>
                    <span>${course.progress}% Complete</span>
                </div>
                <div class="course-meta">
                    <span>${course.completedLessons}/${course.totalLessons} Lessons</span>
                    <a href="course-view.html?id=${course.id}" class="btn-continue">
                        Continue <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const status = this.textContent.toLowerCase().includes('progress') ? 'in-progress' :
                          this.textContent.toLowerCase().includes('completed') ? 'completed' :
                          this.textContent.toLowerCase().includes('not started') ? 'not-started' : 'all';
            
            filterCourses(status);
        });
    });
}

function filterCourses(status) {
    const courses = document.querySelectorAll('.course-card');
    courses.forEach(course => {
        if (status === 'all' || course.dataset.status === status) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

function initializeViewToggle() {
    const gridButton = document.querySelector('.view-options button:first-child');
    const listButton = document.querySelector('.view-options button:last-child');
    const coursesGrid = document.querySelector('.courses-grid');

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