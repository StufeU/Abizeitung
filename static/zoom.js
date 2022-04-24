Array.from(document.querySelectorAll("[zoomable]")).forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById("zoomimg").src = element.src;
        document.getElementById("zoomimg").src = (element.hasAttribute("data-zoom-src") ? element.getAttribute("data-zoom-src") : element.src);
        document.getElementById("zoombg").classList.add("show");
    });
});
document.getElementById("zoombg").addEventListener("click", () => {
    document.getElementById("zoombg").classList.remove("show");
});
document.getElementById("zoomimg").addEventListener("click", () => {
    document.getElementById("zoombg").classList.remove("show");
});

document.addEventListener("scroll", () => {
    //document.getElementById("zoombg").classList.remove("show");
});