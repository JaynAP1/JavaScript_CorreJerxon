//Creacion de un elemento personalizable
class CrearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent = "¡Haz click aqui!";
        this.addEventListener("click",()=>alert("Hiciste click :D"))
    }
}
customElements.define("mi-boton",CrearBoton);

//--------------------------------------------------------------------
//Cracion de un elemento perzonalizable (ShadowDos)
class CrearBotnShadow extends HTMLElement{
    constructor(){
        super();
        let MiShadow = this.attachShadow({mode:"open"});
        MiShadow.innerHTML =`
        <header>
            <h1>Live User Filter</h1>
            <p>Search by name and/or location</p>
            <input type="text" placeholder="Search" id="IdUser">
        </header>
        `
    }
}
