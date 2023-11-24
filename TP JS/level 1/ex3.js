<<<<<<< HEAD
/*

## Exercice 3 : Addition
Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. 
L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.
Résultat attendu dans le terminal : 13 + 3 = 15
    Julien LESSART
    22/11/2023
*/

/**
 * Permet la calcul d'une somme de deux nombre
 * @param {number} nombreGauche premier nombre de l'addition
 * @param {number} nombreDroite second nombre de l'addition
 * @throw {error} Si les input ne sont pas des nombres
 * @returns le resultat de l'addition
 */
const addition = (nombreGauche, nombreDroite)=>{
    if(typeof(nombreGauche) !== "number" && typeof(nombreDroite !== "number")) throw new Error('Les parametres ne sont pas des nombres');
    return nombreGauche + nombreDroite;
}

console.log(addition(13, 2));

=======
/*

## Exercice 3 : Addition
Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. 
L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.
Résultat attendu dans le terminal : 13 + 3 = 15
    Julien LESSART
    22/11/2023
*/

/**
 * Permet la calcul d'une somme de deux nombre
 * @param {number} nombreGauche premier nombre de l'addition
 * @param {number} nombreDroite second nombre de l'addition
 * @throw {error} Si les input ne sont pas des nombres
 * @returns le resultat de l'addition
 */
const addition = (nombreGauche, nombreDroite)=>{
    if(typeof(nombreGauche) !== "number" && typeof(nombreDroite !== "number")) throw new Error('Les parametres ne sont pas des nombres');
    return nombreGauche + nombreDroite;
}

console.log(addition(13, 2));

>>>>>>> 89b878d90dcfa455f1bcd34b6e569c6246243e89
