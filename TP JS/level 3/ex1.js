<<<<<<< HEAD
/*  
    Exercice 1 : Fizz Buzz
    Demandez à l'utilisateur de saisir un nombre "N". 
    Afficher tous les nombres allant de 0 à "N", avec les particularités suivantes :
        Remplacez tous les multiples de 3 par "FIZZ"​
        Remplacez tous les multiples de 5 par "BUZZ"​
        Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"
        Exemple :
            FIZZBUZZ​
            1   ​
            2   ​   
            FIZZ​
            4   ​
            BUZZ​
            FIZZ
    Julien LESSART
    22/11/2023
*/

/**
 * 
 * @param {number} nombre valeur max jusqu'où tester ses multiples
 * @throws {Error} Si la valeur est négative
 */
const remplacerMultiple = (nombre) => {
    let concatenation = '';
    if(Math.sign(nombre) === -1) throw new Error(`L'entrée est négative`);
    if(typeof(nombre) !== 'number') throw new Error(`L'entrée n'est pas un nombre`);

    for(let i = 0; i <= nombre; i++){

        // Si i est un multiple de 3
        if((i % 3) === 0) concatenation = 'FIZZ';
        // Si i est un multiple de 5
        if((i % 5) === 0) concatenation = concatenation.concat('BUZZ');
        // Sinon on affiche i
        if(((i % 5) !== 0) && ((i % 3) !== 0)) concatenation = i;
        console.log(concatenation);

        // On remet la concatenation a vide pour la prochaine ligne
        concatenation = '';
    }
}

=======
/*  
    Exercice 1 : Fizz Buzz
    Demandez à l'utilisateur de saisir un nombre "N". 
    Afficher tous les nombres allant de 0 à "N", avec les particularités suivantes :
        Remplacez tous les multiples de 3 par "FIZZ"​
        Remplacez tous les multiples de 5 par "BUZZ"​
        Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"
        Exemple :
            FIZZBUZZ​
            1   ​
            2   ​   
            FIZZ​
            4   ​
            BUZZ​
            FIZZ
    Julien LESSART
    22/11/2023
*/

/**
 * 
 * @param {number} nombre valeur max jusqu'où tester ses multiples
 * @throws {Error} Si la valeur est négative
 */
const remplacerMultiple = (nombre) => {
    let concatenation = '';
    if(Math.sign(nombre) === -1) throw new Error(`L'entrée est négative`);
    if(typeof(nombre) !== 'number') throw new Error(`L'entrée n'est pas un nombre`);

    for(let i = 0; i <= nombre; i++){

        // Si i est un multiple de 3
        if((i % 3) === 0) concatenation = 'FIZZ';
        // Si i est un multiple de 5
        if((i % 5) === 0) concatenation = concatenation.concat('BUZZ');
        // Sinon on affiche i
        if(((i % 5) !== 0) && ((i % 3) !== 0)) concatenation = i;
        console.log(concatenation);

        // On remet la concatenation a vide pour la prochaine ligne
        concatenation = '';
    }
}

>>>>>>> 89b878d90dcfa455f1bcd34b6e569c6246243e89
remplacerMultiple(6);