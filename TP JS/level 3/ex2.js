/*  
    Exercice 2 : Le Juste Prix
    Demandez à l'utilisateur de saisir un nombre de tentative 
    (ce nombre de tentatives représentera le nombre d'échec possible)​. 
    Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.​ 
    Construisez le programme permettant de :​
        Saisir un nombre​
        Comparer le nombre avec le résultat attendu "N"​    
        Afficher "Plus" ou "Moins"​
        Retirer une vie
    Julien LESSART
    22/11/2023
*/

//On créé une interface de communication avec le terminal de l'utilisateur
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout,
});

const justePrix = async (nombre) => {
   let nombreUtilisateur = 0;
   let nbVie = 5;
   let nbSecret = Math.floor(Math.random() * nombre);
   readline.setPrompt('Nombre ? :');
   do {
    nombre = readline.prompt();
      if (nombre < nbSecret) console.log('Moins');
      else if (nbSecret < nombre) console.log('Plus');
      else console.log('Bravo !');
      nbVie--;
   } while (nbVie === 0 && nbSecret !== nombre);
};

let nombre;

readline.on('line', (input) => {
   input(Number(input));
   if (isNaN(input) || input <= 0) {
      readline.prompt();
   } else {
      nombre = input;
      readline.close();
   }
});
readline.on('close', () => {
   console.log('test');
   process.exit(0);
});

readline.setPrompt('Votre nombre ? :');
readline.prompt();
justePrix(nombre);
