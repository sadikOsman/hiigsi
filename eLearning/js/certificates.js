document.addEventListener('DOMContentLoaded', function() {
    loadCertificates();
    initializeSearch();
});

function loadCertificates() {
    const certificates = [
        {
            id: "CERT001",
            title: "Web Development Bootcamp",
            issueDate: "2024-02-15",
            image: "images/certificate.jpg",
            course: "Complete Web Development Bootcamp"
        },
        {
            id: "CERT002",
            title: "UI/UX Design Certificate",
            issueDate: "2024-01-20",
            image: "images/certificate.jpg",
            course: "UI/UX Design Masterclass"
        },
        {
            id: "CERT003",
            title: "JavaScript Advanced",
            issueDate: "2024-03-10",
            image: "images/certificate.jpg",
            course: "Advanced JavaScript Programming"
        },
        {
            id: "CERT004",
            title: "React Development",
            issueDate: "2024-02-28",
            image: "images/certificate.jpg",
            course: "Modern React Development"
        }
    ];

    const certificatesGrid = document.querySelector('.certificates-grid');
    certificatesGrid.innerHTML = certificates.map(cert => `
        <div class="certificate-card">
            <div class="certificate-preview">
                <img src="${cert.image}" alt="${cert.title}">
                <span class="certificate-badge">Verified</span>
            </div>
            <div class="certificate-content">
                <h3 class="certificate-title">${cert.title}</h3>
                <div class="certificate-meta">
                    <span class="certificate-date">Issued: ${formatDate(cert.issueDate)}</span>
                    <span class="certificate-id">#${cert.id}</span>
                </div>
                <div class="certificate-actions">
                    <button class="btn-download" onclick="downloadCertificate('${cert.id}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                    <button class="btn-share" onclick="shareCertificate('${cert.id}')">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function downloadCertificate(certId) {
    // Implement download functionality
    console.log(`Downloading certificate ${certId}`);
}

function shareCertificate(certId) {
    // Implement share functionality
    console.log(`Sharing certificate ${certId}`);
}

function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const certificates = document.querySelectorAll('.certificate-card');
        
        certificates.forEach(cert => {
            const title = cert.querySelector('.certificate-title').textContent.toLowerCase();
            cert.style.display = title.includes(searchTerm) ? 'block' : 'none';
        });
    });
} 