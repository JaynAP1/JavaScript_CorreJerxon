//Global var

var SeeBox = document.getElementById("SeeHero");
var PowerBox = document.getElementById("PowerStats");
var GeneralData =document.getElementById("GeneralData");
var Buttons = document.getElementById("Buttons")

document.getElementById("superhero").addEventListener("input", function(event){
    let superhero = document.getElementById("superhero").value;
    console.log(superhero)

    function FindHero(){
        let url = `https://superheroapi.com/api.php/010fdd537209636fb72f119546b5d119/`+String(superhero);
        fetch(url)
        .then(Res => Res.json())
        .then(Data =>{
            console.log(Data)

            function SeeHero(){
                SeeBox.innerHTML=`
                <img src="${Data.image.url}">
                <p>Name: ${Data.name}</p>
                `;
                PowerBox.innerHTML = `
                <h4>PowerStats</h4>
                <p>Intelligence: ${Data.powerstats.intelligence}</p>
                <p>Strength: ${Data.powerstats.strength}</p>
                <p>Speed: ${Data.powerstats.speed}</p>
                <p>Durability: ${Data.powerstats.durability}</p>
                <p>Power: ${Data.powerstats.power}</p>
                <p>Combat: ${Data.powerstats.combat}</p>
                `
                GeneralData.innerHTML = `
                <h4>General Data</h4>
                <p>Real Name: ${Data.biography["full-name"]}</p>
                <p>Gender: ${Data.appearance["gender"]}</p>
                <p>Race: ${Data.appearance["race"]}</p>
                <p>Height: ${Data.appearance["height"]["1"]}</p>
                <p<Weight: ${Data.appearance["weight"]["1"]}</p>
                `
                Buttons.innerHTML = `
                <button type="button" id="Atras" class="btn btn-primary">Atras</button>
                <button type="button" id="Siguiente" class="btn btn-primary">Siguiente</button>
                `
                document.getElementById("Atras").addEventListener("click", (e)=>{
                    console.log(superhero)
                    let NewSuperhero = parseInt(superhero)-1;
                    superhero = NewSuperhero
                    console.log(superhero)
                    FindHero()
                });
                document.getElementById("Siguiente").addEventListener("click", (e)=>{
                    let NewSuperhero = parseInt(superhero)+1;
                    superhero = NewSuperhero
                    FindHero()
                })
                
            }
            SeeHero()

    })
    }
    FindHero()
    
})


