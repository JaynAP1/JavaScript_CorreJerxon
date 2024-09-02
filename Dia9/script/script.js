//Pokedex

document.getElementById("IdPoke").addEventListener("input", (e)=>{
    let GetId = document.getElementById("IdPoke").value;

    let Api = "https://pokeapi.co/api/v2/pokemon/"

    function Completa(){
        fetch(Api+GetId)
        .then(res => res.json())
        .then(Pokeapi=>{

        let NombreId = document.getElementById("Nombre");
        NombreId.innerHTML = `${Pokeapi.id} - <span>${Pokeapi.forms[0].name}</span>`;

        let Gif = document.getElementById("Gif");
        Gif.innerHTML = `
        <audio autoplay src="${Pokeapi.cries.latest}">
        </audio>
        <img src="${Pokeapi.sprites.other.showdown.front_default}">`
    
        document.getElementById("Before").addEventListener("click", (e) => {
            newID = Pokeapi.id - 1
            GetId = String(newID)
            Completa()
        })
        document.getElementById("After").addEventListener("click",(e)=>{
            console.log(Pokeapi.id)
            newID = Pokeapi.id + 1
            console.log(newID)
            GetId = String(newID)
            console.log(GetId)
            Completa()
        })
    })
    }
    Completa()
    


})



