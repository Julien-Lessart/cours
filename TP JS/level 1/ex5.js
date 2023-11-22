/*  
    ## Exercice 5 : Profit ou perte
    Écrivez un programme qui demande à l'utilisateur de saisir le prix de fabrication 
    et le prix de vente d'un produit et vérifiez-en le profit ou la perte.
    Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.
    Julien LESSART
    22/11/2023
*/


/**
 * Permet de calculer le profit ou perte d'un produit et retourne profit ou perte
 * @param {number} prixVente Prix de vente du produit
 * @param {number} prixFabrication Prix de fabrication du produit
 * @throw {error} Si les input ne sont pas des nombres
 * @returns perte si il le prix de vente est inférieur au prix de fabrication sinon profit
 */
const calculerCout = (prixVente, prixFabrication)=>{
    let valeurDeRetour = '';
    if((typeof(prixVente) !== 'number') && (typeof(prixFabrication) !== 'number')) throw new Error('Les parametres ne sont pas des nombres');
    // Savoir si positif
    if(Math.sign(prixVente - prixFabrication) === 1) valeurDeRetour = 'profit';
    // Savoir si négatif
    if(Math.sign(prixVente - prixFabrication) === -1) valeurDeRetour = 'perte';
    // Savoir si nul
    if(Math.sign(prixVente - prixFabrication) === 0) valeurDeRetour = 'aucune perte ni profit';
    return valeurDeRetour;
}

console.log(calculerCout(7,7));

