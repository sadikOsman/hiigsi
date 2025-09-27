const coursesData = {
    'web-dev-2024': {
        title: 'Complete Web Development Bootcamp 2024',
        category: 'Development',
        level: 'All Levels',
        description: 'Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more with practical projects.',
        rating: 4.8,
        reviews: 2500,
        students: 15000,
        hours: 20,
        lectures: 30,
        instructor: {
            name: 'John Doe',
            image: 'images/instructor1.jpg',
            title: 'Senior Web Developer & Instructor',
            rating: 4.8,
            students: 50000,
            courses: 10
        },
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        price: {
            current: 99,
            original: 199,
            discount: 50
        },
        features: [
            { icon: 'video', text: '20 hours on-demand video' },
            { icon: 'file', text: '75 downloadable resources' },
            { icon: 'infinity', text: 'Full lifetime access' },
            { icon: 'mobile-alt', text: 'Access on mobile and TV' },
            { icon: 'certificate', text: 'Certificate of completion' }
        ],
        curriculum: [
            {
                title: 'Introduction to Web Development',
                duration: '45 min',
                lectures: [
                    { title: 'Welcome to the Course', duration: '5:30', preview: true },
                    { title: 'Setting Up Your Development Environment', duration: '15:00', preview: false },
                    { title: 'Understanding Web Basics', duration: '12:30', preview: false }
                ]
            }
            // Add more sections
        ]
    },
    'ui-ux-2024': {
        // Similar structure for UI/UX course
    },
    'data-science-2024': {
        // Similar structure for Data Science course
    }
}; 