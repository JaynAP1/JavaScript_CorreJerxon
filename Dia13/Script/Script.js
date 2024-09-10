//Cajas
const CajaJugador = document.getElementById("CJugador");
const Home = document.getElementById("Home");
const CajaCartasJugador = document.getElementById("AllCartasJugador");

//Botones
const Start = document.getElementById("Start");
const Pedir = document.getElementById("Pedir");


//Eventos
Start.addEventListener("click",()=>{
    CallDeck()
    Home.style = "display:none"
    CajaCartasJugador.style="display:flex"
})


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
        })
        
    })
}


function CallCards(id){
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
    .then(Res =>Res.json())
    .then(Cartas =>{
        let Cards = Cartas.cards

        Cards.forEach(Card => {
            CajaJugador.innerHTML +=`<img src="${Card.images.png}">`  
        });
        
    })
}
function AskCard(id){
    fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then(Res =>Res.json())
    .then(Cartas =>{
        let Cards = Cartas.cards
        console.log(Cartas.remaining)
        Cards.forEach(Card => {
            CajaJugador.innerHTML +=`<img src="${Card.images.png}">`  
        });
        
    })
}



