const inp = document.getElementById("inp");
const pl = document.getElementById("playes");

inp.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        pl.src = url;
        pl.play(url);
    }
})