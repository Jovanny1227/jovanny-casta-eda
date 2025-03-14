function edad(e) {
    switch (e) {
        case 15:
        case 20:   
        case 30:
        return console.log(`tienes ${e}`);
        default:
            return console.log("la edad que introduciste es invalida");   
    }
}
edad(40)