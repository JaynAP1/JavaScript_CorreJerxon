//Icons
const MapaNav = document.getElementById("MapaNav");
const Question = document.getElementById("Question");
const World = document.getElementById("World");

//Cajas
const Nav = document.getElementById("Nav");
const Middle = document.querySelector(".Middle");
const Content = document.querySelector(".Content");

function CallApi(){
    fetch("https://www.datos.gov.co/resource/e97j-vuf7.json")
    .then(Res => Res.json())
    .then(Data =>{
        Data.forEach(Capturados => {
            Content.innerHTML+=`
        <div class="Capturado">
            <div class="Fecha">
                <p>Fecha de publicacion</p>
                <p>${Capturados.fecha_publicaci_n}</p>
            </div>
            <div class="Pais">
                <p>Pais</p>
                <p>${Capturados.pais_prisi_n}</p>
            </div>
            <div class="Delito">
                <p>Delito</p>
                <p>${Capturados.delito}</p>
            </div>
            <div class="Situacion">
                <p>Situacion Juridica</p>
                <p>${Capturados.situaci_n_jur_dica}</p>
            </div>
            <div class="Genero">
                <p>Genero</p>
                <p>${Capturados.g_nero}</p>
            </div>
        </div>
            `
        });
        document.querySelectorAll(".Capturado").forEach(CajasCapturados=>{
            document.querySelectorAll(".Capturado").style = "border: 1px solid gray;"
            CajasCapturados.addEventListener("click",()=>{
                CajasCapturados.style = "border: 1px solid green;"
            })
        })
    })
}

MapaNav.addEventListener("click", (e)=>{
    Nav.style= "width: 40em"
    Middle.style= "margin-left:60em"
    Content.style="margin-left:60em"
    MapaNav.style="margin-left: 57em;"
    Question.style="margin-left: 57em;"
    World.style="margin-left: 57em;"
})
CallApi()