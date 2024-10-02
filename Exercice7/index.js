// Attend que tout le contenu de la page soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () { 
    // Récupère le bouton "Convertir" via son ID pour pouvoir lui attacher un événement click plus tard  
    const convertBtn = document.getElementById('convertBtn');
    // Récupère l'élément input où l'utilisateur saisit le nombre décimal
    const decimalInput = document.getElementById('decimalInput');
    // Récupère l'élément <p> où sera affiché le résultat de la conversion binaire
    const binaryResult = document.getElementById('binaryResult');

    // Fonction qui va effectuer la conversion du nombre décimal en binaire
    function convertToBinary() {
        // Récupère la valeur saisie par l'utilisateur dans le champ input
        const decimalValue = decimalInput.value;

        // Vérifie si l'entrée est vide ou contient des caractères non numériques
        // /^\d+$/ : vérifie que tous les caractères de la chaîne sont des chiffres (\d représente un chiffre, et + signifie "un ou plusieurs chiffres")
        if (decimalValue === '' || !/^\d+$/.test(decimalValue)) { 
            binaryResult.textContent = '';  // Efface le contenu en cas de saisie non valide
            return;
        }

        // Initialise une chaîne de caractères vide qui contiendra le résultat binaire
        let binary = '';
        // Convertit la valeur saisie (qui est une chaîne de caractères) en un entier décimal
        let quotient = parseInt(decimalValue, 10);

        // Début de la boucle qui va effectuer la conversion en binaire
        // Tant que le quotient (le nombre décimal en cours de traitement) est supérieur à 0
        while (quotient > 0) {
            // % est le reste d'une division donc soit 0, soit 1 donc pair ou impair (bits)
            // ce reste est ajouté par concaténation à binary en début de chaine qui va de la droite vers la gauche
            binary = (quotient % 2) + binary;
            // Ensuite, le quotient est divisé par 2 et arrondi à l'entier inférieur
            // Ce quotient réduit est ensuite utilisé pour la prochaine itération de la boucle
            // On répète la division jusqu'à ce que le quotient devienne 0
            quotient = Math.floor(quotient / 2);
        }

        // Une fois la boucle terminée (lorsque le quotient est 0), on affiche le résultat binaire
        // Si l'utilisateur entre "0" comme valeur, le résultat binaire sera également "0" car la chaîne `binary`reste vide dans ce cas. On utilise `binary || '0'` pour afficher "0" dans cette situation
        binaryResult.textContent = `Le binaire de ${decimalValue} est : ${binary || '0'}`;
    }
    // Ajout de l'événement click au bouton Convertir pour appeler la fonction convertToBinary
    convertBtn.addEventListener('click', convertToBinary);
});



            
          
                 
                
             
                
                
               
                
            


   
