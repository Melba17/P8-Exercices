function calculate(num1, num2, operator) {
    // Convertit les paramètres num1 et num2 en nombre entier, selon le système de numération décimal (appelé base 10) que nous utilisons tous les jours, où les chiffres vont de 0 à 9, s'ils sont sous forme de chaîne de caractères
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    // Vérifie si num1 et num2 sont des nombres
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid numbers";
    }

    let result;
    // Structure conditionnelle pour gérer les différents opérateurs
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Division by zero is not allowed";
            }
            result = num1 / num2;
            break;
        default:
            return "Invalid operator";
    }

    return result;
}

// Exemples Tests
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

// BONUS Exemples Tests
console.log(calculate('5', '3', '+')); // Affiche 8
console.log(calculate(4, 5, '@'));     // Affiche "Invalid operator"
console.log(calculate(4, 5, 4));       // Affiche "Invalid operator"
console.log(calculate(4, 5, ''));      // Affiche "Invalid operator"


export default calculate
