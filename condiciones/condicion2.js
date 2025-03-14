let producto = prompt("Ingresa el nombre del producto (lentejas, crema, arroz, vino): ");

    if (producto === "lentejas" || producto === "arroz"){
        alert(`${producto} no paga IVA`)
    } else if (producto === "vino" || producto === "crema"){
        alert(`${producto} paga IVA`)
    }else{
        alert("el producto que ingreso no existe")
    }


