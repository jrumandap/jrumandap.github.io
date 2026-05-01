const char = [
            { name: "Goku", img: "https://dragonball-api.com/characters/goku_normal.webp" },
            { name: "Vegeta", img: "https://dragonball-api.com/characters/vegeta_normal.webp" },
            { name: "Gohan", img: "https://dragonball-api.com/characters/gohan.webp" },
            { name: "Piccolo", img: "https://dragonball-api.com/characters/picolo_normal.webp" },
            { name: "Frieza", img: "https://dragonball-api.com/characters/Freezer.webp" },
            { name: "Cell", img: "https://dragonball-api.com/characters/celula.webp" },
            { name: "Bills", img: "https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp" },
            { name: "Trunks", img: "https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp" },
            { name: "Android 17", img: "https://dragonball-api.com/characters/17_Artwork.webp" },
            { name: "Majin Buu", img: "https://dragonball-api.com/characters/BuuGordo_Universo7.webp" },
            
        ];

        let start = 0;

        // 🔥 RESPONSIVE COUNT
        function getVisibleCount() {
            if (window.innerWidth <= 600) return 1;   
            if (window.innerWidth <= 992) return 2;   
            return 3;                                 
        }

        function render() {
            const container = document.getElementById("charWindow");
            container.innerHTML = "";

            const visible = getVisibleCount();

            for (let i = 0; i < visible; i++) {
                let index = (start + i) % char.length;
                const c = char[index];

                container.innerHTML += `
                <div style="
                    width:250px;
                    background:#111;
                    color:white;
                    border:2px solid gold;
                    border-radius:10px;
                    position:relative;
                    transition:0.3s;
                "
                onmouseover="
                    this.querySelector('img').style.transform='scale(1.25)';
                    this.style.boxShadow='0 0 20px gold';
                "
                onmouseout="
                    this.querySelector('img').style.transform='scale(1)';
                    this.style.boxShadow='none';
                "
                >
                    <img src="${c.img}" style="
                        height:350px;
                        width:100%;
                        object-fit:contain;
                        transition:0.3s;
                        position:relative;
                        z-index:2;
                    ">
                    
                    <h5 style="color:gold; margin:10px 0;">${c.name}</h5>
                </div>
                `;
            }
        }

        function nextChar() {
            start = (start + 1) % char.length;
            render();
        }

   
        function prevChar() {
            start = (start - 1 + char.length) % char.length;
            render();
        }

        window.addEventListener("resize", render);

        function showHome() { showSection(homeView); }

        function renderPlanets() {
            if (!planetsContainer || !planets) return;

            planetsContainer.innerHTML = `
                <div class="row g-4 justify-content-center">
                    ${planets.map(p => `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">

                            <div class="planet-card p-3 border border-warning rounded bg-dark text-center h-100"
                                style="cursor:pointer; transition:0.3s; max-width:260px; width:100%;">

                                <img src="${p.image}" 
                                    class="img-fluid"
                                    style="height:140px; object-fit:contain; transition:0.3s;">

                                <h5 class="text-warning mt-2">${p.name}</h5>
                                <p class="small text-secondary">
                                    ${p.description ?? ""}
                                </p>

                            </div>

                        </div>
                    `).join("")}
                </div>
            `;

            addPlanetHover();
        }


        function addPlanetHover() {
            document.querySelectorAll(".planet-card").forEach(card => {

                card.addEventListener("mouseenter", () => {
                    card.style.transform = "scale(1.06)";
                    card.style.boxShadow = "0 0 25px rgba(255,204,0,0.7)";
                });

                card.addEventListener("mouseleave", () => {
                    card.style.transform = "scale(1)";
                    card.style.boxShadow = "none";
                });

            });
        }

        
        window.addEventListener("load", () => {
            render();
            renderPlanets();
        });

        