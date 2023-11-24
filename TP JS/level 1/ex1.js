<<<<<<< HEAD
/*

    Écrivez un programme qui demande à l'utilisateur de saisir son nom 
    et de lui afficher son nom avec le message de bienvenue.
    Résultat attendu dans le terminal : Bienvenue Julien !
    Julien LESSART
    22/11/2023
*/
export const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


/**
 * Permet d'afficher le nom de l'utilisateur entrée en paramètres
 * @param {string} nom de l'utilisateur
 * @throw {error} Si l'input n'est pas un nombre
 */
const saisirNom = (nom) =>{
    if(typeof(nom) !== "string") throw new Error(`Le paramètres n'est pas une string`)
    console.log(`Bienvenue ${nom} !`);
}

saisirNom('Julien');

=======
/*

    Écrivez un programme qui demande à l'utilisateur de saisir son nom 
    et de lui afficher son nom avec le message de bienvenue.
    Résultat attendu dans le terminal : Bienvenue Julien !
    Julien LESSART
    22/11/2023
*/
export const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


/**
 * Permet d'afficher le nom de l'utilisateur entrée en paramètres
 * @param {string} nom de l'utilisateur
 * @throw {error} Si l'input n'est pas un nombre
 */
const saisirNom = (nom) =>{
    if(typeof(nom) !== "string") throw new Error(`Le paramètres n'est pas une string`)
    console.log(`Bienvenue ${nom} !`);
}

saisirNom('Julien');

>>>>>>> 89b878d90dcfa455f1bcd34b6e569c6246243e89
