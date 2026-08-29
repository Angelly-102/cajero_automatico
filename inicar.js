let respuesta= Number(prompt("1.Iniciar\n2.Registrar\nelegir respuesta"))
let i= 0
while (respuesta === 1){
    console.log("contador = ", i)
    i++
    respuesta= Number(prompt("1.si\n2.no\nelegir respuesta"))
}
console.log("fuera del ciclo")