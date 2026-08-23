export default function musicController() {
    const music = document.getElementById("bgm");
    const musicOn = document.getElementById("musicOn");
    const musicOff = document.getElementById("musicOff");

    if (music.paused) {
        music.play();
        musicOn.style.display = "block";
        musicOff.style.display = "none";
    } else {
        music.pause();
        musicOn.style.display = "none";
        musicOff.style.display = "block";
    }
}