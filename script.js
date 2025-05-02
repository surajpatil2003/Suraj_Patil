// Function to show only the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        activeSection.style1.display = 'block';
    }
}

// Initially display only the home section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
