document.addEventListener("DOMContentLoaded", () => {
    fetch("../JavaScriptHTML/Footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(err => console.error("Footer load error:", err));
});
