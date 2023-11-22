/*  
    ## Exercice 9 : Somme du tableau
    Écrire une fonction qui prend un tableau d'entiers en paramètre 
    et renvoie la somme de tous les éléments du tableau.
    Julien LESSART
    22/11/2023
*/

/**
 * Permet de calculer la somme d'un tableau
 * @param {array} tableau Le tableau à tester
 * @throw {error} Si l' input n'a pas que des nombres dans sont tableau
 * @returns retourne la somme des entiers du tableau
 */
const calculerSommeTableau = (...tableau)=>{
    // initialiser à 0 car calcul d'une somme
    let valeurDeRetour = 0;
    for(element of tableau){
        if(typeof(element) !== 'number') throw new Error('Il y a des entrées du tableau qui ne sont pas des nombres');
        valeurDeRetour += element; 
    }
    return valeurDeRetour;
}

console.log(calculerSommeTableau(1,2,5,8,9));