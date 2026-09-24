const audio = document.getElementById("myAudio");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        musicBtn.textContent = "⏸ Musiqini Dayandır";
    } else {
        audio.pause();
        musicBtn.textContent = "🎵 Musiqini Başlat";
    }
});
