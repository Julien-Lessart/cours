/*  
    Exercice 3 : Somme
    Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".
    ​Calculer la somme de tous les nombres entre 1 et N.
    Résultat attendu dans le terminal pour le chiffre 5 :
        1+2+3+4+5 = 15

    Julien LESSART
    22/11/2023
*/
/**
 *  Permet de calculer une somme de tout les nombres entre 1 et l'entrée utilisateur
 *  Et l'affiche au format 1+2+3+4+5 = 15
 * @param {number} nombre La limite de la somme
 * @throws {Error} Si l'entrée n'est pas un nombre OU si l'entrée est est inférieur à 1
 */
const calculerSomme1aN = (nombre) =>{
    // init a 0 car somme de valeur
    let somme = 0;
    // init a vide pour pouvoir concatener
    let concatenation = '';
    if(nombre <= 0) throw new Error(`L'entrée est inférieur à 1`);
    if(typeof(nombre) !== 'number') throw new Error(`L'entrée n'est pas un nombre`);
    for(let i = 1; i <= nombre; i++){
        somme += i;
        // Concatenation au format n+
        concatenation = concatenation.concat(i.toString(), '+');
    }

    // Supprimer le dernier +
    concatenation = concatenation.slice(0, (concatenation.length - 1));

    // Ajout du =somme
    concatenation = concatenation.concat('=',somme.toString());
    return concatenation;
}

console.log(calculerSomme1aN(5));