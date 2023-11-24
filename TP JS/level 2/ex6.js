<<<<<<< HEAD
/*  
    Exercice 6 : Une vraie pyramide
    Adaptez l'exercice 5 pour que la pyramide soit dans le bon sens (^).
    Résultat attendu dans le terminal pour le chiffre 5 :
        *
       ***​
      *****​
     *******​
    *********

    Julien LESSART
    22/11/2023
*/

/**
 * Permet de générer un escalier d'étoiles de taille N montant puis descendant et de l'afficher
 * @param {number} nombre La taille de l'escalier
 * @throws {Error} Si l'entrée est inférieur à 1 OU si l'entrée n'est pas un nombre
 */
const genererPyramide = (nombre) =>{
    // String Pour remplir d'étoiles la pyramide
    let ligne = '*';
    // String Pour remplir d'espace avant la pyramide
    let space = ' ';
    // Number Pour gérer le nombre d'espaces et le nombre d'étoiles
    let margeEscalier = 1;
    if(typeof(nombre) !== 'number') throw new Error(`L'entrée n'est pas un nombre`);
    if(nombre <= 0) throw new Error(`L'entrée est inférieur à 1`);

    for(let i = 0; i < nombre; i++){
        // space.repeat(nombre - margeEscalier) permet de gérer le nombre d'espaces
        // ligne.repeat(i + margeEscalier) permet de gérer le nombre d'étoiles
        // Pour N = 5
        // i = 0 donc (space.repeat(4) + ligne.repeat(1))
        // i = 2 donc (space.repeat(3) + ligne.repeat(3))
        // i = 3 donc (space.repeat(2) + ligne.repeat(5))
        // i = 4 donc (space.repeat(1) + ligne.repeat(7))
        // i = 5 donc (space.repeat(0) + ligne.repeat(9))
        console.log(space.repeat(nombre - margeEscalier) + ligne.repeat(i + margeEscalier));
        // Marche pas console.log(space.repeat((nombre - i) - 1) + ligne.repeat(2 * (i - 1) + 1));
        margeEscalier++;
    }
}

=======
/*  
    Exercice 6 : Une vraie pyramide
    Adaptez l'exercice 5 pour que la pyramide soit dans le bon sens (^).
    Résultat attendu dans le terminal pour le chiffre 5 :
        *
       ***​
      *****​
     *******​
    *********

    Julien LESSART
    22/11/2023
*/

/**
 * Permet de générer un escalier d'étoiles de taille N montant puis descendant et de l'afficher
 * @param {number} nombre La taille de l'escalier
 * @throws {Error} Si l'entrée est inférieur à 1 OU si l'entrée n'est pas un nombre
 */
const genererPyramide = (nombre) =>{
    // String Pour remplir d'étoiles la pyramide
    let ligne = '*';
    // String Pour remplir d'espace avant la pyramide
    let space = ' ';
    // Number Pour gérer le nombre d'espaces et le nombre d'étoiles
    let margeEscalier = 1;
    if(typeof(nombre) !== 'number') throw new Error(`L'entrée n'est pas un nombre`);
    if(nombre <= 0) throw new Error(`L'entrée est inférieur à 1`);

    for(let i = 0; i < nombre; i++){
        // space.repeat(nombre - margeEscalier) permet de gérer le nombre d'espaces
        // ligne.repeat(i + margeEscalier) permet de gérer le nombre d'étoiles
        // Pour N = 5
        // i = 0 donc (space.repeat(4) + ligne.repeat(1))
        // i = 2 donc (space.repeat(3) + ligne.repeat(3))
        // i = 3 donc (space.repeat(2) + ligne.repeat(5))
        // i = 4 donc (space.repeat(1) + ligne.repeat(7))
        // i = 5 donc (space.repeat(0) + ligne.repeat(9))
        console.log(space.repeat(nombre - margeEscalier) + ligne.repeat(i + margeEscalier));
        // Marche pas console.log(space.repeat((nombre - i) - 1) + ligne.repeat(2 * (i - 1) + 1));
        margeEscalier++;
    }
}

>>>>>>> 89b878d90dcfa455f1bcd34b6e569c6246243e89
genererPyramide(5);