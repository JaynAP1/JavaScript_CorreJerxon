//Cajas
const CajaJugador = document.getElementById("CJugador");
const Home = document.getElementById("Home");
const CajaCartasJugador = document.getElementById("AllCartasJugador");
const CajaMaquina = document.getElementById("CMaquina");
const Botones = document.getElementById("Botones");

//Botones
const Start = document.getElementById("Start");
const Pedir = document.getElementById("Pedir");
const Pasar = document.getElementById("Pasar");


//Textos
const Texto = document.getElementById("Text");

//Eventos
Start.addEventListener("click",()=>{
    Home.style = "display:none"
    CajaCartasJugador.style="display:flex"
    Botones.style = "display:block"
    CajaMaquina.style = "display:block"
    CallDeck()
})


//Variables
var ValorJugador = 0
var ValorMaquina = 0

//Funciones

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function CallDeck(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(Res => Res.json())
    .then(Deck =>{
        CallCards(Deck.deck_id)
        console.log("calldeck")

        //Eventos
        Pedir.addEventListener("click",()=>{
            AskCard(Deck.deck_id)
            console.log("askcard")
        });
        Pasar.addEventListener("click",()=>{
            if (ValorJugador > 15){
                GoTurn(Deck.deck_id)
                console.log("GoTurn")
            }
        });
    })
}

//Funcion de pedir 2 cartas al inicio del juego
function CallCards(id){
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
    .then(Res =>Res.json())
    .then(Cartas =>{
        let Cards = Cartas.cards

        Cards.forEach(Card => {
            CajaJugador.innerHTML +=`<img src="${Card.images.png}">`

            if (Card.value === "QUEEN" || Card.value === "JACK" || Card.value === "KING"){
                Card.value = 10
            }
            else if(Card.value === "ACE"){
                Card.value = 11
            }
            else{
                Card.value = parseInt(Card.value)
            }
           ValorJugador += Number(Card.value)
           console.log(ValorJugador)
        });
        if(ValorJugador == 21){
            Texto.style="background-color: rgb(255, 255, 255);"
            Texto.textContent="Ganaste"
            Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
            const Restart = document.getElementById("Restart");
            Restart.addEventListener("click",(e)=>{
                document.location.reload
            })
        }
    });
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
    .then(Res =>Res.json())
    .then(Cartas =>{
        let Cards = Cartas.cards

        Cards.forEach(Card => {
            CajaMaquina.innerHTML +=`<img src="https://deckofcardsapi.com/static/img/back.png">`

            if (Card.value === "QUEEN" || Card.value === "JACK" || Card.value === "KING"){
                Card.value = 10
            }
            else if(Card.value === "ACE"){
                Card.value = 11
            }
            else{
                Card.value = parseInt(Card.value)
            }
           ValorMaquina += Number(Card.value)
           console.log(ValorMaquina)
        });
        if(ValorMaquina == 21){
            Texto.style="background-color: rgb(255, 255, 255);"
            Texto.textContent="Perdiste"
            Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
            const Restart = document.getElementById("Restart");
            Restart.addEventListener("click",(e)=>{
                document.location.reload
            })
        }
    })
}

//Funcion de pedir una carta en el juego
function AskCard(id){
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then(Res =>Res.json())
    .then(Cartas =>{
        let Cards = Cartas.cards
        console.log(Cartas.remaining)
        Cards.forEach(Card => {
            CajaJugador.innerHTML +=`<img src="${Card.images.png}">`
            if (Card.value === "QUEEN" || Card.value === "JACK" || Card.value === "KING"){
                Card.value = 10
            }
            else if(Card.value === "ACE"){
                Card.value = 11
            }
            else{
                Card.value = parseInt(Card.value)
            }
           ValorJugador += Number(Card.value)
           console.log(ValorJugador)
            
            if(ValorJugador>21){
                Texto.style="background-color: rgb(255, 255, 255);"
                Texto.textContent="Perdiste"
                Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
                const Restart = document.getElementById("Restart");
                Restart.addEventListener("click",(e)=>{
                    document.location.reload()
                })
            }
            else if(ValorJugador == 21){
                Texto.style="background-color: rgb(255, 255, 255);"
                Texto.textContent="Ganaste"
                Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
                const Restart = document.getElementById("Restart");
                Restart.addEventListener("click",(e)=>{
                    document.location.reload()
                })
            }
            
        });
    })
}
//Funcion de pasar turno a maquina
function GoTurn(id){
    if (ValorMaquina < 16){
        fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
        .then(Res =>Res.json())
        .then(Cartas =>{
            let Cards = Cartas.cards
            Cards.forEach(Card => {
                CajaMaquina.innerHTML +=`<img src="https://deckofcardsapi.com/static/img/back.png">`
                if (Card.value === "QUEEN" || Card.value === "JACK" || Card.value === "KING"){
                    Card.value = 10
                }
                else if(Card.value === "ACE"){
                    Card.value = 11
                }
                else{
                    Card.value = parseInt(Card.value)
                }
            ValorMaquina += Number(Card.value)
            console.log(ValorMaquina)
                
                if(ValorMaquina>21){
                    Texto.style="background-color: rgb(255, 255, 255);"
                    Texto.textContent="Ganaste"
                    Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
                    const Restart = document.getElementById("Restart");
                    Restart.addEventListener("click",(e)=>{
                        document.location.reload()
                    })
                }
                else if(ValorMaquina == 21){
                    Texto.style="background-color: rgb(255, 255, 255);"
                    Texto.textContent="Perdiste"
                    Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
                    const Restart = document.getElementById("Restart");
                    Restart.addEventListener("click",(e)=>{
                        document.location.reload()
                    })
                }
            });
        });
    }
    else{
        let NumerAleatorio = aleatorio(1,4)
        if (NumerAleatorio == 2 || NumerAleatorio == 4){
            fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
            .then(Res =>Res.json())
            .then(Cartas =>{
                let Cards = Cartas.cards
                Cards.forEach(Card => {
                    CajaMaquina.innerHTML +=`<img src="https://deckofcardsapi.com/static/img/back.png">`
                    if (Card.value === "QUEEN" || Card.value === "JACK" || Card.value === "KING"){
                        Card.value = 10
                    }
                    else if(Card.value === "ACE"){
                        Card.value = 11
                    }
                    else{
                        Card.value = parseInt(Card.value)
                    }
                ValorMaquina += Number(Card.value)
                console.log(ValorMaquina)
                    
                    if(ValorMaquina>21){
                        Texto.style="background-color: rgb(255, 255, 255);"
                        Texto.textContent="Ganaste"
                        Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
                        const Restart = document.getElementById("Restart");
                        Restart.addEventListener("click",(e)=>{
                            document.location.reload()
                        })
                    }
                    else if(ValorMaquina == 21){
                        Texto.style="background-color: rgb(255, 255, 255);"
                        Texto.textContent="Perdiste"
                        Botones.innerHTML=`<button id="Restart">Reiniciar</button>`
                        const Restart = document.getElementById("Restart");
                        Restart.addEventListener("click",(e)=>{
                            document.location.reload()
                        })
                    }
                });
            });
        }
    }
}
