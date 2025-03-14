function letra(l) {
    if (l.includes("s")){
        return (true);
    }
    else if (l.includes("S")){
        return (true);
    }
    else{
        return (false);
        }
    }
    console.log(letra("hola soy yovanny"));
    console.log(letra("zorro"));
    