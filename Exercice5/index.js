// Ecouteur d'évènement pour que le code à l'intérieur de la fonction ne soit exécuté qu'une fois que le document HTML entier aura été complètement chargé 
document.addEventListener('DOMContentLoaded', function() {
    // Ajout de labels pour les champs de formulaire
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Ajout de la balise label
    const nameLabel = document.createElement('label');
    // Ajout de l'attribut identique à l'id
    nameLabel.setAttribute('for', 'name');
    // Ajout du texte avant l'input
    nameLabel.textContent = 'Nom :';

    // Idem
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Adresse e-mail :';

    // Ajout des éléments créés au DOM
    nameInput.parentNode.insertBefore(nameLabel, nameInput);
    emailInput.parentNode.insertBefore(emailLabel, emailInput);

    // Ajout des attributs aria-label pour l'accessibilité pour les 2 input
    nameInput.setAttribute('aria-label', 'Entrez votre nom');
    emailInput.setAttribute('aria-label', 'Entrez votre adresse e-mail');

    // Ajout d'un attribut alt à la balise image 
    const image = document.querySelector('img');
    if (!image.getAttribute('alt')) {
        image.setAttribute('alt', 'Description de l\'image'); // texte alternatif en question
    }

    // Remplacement du texte du lien car non descriptif ('Cliquez ici')
    const link = document.querySelector('a');
    if (link.textContent.trim() === 'Cliquez ici') {
        link.textContent = 'En savoir plus sur notre service';
        link.setAttribute('href', 'lien-cible.html'); // Et modification de l'URL cible car on a juste "#"
        link.setAttribute('title', 'En savoir plus sur notre service'); // Ajout de l'attribut title
    }
});
