function imprimirId(id: string | string | number) {
    if (typeof id === "string") {
        console.log("ID como cadena:", id.toUpperCase())}
    else if (typeof id === "number") {
        console.log("ID como número:", id.toFixed(2))}     