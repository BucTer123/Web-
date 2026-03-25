const input1 = document.getElementById("inputz");
const ply = document.getElementById("vid");

input1.addEventListener("change", function () {
    const fl = this.files[0];

    if (fl) {
        const ur = URL.createObjectURL(fl);
        ply.src = ur;
        ply.play();
    }
})