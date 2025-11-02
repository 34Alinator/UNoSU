// Mobile Menu Toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navbarMenu').classList.toggle('active');
});

// Navigation Between Sections
document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');

        // Hide All Sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Show Selected Section
        document.getElementById(sectionId).classList.add('active');

        // Close Mobile Menu
        document.getElementById('navbarMenu').classList.remove('active');
    });
});
