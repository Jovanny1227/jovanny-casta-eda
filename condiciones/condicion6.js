function divisible(num){
    let modulo = num % 5;
    if(modulo > 0){
        console.log("Es divisible entre 5")
    }
    else{
        console.log("No es divisble entre 5")
    }
}
divisible(5)
divisible(2)
divisible(10)
divisible(8)
divisible(15)
