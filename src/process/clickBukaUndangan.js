export default function clickBukaUndangan() {
    const el = document.getElementById("sampulDepan");
    const content = document.getElementById("kontenUtama");
    const bgm = document.getElementById("bgm");

    content.classList.remove("hidden");
    content.style.opacity = "1";
    content.style.zIndex = "1";

    el.style.transition = "transform 0.5s";
    el.style.transform = "translateY(-100%)";

    bgm.play();
    setTimeout(() => {
        el.style.display = "none";
    }, 500);
}


