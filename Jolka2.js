

// Iegūstam <canvas> elementu no HTML pēc tā ID "snow"
const canvas = document.getElementById("snow"); 

// Iegūstam 2D kontekstu, lai varētu zīmēt uz audekla
const ctx = canvas.getContext("2d"); 

// Uzstādām audekla izmēru atbilstoši loga platumam un augstumam
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Izveidojam masīvu, kur glabāsim visas sniegpārslas
const snowflakes = []; 

// Izveidojam 200 sniegpārslas ar nejaušiem parametriem
for (let i = 0; i < 200; i++) {
    snowflakes.push({
        x: Math.random() * canvas.width,     // nejauša x koordināta
        y: Math.random() * canvas.height,    // nejauša y koordināta
        radius: Math.random() * 3 + 1,       // nejaušs rādiuss no 1 līdz 4
        speed: Math.random() * 2 + 0.5       // nejaušs kritiena ātrums (0.5 līdz 2.5)
    });
}

// Funkcija, kas uzzīmē visas sniegpārslas uz audekla
function drawSnowflakes() {
    // Notīra visu audeklu (sāk no jauna)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Caur katru sniegpārslu:
    snowflakes.forEach((flake) => {
        // Izveido gradāciju katrai sniegpārslai, lai tā izskatās kā izplūdušs aplis
        const gradient = ctx.createRadialGradient(
            flake.x, flake.y, 0,
            flake.x, flake.y, flake.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");   // centrs balts
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");   // mala caurspīdīga

        // Uzzīmē sniegpārslu kā apli ar šo gradāciju
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Funkcija, kas atjauno sniegpārslu pozīcijas, lai tās kustētos
function updateSnowflakes() {
    snowflakes.forEach((flake) => {
        flake.y += flake.speed; // palielina y (pārvieto uz leju)
        
        // Ja sniegpārsla nokrīt zem audekla, atgriež to augšā
        if (flake.y > canvas.height) {
            flake.y = 0; // sāk no augšas
            flake.x = Math.random() * canvas.width; // ar jaunu x koordinātu
        }
    });
}

// Funkcija, kas veido nepārtrauktu animāciju
function animate() {
    drawSnowflakes();     // zīmē sniegpārslas
    updateSnowflakes();   // atjauno to pozīcijas
    requestAnimationFrame(animate); // atkārto šo ciklu (60 kadri sekundē)
}

// Uzsāk animāciju
animate(); 
