document.addEventListener('DOMContentLoaded', function() {
    // Load user's enrolled courses
    loadEnrolledCourses();
    
    // Notification Handler
    const notificationBtn = document.querySelector('.btn-notification');
    if(notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            // Add your notification logic here
            alert('Notifications feature coming soon!');
        });
    }
    
    // Logout Handler
    const logoutBtn = document.querySelector('.logout');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your logout logic here
            window.location.href = 'login.html';
        });
    }
});

function loadEnrolledCourses() {
    const enrolledCourses = [
        {
            id: 'web-dev-2024',
            title: 'Complete Web Development Bootcamp',
            progress: 75,
            image: 'images/webdev.jpg',
            instructor: {
                name: 'John Doe',
                image: 'images/instructors/instructor1.jpg'
            },
            totalLectures: 30,
            completedLectures: 22
        },
        {
            id: 'ui-ux-2024',
            title: 'UI/UX Design Masterclass',
            progress: 45,
            image: 'images/ui.jpg',
            instructor: {
                name: 'Sarah Wilson',
                image: 'images/instructors/instructor2.jpg'
            },
            totalLectures: 25,
            completedLectures: 11
        },
        {
            id: 'app-dev-2024',
            title: 'Mobile App Development',
            progress: 60,
            image: 'images/appdev.jpg',
            instructor: {
                name: 'Mike Anderson',
                image: 'images/instructors/instructor3.jpg'
            },
            totalLectures: 35,
            completedLectures: 21
        },
        {
            id: 'python-ds-2024',
            title: 'Python for Data Science',
            progress: 30,
            image: 'images/python.jpg',
            instructor: {
                name: 'Emily Chen',
                image: 'images/instructors/instructor4.jpg'
            },
            totalLectures: 40,
            completedLectures: 12
        }
    ];
    
    const coursesGrid = document.querySelector('.courses-grid');
    if(coursesGrid) {
        coursesGrid.innerHTML = enrolledCourses.map(course => `
            <div class="course-card">
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${course.progress}%"></div>
                    </div>
                </div>
                <div class="course-content">
                    <div class="course-instructor">
                        <img src="${course.instructor.image}" alt="${course.instructor.name}">
                        <span>${course.instructor.name}</span>
                    </div>
                    <h3>${course.title}</h3>
                    <div class="course-stats">
                        <span><i class="fas fa-book-reader"></i> ${course.completedLectures}/${course.totalLectures} lectures</span>
                        <span><i class="fas fa-chart-line"></i> ${course.progress}% complete</span>
                    </div>
                    <div class="course-progress">
                        <div class="progress-info">
                            <span class="progress-text">${course.progress}% Complete</span>
                            <span class="time-left">Est. time left: 5h 30m</span>
                        </div>
                        <a href="course-view.html?id=${course.id}" class="btn-continue">
                            Continue Learning <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
} 