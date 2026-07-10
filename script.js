document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeScrollTracking();
});

function initializeTheme() {
    const themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

    document.documentElement.setAttribute("data-theme", savedTheme);
    updateToggleIcon(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("portfolio-theme", nextTheme);
        updateToggleIcon(nextTheme);
    });

    function updateToggleIcon(theme) {
        if (theme === "light") {
            icon.className = "bi bi-sun-fill";
        } else {
            icon.className = "bi bi-moon-stars-fill";
        }
    }
}

function initializeScrollTracking() {
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    if (!scrollUpBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.add("scroll-btn-visible");
            scrollUpBtn.classList.remove("scroll-btn-hidden");
        } else {
            scrollUpBtn.classList.remove("scroll-btn-visible");
            scrollUpBtn.classList.add("scroll-btn-hidden");
        }
    });

    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function triggerViewer(src) {
    const targetImg = document.getElementById("modalTargetImg");
    if (targetImg) {
        targetImg.src = src;
    }
}

const educationData = [
    {
        id: "pup",
        shortName: "PUP Sto. Tomas Campus",
        sub: "Diploma in IT (2nd Year)",
        fullName: "Polytechnic University of the Philippines",
        years: "2024 — Present",
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

const tabsContainer = document.getElementById('educTabs');
const contentContainer = document.getElementById('educTabContent');

tabsContainer.innerHTML = "";
contentContainer.innerHTML = "";

educationData.forEach((educ, index) => {
    const isActive = index === 0 ? "active" : "";
    const isShowActive = index === 0 ? "show active" : "";

    tabsContainer.innerHTML += `
        <button class="list-group-item list-group-item-action ${isActive} d-flex align-items-center justify-content-between"
            id="list-${educ.id}-list" data-bs-toggle="list" href="#list-${educ.id}" role="tab">
            <div class="text-start">
                <h6 class="fw-bold mb-1" style="font-size: 0.95rem;">${educ.shortName}</h6>
                <small class="text-secondary-custom">${educ.sub}</small>
            </div>
            <i class="bi bi-chevron-right text-primary flex-shrink-0 ms-2"></i>
        </button>
    `;

    contentContainer.innerHTML += `
        <div class="tab-pane fade ${isShowActive}" id="list-${educ.id}" role="tabpanel" aria-labelledby="list-${educ.id}-list">
            <div class="card h-100 border-0 p-3 shadow-lg" 
                style="background-color: var(--bs-body-bg); color: var(--bs-body-color); border-radius: 1rem;">
                
                <div class="ratio ratio-16x9 mb-3 rounded overflow-hidden" 
                    style="max-height: 320px; background-color: var(--bs-tertiary-bg);">
                    <img src="${educ.bg}" class="w-100 h-100 object-fit-cover" alt="${educ.shortName} Campus" 
                        onerror="this.style.display='none';">
                </div>
                
                <div class="card-body p-0 d-flex gap-3 align-items-start">
                    <img src="${educ.logo}" class="flex-shrink-0 rounded cursor-pointer" 
                        style="width: 55px; height: 55px; object-fit: contain; cursor: pointer;" 
                        alt="Logo" onclick="openSchoolModal('${educ.fullName}', '${educ.logo}')">
                    
                    <div class="flex-grow-1 min-w-0">
                        <h5 class="fw-bold mb-1 text-wrap" style="font-size: 1.1rem; line-height: 1.3;">
                            ${educ.fullName}
                        </h5>
                        <p class="text-primary fw-medium mb-1 small">${educ.sub}</p>
                        <div class="d-flex flex-column gap-1 mt-2 text-muted style-details" style="font-size: 0.85rem;">
                            <span><i class="bi bi-calendar3 me-2"></i>${educ.years}</span>
                            <span class="text-truncate"><i class="bi bi-geo-alt me-2"></i>${educ.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

function openSchoolModal(title, imgSrc) {
    document.getElementById('schoolModalTitle').innerText = title;
    document.getElementById('schoolModalImg').src = imgSrc;

    const myModal = new bootstrap.Modal(document.getElementById('schoolLogoModal'));
    myModal.show();
}

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
    { name: "Figma", img: "C:git Figma.png", alt: "Figma" },
    { name: "Blender", img: "Blender.png", alt: "Blender" },
    { name: "Visual Studio Code", img: "VS Code.png", alt: "VS Code" }
];

const container = document.getElementById('skills-container');

mySkills.forEach(skill => {
    container.innerHTML += `
            <div class="col-6 col-sm-4 col-md-4 col-lg-3">
                <div class="skill-item-box text-center p-3 skill-animate-card">
                    <div class="skill-header-meta d-flex flex-column align-items-center">
                        <img src="image/${skill.img}" class="skill-icon-frame mb-2 skill-hover-rotate" alt="${skill.alt}">
                        <h5 class="skill-title-text m-0">${skill.name}</h5>
                    </div>
                </div>
            </div>
        `;
});

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
    }
];

const projectsContainer = document.getElementById('projects-container');

if (projectsContainer) {
    projectsContainer.innerHTML = "";

    myProjects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="col-12 col-md-6 d-flex mb-4">
                <div class="inner-project-card w-100 d-flex flex-column rounded-3 overflow-hidden" style="height: 100%;">
                    
                    <div class="project-media-vault ratio ratio-16x9 position-relative overflow-hidden" style="max-height: 180px; background-color: rgba(255,255,255,0.02);">
                        <img src="${project.img}" alt="${project.title} Preview" 
                             class="w-100 h-100 object-fit-cover"
                             data-bs-toggle="modal" data-bs-target="#viewModal" 
                             onclick="triggerViewer(this.src)" style="cursor: pointer;">
                    </div>
                    
                    <div class="project-content-details p-3 p-md-4 d-flex flex-column justify-content-between flex-grow-1">
                        <div class="mb-3">
                            <h5 class="fw-bold text-wrap fs-5 mb-2" style="color: var(--text-heading); line-height: 1.3;">
                                ${project.title}
                            </h5>
                            <p class="text-secondary-custom mb-0" style="font-size: 0.875rem; line-height: 1.5;">
                                ${project.desc}
                            </p>
                        </div>
                        
                        <div class="project-action-row d-flex flex-column flex-sm-row gap-2 mt-auto">
                            <a href="${project.repo}" target="_blank" 
                               class="action-link-btn btn-outline-custom text-center py-2 px-3 flex-grow-1 w-100" 
                               style="font-size: 0.85rem; white-space: nowrap;">
                               Documents
                            </a>
                            <a href="${project.live}" target="_blank" 
                               class="action-link-btn btn-solid-custom text-center py-2 px-3 flex-grow-1 w-100" 
                               style="font-size: 0.85rem; white-space: nowrap;">
                               View Project <i class="bi bi-box-arrow-up-right ms-1"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        `;
    });
}

function triggerViewer(imgSrc) {
    const modalImg = document.getElementById('modalTargetImg');
    if (modalImg) {
        modalImg.src = imgSrc;
    }
}