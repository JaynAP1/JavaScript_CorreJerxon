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
        Boton1.textContent = "Recargar"
        Boton2.textContent = "Historial Educativo"
        Boton3.textContent = "Experencia Laboral"

        let Informacion = document.getElementById("Informa");
        Informacion.innerHTML = `<h3 id=NombreA>Nombre: ${Infor["informacion_personal"]["nombre"]} <br> <h3 id=EdadA>Edad: ${Infor["informacion_personal"]["edad"]}
        <h3>Direccion: ${Infor["informacion_personal"]["direccion"]["calle"]} ${Infor["informacion_personal"]["direccion"]["numero"]} ${Infor["informacion_personal"]["direccion"]["ciudad"]}
        <h3>Contacto: ${Infor["informacion_personal"]["contacto"]["correo"]}`

        let Add = document.getElementById("Añadir");
        Add.innerHTML = `<form id=change><label>Nombre<input id=Name> <label>Edad<input id=date> <label>Direccion<input id=street> <input id=number> <input id=city>
        <label>Correo<input id=mail> </form>`
        
        const Nombre = document.getElementById("Name");
        const Edad = document.getElementById("date");
        const Calle = document.getElementById("street");
        const NumeroC = document.getElementById("number");
        const Ciudad = document.getElementById("city");
        const Email = document.getElementById("mail");

        Nombre.addEventListener("change",(e)=>{
            var NombreAlmacenado = e.target.value;
            Infor["informacion_personal"]["nombre"]=NombreAlmacenado
        });
        Edad.addEventListener("change",(e)=>{
            var EdadAlmacenado = e.target.value;
            Infor["informacion_personal"]["edad"]=EdadAlmacenado
        });
        Calle.addEventListener("change",(e)=>{
            var CalleAlmacenado = e.target.value;
            Infor["informacion_personal"]["direccion"]["calle"]=CalleAlmacenado
        });
        NumeroC.addEventListener("change",(e)=>{
            var NumeroAlmacenado = e.target.value;
            Infor["informacion_personal"]["direccion"]["numero"]=NumeroAlmacenado
        });
        Ciudad.addEventListener("change",(e)=>{
            var CiudadAlmacenado = e.target.value;
            Infor["informacion_personal"]["direccion"]["ciudad"]=CiudadAlmacenado
        });
        Email.addEventListener("change",(e)=>{
            var EmailAlmacenado = e.target.value;
            Infor["informacion_personal"]["contacto"]["correo"]=EmailAlmacenado
        });
    });
    Boton2.addEventListener("click",(e)=>{
        Boton1.textContent = "Informacion Personal"
        Boton2.textContent = "Recargar"
        Boton3.textContent = "Experencia Laboral"

        let Informacion = document.getElementById("Informa");
        let Add = document.getElementById("Añadir");

        Informacion.innerHTML = ""

        for (const i of Infor["historial_educativo"]){
            Informacion.innerHTML += `<hr><h3>Nivel: ${i["nivel"]} <h3>Institucion: ${i["institucion"]}<h3>Titulo: ${i["titulo"]} <h3>Año de inicio: ${i["anioinicio"]}<h3>Año de finalizacion: ${i["aniofin"]}</h3>`
        };
        
        Add.innerHTML = "<button id=AddEdu>Agregar Educacion"
        const Boton4 = document.getElementById("AddEdu");

        Boton4.addEventListener("click",(e)=>{
            Add.innerHTML = `<form id=Educacion><label>Nivel Educativo <input id=Nivel required> <label>Institucion Educativa <input id=Institucion required> <label>Titulo <input id=Titulo required> <label>Año de inicio <input id=Inicio required> <label>Año de finalizacion <input id=Fin required> <button type=submit id=Guardar>Guardar Informacion</form>`
            
            document.getElementById("Educacion").addEventListener("submit",function(event){
                event.preventDefault();

                const NivelEdu = document.getElementById("Nivel").value;
                const InstitucionEdu = document.getElementById("Institucion").value;
                const Inicial = document.getElementById("Inicio").value;
                const Final = document.getElementById("Fin").value
                const Titulo = document.getElementById("Titulo").value;

                Infor["historial_educativo"].push({
                    "nivel": NivelEdu,
                    "institucion": InstitucionEdu,
                    "titulo": Titulo,
                    "anioinicio": Inicial,
                    "aniofin": Final
                });
            });
        });
    });
    Boton3.addEventListener("click",(e)=>{
        Boton1.textContent = "Informacion Personal"
        Boton2.textContent = "Historial Educativo"
        Boton3.textContent = "Recargar"

        let Informacion = document.getElementById("Informa");
        let Add = document.getElementById("Añadir");

        Informacion.innerHTML = ""

        for (const i of Infor["experiencia_laboral"]){
            Informacion.innerHTML += `<hr><h3>Puesto: ${i["puesto"]} <h3>Empresa: ${i["empresa"]}<h3>Periodo: ${i["periodo"]} <h3>Responsabilidades: ${i["responsabilidades"]}</h3>`
        };
        
        Add.innerHTML = "<form id=eliminacion><label>Ingrese el nombre del puesto que desea eliminar <input id=Eliminar><button type=submit>Eliminar</form>"
        
        document.getElementById("eliminacion").addEventListener("submit",function(event){
            event.preventDefault();

            let Comparacion = document.getElementById("Eliminar").value;
            let tamaño = Infor["experiencia_laboral"].length

            for(let i = 0; i < tamaño;i++){

                if (Comparacion === Infor["experiencia_laboral"][i]["puesto"]){
                    console.log("hola");
                    Infor["experiencia_laboral"].splice(i,1)
                };
            };
        });
    });
});

