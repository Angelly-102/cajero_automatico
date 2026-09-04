let saldo = 1500; // Saldo inicial de la cuenta
let continuar = true;

while (continuar) {
    let opcion = prompt(
        "Bienvenido a el Cajero Automático\n\n" +
        "1. Consultar saldo\n" +
        "2. Depositar dinero\n" +
        "3. Retirar dinero\n" +
        "4. Salir\n\n" +
        "Elige una opción (1-4):"
    );

    // Convertimos la opción 
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            console.log(`Tu saldo actual es: $${saldo}`);
            alert(`Tu saldo actual es: $${saldo}`);
            break;

        case 2:
            let deposito = parseFloat(prompt("¿Cuánto deseas depositar?"));
            if (deposito > 0 && !isNaN(deposito)) {
                saldo += deposito;
                console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
                alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
            } else {
                console.log("Cantidad no válida para depósito.");
                alert("Cantidad no válida.");
            }
            break;

        case 3:
            let retiro = parseFloat(prompt("¿Cuánto deseas retirar?"));
            if (retiro > 0 && !isNaN(retiro)) {
                if (retiro <= saldo) {
                    saldo -= retiro;
                    console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
                    alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
                } else {
                    console.log("Fondos insuficientes.");
                    alert("No tienes suficiente saldo.");
                }
            } else {
                console.log("Cantidad no válida para retiro.");
                alert("Cantidad no válida.");
            }
            break;

        case 4:
            console.log("Gracias por usar el cajero. ¡Hasta luego!");
            alert("Gracias por usar el cajero.");
            continuar = false;
            break;

        default:
            console.log("Opción inválida, por favor elige del 1 al 4.");
            alert("Opción inválida.");
            break;
    }
}