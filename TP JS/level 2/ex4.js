/*  
    Exercice 4 : Escalier
    Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.
    Résultat attendu dans le terminal pour le chiffre 5 :
        *   ​
        **​
        ***​
        ****​
        *****
    Julien LESSART
    22/11/2023
*/

/**
 * Permet de générer un escalier d'étoiles de taille N  et de l'afficher
 * @param {number} nombre La taille de l'escalier
 * @throws {Error} Si l'entrée est inférieur à 1 OU si l'entrée n'est pas un nombre
 */
const genererEscalier = (nombre) =>{
    let ligne = '*';
    if(typeof(nombre) !== 'number') throw new Error(`L'entrée n'est pas un nombre`);
    if(nombre <= 0) throw new Error(`L'entrée est inférieur à 1`);

    for(let i = 1; i <= nombre; i++){
        console.log(ligne.repeat(i));
    }
}

genererEscalier(5);
