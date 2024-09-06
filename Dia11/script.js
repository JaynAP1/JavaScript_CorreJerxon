const url = "https://randomuser.me/api/"

const Imagen = document.getElementById("ImagenCalvo");
const Names = document.getElementById("TextN");
const Welcome = document.getElementById("TextP")

const Icono1 = document.getElementById("Icono1");
const Icono2 = document.getElementById("Icono2");
const Icono3 = document.getElementById("Icono3");
const Icono4 = document.getElementById("Icono4");
const Icono5 = document.getElementById("Icono5");
const Icono6 = document.getElementById("Icono6");

function CallApi(){
    fetch(url)
    .then(Res => Res.json())
    .then(Data=>{
        Imagen.src = Data.results[0].picture.large
        Names.textContent = Data.results[0].name.first+" "+Data.results[0].name.last
        function Vinks(){
            Icono1.addEventListener("mouseenter",(e)=>{
                Icono1.style = "background-position-y: 0em;"
                Icono2.style = "background-position-y: 6em;"
                Icono3.style = "background-position-y: 6em;"
                Icono4.style = "background-position-y: 6em;"
                Icono5.style = "background-position-y: 6em;"
                Icono6.style = "background-position-y: 6em;"
                Welcome.textContent = "Hi, my name is"
                Names.textContent = Data.results[0].name.first+" "+Data.results[0].name.last
            })
            Icono2.addEventListener("mouseenter",(e)=>{
                Icono2.style = "background-position-y: 0em;"
                Icono1.style = "background-position-y: 6em;"
                Icono3.style = "background-position-y: 6em;"
                Icono4.style = "background-position-y: 6em;"
                Icono5.style = "background-position-y: 6em;"
                Icono6.style = "background-position-y: 6em;"
                Welcome.textContent = "My email address is"
                Names.textContent = Data.results[0].email
            })
            Icono3.addEventListener("mouseenter",(e)=>{
                Icono3.style = "background-position-y: 0em;"
                Icono1.style = "background-position-y: 6em;"
                Icono2.style = "background-position-y: 6em;"
                Icono4.style = "background-position-y: 6em;"
                Icono5.style = "background-position-y: 6em;"
                Icono6.style = "background-position-y: 6em;"
                Welcome.textContent = "My birthday is"
                Names.textContent = Data.results[0].dob.date    
            })
            Icono4.addEventListener("mouseenter",(e)=>{
                Icono4.style = "background-position-y: 0em;"
                Icono1.style = "background-position-y: 6em;"
                Icono2.style = "background-position-y: 6em;"
                Icono3.style = "background-position-y: 6em;"
                Icono5.style = "background-position-y: 6em;"
                Icono6.style = "background-position-y: 6em;"
                Welcome.textContent = "My address is"
                Names.textContent = Data.results[0].location.street.number+" "+Data.results[0].location.street.name
            })
            Icono5.addEventListener("mouseenter",(e)=>{
                Icono5.style = "background-position-y: 0em;"
                Icono1.style = "background-position-y: 6em;"
                Icono2.style = "background-position-y: 6em;"
                Icono3.style = "background-position-y: 6em;"
                Icono4.style = "background-position-y: 6em;"
                Icono6.style = "background-position-y: 6em;"
                Welcome.textContent = "My phone number is"
                Names.textContent = Data.results[0].phone
            })
            Icono6.addEventListener("mouseenter",(e)=>{
                Icono6.style = "background-position-y: 0em;"
                Icono1.style = "background-position-y: 6em;"
                Icono2.style = "background-position-y: 6em;"
                Icono3.style = "background-position-y: 6em;"
                Icono4.style = "background-position-y: 6em;"
                Icono5.style = "background-position-y: 6em;"
                Welcome.textContent = "My password is"
                Names.textContent = Data.results[0].login.password
            })
        }
        Vinks()
    })
}
CallApi()
