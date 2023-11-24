/*  
    Exercice 1 : Qui est le plus grand ?
    Écrivez un programme qui demande à l'utilisateur de saisir 3 nombres puis trouver le plus grand.
    Résultat attendu dans la console :
        [12 , 54 , 32 ] --> 54
    Julien LESSART
    22/11/2023
*/

/**
 * Permet de trouver le plus grand nombre parmis 3 entrée
 * @param  {...number} tableau array de taille 3 trouver le nombre le plus grand
 * @throws {error} Si l' input n'a pas que des nombres dans sont tableau OU si le tableau n'est pas de taille 3
 * @returns Le plus grand nombre du tableau 
 */
const trouverPlusGrandNombre =(...tableau)=>{
    // init a 0 pour pas que la valeur en cache soit supérieur à la plus grand valeur en entrée
    let valeurDeRetour = 0;

    if(tableau.length !== 3) throw new Error(`Il n'y a pas trois elements en entrée`);
    for(element of tableau){
        if(typeof(element) !== 'number') throw new Error(`Il n'y a pas que des nombres en entrée`);
        if(valeurDeRetour < element) valeurDeRetour = element;
    }
    return valeurDeRetour;
}

console.log(trouverPlusGrandNombre(12,50,28));