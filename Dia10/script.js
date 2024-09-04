//Armas

document.getElementById("armas").addEventListener("click",mostrarArmas)
var armas=document.getElementById("caja2");

function mostrarArmas() {
    document.getElementById("caja2").style.display="flex"
    document.getElementById("caja3").style.display="none"
    document.getElementById("caja4").style.display="none"

    armas.innerHTML=`<div id="inputCaja">
            <input class="form-control w-50" type="text" id="search1">
        </div>`
    fetch("https://valorant-api.com/v1/weapons")
    .then(res=>res.json())
    .then(arm=>{
        for (const i of arm.data) {
            armas.innerHTML+=` 
            
            <div class="card mb-3" style="width: 18rem;">
                <img src="${i.displayIcon}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${i.displayName}</h5>
                    <h6 class="card-title">${i.shopData.category}</h6>
                </div>
            </div>     
            `
            searchAgentes()
        }
        function searchAgentes(){
            
            document.getElementById("search1").addEventListener("input", (e)=>{
                let SearchArma = e.target.value;

                let SearchList = arm.data
                SearchList.forEach(ListSearch =>{
                    let displayName = ListSearch.displayName
                    if (SearchArma == displayName){
                        armas.innerHTML=`<div id="inputCaja">
                            <input class="form-control w-50" type="text" id="search1">
                        </div>`
                        armas.innerHTML += `
                        <div class="card" style="width: 25rem;" >
                            <img src="${ListSearch.displayIcon}" class="card-img-top" alt="...">
                            <h3>${ListSearch.displayName}</h3>  
                        </div>
                        `
                    } 
                });
                
            });
        }
    })
}


//Agents
document.getElementById("agentes").addEventListener("click",MostrarAgente)
var agentes=document.getElementById("caja4");

function MostrarAgente() {
    document.getElementById("caja2").style.display="none"
    document.getElementById("caja3").style.display="none"
    document.getElementById("caja4").style.display="flex"
    document.getElementById("agentes").innerHTML="AGENTES"
    fetch("https://valorant-api.com/v1/agents")
    .then(res=>res.json())
    .then(age=>{
        for (const a of age.data) {
            agentes.innerHTML+=` 
            <div class="card" style="width: 18rem;">
                <img src="${a.fullPortrait}" class="card-img-top" alt="...">
                <h4 class="card-title1">${a.displayName}</h4>
                <h6 class="card-title2">${a.role.displayName}</h6>
            </div>  
            `

            searchAgentes()
        }

        function searchAgentes(){
            document.getElementById("search3").addEventListener("input", (e)=>{
                document.getElementById("agentes").innerHTML="AGENTES"
                let Search = e.target.value;

                let SearchList = age.data

                SearchList.forEach(ListSearch =>{
                    let Nameage = ListSearch.displayName
                    if (Search == Nameage){
                        agentes.innerHTML = `
                        <div class="card" style="width: 25rem;" >
                            <img class="card2" src="${ListSearch.fullPortrait}" class="card-img-top" alt="...">
                            <h4 class="card-title11">${ListSearch.displayName}</h4>
                            <h6 class="card-title22">${ListSearch.role.displayName}</h6>
                        </div>
                        `
                    } 
                });
                
            });
        }
    })
}

//Mapas
var CajaMap = document.getElementById("flexmaps");
let EndPointMap = "https://valorant-api.com/v1/maps"

function BtnMaps(){
    document.getElementById("mapas").addEventListener("click", ()=>{
        CallMaps(EndPointMap)
    });
};


function CallMaps(Api){

    document.getElementById("caja2").style.display="none"
    document.getElementById("caja3").style.display="flex"
    document.getElementById("caja4").style.display="none"
    fetch(Api)
    .then(Res => Res.json())
    .then(Maps =>{
        let MapList = Maps.data

        CajaMap.innerHTML = ``
        MapList.forEach(ListMap => {
            CajaMap.innerHTML += `
            <div class="card" style="width: 25rem;" >
                <img src="${ListMap.splash}" class="card-img-top" alt="...">
                <h4>${ListMap.displayName}</h4>
            </div>
            `
        });

        function SearchMap(){
            document.getElementById("search2").addEventListener("input", (e)=>{
                let Search = e.target.value;

                let SearchList = Maps.data

                SearchList.forEach(ListSearch =>{
                    let NameMap = ListSearch.displayName
                    if (Search == NameMap){
                        CajaMap.innerHTML = `
                        <div class="card" style="width: 25rem;" >
                            <img src="${ListSearch.splash}" class="card-img-top" alt="...">
                            <h3>${ListSearch.displayName}</h3>
                        </div>
                        `
                        console.log(ListSearch.displayName)
                    
                    } 
                });
                
            });
            
        };
        SearchMap()
    });
};

BtnMaps()