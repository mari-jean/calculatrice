//function addition
function addition(...nombres){
    let resultat = 0;

    nombres.forEach(nombre => {
        resultat += nombre;
    });
    return resultat;
}

//function multiplication
function multiplication(...nombres){
    let resultat = 1;

    nombres.forEach(nombre => {
        resultat *= nombre;
    });
    return resultat;
}

//function soustraction
function soustraction(...nombres){
    let resultat = nombres[0];

    for (let i = 1; i < nombres.length; i++)  {
        resultat -= nombres[i];
    };
    return resultat;
}

//function division
function division(...nombres){
    if(nombres.includes (0)){
        throw new Error("Impossible de diviser par 0.");         
    }
    let resultat = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        resultat /= nombres[i];
    };
    return resultat;

}
//on rentre dans la boucle principal
//cette variable vaut false ce qui veut dire que par default nous ne reproposons pas un calcul
let restart = false;

do{
    //demande a l utilisateur de saisir le premier nombre
    let premierNombre = Number(prompt("Entrer le premier nombre: "));

    if (isNaN(premierNombre)){
        alert("Veuillez entrer un nombre valide.");
        continue;
    }
    //demande a l utilisateur de saisir l operation
    let operation = prompt("Entrez l'operation a effectuer (+, -, *, /):");
    //demande a l utilisateur de saisir les nombres suivants
    let nombres = [premierNombre];
    let continuer = true;

    do {
        let nombre = Number(prompt("Entrez un nombre (0 pour terminer)"));
        if (isNaN(nombre)){
            alert("Veuillez entrer un nombre valide.");
        } else if (nombre === 0){
            continuer = false;
        } else{
            nombres.push(nombre);
            //demande a l utilisateur de saisir une nouvelle operation 
            operation = prompt("Entrez l'operation a effectuer (+, -, *, /):");
        }
    } while (continuer);
    //Appel de la fonction correspondant à l'opération choisie
    let resultat;
    try{
        
        switch (operation) {
            case "+":
              resultat = addition(...nombres);
              break;
            case "-":
              resultat = soustraction(...nombres);
              break;
            case "*":
              resultat = multiplication(...nombres);
              break;
            case "/":
              resultat = division(...nombres);
                break;
            default:
                throw new Error("Operation invalide.");
        }
        //affiche le resultat 
        alert("Le resultat est de : " + resultat);
    }catch (error) {
        alert(error);//affiche l erreur si il y en a une 
    }

    //on demande grace a la boite de dialogue confirm() si l uttilisateur veut recommencer
    restart = confirm("Souhaitez-vous effectuer un nouveau calcul ?")

} while(restart);

alert("Merci d'avoir utilisé la calculatrice. À bientôt !");




