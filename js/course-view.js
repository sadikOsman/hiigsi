document.addEventListener('DOMContentLoaded', function() {
    // Get course ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    if (courseId && coursesData[courseId]) {
        loadCourseDetails(coursesData[courseId]);
    } else {
        window.location.href = 'courses.html'; // Redirect if no valid course ID
    }

    // Load course details
    function loadCourseDetails(course) {
        // Update header content
        document.querySelector('.category').textContent = course.category;
        document.querySelector('.level').innerHTML = `<i class="fas fa-signal"></i> ${course.level}`;
        document.querySelector('.course-content h1').textContent = course.title;
        document.querySelector('.description').textContent = course.description;

        // Update stats
        document.querySelector('.course-stats').innerHTML = `
            <div class="stat">
                <i class="fas fa-star"></i>
                <span>${course.rating} (${course.reviews} reviews)</span>
            </div>
            <div class="stat">
                <i class="fas fa-user-graduate"></i>
                <span>${course.students.toLocaleString()}+ students</span>
            </div>
            <div class="stat">
                <i class="fas fa-clock"></i>
                <span>${course.hours} Hours</span>
            </div>
            <div class="stat">
                <i class="fas fa-video"></i>
                <span>${course.lectures} Lectures</span>
            </div>
        `;

        // Update instructor
        document.querySelector('.instructor-brief').innerHTML = `
            <img src="${course.instructor.image}" alt="${course.instructor.name}">
            <span>Created by <a href="#">${course.instructor.name}</a></span>
        `;

        // Update tags
        document.querySelector('.course-tags').innerHTML = 
            course.tags.map(tag => `<span>${tag}</span>`).join('');

        // Update price
        document.querySelector('.current-price').textContent = `$${course.price.current}`;
        document.querySelector('.original-price').textContent = `$${course.price.original}`;
        document.querySelector('.discount').textContent = `${course.price.discount}% off`;

        // Update features
        const featuresList = document.querySelector('.course-features ul');
        featuresList.innerHTML = course.features
            .map(feature => `
                <li><i class="fas fa-${feature.icon}"></i> ${feature.text}</li>
            `).join('');

        // Update curriculum
        const curriculumList = document.querySelector('.curriculum-list');
        curriculumList.innerHTML = course.curriculum
            .map(section => `
                <div class="section">
                    <div class="section-header">
                        <h3>${section.title}</h3>
                        <span>${section.lectures.length} lectures • ${section.duration}</span>
                    </div>
                    <div class="lectures">
                        ${section.lectures.map(lecture => `
                            <div class="lecture">
                                <div class="lecture-left">
                                    <i class="fas fa-play-circle"></i>
                                    <span>${lecture.title}</span>
                                </div>
                                <div class="lecture-right">
                                    ${lecture.preview ? '<span>Preview</span>' : ''}
                                    <span>${lecture.duration}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
    }

    // Preview Video Modal
    const playBtn = document.querySelector('.play-btn');
    if(playBtn) {
        playBtn.addEventListener('click', function() {
            // Add your video player implementation here
            alert('Video preview will be played here');
        });
    }

    // Curriculum Section Toggle
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const lectures = section.querySelector('.lectures');
            lectures.style.display = lectures.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Enroll Button
    const enrollBtn = document.querySelector('.btn-enroll');
    if(enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            // Add your enrollment/payment implementation here
            alert('Redirecting to payment gateway...');
        });
    }

    // Add to Cart Button
    const cartBtn = document.querySelector('.btn-cart');
    if(cartBtn) {
        cartBtn.addEventListener('click', function() {
            // Add your cart functionality here
            alert('Course added to cart!');
        });
    }
}); 