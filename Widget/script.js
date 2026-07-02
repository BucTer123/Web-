const btn = document.getElementById("time_now");

btn.addEventListener("click", function () {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    window.alert(timeString);

    setInterval(showTime, 1000);
})