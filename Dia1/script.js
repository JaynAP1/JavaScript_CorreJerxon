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

//Var