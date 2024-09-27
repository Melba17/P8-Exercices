function calculateAverage(numbers) {
    //  vérifie si il y a bien des données dans le tableau et quelles sont valides
    if (!numbers || numbers.length === 0) {
        return 'No numbers to calculate average';
    }

    // Calcule la somme des nombres
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Calcule et retourne la moyenne
    const average = sum / numbers.length;
    return average;
}

// Exemples d'utilisation
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average


export default calculateAverage
