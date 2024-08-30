var Api = "https://swapi.py4e.com/api/people/"

function AddPeople(){
    document.getElementById("inputData").addEventListener("input",(e)=>{
        let persona = document.getElementById("inputData").value;
        let ApiPeople = Api+persona
    fetch(ApiPeople)
    .then(Res => Res.json())
    .then(Data=>{
        
        let World = Data.homeworld
        fetch(World)
        .then(world => world.json())
        .then(Mundo=>{
            let WriteWorld = document.getElementById("World")
            WriteWorld.innerHTML=`
            <table>
                <tbody>
                    <tr>
                    <td>Name:</td>
                    <td>${Mundo.name}</td>
                    </tr>
                    <tr>
                    <td>Rotation period:</td>
                    <td>${Mundo.rotation_period}</td>
                    </tr>
                    <tr>
                    <td>Orbital period:</td>
                    <td>${Mundo.orbital_period}</td>
                    </tr>
                    <tr>
                    <td>Diameter:</td>
                    <td>${Mundo.diameter}</td>
                    </tr>
                    <tr>
                    <td>Climate:</td>
                    <td>${Mundo.climate}</td>
                    </tr>
                    <tr>
                    <td>Gravity:</td>
                    <td>${Mundo.gravity}</td>
                    </tr>
                    <tr>
                    <td>Terrain:</td>
                    <td>${Mundo.terrain}</td>
                    </tr>
                    <tr>
                    <td>Surface water:</td>
                    <td>${Mundo.surface_water}</td>
                    </tr>
                    <tr>
                    <td>Population: </td>
                    <td>${Mundo.population}</td>
                    </tr>
                    <tr>
                    <td>Created:</td>
                    <td>${Mundo.created}</td>
                    </tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${Mundo.edited}</td>
                    </tr>
                    <tr>
                    <td>Url:</td>
                    <td>${Mundo.url}</td>
                    </tr>
                </tbody>
            </table>
            `
        });

        let Species = Data.species[0]
        fetch(Species)
        .then(specie => specie.json())
        .then(Especies =>{
             let WriteSpecies = document.getElementById("Species")
             WriteSpecies.innerHTML=`
             <table>
                <tbody>
                    <tr>
                    <td>Name:</td>
                    <td>${Especies.name}</td>
                    </tr>
                    <tr>
                    <td>Classification:</td>
                    <td>${Especies.classification}</td>
                    </tr>
                    <tr>
                    <td>Designation:</td>
                    <td>${Especies.designation}</td>
                    </tr>
                    <tr>
                    <td>Average height:</td>
                    <td>${Especies.average_height}</td>
                    </tr>
                    <tr>
                    <td>Skin color:</td>
                    <td>${Especies.hair_colors}</td>
                    </tr>
                    <tr>
                    <td>Hair colors:</td>
                    <td>${Especies.eye_colors}</td>
                    </tr>
                    <tr>
                    <td>Eye colors:</td>
                    <td>${Especies.average_lifespan}</td>
                    </tr>
                    <tr>
                    <td>Average lifespan:</td>
                    <td>${Especies.average_lifespan}</td>
                    </tr>
                    <tr>
                    <td>Language: </td>
                    <td>${Especies.language}</td>
                    </tr>
                    <tr>
                    <td>Created:</td>
                    <td>${Especies.created}</td>
                    </tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${Especies.edited}</td>
                    </tr>
                    <tr>
                    <td>Url:</td>
                    <td>${Especies.url}</td>
                    </tr>
                </tbody>
            </table>
             `
        });
        
        let Cuerpo = document.getElementById("Cuerpo");
        Cuerpo.innerHTML= `
        <tr>
                <td>Name:</td>
                <td>${Data.name}</td>
              </tr>
              <tr>
                <td>Height:</td>
                <td>${Data.height}</td>
              </tr>
              <tr>
                <td>Mass:</td> 
                <td>${Data.mass}</td>    
              </tr>
              <tr>
                <td>Hair color:</td> 
                <td>${Data.hair_color}</td>    
              </tr>
              <tr>
                <td>Eye color:</td> 
                <td>${Data.skin_color}</td>    
              </tr>
              <tr>
                <td>Skin color:</td> 
                <td>${Data.eye_color}</td>    
              </tr>
              <tr>
                <td>Birth</td> 
                <td>${Data.birth_year}</td>    
              </tr>
              <tr>
                <td>Gender</td> 
                <td>${Data.gender}</td>    
              </tr>
              <tr>
                <td>Homeworld:</td> 
                <td>
                    <div class="card text-bg-light mb-3" style="max-width: 50rem;">
                    <div class="card-body" id="World">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Films:</td> 
                <td>
                  <div class="card text-bg-light mb-3" style="max-width: 50rem;">
                    <div class="card-body" id="Films">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Species:</td> 
                <td>
                  <div class="card text-bg-light mb-3" style="max-width: 50rem;">
                    <div class="card-body" id="Species">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Vehicles:</td> 
                <td>
                  <div class="card text-bg-light mb-3" style="max-width: 50rem;">
                    <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Starships:</td> 
                <td>
                  <div class="card text-bg-light mb-3" style="max-width: 50rem;">
                    <div class="card-body">
                      <h5 class="card-title">Light card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Created:</td> 
                <td></td>    
              </tr>
              <tr>
                <td>Edited:</td> 
                <td></td>    
              </tr>
              <tr>
                <td>Url:</td> 
                <td></td>    
              </tr>
        `
    })
    })
    
}
AddPeople()