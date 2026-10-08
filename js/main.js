const nbProjets = "5";

document.addEventListener("DOMContentLoaded", () => {
    const listYearEl = document.querySelectorAll("[data-year]");
    listYearEl.forEach((yearEl) => {if (yearEl) yearEl.textContent = yearEl.textContent + " " + new Date().getFullYear();})

    const nomFichier = location.pathname.split('/').pop();
    const match = nomFichier.match(/(\d+)/);
    const numero = match ? match[1] : null;

    const listNumProjet = document.querySelectorAll("[num-projet]");
    listNumProjet.forEach((numProjet) => {
        if (numProjet) {
            if (numero < 10) {
                numProjet.textContent = "0" + numero;
            } else {
                numProjet.textContent = numero;
            }
        }
    })

    const listNbProjets = document.querySelectorAll("[nb-projets]");
    listNbProjets.forEach((nbProjet) => {if (nbProjet) nbProjet.textContent = nbProjets;})

    // Bandeau « dateline » façon journal, ajouté au-dessus du titre
    const masthead = document.querySelector(".masthead");
    const top = document.querySelector(".masthead__top");
    if (masthead && top && !document.querySelector(".masthead__dateline")) {
        const date = new Date().toLocaleDateString("fr-FR", {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
        });
        const bar = document.createElement("div");
        bar.className = "masthead__dateline";
        bar.setAttribute("aria-hidden", "true");
        const left = document.createElement("span");
        left.textContent = "Édition en ligne";
        const right = document.createElement("span");
        right.textContent = date;
        bar.append(left, right);
        masthead.insertBefore(bar, top);
    }
});