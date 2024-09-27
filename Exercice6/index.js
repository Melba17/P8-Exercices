// Attendre que tout le contenu de la page HTML soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    
    // Sélectionne l'input d'affichage où les calculs seront visibles
    const display = document.getElementById('display');
    
    // Sélectionne tous les boutons numériques (0 à 9) avec la classe 'num-button'
    const numButtons = document.querySelectorAll('.num-button');
    
    // Sélectionne tous les boutons d'opérations (+, -, *, /) avec la classe 'op-button'
    const opButtons = document.querySelectorAll('.op-button');
    
    // Sélectionne le bouton de remise à zéro (C) qui efface l'affichage
    const clearButton = document.getElementById('clear-button');
    
    // Sélectionne le bouton égal (=) pour déclencher le calcul
    const equalButton = document.getElementById('equal-button');

    // Ajout d'un écouteur d'événements 'click' à chaque bouton numérique (0-9)
    numButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lorsque l'utilisateur clique sur un bouton numérique, ajoute la valeur du bouton à l'affichage grâce à la valeur contenue dans data-value
            display.value += button.getAttribute('data-value');
        });
    });

    // Ajout d'un écouteur d'événements 'click' à chaque bouton d'opération (+, -, *, /)
    opButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lorsque l'utilisateur clique sur un bouton d'opération, ajoute la valeur du bouton à l'affichage grâce à la valeur contenue dans data-value
            display.value += button.getAttribute('data-value');
        });
    });

    // Ajout d'un écouteur d'événements 'click' au bouton de remise à zéro (C)
    clearButton.addEventListener('click', () => {
        // Efface tout le contenu de l'affichage
        display.value = '';
    });

    // Ajout d'un écouteur d'événements 'click' au bouton égal (=)
    equalButton.addEventListener('click', () => {
        // Essaye d'exécuter le calcul
        try {
            // Vérifie si l'expression contient une division par zéro
            if (display.value.includes('/0')) {
                // Si c'est une division par zéro, affiche le message d'erreur approprié
                display.value = 'Division by zero is not allowed';
            } else {
                // Si tout est correct, éxécute le calcul avec eval() et affiche le résultat
                const result = eval(display.value);
                display.value = result;
            }
        } catch (error) {
            // Si une erreur imprévue survient (ex : si l'utilisateur sélectionne plusieurs opérateurs d'affilé ), affiche "Erreur"
            display.value = 'Erreur';
        }
    });
});
