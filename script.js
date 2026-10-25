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

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    container.innerHTML = mySkills.map(skill => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="skill-card">
                <img src="image/${skill.img}" class="skill-icon" alt="${skill.alt}" loading="lazy"
                    onerror="this.style.visibility='hidden';">
                <h3 class="skill-name">${skill.name}</h3>
            </div>
        </div>`).join("");
}

function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = myProjects.map(project => `
        <div class="col-12 col-md-6 col-xl-4 d-flex">
            <article class="project-card">
                <div class="project-frame">
                    <div class="project-bar" aria-hidden="true"><span></span><span></span><span></span></div>
                    <button type="button" class="project-media ratio" data-bs-toggle="modal"
                        data-bs-target="#viewModal" data-preview="${project.img}"
                        aria-label="Preview ${project.title}">
                        <img src="${project.img}" alt="${project.title} Preview" loading="lazy"
                            onerror="this.style.display='none';">
                    </button>
                </div>
                <div class="project-body">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-actions">
                        <a href="${project.repo}" target="_blank" rel="noopener noreferrer"
                            class="btn-ui btn-ui-outline btn-ui-sm">Documents</a>
                        <a href="${project.live}" target="_blank" rel="noopener noreferrer"
                            class="btn-ui btn-ui-solid btn-ui-sm">View Project
                            <i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
            </article>
        </div>`).join("");
}

function initializeModals() {
    const container = document.getElementById("projects-container");
    if (!container) return;
    container.addEventListener("click", event => {
        const trigger = event.target.closest("[data-preview]");
        if (trigger) triggerViewer(trigger.dataset.preview);
    });
}

function triggerViewer(src) {
    const modalImg = document.getElementById("modalTargetImg");
    if (modalImg) modalImg.src = src;
}

function initializeReveal() {
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lastY = window.scrollY;
    let direction = "down";
    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y !== lastY) direction = y > lastY ? "down" : "up";
        lastY = y;
    }, { passive: true });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                el.classList.toggle("from-top", direction === "up");
                el.classList.add("in");
            } else {
                // leaving: park it on the side it exits so it re-enters smoothly
                el.classList.toggle("from-top", entry.boundingClientRect.top > 0 ? false : true);
                el.classList.remove("in");
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

    const groups = [
        ".content-section .section-tag, .section-heading",
        "#about .row > div",
        "#skills-container > div",
        "#projects-container > div"
    ];
    groups.forEach(selector => {
        try {
            document.querySelectorAll(selector).forEach((el, i) => {
                el.classList.add("reveal");
                el.style.transitionDelay = (i % 4) * 70 + "ms";
                observer.observe(el);
            });
        } catch (e) { /* unsupported selector: leave content visible */ }
    });
}

function initializeBubbles() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seeds = [
        [90, 6, 12, 0, 11], [34, 18, 70, 2, 9], [60, 30, 38, 1, 13], [22, 46, 14, 3, 8],
        [110, 62, 66, 0, 14], [28, 78, 24, 2, 10], [52, 90, 80, 1, 12], [18, 55, 88, 4, 9]
    ];
    document.querySelectorAll(".hero-section, .content-section").forEach((section, s) => {
        const wrap = document.createElement("div");
        wrap.className = "bubbles";
        wrap.setAttribute("aria-hidden", "true");
        seeds.forEach(([size, left, top, delay, dur], i) => {
            const b = document.createElement("span");
            b.className = "bubble";
            const shift = ((s * 17 + i * 13) % 20) - 10; // vary layout per section
            b.style.cssText = "width:" + size + "px;height:" + size + "px;left:" +
                Math.min(94, Math.max(0, left + shift)) + "%;top:" +
                Math.min(90, Math.max(2, top + shift)) + "%;animation-delay:-" + delay + "s;animation-duration:" + dur + "s;";
            if (reduce) b.style.animation = "none";
            wrap.appendChild(b);
        });
        section.appendChild(wrap);
    });
}

function initializeJoystick() {
    const up = document.getElementById("joyUp");
    const down = document.getElementById("joyDown");
    if (!up || !down) return;

    const sections = ["home", "about", "education", "skills", "projects"]
        .map(id => document.getElementById(id)).filter(Boolean);

    const currentIndex = () => {
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom) return sections.length - 1;
        let idx = 0;
        sections.forEach((sec, i) => { if (sec.getBoundingClientRect().top <= 140) idx = i; });
        return idx;
    };
    const go = step => {
        const target = sections[Math.min(sections.length - 1, Math.max(0, currentIndex() + step))];
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const update = () => {
        const i = currentIndex();
        up.disabled = i === 0 && window.scrollY < 10;
        down.disabled = i === sections.length - 1;
    };

    up.addEventListener("click", () => {
        const sec = sections[currentIndex()];
        // if we are partway into a section, first return to its top
        if (sec && sec.getBoundingClientRect().top < -40) sec.scrollIntoView({ behavior: "smooth", block: "start" });
        else go(-1);
    });
    down.addEventListener("click", () => go(1));
    window.addEventListener("scroll", update, { passive: true });
    update();
}

function initializeEducationScroll() {
    const section = document.getElementById("education");
    const sticky = section && section.querySelector(".educ-sticky");
    const tabs = document.querySelectorAll('#educTabs [data-bs-toggle="list"]');
    if (!section || !sticky || !tabs.length || !window.bootstrap) return;

    document.querySelectorAll(".educ-dots").forEach(el => el.remove()); // never duplicate the dots
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference) and (((min-width: 992px) and (min-height: 700px)) or ((max-width: 991.98px) and (min-height: 640px)))");
    const n = tabs.length;
    section.style.setProperty("--slides", n);

    // round progress dots
    const dotsWrap = document.createElement("div");
    dotsWrap.className = "educ-dots";
    dotsWrap.setAttribute("role", "group");
    dotsWrap.setAttribute("aria-label", "Education slides");
    const dots = Array.from(tabs).map((tab, i) => {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "educ-dot" + (i === 0 ? " active" : "");
        d.setAttribute("aria-label", "Show " + tab.querySelector("strong").textContent);
        d.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(d);
        return d;
    });
    const container = sticky.querySelector(".container");
    if (container) container.appendChild(dotsWrap);

    let current = 0;
    const range = () => section.offsetHeight - window.innerHeight;

    function goTo(i) {
        if (!mq.matches) { bootstrap.Tab.getOrCreateInstance(tabs[i]).show(); return; }
        const top = window.scrollY + section.getBoundingClientRect().top;
        window.scrollTo({ top: top + ((i + 0.5) / n) * range(), behavior: "smooth" });
    }

    tabs.forEach((tab, i) => {
        tab.addEventListener("shown.bs.tab", () => {
            current = i;
            dots.forEach((d, k) => d.classList.toggle("active", k === i));
            // keep the active tab visible inside the swipeable tab row
            const list = tab.parentElement;
            if (list && list.scrollWidth > list.clientWidth) {
                list.scrollTo({ left: tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
            }
        });
        tab.addEventListener("click", () => { if (mq.matches) goTo(i); });
    });

    const onScroll = () => {
        if (!mq.matches || range() <= 0) return;
        const p = Math.min(0.9999, Math.max(0, -section.getBoundingClientRect().top / range()));
        const idx = Math.floor(p * n);
        if (idx !== current) {
            current = idx;
            bootstrap.Tab.getOrCreateInstance(tabs[idx]).show();
        }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}