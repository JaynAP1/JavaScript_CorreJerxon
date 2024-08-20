const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const sumarBtn = document.getElementById('sumar');
const restarBtn = document.getElementById("restar");
const dividirBtn = document.getElementById("dividir");
const multiplicarBtn = document.getElementById("multiplicar");
const resultadoP = document.getElementById('resultado');

sumarBtn.addEventListener('click', (e) => {
	const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const suma = num1 + num2;
	resultadoP.textContent = `La suma es: ${suma}`;
});

restarBtn.addEventListener("click", (e) =>{
    const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const resta = num1 - num2;
    resultadoP.textContent = `La resta es: ${resta}`;
});

dividirBtn.addEventListener("click", (e) =>{
    const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const dividir = num1 / num2;
    resultadoP.textContent = `La division es: ${dividir}`;
});

multiplicarBtn.addEventListener("click", (e) =>{
    const num1 = parseFloat(num1Input.value);
	const num2 = parseFloat(num2Input.value);
	const dividir = num1 * num2;
    resultadoP.textContent = `La multiplicacion es: ${dividir}`;
});

//Hello world
console.log("Hello world");

//Type of variable
number1 = 2;
number2 = 2.14;
console.log(typeof(number1));
console.log(typeof(number2));

//Math operations
Operation=((((5**6)+256)/5)*2);
console.log(Operation);

//String
Text1="Im texto";
Text2=" Im Jair";
//Concatenate
console.log(Text1+Text2)

//Booleano
Bool1=true;
Bool2=false;
Bool3=false;
Bool4=true;
Boolsum=(Bool1||Bool2)&(Bool3||Bool4);
console.log(Boolsum)

//Exercise 1
function Edad(){
    console.log("Naciste en el año:",Result=2024-21)
}

Edad()

//Exercise 2
function Grados(b){
    const result1 = (9*b/5)+32
    return result1
}

console.log(Grados(30))

//Exercise 3
function Compras(c){
    if (c <= 20){
        var result2="Tienes un descuento del 30%"
    }
    else if (c <= 50){
        var result2="Tienes un descuento del 10%"
    }
    else if (c > 50){
        var result2="No tienes descuento"
    }
    return result2;
}

console.log(Compras(51))

//Exercise 4 parametro sin retorno
function Suma(s,f){
    var Sumas= s+f
    console.log("La suma es: ",Sumas )
}
Suma(1,2)

//Exercise 5 parametro con retorno
function Resta(f,g){
    const Resta = f-g
    return Resta
}
console.log("La resta es: ",Resta(5,3)) 

//Exercise 6 sin parametro sin retorno
function Hola(){
    console.log("Mi nombre es Jerxon")
}
Hola()
//Exercise 7 sin parametro con retorno
function Division(){
    let Division = 7/2
    return Division
}
console.log("La division es:",Division());