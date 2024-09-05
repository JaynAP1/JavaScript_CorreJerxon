var Url = "https://randomuser.me/api/"

let Imagen = document.getElementById("imagen");
let Name = document.getElementById("Content2")

let Imagen1 = document.getElementById("uno")
let Imagen2 = document.getElementById("dos")
let Imagen3 = document.getElementById("tres")
let Imagen4 = document.getElementById("cuatro")
let Imagen5 = document.getElementById("cinco")
let Imagen6 = document.getElementById("seis")

function CallApi(){
    fetch(Url)
    .then(Res => Res.json())
    .then(Datos =>{
        Imagen.src = Datos.results[0].picture.large
        Name.textContent = Datos.results[0].name.first +" "+ Datos.results[0].name.last 
    })
}
CallApi()

function Icon(){
    Imagen1.addEventListener("mouseenter",(e) =>{
        e.target.style = "background-position-y: -0.1em;"
        Imagen2.style = "6em"
        Imagen3.style = "6em"
        Imagen4.style = "6em"
        Imagen5.style = "6em"
        Imagen6.style = "6em"
    })
    Imagen2.addEventListener("mouseenter",(e)=>{
        e.target.style = "background-position-y: -0.1em;"
        Imagen1.style = "6em"
        Imagen3.style = "6em"
        Imagen4.style = "6em"
        Imagen5.style = "6em"
        Imagen6.style = "6em"
    })
}
Icon()