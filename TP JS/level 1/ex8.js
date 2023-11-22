/*  
    ## Exercice 8 : Table de multiplication
    Écrivez un programme JS qui prend un nombre en entrée et affiche sa table de multiplication jusqu’à 10.
    Résultat attendu dans le terminal pour la table de 5 :
    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    5 x 4 = 20
    5 x 5 = 25
    5 x 6 = 30
    5 x 7 = 35
    5 x 8 = 40
    5 x 9 = 45
    5 x 10 = 50

    Julien LESSART
    22/11/2023
*/

/**
 * Permet de calculer et d'afficher une table de multiplication
 * @param {number} nombre La table de multiplication a afficher
 * @throw {error} Si l' input n'est pas un nombre
 * @returns retourne la table de multiplication au format : nombre x 1 = resultat
 */
const calculerTableMultiplication = (nombre)=>{
    if(typeof(nombre) !== 'number') throw new Error('Les parametres ne sont pas des nombres');
    for(let i = 1; i <= 10; i++){
        console.log(`${nombre} X ${i} = ${nombre * i}`);
    }
}

console.log(calculerTableMultiplication(5));