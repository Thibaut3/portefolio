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
});
