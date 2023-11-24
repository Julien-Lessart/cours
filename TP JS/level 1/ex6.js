<<<<<<< HEAD
/*  
    ## Exercice 6 : Pair ou impair
    Écrire un programme qui demande à l'utilisateur de saisir un nombre 
    et qui affiche si ce nombre est pair ou impair.
    Julien LESSART
    22/11/2023
*/


/**
 * Permet de savoir si un nombre est pair ou impair
 * @param {number} nombre Le nombre à tester
 * @throw {error} Si l'input n'est pas un nombre
 * @returns pair ou impaire
 */
const estPair = (nombre)=>{
    let valeurDeRetour = '';
    if(typeof(nombre) !== 'number') throw new Error(`Le parametre n'est pas un nombre`);
    // % 2 permet de savoir le reste d'un nombre donc 5 % 2 = 1(impair) | 4 % 2 = 0(pair)
    nombre % 2 === 0 ? valeurDeRetour = 'pair' : valeurDeRetour = 'impair';
    return valeurDeRetour;
}

console.log(estPair(5));

=======
/*  
    ## Exercice 6 : Pair ou impair
    Écrire un programme qui demande à l'utilisateur de saisir un nombre 
    et qui affiche si ce nombre est pair ou impair.
    Julien LESSART
    22/11/2023
*/


/**
 * Permet de savoir si un nombre est pair ou impair
 * @param {number} nombre Le nombre à tester
 * @throw {error} Si l'input n'est pas un nombre
 * @returns pair ou impaire
 */
const estPair = (nombre)=>{
    let valeurDeRetour = '';
    if(typeof(nombre) !== 'number') throw new Error(`Le parametre n'est pas un nombre`);
    // % 2 permet de savoir le reste d'un nombre donc 5 % 2 = 1(impair) | 4 % 2 = 0(pair)
    nombre % 2 === 0 ? valeurDeRetour = 'pair' : valeurDeRetour = 'impair';
    return valeurDeRetour;
}

console.log(estPair(5));

>>>>>>> 89b878d90dcfa455f1bcd34b6e569c6246243e89
