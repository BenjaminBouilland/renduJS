/* premiere version

const exercice1 = document.querySelector ('#exercice1');

function afficherExercice1 () {
    return exercice1;
}

afficherExercice1 ();

console.log(exercice1); */



function select (element){
    let selection = document.querySelector(element);
    console.log(selection);
}

select("#exercice1");
