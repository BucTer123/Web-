const input = document.getElementById("srch_input");
const btn = document.getElementById("srch_buttons");

btn.addEventListener("click", function () {
    if (input.value === "Video") {
        window.open("Videos/Video_Eng.html");
    }
    if (input.value === "Відео") {
        window.open("Videos/Video_Ukr.html");
    }
    if (input.value === "Видео") {
        window.open("Videos/Video_Rus.html");
    }
    if (input.value === "Music") {
        window.open("Musics/Music_End.html");
    }
    if (input.value === "Музика") {
        window.open("Musics/SNG_Music_End.html");
    }
});

const btn2 = document.getElementById("Favorites");
const btn3 = document.getElementById("Tracks");

btn2.addEventListener("click", function () {
    window.open("Favorites.html");
});

btn3.addEventListener("click", function () {
    window.open("Tracks.html");
});

