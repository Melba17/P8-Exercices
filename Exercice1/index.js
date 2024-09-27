function pairNumbers(min, max) {
    let result = '';  

    // Number() convertit les chaînes de caractères min et max en nombres
    // Si les arguments sont déjà des nombres, cela ne change rien
    min = Number(min);
    max = Number(max);

    ///// POUR ETABLIR LE POINT DE DEPART DE NOTRE LISTE DE RESULTAT //////
    // - min / 2 divise min par 2. (ex: si min = 1, 1 / 2 = 0.5)
    // - Math.floor(min / 2) renvoie la partie entière de cette division au niveau inférieur (ex: Math.floor(1 / 2) = 0)
    // - Math.floor(min / 2) * 2 : on multiplie par 2 le résultat de Math.floor(min / 2) donc La condition devient  0 !== 1, ce qui est vrai. Cela signifie que min est impair, donc on l'incrémente de 1 pour obtenir le prochain nombre pair 
    if (Math.floor(min / 2) * 2 !== min) {
        min += 1;
    }

    // Boucle for pour ajouter tous les nombres pairs entre min et max
    // On démarre à la valeur de min (qui est maintenant un nombre pair) et on incrémente de 2 à chaque itération
    for (let i = min; i <= max; i += 2) {
        result += i + ',';  // On ajoute le nombre pair suivi d'une virgule
    }

    return result.slice(0, -1);  // slice(0, -1) enlève le dernier caractère de la chaîne donc la dernière virgule
}

// Exemple d'utilisation
console.log(pairNumbers('1', '10')); // Retourne "2,4,6,8,10"

export default pairNumbers
