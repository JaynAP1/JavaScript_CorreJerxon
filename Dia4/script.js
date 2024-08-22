fetch ("Data.json")
.then(respuesta => respuesta.json())
.then(Datos => {
    var Comparador = Datos["informacion_personal"]["contacto"]["correo"]
    console.log(Comparador)

    document.getElementById('Login').addEventListener("submit", function(event){
        event.preventDefault();

        const Email = document.getElementById("Mail").value;
        const Alert = document.getElementById("Alert");

        if (Email === Comparador){
            window.location.href="Crud.html"
        }
        else{
            Alert.textContent = "Correo no registrado"
        }
    });
});

fetch("Data.json")
.then(Resp => Resp.json())
.then(Infor =>{
    const Boton1=document.getElementById("Informacion");
    const Boton2=document.getElementById("Historial");
    const Boton3=document.getElementById("Experiencia");

    Boton1.addEventListener("click",(e)=>{
        let Informacion = document.getElementById("Informa")
        for (const i in Infor["informacion_personal"]){
            console.log(i)
            Informacion.innerHTML = `<h1>${i}`
        }
    })
})

