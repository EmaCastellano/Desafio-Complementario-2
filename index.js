const arrayEdades = []

function preguntar(){

    let edades = Number(prompt("Cuantas edades ingresarĂ¡?"));
    for (let i = 0; i < edades; i++){

    let edad = Number(prompt("Ingrese edad:"))
    arrayEdades.push(edad)
    }

    console.log(arrayEdades)
    
}   

