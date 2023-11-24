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

/**
 * Permet la gestion de l'affichage utilisateur
 * @param {string} string Ce qu'il doit être afficher à l'utilisateur
 * @returns {string} result L'input de l'utilisateur
 */
const promptSync = (string) => {
   let promptSync = require('prompt-sync')();
   let result = promptSync(string);
   return result;
}

const justePrix = (nombre) => {
   let nombreUtilisateur;
   let aPerdu = false;
   let aTrouve = false;
   let nbVie = 5;
   // Math.random() retourne un nombre entre 0 et 1 donc 
   // Ex : (0.23 * 50) = 11,5 ensuite on applique un floor(11,5) = 11
   let nbSecret = Math.floor(Math.random() * nombre);
   while (!aPerdu && !aTrouve) {
      nombreUtilisateur =  promptSync(`Nombre ?(Entre 0 et ${nombre}) : `);
      if (nombreUtilisateur > nbSecret){
         console.log('Moins');
         nbVie--;
         console.log(`Il vous reste ${nbVie} vie`);
      } 
      if(nbSecret > nombreUtilisateur){
         console.log('Plus');
         nbVie--;
         console.log(`Il vous reste ${nbVie} vie`);
      } 
      
      if(nbVie <= 0){
         aPerdu = true;
         console.log(`Dommage ! Vous avez perdu`);
      }
      
      if(nbSecret === parseInt(nombreUtilisateur)){
         aTrouve = true;
         console.log(`Bravo ! Vous avez gagné avec ${nbVie} vie restante`);
      } 
   } 
};

let nombre = promptSync('Votre nombre ? : ');
justePrix(nombre);
