const char = [
            { name: "Goku", img: "https://dragonball-api.com/characters/goku_normal.webp" },
            { name: "Vegeta", img: "https://dragonball-api.com/characters/vegeta_normal.webp" },
            { name: "Gohan", img: "https://dragonball-api.com/characters/gohan.webp" },
            { name: "Piccolo", img: "https://dragonball-api.com/characters/picolo_normal.webp" },
            { name: "Freezer", img: "https://dragonball-api.com/characters/Freezer.webp" },
            { name: "Celula", img: "https://dragonball-api.com/characters/celula.webp" },
            { name: "Bills", img: "https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp" },
            { name: "Trunks", img: "https://dragonball-api.com/characters/Trunks_Buu_Artwork.webp" },
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
            <div style="width:250px; background:#111; color:white; border:2px solid gold; border-radius:10px;">
                <img src="${c.img}" style="height:350px; width:100%; object-fit:contain;">
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

        window.addEventListener("load", () => {
            render();
        });
