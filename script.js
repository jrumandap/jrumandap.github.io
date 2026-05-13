function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
    const activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.style.display = 'block';
}


window.onload = () => showSection('about');

const toggle = document.getElementById("themeToggle");
const icon = document.querySelector("#themeToggle i");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // icon switch
    if (theme === "dark") {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-stars-fill");
    } else {
        icon.classList.remove("bi-moon-stars-fill");
        icon.classList.add("bi-sun-fill");
    }
}

toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");

    if (current === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

const saved = localStorage.getItem("theme") || "light";
setTheme(saved);