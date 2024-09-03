//Pokedex

function Completa(){
    let IdActual = 1;
    let Api = "https://pokeapi.co/api/v2/pokemon/"

    function SearchPoke(id){  
            
        fetch(Api+id)
        .then(res => res.json())
        .then(Pokeapi=>{

            let NombreId = document.getElementById("Nombre");
            NombreId.innerHTML = `${Pokeapi.id} - <span>${Pokeapi.forms[0].name}</span>`;

            let Gif = document.getElementById("Gif");
            Gif.innerHTML = `
            <audio autoplay src="${Pokeapi.cries.latest}">
            </audio>
            <img src="${Pokeapi.sprites.other.showdown.front_default}">`

            IdActual = Pokeapi.id;

            document.getElementById("Before").addEventListener("click", (e) => {
                SearchPoke(IdActual-1)
            })
            document.getElementById("After").addEventListener("click",(e)=>{
                SearchPoke(IdActual+1)
            });
        })
    }

    document.getElementById("IdPoke").addEventListener("input", (e)=>{
        let GetId = e.target.value;
        SearchPoke(GetId)  
    })
    SearchPoke(IdActual)
}
Completa()


