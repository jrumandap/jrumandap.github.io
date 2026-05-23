function showSection(event, sectionId) {
            event.preventDefault();
            const sections = document.querySelectorAll(".section");
            const buttons = document.querySelectorAll(".menu-btn");

            sections.forEach(section => {
                section.classList.remove("active");
            });
            buttons.forEach(button => {
                button.classList.remove("active");
            });

            document
                .getElementById(sectionId)
                .classList.add("active");

            event.currentTarget.classList.add("active");
        }


        const toggle = document.getElementById("themeToggle");
        const icon = document.querySelector("#themeToggle i");

        function setTheme(theme) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);

            if (theme === "dark") {

                icon.classList.remove("bi-sun-fill");
                icon.classList.add("bi-moon-stars-fill");

            } else {

                icon.classList.remove("bi-moon-stars-fill");
                icon.classList.add("bi-sun-fill");
            }
        }

        toggle.addEventListener("click", () => {
            const current =
                document.documentElement
                    .getAttribute("data-theme");

            if (current === "light") {

                setTheme("dark");

            } else {

                setTheme("light");
            }
        });

        const savedTheme =
            localStorage.getItem("theme") || "light";

        setTheme(savedTheme);


        function showImage(src) {

            document
                .getElementById("modalImage")
                .src = src;
        }

        const topBtn = document.getElementById("topBtn");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });