fetch ('./info.json')
.then(respuesta => respuesta.json())
.then(datos => console.log(datos))
.catch(error => console.log(error))

const MostrarDatos = (datos) =>{
    console.log(datos)
}










const Menu = document.getElementById("Menu");
const Opcion = document.getElementById("Opcion");
const Seguir = document.getElementById("Seguir");
var Container = document.getElementById("Container")

Menu.innerHTML ="================================================ <br> 1).Coordinacion.<br>2).Trainer<br>3).Estudiante<br>4).Consulta de aprobacion<br>5).Iniciar sesión<br>6).Cerrar sesión <br>7).Salir<br>================================================"

Seguir.addEventListener("click", (e) => {
    const OpcionS = parseInt(Opcion.value);
    if (OpcionS == 1){
        Container.innerHTML="<p>================================================<br>1).Inscribir.<br>2).Ver Campers/Trainers/Inscritos.<br>3).Ingresar notas.<br>4).Destinar Trainers/Estudiantes.<br>5).Expulsar camper<br>6).Salir.<br>================================================<br> <input id=Opcion2 type=number> <button id=Seguir2>Seguir</button>"
        const Opcion2 = document.getElementById("Opcion2")
        const Seguir2 = document.getElementById("Seguir2")
        Seguir2.addEventListener("click",(e)=>{
            const OpcionS2 = parseInt(Opcion2.value);
            if (OpcionS2 == 1){
                Container.innerHTML="<p>Nombre del camper a inscribir <input type=text>"
            }
        })
        

    }
    else if (OpcionS == 2){
        Menu.innerText = "=============================================================================<br>Ingrese su codigo para saber el estado del profesor.<br>============================================================================="
    }
    else if (OpcionS == 3){
        Menu.innerText="=============================================================================<br>Ingrese su codigo para saber el estado del estudiante.<br>============================================================================="
    }
    else if (OpcionS == 4){
        Menu.innerText="=============================================================================<br>Ingrese su codigo para saber el estado de aprobacion del aspirante.<br>============================================================================="
    }
    else if (OpcionS == 5){
        Menu.innterText="============Hola Camper==================<br>Para que el registro de tu entrada sea exitoso ingresa los siguientes datos<br>============Hola Camper=================="
    }
    else if (OpcionS == 6){
        Menu.innerText="============Hola Camper==================<br>Para cerrar sesión ingresa los siguientes datos<br>============Hola Camper=================="
    }
    else if (OpcionS == 7){
        window.close();
    }
})