/*


    Julien LESSART
    24/11/2023
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
        // Si i est un multiple de 3
        if((nombre % 3) === 0) concatenation = 'FIZZ';
        // Si i est un multiple de 5
        if((nombre % 5) === 0) concatenation = concatenation.concat('BUZZ');
        // Sinon on affiche i
        if(((nombre % 5) !== 0) && ((nombre % 3) !== 0)) concatenation = nombre;
        return concatenation;
}

/**
 * Affichage d'une liste de 5 personnages
 */
const faireEx1 = () =>{
    let liste = [
        {
            nom : "Al'thor",
            prenom : "Rand",
            description : "roux"
        },{
            nom : "al'Vere",
            prenom : "Egwene",
            description : "Brune"
        },{
            nom : "al'Meara",
            prenom : "Nyneave",
            description : "Brune"
        },{
            nom : "Aybara",
            prenom : "Perrin",
            description : "Brun"
        },{
            nom : "Cauthon",
            prenom : "Matthew",
            description : "Brun"
        },
    ]
    let divEx1 = document.createElement("div");
    let divListe = document.createElement("div");
    
    divEx1.setAttribute("class", "container__ex1");
    document.body.appendChild(divEx1);
    divEx1.appendChild(divListe);
    for(personnage of liste){
        let ul = document.createElement("ul");
        for(property in personnage){
            let li = document.createElement("li");
            li.innerText = `${property} : ${personnage[property]}`;
            ul.appendChild(li);
        }
        divListe.appendChild(ul);
    }
}

/**
 * Affichage de l'heure dynamiquement au format HH : MM : SS
 */
const faireEx2 = () =>{
    let divEx2 = document.createElement("div");
    let divHorloge = document.createElement("div");
    let pHorloge = document.createElement("p");
    
    divEx2.setAttribute("class", "container__ex2");
    document.body.appendChild(divEx2);
    divEx2.appendChild(divHorloge);
    divHorloge.appendChild(pHorloge);
    setInterval(() =>{
        let date = new Date();
        let heures = date.getHours();
        let minutes = date.getMinutes();
        let secondes = date.getSeconds();
        if(heures < 10) heures = '0' + heures;
        if(minutes < 10) minutes = '0' + minutes;
        if(secondes < 10) secondes = '0' + secondes;
        pHorloge.innerText = heures + ':' + minutes + ':' + secondes;
    }, 1000);

}

/**
 * Affiche les nombres de 0 à 100 en remplacement les mutiples de 3 par FIZZ et 5 par BUZZ
 */
const faireEx3 = () => {
    let divEx3 = document.createElement("div");
    let ul = document.createElement("ul");
    divEx3.setAttribute("class", "container__ex3");
    document.body.appendChild(divEx3);
    divEx3.appendChild(ul);
    
    for(let i = 1 ; i <= 100; i++) {
        let liNode = document.createElement("li");
        liNode.innerText = ` ${i} : ${remplacerMultiple(i)} | `;
        ul.appendChild(liNode);
    }
}

/**
 * Un compteur qui peut-être incrementer ou décrémenter au format FIZZBUZZ
 */
const faireEx4 = () => {

    let cpt = 0;
    let divEx4 = document.createElement("div");
    let divBtn = document.createElement("div");
    let btnPlusCpt = document.createElement("button");
    let btnMoinsCpt = document.createElement("button");
    let divCpt = document.createElement("div");
    let pCpt = document.createElement("p");
    
    divEx4.setAttribute("class", "container__ex4");
    btnPlusCpt.innerText = 'Incrémenter !';
    btnMoinsCpt.innerText = 'Decrémenter !';
    pCpt.innerText = `Nombre de clique : ${remplacerMultiple(cpt)}`;
    document.body.appendChild(divEx4);
    divEx4.appendChild(divBtn);
    divBtn.appendChild(btnPlusCpt);
    divBtn.appendChild(btnMoinsCpt);
    divEx4.appendChild(divCpt);
    divCpt.appendChild(pCpt);

    btnPlusCpt.addEventListener('click', () => {
        cpt++;
        pCpt.innerText = `Nombre de clique : ${remplacerMultiple(cpt)}`;
    });

    btnMoinsCpt.addEventListener('click', () => {
        cpt--;
        pCpt.innerText = `Nombre de clique : ${remplacerMultiple(cpt)}`;
    });
}

faireEx1();
faireEx2();
faireEx3();
faireEx4();