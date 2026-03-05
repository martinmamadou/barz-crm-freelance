# Barz – Landing page

Page de promotion de l’app Barz (gestion clients et tâches), mobile first, HTML/CSS/JS.

## À faire de ton côté

1. **App Store**  
   - Remplacer `idXXXXXXXXX` dans les liens par l’ID réel de l’app (ex. `https://apps.apple.com/app/barz/id1234567890`).

2. **Badge App Store**  
   - Télécharger le badge officiel (SVG ou PNG) depuis [Apple App Store Marketing Guidelines](https://developer.apple.com/app-store/marketing/guidelines/#images) et le sauvegarder en `assets/app-store-badge.svg` (ou `.png`, puis adapter le `src` dans `index.html`).

3. **Captures d’écran**  
   - Ajouter 3 images dans `assets/` :
     - `screenshot-list.png` – liste des clients
     - `screenshot-tasks.png` – tâches du jour
     - `screenshot-profile.png` – profil client  
   - Format conseillé : 390×844 px (iPhone) ou ratio équivalent.

4. **Open Graph / déploiement**  
   - Remplacer `https://barz.app` dans les meta `og:url` et `og:image` par l’URL réelle du site.  
   - Ajouter une image `og-image.png` (recommandé 1200×630 px) pour le partage sur les réseaux.

## Lancer en local

Ouvrir `index.html` dans un navigateur ou servir le dossier avec un serveur local (ex. `npx serve .`).

## SEO

- Titre, meta description et mots-clés déjà renseignés.
- Structure sémantique (header, main, sections, footer), H1/H2, JSON-LD `SoftwareApplication`.
- Penser à remplir les chemins d’images pour les alt et l’OG image une fois en production.
