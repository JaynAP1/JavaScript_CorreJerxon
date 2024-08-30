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

        let Films = Data.films
        Films.forEach(Filmes => {
          fetch(Filmes)
          .then(films => films.json())
          .then(Peliculas =>{
            let WriteFilms = document.getElementById("Films");
            WriteFilms.innerHTML += `
            <table>
                <tbody>
                    <tr>
                    <td>Name:</td>
                    <td>${Peliculas.title}</td>
                    </tr>
                    <tr>
                    <td>Episode id:</td>
                    <td>${Peliculas.episode_id}</td>
                    </tr>
                    <tr>
                    <td>Opening crawl:</td>
                    <td>${Peliculas.opening_crawl}</td>
                    </tr>
                    <tr>
                    <td>Director:</td>
                    <td>${Peliculas.director}</td>
                    </tr>
                    <tr>
                    <td>Producer:</td>
                    <td>${Peliculas.producer}</td>
                    </tr>
                    <tr>
                    <td>Release date:</td>
                    <td>${Peliculas.release_date}</td>
                    </tr>
                    <tr>
                    <td>Created:</td>
                    <td>${Peliculas.created}</td>
                    </tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${Peliculas.edited}</td>
                    </tr>
                    <tr>
                    <td>Url: </td>
                    <td>${Peliculas.url}</td>
                    </tr>
                    <hr>
                </tbody>
            </table>
            `
          })
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
        
        let Vehicles = Data.vehicles
        Vehicles.forEach(Vehiculos => {
          fetch(Vehiculos)
          .then(veiculos => veiculos.json())
          .then(Vehiculo =>{
            let WritingVehicles = document.getElementById("Vehicles");
            WritingVehicles.innerHTML += `
            <table>
                <tbody>
                    <tr>
                    <td>Name:</td>
                    <td>${Vehiculo.name}</td>
                    </tr>
                    <tr>
                    <td>Model:</td>
                    <td>${Vehiculo.model}</td>
                    </tr>
                    <tr>
                    <td>Manufacture:</td>
                    <td>${Vehiculo.manufacturer}</td>
                    </tr>
                    <tr>
                    <td>Cost in credits:</td>
                    <td>${Vehiculo.cost_in_credits}</td>
                    </tr>
                    <tr>
                    <td>Length:</td>
                    <td>${Vehiculo.length}</td>
                    </tr>
                    <tr>
                    <td>Max atmosphering speed:</td>
                    <td>${Vehiculo.max_atmosphering_speed}</td>
                    </tr>
                    <tr>
                    <td>Crew:</td>
                    <td>${Vehiculo.crew}</td>
                    </tr>
                    <tr>
                    <td>Passengers:</td>
                    <td>${Vehiculo.passengers}</td>
                    </tr>
                    <tr>
                    <td>Cargo capacity: </td>
                    <td>${Vehiculo.cargo_capacity}</td>
                    </tr>
                    <tr>
                    <td>Consumables:</td>
                    <td>${Vehiculo.consumables}</td>
                    </tr>
                    <tr>
                    <tr>
                    <td>Vehicle class:</td>
                    <td>${Vehiculo.vehicle_class}</td>
                    </tr>
                    <tr>
                    <tr>
                    <td>Created:</td>
                    <td>${Vehiculo.created}</td>
                    </tr>
                    <tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${Vehiculo.edited}</td>
                    </tr>
                    <tr>
                    <tr>
                    <td>Url:</td>
                    <td>${Vehiculo.url}</td>
                    </tr>
                    <tr>
                    <hr>
                </tbody>
            </table>
            `
          })
        })

        let Starships = Data.starships
        Starships.forEach(Navecitas=>{
          fetch(Navecitas)
          .then(Naveci => Naveci.json())
          .then(Naves =>{
            console.log(Naves.name)
            let WritingStarships = document.getElementById("Starships");
            WritingStarships.innerHTML += `
            <table>
                <tbody>
                    <tr>
                    <td>Name:</td>
                    <td>${Naves.name}</td>
                    </tr>
                    <tr>
                    <td>Model:</td>
                    <td>${Naves.model}</td>
                    </tr>
                    <tr>
                    <td>Manufacture:</td>
                    <td>${Naves.manufacturer}</td>
                    </tr>
                    <tr>
                    <td>Cost in credits:</td>
                    <td>${Naves.cost_in_credits}</td>
                    </tr>
                    <tr>
                    <td>Length:</td>
                    <td>${Naves.length}</td>
                    </tr>
                    <tr>
                    <td>Max atmosphering speed:</td>
                    <td>${Naves.max_atmosphering_speed}</td>
                    </tr>
                    <tr>
                    <td>Crew:</td>
                    <td>${Naves.crew}</td>
                    </tr>
                    <tr>
                    <td>Passengers:</td>
                    <td>${Naves.passengers}</td>
                    </tr>
                    <tr>
                    <td>Cargo capacity: </td>
                    <td>${Naves.cargo_capacity}</td>
                    </tr>
                    <tr>
                    <td>Consumables:</td>
                    <td>${Naves.consumables}</td>
                    </tr>
                    <tr>
                    <td>Hyperdrive rating:</td>
                    <td>${Naves.hyperdrive_rating}</td>
                    </tr>
                    <tr>
                    <td>MGLT:</td>
                    <td>${Naves["MGLT"]}</td>
                    </tr>
                    <tr>
                    <td>Starship class:</td>
                    <td>${Naves.starship_class}</td>
                    </tr>
                    <tr>
                    <td>Created:</td>
                    <td>${Naves.created}</td>
                    </tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${Naves.edited}</td>
                    </tr>
                    <tr>
                    <td>Url:</td>
                    <td>${Naves.url}</td>
                    </tr>
                    <hr>
                </tbody>
            </table>
            `
          })
        })

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
                    <div class="card-body" id="Vehicles">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Starships:</td> 
                <td>
                  <div class="card text-bg-light mb-3" style="max-width: 50rem;">
                    <div class="card-body" id="Starships">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Created:</td> 
                <td>${Data.created}</td>    
              </tr>
              <tr>
                <td>Edited:</td> 
                <td>${Data.edited}</td>    
              </tr>
              <tr>
                <td>Url:</td> 
                <td>${Data.url}</td>    
              </tr>
        `
    })
    })
    
}
AddPeople()