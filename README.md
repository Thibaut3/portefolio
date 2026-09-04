# TENSEUR — portfolio IA façon zine

Site statique (HTML/CSS/JS pur, aucun outil de build nécessaire) prêt à personnaliser et à héberger gratuitement.

## Structure des fichiers

```
index.html          → Accueil
a-propos.html        → Page "à propos" (format interview)
parcours.html        → Formation, chronologie, certifications
projets.html         → Liste de tous les projets
projet-1.html        → Exemple de projet rempli (vision par ordinateur)
projet-2.html        → Exemple de projet rempli (NLP)
projet-3.html        → Exemple de projet rempli (séries temporelles)
modele-projet.html   → Modèle VIERGE à dupliquer pour un nouveau projet
css/style.css        → Toute la mise en forme
js/main.js           → Petit script (juste l'année du footer)
```

## Personnaliser le contenu

1. **Remplace partout** : ton nom, ta photo, tes liens LinkedIn/GitHub/Kaggle, ton adresse e-mail.
   Cherche `ton-pseudo`, `ton-profil`, `camille.duportail@example.com` et `Camille Duportail` dans les fichiers et remplace-les.
2. **Ta photo** : dans `a-propos.html`, remplace le bloc `.photo-placeholder` par une vraie image, par ex. :
   ```html
   <img src="assets/portrait.jpg" alt="Ton nom">
   ```
   Dépose ton image dans le dossier `assets/`.
3. **Ton parcours** : édite `parcours.html`, un `<article class="ticket">` par étape.
4. **Tes projets** : les pages `projet-1.html` à `projet-3.html` contiennent des exemples réalistes.
   Remplace leur contenu par tes vrais projets, ou supprime-les si tu n'en as pas trois.

## Ajouter un nouveau projet

1. Duplique `modele-projet.html` et renomme-le, par ex. `projet-4.html`.
2. Remplace tout ce qui est entre `[crochets]`.
3. Ajoute une carte vers ce projet dans `projets.html` (copie un bloc `<a class="clip-card">`).
4. Mets à jour les liens "précédent / suivant" en bas des pages projets voisines.

Garder la même structure (contexte → approche → résultats → ce que j'ai retenu → liens vers le code)
sur chaque page projet, c'est ce qui permet à un recruteur de comparer tes projets d'un coup d'œil.

## Lien vers Kaggle

Dans chaque page projet, le bouton "Voir le code sur Kaggle" pointe vers :
```
https://www.kaggle.com/code/[ton-pseudo]/[nom-du-notebook]
```
Remplace par l'URL réelle de ton notebook (visible dans la barre d'adresse quand tu l'ouvres sur Kaggle).
Pense à vérifier que le notebook est bien **public** avant d'envoyer le lien à un recruteur.

## Héberger le site gratuitement

Le plus simple pour un portfolio à partager sur LinkedIn : **GitHub Pages**.

1. Crée un dépôt GitHub (par ex. `portfolio`) et mets-y tout le contenu de ce dossier.
2. Dans le dépôt : *Settings → Pages → Source*, choisis la branche `main` et le dossier `/root`.
3. Ton site sera accessible à une adresse du type `https://ton-pseudo.github.io/portfolio/`.

Alternative tout aussi simple : glisser-déposer ce dossier sur [Netlify Drop](https://app.netlify.com/drop),
qui te donne une URL en quelques secondes sans compte GitHub.

## Accessibilité et bon sens

- Les couleurs et contrastes ont été choisis pour rester lisibles malgré le style "risographie".
- Le site est responsive (testé jusqu'à ~360px de large).
- Pense à ajouter un vrai texte alternatif (`alt="..."`) à chaque image que tu ajoutes.
