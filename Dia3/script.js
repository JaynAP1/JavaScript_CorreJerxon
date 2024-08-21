function SuperDigits(n,k){
    
    let numero1 = ""
    let sum = 0
    for (let step = 0; step < k; step++){
        numero1+=n
    }
    console.log(numero1)
    for (const i of numero1){
        sum += Number(i)
    }
    console.log("SuperDigits: ",sum)

    var str = sum.toString();
    let sum1 = 0
    for (const i of str){
        sum1 += Number(i)
    }
    console.log("Suma:",sum1)

    var str1 = sum1.toString();
    let sum2 = 0
    for (const i of str1){
        sum2 += Number(i)
    }
    console.log("Suma:",sum2)
}
let x = prompt("Ingrese el numero")
const y = prompt("Ingrese las repeteciones")
SuperDigits(x,y)

