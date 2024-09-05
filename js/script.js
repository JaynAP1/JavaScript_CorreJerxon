const Prev = document.getElementById("Prev");
const Next = document.getElementById("Next");
const Enviar = document.getElementById("Enviar")

const Imagen = document.getElementById("ImagenP");

const LinkVinculo = document.getElementById("name");


let defaul = 1;
let Links = ["Dia9/index.html","Dia10/index.html","Dia7/index.html"]
let Names = ["POKEDEX", "VALORANT", "HEROES"]
let Lista = ["styles/images/Pokedex.png","styles/images/Valorant.png","styles/images/Heroes.png"] 

var linkEnvio = "Dia10/index.html"

Prev.addEventListener("click", Antes)
Next.addEventListener("click", Despues)
function Antes(){
    if (defaul > 0){
        defaul -= 1;
        Imagen.src = Lista[defaul]
        linkEnvio = Links[defaul]
        Prev.textContent = Names[defaul-1]
        Next.textContent = Names[defaul+1]
        if (defaul-1){
            Prev.style = "visibility:hidden;"
            Next.style = "visibility:visible;"
        }
    }
}
function Despues(){
    if (defaul < 2){
        defaul += 1;
        Imagen.src = Lista[defaul]
        linkEnvio = Links[defaul]
        Prev.textContent = Names[defaul-1]
        Next.textContent = Names[defaul+1]
        if (defaul+1){
            Prev.style = "visibility:visible;"
            Next.style = "visibility:hidden;"
        }
    }
}