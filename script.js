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
document.getElementById("botaoJJBA").addEventListener("click", function () {
    const paragrafo = document.getElementById('infoJJBA');
    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block";
        document.getElementById("botaoJJBA").innerHTML = "Ocultar";
    } else {
        paragrafo.style.display = "none";
        document.getElementById("botaoJJBA").innerHTML = "Abrir";
    }
});
document.getElementById("botaoArduino").addEventListener("click", function () {
    const paragrafo = document.getElementById('infoArduino');
    if (paragrafo.style.display === "none" || paragrafo.style.display === "") {
        paragrafo.style.display = "block";
        document.getElementById("botaoArduino").innerHTML = "Ocultar";
    } else {
        paragrafo.style.display = "none";
        document.getElementById("botaoArduino").innerHTML = "Abrir";
    }
});
