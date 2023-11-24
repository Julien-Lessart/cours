/*  
    Exercice - : Le bowling
    Niveau : Difficile
    Le jeu se compose de 10 tours. Dans chaque tour, le joueur a deux lancers pour faire tomber 10 quilles. 
    Le score du cadre est le nombre total de quilles abattues, plus les bonus pour les strikes et les spares. 
    - On parle de réserve lorsque le joueur fait tomber les 10 quilles en deux lancers. 
    Le bonus pour ce cadre est le nombre de quilles abattues au prochain lancer. 
    - On parle de strike lorsque le joueur fait tomber les 10 quilles lors de son premier lancer. 
    Le cadre est alors complété par un seul lancer. 
    Le bonus pour ce cadre est la valeur des deux lancers suivants. 
    - Dans le dixième carreau, un joueur qui a obtenu un spare ou un strike est autorisé à lancer 
    les boules supplémentaires pour terminer le carreau. Toutefois, 
    il ne peut pas lancer plus de trois boules dans le dixième tour.


    La complexité de ce Kata réside dans le fait que le score doit-être calculé en live !
    Comme lorsque l'on va au bowling, lorsqu'on lance une boule on a un retour visuel direct.

    Exigences
        Ecrivez un programme qui attend une entrée utilisateur pour savoir 
        le nombre de quilles tombées à chaque tour. Précisez à chaque fois le tour actuel, 
        ainsi que le numéro du lancer. Une fois que l'utilisateur a précisé le nombre de quilles tombées, 
        caclulez son score en live. A la fin de la partie, donnez lui son score réel.
    Julien LESSART
    22/11/2023
*/

const MAX_NB_QUILLE = 10;
const MAX_NB_TOUR = 10;

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


/**
 * Permet de savoir si l'utilisateur à fait un spare
 * @param {array} tableauScore Pour pouvoir regarder le resultat d'avant
 * @param {number} nbTour Pour avoir le nombre de tour
 * @returns {boolean} estSpare true si l'utilisateur a fait un spare | false si l'utilisateur n'a pas fait de spare
 */
const estSpare = (tableauScore, nbTour) =>{
    let estSpare = false;
    if(((tableauScore[nbTour - 2][0] + tableauScore[nbTour - 2][1]) === 10) && tableauScore[nbTour - 2][1] !== 0) estSpare = true;
    return estSpare;
}

/**
 * Permet de savoir si l'utilisateur à fait un strike
 * @param {array} tableauScore Pour pouvoir regarder le resultat d'avant
 * @param {number} nbTour Pour avoir le nombre de tour
 * @returns {boolean} estStrike true si l'utilisateur a fait un strike | false si l'utilisateur n'a pas fait de strike
 */
const estStrike = (tableauScore, nbTour) => {
    let estStrike = false;
    if(tableauScore[nbTour - 2][0] === 10) estStrike = true;
    return estStrike;
}

/**
 * Permet de rafraichir l'interface en live
 * @param {array} tableauScore le score par tour de l'utlisateur
 * @param {number} nbTour Le nombre de tour entre 1 et MAX_NB_TOUR
 * @param {number} nbLancer Le nombre de lancer du tour en cours entre 1 et 3
 */
const rafrachirInterface = (tableauScore, nbTour, nbLancer) => {
    let affichage = '|';
    console.log('-'.repeat(140));   
    for(let i = 1; i <= MAX_NB_TOUR; i++) affichage += i + ' '.repeat(8) + '|';
    console.log(affichage);
    affichage = '|';
    console.log('-'.repeat(140));   
    for(let i = 1; i <= MAX_NB_TOUR; i++){
        if((i === nbTour) && (nbLancer === 2)){
            affichage += `${tableauScore[i - 1][0]} ${' '.repeat(1)} |${tableauScore[i - 1][1]} ${' '.repeat(1)}|`;
        }
        else if((i === nbTour) && (nbLancer === 1)){
            affichage += `${tableauScore[i - 1][0]} ${' '.repeat(1)} | ${' '.repeat(2)} |`;
        }
        else if(i <= nbTour){
            affichage += `${tableauScore[i - 1][0]} ${' '.repeat(1)} |${tableauScore[i - 1][1]} ${' '.repeat(1)}|`;
        }
        else{
            affichage += `${' '.repeat(4)}|${' '.repeat(4)}|`;
        }
    }
    console.log(affichage);
    console.log('-'.repeat(140));
    affichage = '|';
    for(let i = 1; i <= MAX_NB_TOUR; i++){
        if((i === nbTour) && (nbLancer === 1)){
            affichage += tableauScore[i - 1][0] + ' '.repeat(8) + '|';
        }
        else if(i <= nbTour){
            affichage += (tableauScore[i - 1][0] + tableauScore[i - 1][1]) + ' '.repeat(8) + '|';
        }
        else{
            affichage += ' '.repeat(9) + '|';
        }
    }
    console.log(affichage);
    console.log('-'.repeat(140));
}



/**
 * Helper de calcul du score de la partie de bowling
 * @param {array} tableauScore tableau d'entier compris entre 0 et 10 sous la forme [[n1,n2],[n1,n2]]
 * @param {number} nbTour Compris entre 1 et MAX_NB_TOUR 
 * @param {number} nbLancer Compris entre 1 et 3
 * @param {number} nbQuille Compris entre 0 et MAX_NB_QUILLE
 * @param {number} nbQuilleAvantLancer Compris entre 0e t MAX_NB_QUILLE le nombre de quille avant le tir
 *                 Pour avoir le nombre de points à rajouter
 * @returns {array} tableauScore retourne le tableau des score mise à jour avec le tour en cours
 */
const calculDuScore = (tableauResultat, tableauScore, nbTour, nbLancer, nbQuille, nbQuilleAvantLancer) => {
    let score = nbQuilleAvantLancer - nbQuille;
    console.log('resultat avant changement : ', tableauResultat);

    if(nbTour !== 1){
        if(estSpare(tableauScore, nbTour)) {
            console.log('spare : ', estSpare(tableauScore, nbTour));
            if(nbLancer === 1) tableauResultat[nbTour - 2] += score;
        }
        else if (estStrike(tableauScore,nbTour)){
            console.log('strike : ', estStrike(tableauScore, nbTour));
            tableauResultat[nbTour - 2] += score;
            if((tableauScore[nbTour - 2][1] === 0) && tableauScore[nbTour - 3][0] === 10 && (nbLancer === 1)){
                tableauResultat[nbTour - 3] += score;
            } 
        } 
    }
    console.log('resultat apres spare|strike : ', tableauResultat);
    // Si c'est le premier lancer du tour on crée un nouveau tableau à 2 dimensions
    if(nbLancer === 1){
        tableauScore.push([score]);
        if(nbTour !== 1) {
            tableauResultat.push((tableauResultat[nbTour - 2] + score));
        }
        else tableauResultat.push(score);
    } 
    // Sinon on ajoute dans la deuxième dimensions
    else{
        tableauScore[nbTour - 1].push(score);
        tableauResultat[nbTour - 1] += score;
    } 
    console.log('resultat apres calcul : ', tableauResultat);

    return tableauResultat, tableauScore;
}

/**
 * Jeu de bowling en 10 tour avec calcul du score
 */
const bowling = () =>{
    let nbTour = 1;
    let scoreTotal;
    let nbLancer = 1;
    let nbQuille = MAX_NB_QUILLE;
    let nbQuilleAvantLancer;
    let tableauScore = [];
    let tableauLancer = [];
    let tableauResultat = [];
    console.log('Bienvenu dans le calcul du score du bowling');
    while(nbTour <= MAX_NB_TOUR){
        console.log(`Tour N°: ${nbTour} | Lancer N°: ${nbLancer}`);
        nbQuilleAvantLancer = nbQuille;

        // Pour avoir les quilles restante
        nbQuille = nbQuilleAvantLancer - parseInt(promptSync('Combien de quille avez vous fait tombées ? : '));

       tableauResultat, tableauScore = calculDuScore(tableauResultat, tableauScore, nbTour, nbLancer, nbQuille, nbQuilleAvantLancer);
   /*      rafrachirInterface(tableauScore, nbTour, nbLancer); */

        // Marche pas
        scoreTotal = tableauScore.map((x) => nbLancer === 2 ? x[0] + x[1] : x[0]);

        // Si fin de tour on remet tout a 0 pour le prochain tour et un incrémente le compteur de tour
        if(nbLancer === 2){
            nbLancer = 0;
            nbTour++;
            nbQuille = MAX_NB_QUILLE;
        }
        nbLancer++;
    }
}

bowling();
