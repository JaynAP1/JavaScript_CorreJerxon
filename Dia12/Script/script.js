document.addEventListener("DOMContentLoaded",(e)=>{
    const DatosContenedor = document.querySelector(".Options");
    const TaskInput = document.getElementById("TaskInput");
    const Button = document.getElementById("AddTask");

    async function FecthData() {
        const res = await fetch("https://66df3345de4426916ee3dd8d.mockapi.io/Tareas");
        Data = await res.json();
        return Data;
    }

    function DisplayCapsule(Capsula){
        DatosContenedor.innerHTML ='';
        Capsula.forEach(Cap => {
            const CapDiv = document.createElement('div');
            if (Cap.status === "ready"){
                CapDiv.classList.add('CapsulaNegativas');
                CapDiv.innerHTML=`
                <div class="CapsulaNegativa">
                    <div class="InfoTextNegative">
                        <p>${Cap.task}</p>
                    </div>
                    <div class="BotonesNegativo">
                        <div class="TerminadoNegativo">
                            <img src="Storage/img/pngwing.com (2).png" data-id="${Cap.id}" class="Completado">
                        </div>
                        <div class="EliminadoNegativo">
                            <img src="Storage/img/pngwing.com (4).png" alt="" data-id="${Cap.id}" class="Eliminado">
                        </div>
                    </div>
                </div>
                `
            };
            if(Cap.status === "On hold"){
                CapDiv.classList.add('Capsulas');
                CapDiv.innerHTML = `
                <div class="Capsula">
                    <div class="InfoText">
                        <p>${Cap.task}</p>
                    </div>
                    <div class="Botones">
                        <div class="Terminado">
                            <img src="Storage/img/pngwing.com (2).png" data-id="${Cap.id}" class="Completado">
                        </div>
                        <div class="Eliminado">
                            <img src="Storage/img/pngwing.com (4).png" alt="" data-id="${Cap.id}" class="Eliminado">
                        </div>
                    </div>
                </div>
                `
            };
            DatosContenedor.appendChild(CapDiv);
        });
        document.querySelectorAll('.Completado').forEach(Button=>{
            Button.addEventListener("click",BotonCompletado)
        })
        document.querySelectorAll('.Eliminado').forEach(Button=>{
            Button.addEventListener("click",BotonEliminado)
        })
    }

    async function AddNewTask() {
        const task = TaskInput.value;
        if(task.trim() === ''){
            return;
        }
        
        await fetch('https://66df3345de4426916ee3dd8d.mockapi.io/Tareas',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify({
                task,
                status:"On hold"
            })
        });
        TaskInput.value = '';
        const Data = await FecthData();
        DisplayCapsule(Data);
    };

    async function BotonCompletado(event) {
        const id = event.target.getAttribute('data-id')
        await fetch (`https://66df3345de4426916ee3dd8d.mockapi.io/Tareas/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({status:'ready'})
        });
        const Data = await FecthData();
        DisplayCapsule(Data)

    }
    async function BotonEliminado(evento) {
        const Data = await FecthData();
        const id = evento.target.getAttribute('data-id')
        await fetch (`https://66df3345de4426916ee3dd8d.mockapi.io/Tareas/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
        });
        DisplayCapsule(Data)
    }

    Button.addEventListener("click",AddNewTask);


    FecthData().then(Data =>{
        DisplayCapsule(Data);
    })
})