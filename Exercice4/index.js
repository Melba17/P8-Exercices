// Ajout d'un écouteur d'événement pour s'assurer que tout le contenu de la page HTML est chargé
document.addEventListener('DOMContentLoaded', function () {
    // Récupére l'élément avec l'ID 'myButton' dans le DOM (le bouton)
    const button = document.getElementById('myButton');

    // Ajout d'un écouteur d'événement pour le clic sur le bouton
    button.addEventListener('click', function () {
        // Crée un nouvel élément paragraphe <p> qui contiendra le message
        const message = document.createElement('p');

        // Définit le texte à l'intérieur du nouveau paragraphe
        message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';

        // Ajoute le paragraphe créé en tant qu'enfant de l'élément body de la page
        document.body.appendChild(message);
    });
});
