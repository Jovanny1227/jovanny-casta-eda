let arreglo = [5, 7, 90, 2, 5, 3, 8, 99];

arreglo.forEach((a, indexA) => {
    arreglo.forEach((b, indexB) => {
        if (indexA !== indexB && a + 1 === b) {
            console.log(a, "y", b, "son consecutivos.");
        }
    });
});
