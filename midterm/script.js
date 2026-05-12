        function getVisibleCount() {

            const width = window.innerWidth;

            if (width <= 480) return 1;
            if (width <= 1024) return 2;

            return 3;
        }

        let start = 0;
        let currentSearch = ""; 
        let currentRace = "all";

        const getElements = () => ({
            homeView: document.getElementById("homeView"),
            characterView: document.getElementById("characterView"),
            planetView: document.getElementById("planetView"), 
            bgVideo: document.getElementById("bgVideo"),
            seekBar: document.getElementById("seekBar")
        });

        function setActive(el) {
            document.querySelectorAll(".nav-link").forEach(link => {
                link.style.color = "white";
                link.style.textShadow = "none";
            });
            el.style.color = "#ffcc00";
            el.style.textShadow = "0 0 10px #ffcc00";
        }

        function showSection(sectionId) {
            const sections = ["homeView", "characterView", "planetsView"];
            
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.style.display = "none";
                    el.style.opacity = "0";
                }
            });

            const target = document.getElementById(sectionId);
            if (target) {
                target.style.display = "block"; // Ibalik sa layout
                
                setTimeout(() => {
                    target.style.opacity = "1";
                }, 10);
            }
        }

        function showHome() { showSection("homeView"); }
        function showCharacters() { showSection("characterView"); }
        function showPlanets() { showSection("planetsView"); }

        function render() {
            const container = document.getElementById("charWindow");
            container.innerHTML = "";

            const visible = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;

            for (let i = 0; i < visible; i++) {
                let index = (start + i) % characters.length;
                const c = characters[index];

                container.innerHTML += `
                <div style="width:200px; text-align:center;">
                    <img src="${c.image}" style="width:120px; height:120px; object-fit:cover; border:2px solid gold;">
                    <p>${c.name}</p>
                </div>`;
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

        let currentIndex = 0;

        function renderFeatured() {
            const windowEl = document.getElementById("char-carousel-window");
            if (!windowEl) return;

            windowEl.innerHTML = "";
            const itemsToShow = window.innerWidth < 768 ? 1 : 3;

            for (let i = 0; i < itemsToShow; i++) {
                let idx = (currentIndex + i) % characters.length;
                if (idx < 0) idx = characters.length + idx;

                const char = characters[idx];
                windowEl.innerHTML += `
                    <div class="char-card text-center" style="width: 200px; animation: fadeIn 0.5s;">
                        <img src="${char.image}" style="width: 100%; height: 250px; object-fit: contain; filter: drop-shadow(0 0 10px rgba(255,215,0,0.5));">
                        <h4 class="text-warning mt-2">${char.name}</h4>
                    </div>`;
            }
        }

        function nextChar() { currentIndex++; renderFeatured(); }
        function prevChar() { currentIndex--; renderFeatured(); }

        window.addEventListener("load", renderFeatured);
        window.addEventListener("resize", renderFeatured);


        function applyFilter() {
            const raceValue = document.getElementById('raceFilter').value;
            const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
            const container = document.getElementById('charContainer');
            const noResult = document.getElementById('noResult');

            if (!container) return;

            const filtered = characters.filter(char => {
                const matchesRace = (raceValue === "all" || char.race === raceValue);
                const matchesSearch = char.name.toLowerCase().startsWith(searchValue);
                return matchesRace && matchesSearch;
            });

            if (filtered.length === 0) {
                container.innerHTML = "";
                if (noResult) noResult.style.display = "block";
            } else {
                if (noResult) noResult.style.display = "none";
                
                container.innerHTML = filtered.map(char => `
                    <div class="col-6 col-md-4 col-lg-3 mb-4" style="perspective: 1000px;">
                        <div class="card h-100" 
                            onclick="showCharacterInfo('${char.name}')"
                            style="background: #000; 
                                    border: 1px solid #ffcc00; 
                                    border-radius: 10px; 
                                    overflow: visible; 
                                    transition: all 0.4s ease; 
                                    cursor: pointer;"
                            onmouseover="this.style.transform='translateY(-15px)'; this.style.boxShadow='0 0 40px rgba(255, 204, 0, 0.6)'; this.style.zIndex='100';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.zIndex='1';">
                            
                            <!-- Character Image Section -->
                            <div style="height: 350px; display: flex; align-items: flex-end; justify-content: center; overflow: visible; padding: 20px;">
                                <img src="${char.image}" 
                                    style="max-height: 100%; 
                                            width: auto; 
                                            object-fit: contain; 
                                            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
                                    onmouseover="this.style.transform='scale(1.4) translateY(-20px)'; this.style.filter='drop-shadow(0 0 20px #ffcc00)';"
                                    onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.filter='none';">
                            </div>

                            <!-- Character Name (Bottom Bar) -->
                            <div style="background: #1a1d20; padding: 10px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; text-align: center;">
                                <h5 style="color: #ffcc00; font-weight: bold; margin: 0; font-size: 1.1rem; letter-spacing: 1px;">
                                    ${char.name}
                                </h5>
                            </div>
                        </div>
                    </div>
                `).join(''); 
            }
        }

        function renderCharacters(list = characters) {
            const { charContainer } = getElements();
            if (!charContainer) return;

            charContainer.innerHTML = characters.map(char => `
                <div class="col-6 col-md-4 col-lg-3 mb-4" style="perspective: 1000px;">
                    <div class="card h-100" 
                        onclick="showCharacterInfo('${char.name}')"
                        style="background: #000; 
                                border: 1px solid #ffcc00; 
                                border-radius: 10px; 
                                overflow: visible; 
                                transition: all 0.4s ease; 
                                cursor: pointer;"
                        onmouseover="this.style.transform='translateY(-15px)'; this.style.boxShadow='0 0 40px rgba(255, 204, 0, 0.6)'; this.style.zIndex='100';"
                        onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'; this.style.zIndex='1';">
                        
                        <!-- Character Image Section -->
                        <div style="height: 350px; display: flex; align-items: flex-end; justify-content: center; overflow: visible; padding: 20px;">
                            <img src="${char.image}" 
                                style="max-height: 100%; 
                                        width: auto; 
                                        object-fit: contain; 
                                        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
                                onmouseover="this.style.transform='scale(1.4) translateY(-20px)'; this.style.filter='drop-shadow(0 0 20px #ffcc00)';"
                                onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.filter='none';">
                        </div>

                        <!-- Character Name (Bottom Bar) -->
                        <div style="background: #1a1d20; padding: 10px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; text-align: center;">
                            <h5 style="color: #ffcc00; font-weight: bold; margin: 0; font-size: 1.1rem; letter-spacing: 1px;">
                                ${char.name}
                            </h5>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        window.onload = applyFilter;

        function showCharacterInfo(name) {
            const c = characters.find(char => char.name === name);
            if (!c) return;

            const modalContent = document.getElementById("modalContent");
            modalContent.innerHTML = `
                <div class="modal-body p-0 position-relative" style="background: #000; overflow: hidden; border: 2px solid #ffcc00;">
                    
                    <!-- CLOSE BUTTON -->
                    <button type="button" class="btn-close btn-close-white position-absolute" 
                            data-bs-dismiss="modal" style="top: 20px; right: 20px; z-index: 100;"></button>
                    
                    <!-- TOP SECTION -->
                    <div class="row g-0 p-4" style="background: radial-gradient(circle at top, #222 0%, #000 100%);">
                        <!-- MAIN CHARACTER IMAGE -->
                        <div class="col-md-5 d-flex align-items-center justify-content-center" style="min-height: 300px;">
                            <img src="${c.image}" 
                                style="max-width: 100%; max-height: 320px; width: auto; height: auto; object-fit: contain; transition: all 0.4s ease; cursor: pointer;"
                                onmouseover="this.style.transform='scale(1.1) translateY(-10px)'; this.style.filter='drop-shadow(0 0 25px #ffcc00)';" 
                                onmouseout="this.style.transform='scale(1) translateY(0)'; this.style.filter='none';">
                        </div>

                        <!-- INFO SECTION -->
                        <div class="col-md-7 ps-md-4 d-flex flex-column justify-content-center mt-4 mt-md-0">
                            <h1 class="text-warning fw-bold mb-2" style="text-transform: uppercase; letter-spacing: 3px; font-size: 2.5rem; text-shadow: 2px 2px #000;">${c.name}</h1>
                            <p class="text-light opacity-75 mb-4" style="font-size: 1rem; line-height: 1.4;">
                                ${c.description}
                            </p>

                            <!-- STATS -->
                            <div class="d-flex gap-2 mb-3 text-center">
                                <div class="flex-fill p-2 border border-secondary rounded bg-dark bg-opacity-50 small text-white">${c.race}</div>
                                <div class="flex-fill p-2 border border-secondary rounded bg-dark bg-opacity-50 small text-white">${c.gender}</div>
                                <div class="flex-fill p-2 border border-secondary rounded bg-dark bg-opacity-50 small text-white text-truncate">${c.affiliation}</div>
                            </div>

                            <!-- KI BOXES -->
                            <div class="d-flex gap-3">
                                <div class="flex-fill p-3 rounded-3 border border-warning text-center" style="background: rgba(255,204,0,0.05);">
                                    <div class="text-warning fw-bold small">BASE KI</div>
                                    <div class="text-white h5 fw-bold m-0">${c.ki}</div>
                                </div>
                                <div class="flex-fill p-3 rounded-3 bg-warning text-dark text-center shadow-lg">
                                    <div class="fw-bold small">MAX KI</div>
                                    <div class="h5 fw-bold m-0">${c.maxKi}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- BOTTOM SECTION: TRANSFORMATIONS (Pinalaki Version) -->
                    <div class="p-4" style="background: #0a0a0a; border-top: 3px solid #ffcc00;">
                        <h5 class="text-warning mb-4 fw-bold text-center" style="letter-spacing: 2px;">TRANSFORMATIONS</h5>
                        
                        <div class="d-flex flex-wrap gap-4 justify-content-center" style="overflow: visible;">
                            ${c.transformations?.map(t => `
                                <div class="text-center p-3 rounded bg-dark border-secondary position-relative" 
                                    style="width: 130px; border: 1px solid #333; transition: all 0.3s ease; cursor: pointer; overflow: visible; background: linear-gradient(180deg, #111, #000);"
                                    onmouseover="this.style.borderColor='#ffcc00'; this.style.boxShadow='0 0 20px rgba(255,204,0,0.3)'; this.style.zIndex='10';"
                                    onmouseout="this.style.borderColor='#333'; this.style.boxShadow='none'; this.style.zIndex='1';">
                                    
                                    <div style="height: 100px; display: flex; align-items: center; justify-content: center;">
                                        <img src="${t.image}" 
                                            style="max-height: 100%; width: auto; object-fit: contain; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);"
                                            onmouseover="this.style.transform='scale(1.8) translateY(-15px)';"
                                            onmouseout="this.style.transform='scale(1) translateY(0)';" />
                                    </div>
                                    
                                    <div class="text-warning mt-3 fw-bold" style="font-size: 0.75rem; text-transform: uppercase;">${t.name}</div>
                                </div>
                            `).join("") || '<p class="text-muted">No transformations available.</p>'}
                        </div>
                    </div>
                </div>`;
            
            new bootstrap.Modal(document.getElementById('characterModal')).show();
        }

        
        const planetsContainer = document.getElementById('planets-list');
        let galacticPlanets = [];

        async function loadGalacticDatabase() {
            try {
                const response = await fetch('https://dragonball-api.com/api/planets?limit=20');
                const data = await response.json();
                
                galacticPlanets = data.items;
                
                renderPlanets(galacticPlanets);
            } catch (error) {
                console.error("Connection lost to Galactic Server:", error);
                document.getElementById('planets-list').innerHTML = `<p style="color: #ff4444; text-align: center; width: 100%;">System Error: Unable to retrieve planet data.</p>`;
            }
        }

        function renderPlanets(planets = []) {
            const container = document.getElementById('planets-list');
            if (!container) return;
            
            container.innerHTML = ''; 

            planets.forEach(planet => {
                const isDestroyed = planet.isDestroyed;
                
                // --- DATA LOGIC ---
                const statusLabel = isDestroyed ? 'DESTROYED' : 'ACTIVE';
                const themeColor = isDestroyed ? '#ff4444' : '#00ff88';
                const themeBg = isDestroyed ? 'rgba(255, 68, 68, 0.1)' : 'rgba(0, 255, 136, 0.1)';

                let description = planet.description;
                if (!description || description.trim() === "") {
                    description = "No detailed satellite records available for this sector.";
                }

                const card = `
                    <div class="col-xl-3 col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div 
                            onmouseover="this.style.transform='translateY(-12px)'; this.style.borderColor='#d4af37'; this.style.boxShadow='0 8px 25px rgba(212, 175, 55, 0.4)';"
                            onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#30363d'; this.style.boxShadow='0 4px 15px rgba(0,0,0,0.5)';"
                            style="background: #161b22; border: 1px solid #30363d; border-radius: 16px; overflow: hidden; width: 100%; display: flex; flex-direction: column; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 4px 15px rgba(0,0,0,0.5); cursor: pointer;">
                            
                            <!-- Image Container -->
                            <div style="height: 190px; width: 100%; overflow: hidden; border-bottom: 1px solid #30363d; background-color: #000;">
                                <img src="${planet.image}" alt="${planet.name}" 
                                    style="width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease;"
                                    onmouseover="this.style.transform='scale(1.1)';"
                                    onmouseout="this.style.transform='scale(1)';"
                                >
                            </div>

                            <!-- Details -->
                            <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
                                <h5 style="color: #d4af37; margin: 0 0 10px 0; font-size: 1.25rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                                    ${planet.name}
                                </h5>
                                
                                <p style="font-size: 0.85rem; color: #9ca3af; line-height: 1.5; margin-bottom: 20px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                                    ${description}
                                </p>

                                <!-- Status Badge -->
                                <div style="text-align: center; padding: 10px; border-radius: 8px; font-size: 0.7rem; font-weight: 800; letter-spacing: 2px; border: 1px solid ${themeColor}; color: ${themeColor}; background: ${themeBg}; transition: 0.3s;">
                                    STATUS: ${statusLabel}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', card);
            });
        }

        const searchBox = document.getElementById('planetSearch');
        const filterDropdown = document.getElementById('statusFilter');

        function applyGalacticFilters() {
            const searchText = searchBox.value.toLowerCase();
            const filterValue = filterDropdown.value;

            const filtered = galacticPlanets.filter(planet => {
                const matchesName = planet.name.toLowerCase().includes(searchText);
                const matchesStatus = (filterValue === 'all') || 
                                    (filterValue === 'active' && !planet.isDestroyed) || 
                                    (filterValue === 'destroyed' && planet.isDestroyed);
                
                return matchesName && matchesStatus;
            });

            renderPlanets(filtered);

        }

        searchBox.addEventListener('input', applyGalacticFilters);
        filterDropdown.addEventListener('change', applyGalacticFilters);

        document.addEventListener('DOMContentLoaded', loadGalacticDatabase);        

        window.addEventListener("load", () => {
            const { bgVideo, seekBar } = getElements();
            
            if (bgVideo && seekBar) {
                bgVideo.addEventListener("timeupdate", () => {
                    seekBar.value = (100 / bgVideo.duration) * bgVideo.currentTime;
                });
                seekBar.addEventListener("input", () => {
                    bgVideo.currentTime = bgVideo.duration * (seekBar.value / 100);
                });
            }

            renderFeatured();
        });
