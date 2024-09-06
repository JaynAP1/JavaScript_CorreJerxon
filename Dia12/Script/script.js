document.addEventListener("DOMContentLoaded",(e)=>{
    const DatosContenedor = document.querySelector(".Options");
    const TaskInput = document.getElementById("TaskInput").value;
    const Button = document.getElementById("AddTask");

    async function FecthData() {
        const res = await fetch("https://6674179975872d0e0a950e53.mockapi.io/todoList");
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
    }
    FecthData().then(Data =>{
        DisplayCapsule(Data);
    })
})