/*  
    Exercice 2 : Le prof
    Écrivez un programme pour un professeur flemmard.​ 
    Vous disposez d'une liste de notes comprises entre 0 et 20​. 
    Écrivez un commentaire pour chacune de ces copies d'élève.
        0-4 --> "Catastrophique, il faut tout revoir"​
        5-10 --> "Insuffisant"​
        11-14 --> "Peut mieux faire"​
        15-17 --> "Bien"​
        18-20 --> "Excellent, bon travail"    
    Julien LESSART
    22/11/2023
*/

/**
 * Permet d'écrire des commentaires à partir d'une liste de notes
 * @param  {...number} listeDeNote La liste de notes à commenter
 * @throws {Error} Si il y a des valeurs négative OU des valeurs qui ne sont pas des nombres
 */
const editerListeDeNote = (...listeDeNote) =>{

    for(element of listeDeNote){
        if(element < 0) throw new Error(`Il y a des notes négatives`);
        if(typeof(element) !== 'number') throw new Error(`Il y des notes qui ne sont pas des nombres`);
        if(element <= 4) console.log('Catastrophique, il faut tout revoir');
        else if(element <= 10) console.log('Insuffisant');
        else if(element <= 14) console.log('Peut mieux faire');
        else if(element <= 17) console.log('Bien');
        else console.log('Excellent, bon travail');
    }
}

editerListeDeNote(20,7,2,14,17);