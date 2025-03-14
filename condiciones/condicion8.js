function mostrarImpares(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { 
            console.log(i);
        }
    }
}
mostrarImpares(10);
mostrarImpares(40);
mostrarImpares(9);