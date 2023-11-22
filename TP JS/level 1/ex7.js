/*  
    ## Exercice 7 : Positif, négatif ou nul ?
    Écrire un programme qui demande un nombre à l'utilisateur 
    puis vérifie si ce nombre est positif, négatif ou nul.
    Julien LESSART
    22/11/2023
*/

/**
 * Permet de savoir si un nombre est positif, négatif ou nul
 * @param {number} nombre Le nombre à tester
 * @throw {error} Si l' input n'est pas un nombre
 * @returns retourne 1 = positif | 0 = nul | -1 = négatif
 */
const signNombre = (nombre)=>{
    if(typeof(nombre) !== 'number') throw new Error('Les parametres ne sont pas des nombres');
    return Math.sign(nombre);
}

console.log(signNombre(-5));