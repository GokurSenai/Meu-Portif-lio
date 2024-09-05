document.getElementById("botaocalculadora").addEventListener("click", function () {
    const paragrafo = document.getElementById('infoCal');
    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block";
        document.getElementById("botaocalculadora").innerHTML = "Ocultar";
    } else {
        paragrafo.style.display = "none";
        document.getElementById("botaocalculadora").innerHTML = "Abrir";
    }
});
document.getElementById("botaomedieval").addEventListener("click", function () {
    const paragrafo = document.getElementById('infoMed');
    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block";
        document.getElementById("botaomedieval").innerHTML = "Ocultar";
    } else {
        paragrafo.style.display = "none";
        document.getElementById("botaomedieval").innerHTML = "Abrir";
    }
});