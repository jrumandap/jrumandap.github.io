function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';
}


window.onload = () => showSection('about');