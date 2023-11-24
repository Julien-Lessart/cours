/*
    Exercice 3 : Le binaire
    Écrivez un algorithme qui permet de transformer un nombre en base 10 en un nombre en binaire.
    Une fois terminé, extrapolez pour toutes les bases.
    Julien LESSART
    22/11/2013
*/

/**
 * Permet de transformer un nombre en base 10 en un nombre en binaire
 * @param {number} nombre Le nombre à transformer
 * @throws {Errors} Si le nombre est négatif OU n'est pas un nombre
 * @returns Retourne le nombre en binare
 */
const transformerBase10EnBinaire = (nombre) => {
    let binaire = '';
    while(nombre >= 2){
        binaire += nombre % 2;
        nombre = Math.floor((nombre / 2));
    }
    return binaire.split('').reduce((acc, char) => char + acc, '');
}

/**
 * Permet de transformer un nombre en base 10 en un nombre en base N
 * @param {number} nombre Le nombre à transformer
 * @param {number} base La base voulu pour la transformation
 * @throws {Errors} Si le nombre est négatif OU n'est pas un nombre
 * @returns Retourne le nombre en base N
 */
const transformerBase10EnBaseN = (nombre, base) => {
    let result = '';
    while(nombre >= base){
        result += nombre % base;
        nombre = Math.floor((nombre / base));
    }
    if(base !== 2) result += nombre;
    return result.split('').reduce((acc, char) => char + acc, '');
}

console.log(transformerBase10EnBinaire(355));
console.log(transformerBase10EnBaseN(355, 2));
console.log(transformerBase10EnBaseN(355, 8));
console.log(transformerBase10EnBaseN(664, 16));
