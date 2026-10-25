const educationData = [
    {
        id: "pup",
        shortName: "PUP Sto. Tomas Campus",
        sub: "Diploma in IT (3rd Year Student)",
        fullName: "Polytechnic University of the Philippines",
        years: "2026 — Present",
        location: "Brgy. Sto. Tomas, Batangas",
        bg: "image/bg pup.png",
        logo: "image/pup.png"
    },
    {
        id: "bis",
        shortName: "Bunggo Integrated School",
        sub: "Senior High School — HUMSS Strand",
        fullName: "Bunggo Integrated School",
        years: "2022 — 2024",
        location: "Brgy. Bunggo, Calamba, Laguna",
        bg: "image/bg bunggo IS.png",
        logo: "image/bunggo IS.png"
    },
    {
        id: "bnhs",
        shortName: "Bunggo National High School",
        sub: "Junior High School",
        fullName: "Bunggo National High School",
        years: "2019 — 2022",
        location: "Brgy. Bunggo, Calamba, Laguna",
        bg: "image/bg bunggo.png",
        logo: "image/bunggo NHS.png"
    },
    {
        id: "suplang",
        shortName: "Suplang Elementary School",
        sub: "Primary Education",
        fullName: "Suplang Elementary School",
        years: "2012 — 2018",
        location: "Brgy. Suplang, Tanauan, Batangas",
        bg: "image/bg suplang.png",
        logo: "image/suplang.png"
    }
];

const mySkills = [
    { name: "Python", img: "python.png", alt: "Python" },
    { name: "HTML", img: "html.png", alt: "HTML" },
    { name: "CSS", img: "css.png", alt: "CSS" },
    { name: "JavaScript", img: "js.png", alt: "JS" },
    { name: "SQL", img: "SQL.png", alt: "MYSQL" },
    { name: "PHP", img: "PHP.png", alt: "PHP" },
    { name: "Git Bash", img: "Git.png", alt: "Git" },
    { name: "GitHub", img: "Github.png", alt: "GitHub" },
    { name: "Bootstrap", img: "Bootstrap.png", alt: "Bootstrap" },
    { name: "Figma", img: "figma.png", alt: "Figma" },
    { name: "Blender", img: "Blender.png", alt: "Blender" },
    { name: "Visual Studio Code", img: "VS Code.png", alt: "VS Code" }
];

const myProjects = [
    {
        title: "A02 in Web Dev",
        desc: "A responsive website showcasing the Huawei MatePad with product information and a modern user interface.",
        img: "image/Project1.png",
        repo: "https://github.com/jrumandap/jrumandap.github.io/tree/main/A02",
        live: "https://jrumandap.github.io/A02/index.html"
    },
    {
        title: "Midterm in Web Dev",
        desc: "A web application that displays Dragon Ball characters and information using a public API.",
        img: "image/Project2.png",
        repo: "https://github.com/jrumandap/jrumandap.github.io/tree/main/midterm",
        live: "https://jrumandap.github.io/midterm/index.html"
    },
    {
        title: "OJT Project",
        desc: "A fully deployed web system created as part of my On-the-Job Training.",
        img: "image/Project 3.png",
        repo: "https://github.com/Agriculture37/Agriculture37.github.io",
        live: "https://agriculture37.github.io/"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeScrollTracking();
    renderEducation();
    renderSkills();
    renderProjects();
    initializeModals();
    initializeReveal();
    initializeBubbles();
    initializeJoystick();
    initializeEducationScroll();
});

function initializeTheme() {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");
    let savedTheme = "light";
    try { savedTheme = localStorage.getItem("portfolio-theme") || "light"; } catch (e) { /* storage blocked */ }

    applyTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        try { localStorage.setItem("portfolio-theme", next); } catch (e) { /* storage blocked */ }
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.setAttribute("data-bs-theme", theme);
        if (icon) icon.className = theme === "light" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
    }
}

function initializeScrollTracking() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const navbar = document.getElementById("siteNavbar");
    const links = document.querySelectorAll("#siteNavFields .nav-link");
    const sections = Array.from(links)
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const onScroll = () => {
        const y = window.scrollY;
        if (navbar) navbar.classList.toggle("is-scrolled", y > 10);

        let current = sections.length ? sections[0].id : "";
        sections.forEach(sec => {
            if (sec.getBoundingClientRect().top <= 120) current = sec.id;
        });
        links.forEach(link => {
            const active = link.getAttribute("href") === "#" + current;
            link.classList.toggle("active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (scrollUpBtn) {
        scrollUpBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const menu = document.getElementById("siteNavFields");
    links.forEach(link => link.addEventListener("click", () => {
        if (menu && menu.classList.contains("show") && window.bootstrap) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    }));
}

function renderEducation() {
    const tabs = document.getElementById("educTabs");
    const content = document.getElementById("educTabContent");
    if (!tabs || !content) return;

    tabs.innerHTML = educationData.map((e, i) => `
        <button type="button" class="list-group-item list-group-item-action ${i === 0 ? "active" : ""}"
            id="list-${e.id}-list" data-bs-toggle="list" data-bs-target="#list-${e.id}" role="tab"
            aria-controls="list-${e.id}" aria-selected="${i === 0}">
            <span class="educ-tab-text">
                <strong>${e.shortName}</strong>
            </span>
            <i class="bi bi-chevron-right"></i>
        </button>`).join("");

    content.innerHTML = educationData.map((e, i) => `
        <div class="tab-pane fade ${i === 0 ? "show active" : ""}" id="list-${e.id}" role="tabpanel"
            aria-labelledby="list-${e.id}-list">
            <article class="educ-card">
                <div class="educ-banner ratio ratio-16x9">
                    <img src="${e.bg}" alt="${e.shortName} Campus" loading="lazy"
                        onerror="this.style.display='none';">
                </div>
                <div class="educ-body">
                    <button type="button" class="educ-logo" data-school="${e.id}"
                        aria-label="View ${e.fullName} logo">
                        <img src="${e.logo}" alt="${e.fullName} logo" onerror="this.style.display='none';">
                    </button>
                    <div class="educ-info">
                        <h5>${e.fullName}</h5>
                        <p class="educ-sub">${e.sub}</p>
                        <ul class="educ-meta">
                            <li><i class="bi bi-calendar3"></i>${e.years}</li>
                            <li><i class="bi bi-geo-alt"></i>${e.location}</li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>`).join("");

    content.querySelectorAll(".educ-logo").forEach(btn => {
        btn.addEventListener("click", () => {
            const school = educationData.find(e => e.id === btn.dataset.school);
            if (school) openSchoolModal(school.fullName, school.logo);
        });
    });
}

function openSchoolModal(title, imgSrc) {
    const titleEl = document.getElementById("schoolModalTitle");
    const imgEl = document.getElementById("schoolModalImg");
    const modalEl = document.getElementById("schoolLogoModal");
    if (!titleEl || !imgEl || !modalEl || !window.bootstrap) return;

    titleEl.textContent = title;
    imgEl.src = imgSrc;
    imgEl.alt = title + " logo";
    bootstrap.Modal.getOrCreateInstance(modalEl).show();
}
