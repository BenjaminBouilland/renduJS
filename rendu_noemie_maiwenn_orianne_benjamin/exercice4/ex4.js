const liste = document.querySelectorAll ('#liste li');
const bouton = document.querySelector ('.bouton')


bouton.addEventListener ("click", () => {
    liste.forEach((element) =>{
        element.classList.toggle("case");
        element.classList.toggle("case1");
    })
}
)
console.log(liste);