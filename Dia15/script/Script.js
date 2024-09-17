//Icons
const MapaNav = document.getElementById("MapaNav");

//Cajas
const Nav = document.getElementById("Nav");
const Middle = document.querySelector(".Middle")

function CallApi(){
    fetch("https://www.datos.gov.co/resource/e97j-vuf7.json")
    .then(Res => Res.json())
    .then(Data =>{
        
    })
}

MapaNav.addEventListener("click", (e)=>{
    Nav.style= "width: 20em"
    Middle.style= "margin-left:20em"
})
