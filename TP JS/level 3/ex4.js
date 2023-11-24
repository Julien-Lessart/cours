/*
    Exercice 4 : Le Romain
    Écrivez un algorithme qui transforme des nombres en base 10 en nombre romains.
    Exemple :
        2023
        MMXXIII
    Julien LESSART
    23/11/2023
*/

/**
 * Permet de transformer un nombre de base 10 en son équivalent en chiffre romain
 * @param {number} nombre Le nombre a transformer
 * @returns {string} result La chaine de caractère correspondant en chiffre romain correspondant aux paramètres données
 */
const transformerBase10EnNombreRomains = (nombre) =>{
    let result = '';
    let digit;
    let besoinInversion = false;
    // Inversion d'un nombre
    let stringNombre = nombre.toString().split('').reduce((acc, char) => char + acc, '');
    let tableauRomain = [
        ['I','V',],
        ['X', 'L',],
        ['C','D',],
        'M',
    ]
    for(let i = 0; i < stringNombre.length ; i++){
        digit = parseInt(stringNombre[i]);
        if(digit === 4 || digit === 9) besoinInversion = true;
        // Si 1000+
        if(tableauRomain[i].length === 1) result += tableauRomain[i].repeat(digit);

        // Si le nombre = 4 pour avoir le format IV OU XL ET non IIII OU XXXX
        if(digit === 4) result += tableauRomain[i][1] + tableauRomain[i][0];
        // Si le nombre est inférieur à 5 on affiche n fois le caractère de gauche du tableau
        else if(digit < 5) result += tableauRomain[i][0].repeat(digit);

        // Si le nombre = 9 pour avoir le format IX OU XC ET non VIIII OU LLLL
        if(digit === 9) {
            if(tableauRomain[i + 1].length === 1) result += tableauRomain[i + 1] + tableauRomain[i][0];
            else result += tableauRomain[i + 1][0] + tableauRomain[i][0];
        }
            // Sinon on affiche un caractère de droite + n fois le reste en caractère de gauche
        else if(digit >= 5){
            result += tableauRomain[i][1];
            if(digit !== 5) result += tableauRomain[i][0].repeat(digit % 5)
        }
    }

    // Probleme durant les digit 4 et 9 chiffre romain dans le mauvais sens
    if(besoinInversion) result = result.split('').reduce((acc, char) => char + acc, '');
    return result;
}

console.log(transformerBase10EnNombreRomains(949));