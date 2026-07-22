// LoneWolfX v2.0

document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".card");
    const buttons = document.querySelectorAll(".btn");

    // Fade in card
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "all 1s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

    // Button hover glow
    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.boxShadow = "0 0 20px rgba(255,255,255,0.4)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.boxShadow = "none";
        });

    });

    // Greeting based on time
    const hour = new Date().getHours();

    let greeting = "Welcome";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    console.log(greeting + " to LoneWolfX");
// ===== Background Music =====

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0;

// Start music after first tap
document.addEventListener("click", function startMusic() {

    music.play();

    let volume = 0;

    const fade = setInterval(() => {

        if (volume < 1) {

            volume += 0.05;
            music.volume = volume;

        } else {

            clearInterval(fade);

        }

    }, 200);

    document.removeEventListener("click", startMusic);

}, { once: true });

// Speaker button

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();
        musicBtn.textContent = "🔊";

    } else {

        music.pause();
        musicBtn.textContent = "🔇";

    }

});
   // Try to autoplay music
music.play().then(() => {

    musicBtn.innerHTML =
    '<i class="fa-solid fa-volume-high"></i> Pause Music';

}).catch(() => {

    console.log("Autoplay blocked by browser.");

}); 
});
