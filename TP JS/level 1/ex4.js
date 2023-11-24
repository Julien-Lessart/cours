<<<<<<< HEAD
/*  
    ## Exercice 4 : Club d'enfants
    Écrivez un programme qui demande d'entrer l'âge d'un enfant et qui vérifie dans quel catégorie il est :
    - 12 ans ou plus = Cadet
    - 10 ans ou plus = Minime
    - 8 ans ou plus = Pupille
    - Autre = Poussin
    Julien LESSART
    22/11/2023
*/


/**
 * Permet de retourner la catégorie de l'enfant par rapport à son age
 * @param {number} age Age de l'enfant
 * @param {number} nombreDroite second nombre de l'addition
 * @throw {error} Si l'input n'est pas un nombre
 * @returns La catégorie de l'enfant
 */
const calculerCategorie = (age)=>{
    let valeurDeRetour = '';
    if(typeof(age) !== "number") throw new Error('Les parametres ne sont pas des nombres');
    if(age >= 12) valeurDeRetour = 'Cadet';
    else if(age >= 10) valeurDeRetour = 'Minime';
    else if(age >= 8) valeurDeRetour = 'Pupille';
    else valeurDeRetour = 'Poussin';
    return valeurDeRetour;
}

console.log(calculerCategorie(7));

=======
/*  
    ## Exercice 4 : Club d'enfants
    Écrivez un programme qui demande d'entrer l'âge d'un enfant et qui vérifie dans quel catégorie il est :
    - 12 ans ou plus = Cadet
    - 10 ans ou plus = Minime
    - 8 ans ou plus = Pupille
    - Autre = Poussin
    Julien LESSART
    22/11/2023
*/


/**
 * Permet de retourner la catégorie de l'enfant par rapport à son age
 * @param {number} age Age de l'enfant
 * @param {number} nombreDroite second nombre de l'addition
 * @throw {error} Si l'input n'est pas un nombre
 * @returns La catégorie de l'enfant
 */
const calculerCategorie = (age)=>{
    let valeurDeRetour = '';
    if(typeof(age) !== "number") throw new Error('Les parametres ne sont pas des nombres');
    if(age >= 12) valeurDeRetour = 'Cadet';
    else if(age >= 10) valeurDeRetour = 'Minime';
    else if(age >= 8) valeurDeRetour = 'Pupille';
    else valeurDeRetour = 'Poussin';
    return valeurDeRetour;
}

console.log(calculerCategorie(7));

>>>>>>> 89b878d90dcfa455f1bcd34b6e569c6246243e89
